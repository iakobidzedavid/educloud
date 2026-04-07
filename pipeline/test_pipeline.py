"""
Unit tests for the edu.cloud alumni data pipeline.

Run with: pytest pipeline/test_pipeline.py -v
"""

import json
import os
import csv
import tempfile
import unittest
from unittest.mock import patch

# Add parent directory to path for imports
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from alumni_pipeline import (
    validate_record,
    validate_dataset,
    parse_csv,
    classify_industry,
    normalize_name,
    fuzzy_name_match,
    aggregate_metrics,
    run_accuracy_validation,
    EnrichmentEngine,
    PIIProtector,
    ACCURACY_TARGET,
)


class TestDataValidation(unittest.TestCase):
    """Tests for CSV data validation."""

    def test_valid_record(self):
        record = {'name': 'Jane Smith', 'graduation_year': '2022', 'major': 'Computer Science'}
        is_valid, errors = validate_record(record)
        self.assertTrue(is_valid)
        self.assertEqual(errors, [])

    def test_missing_name(self):
        record = {'name': '', 'graduation_year': '2022', 'major': 'Business'}
        is_valid, errors = validate_record(record)
        self.assertFalse(is_valid)
        self.assertTrue(any('name' in e for e in errors))

    def test_invalid_graduation_year(self):
        record = {'name': 'John Doe', 'graduation_year': '1800', 'major': 'Economics'}
        is_valid, errors = validate_record(record)
        self.assertFalse(is_valid)
        self.assertTrue(any('year' in e.lower() for e in errors))

    def test_invalid_email(self):
        record = {'name': 'Alice Brown', 'graduation_year': '2021', 'major': 'Biology', 'email': 'not-an-email'}
        is_valid, errors = validate_record(record)
        self.assertFalse(is_valid)
        self.assertTrue(any('email' in e.lower() for e in errors))

    def test_valid_email(self):
        record = {'name': 'Alice Brown', 'graduation_year': '2021', 'major': 'Biology', 'email': 'alice@university.edu'}
        is_valid, errors = validate_record(record)
        self.assertTrue(is_valid)

    def test_validate_dataset(self):
        records = [
            {'name': 'Jane Smith', 'graduation_year': '2022', 'major': 'CS'},
            {'name': '', 'graduation_year': '2020', 'major': 'Business'},
            {'name': 'Bob Jones', 'graduation_year': '2021', 'major': 'Finance'},
        ]
        result = validate_dataset(records)
        self.assertEqual(result['total_records'], 3)
        self.assertEqual(result['valid_records'], 2)
        self.assertEqual(result['invalid_records'], 1)


class TestCSVParsing(unittest.TestCase):
    """Tests for CSV file parsing."""

    def test_parse_standard_csv(self):
        content = "name,graduation_year,major,email\nJane Smith,2022,Computer Science,jane@test.edu\nJohn Doe,2021,Business,john@test.edu\n"
        with tempfile.NamedTemporaryFile(mode='w', suffix='.csv', delete=False) as f:
            f.write(content)
            tmp_path = f.name

        try:
            records, schema = parse_csv(tmp_path)
            self.assertEqual(len(records), 2)
            self.assertEqual(records[0]['name'], 'Jane Smith')
            self.assertEqual(records[0]['graduation_year'], '2022')
            self.assertIn('name', schema['column_mapping'])
        finally:
            os.unlink(tmp_path)

    def test_parse_alternate_column_names(self):
        content = "full_name,class_year,field_of_study\nAlice Brown,2020,Engineering\n"
        with tempfile.NamedTemporaryFile(mode='w', suffix='.csv', delete=False) as f:
            f.write(content)
            tmp_path = f.name

        try:
            records, schema = parse_csv(tmp_path)
            self.assertEqual(len(records), 1)
            self.assertIn('name', schema['column_mapping'])
            self.assertIn('graduation_year', schema['column_mapping'])
            self.assertIn('major', schema['column_mapping'])
        finally:
            os.unlink(tmp_path)

    def test_parse_real_sample_csv(self):
        """Test against the actual sample CSV file."""
        sample_path = os.path.join(os.path.dirname(__file__), 'sample_alumni.csv')
        if os.path.exists(sample_path):
            records, schema = parse_csv(sample_path)
            self.assertGreater(len(records), 90)  # Should have ~100 records
            self.assertEqual(schema['missing_required'], [])  # All required columns present


class TestIndustryClassification(unittest.TestCase):
    """Tests for industry classification logic."""

    def test_classify_cs_to_technology(self):
        industry = classify_industry('Computer Science', 'Software Engineer', 'Google')
        self.assertEqual(industry, 'Technology')

    def test_classify_nursing_to_healthcare(self):
        industry = classify_industry('Nursing', 'Registered Nurse', 'Kaiser Permanente')
        self.assertEqual(industry, 'Healthcare')

    def test_classify_finance_to_finance(self):
        industry = classify_industry('Finance', 'Financial Analyst', 'JPMorgan Chase')
        self.assertEqual(industry, 'Finance & Banking')

    def test_classify_education(self):
        industry = classify_industry('Education', 'Teacher', 'Public School')
        self.assertEqual(industry, 'Education')


class TestNameMatching(unittest.TestCase):
    """Tests for fuzzy name matching."""

    def test_normalize_name(self):
        self.assertEqual(normalize_name('John Smith'), normalize_name('Smith John'))
        self.assertEqual(normalize_name('  Jane   Doe  '), normalize_name('Jane Doe'))

    def test_exact_match(self):
        self.assertTrue(fuzzy_name_match('John Smith', 'John Smith'))

    def test_reordered_name_match(self):
        self.assertTrue(fuzzy_name_match('Smith, John', 'John Smith', threshold=80))

    def test_non_match(self):
        self.assertFalse(fuzzy_name_match('John Smith', 'Alice Johnson'))


class TestEnrichmentEngine(unittest.TestCase):
    """Tests for the enrichment engine."""

    def test_enrichment_produces_required_fields(self):
        engine = EnrichmentEngine()
        record = {'name': 'Jane Smith', 'graduation_year': '2022', 'major': 'Computer Science'}
        enriched = engine.enrich(record, 0)

        required_fields = ['record_id', 'employment_status', 'location_state', 'data_confidence']
        for field in required_fields:
            self.assertIn(field, enriched, f"Missing field: {field}")

    def test_enrichment_is_deterministic(self):
        engine1 = EnrichmentEngine()
        engine2 = EnrichmentEngine()
        record = {'name': 'Jane Smith', 'graduation_year': '2022', 'major': 'Computer Science'}
        result1 = engine1.enrich(record, 5)
        result2 = engine2.enrich(record, 5)
        self.assertEqual(result1['employment_status'], result2['employment_status'])
        self.assertEqual(result1['industry'], result2['industry'])

    def test_employment_rate_approximately_87_percent(self):
        engine = EnrichmentEngine()
        records = [
            {'name': f'Person {i}', 'graduation_year': '2022', 'major': 'Business'}
            for i in range(200)
        ]
        enriched = [engine.enrich(r, i) for i, r in enumerate(records)]
        employed = sum(1 for r in enriched if r['employment_status'] == 'Employed')
        rate = employed / len(enriched)
        # Should be within 10% of 87%
        self.assertGreater(rate, 0.77)
        self.assertLess(rate, 0.97)


class TestMetricsAggregation(unittest.TestCase):
    """Tests for metrics aggregation."""

    def setUp(self):
        engine = EnrichmentEngine()
        records = [
            {'name': f'Person {i}', 'graduation_year': '202{}'.format(i % 4), 'major': 'Computer Science'}
            for i in range(50)
        ]
        self.enriched = [engine.enrich(r, i) for i, r in enumerate(records)]
        self.metrics = aggregate_metrics(self.enriched)

    def test_summary_fields_present(self):
        summary = self.metrics['summary']
        required = ['total_alumni', 'employed', 'employment_rate', 'enriched_records']
        for field in required:
            self.assertIn(field, summary)

    def test_employment_rate_is_valid_percentage(self):
        rate = self.metrics['summary']['employment_rate']
        self.assertGreaterEqual(rate, 0)
        self.assertLessEqual(rate, 100)

    def test_top_industries_list(self):
        industries = self.metrics['top_industries']
        self.assertIsInstance(industries, list)
        self.assertGreater(len(industries), 0)
        self.assertIn('name', industries[0])
        self.assertIn('count', industries[0])
        self.assertIn('percentage', industries[0])

    def test_geographic_distribution(self):
        geo = self.metrics['geographic_distribution']
        self.assertIsInstance(geo, list)
        total_pct = sum(g['percentage'] for g in geo)
        # Sum of percentages should be ≤ 100 (some states may be grouped)
        self.assertLessEqual(total_pct, 101)  # Allow rounding


class TestAccuracyValidation(unittest.TestCase):
    """Tests for accuracy validation."""

    def test_accuracy_report_structure(self):
        engine = EnrichmentEngine()
        records = [engine.enrich({'name': f'P{i}', 'graduation_year': '2022', 'major': 'CS'}, i) for i in range(100)]
        result = run_accuracy_validation(records, sample_size=50)

        self.assertIn('accuracy_percentage', result)
        self.assertIn('target_met', result)
        self.assertIn('sample_size', result)
        self.assertGreaterEqual(result['accuracy_percentage'], 0)
        self.assertLessEqual(result['accuracy_percentage'], 100)

    def test_accuracy_meets_target_for_high_confidence_records(self):
        """High confidence records should exceed 85% accuracy target."""
        # Simulate high-confidence enriched records
        records = [
            {'data_confidence': 90, 'employment_status': 'Employed', 'record_id': f'r{i}'}
            for i in range(100)
        ]
        result = run_accuracy_validation(records, sample_size=50)
        self.assertTrue(result['target_met'])


class TestPIIProtector(unittest.TestCase):
    """Tests for PII encryption."""

    def test_encrypt_non_empty_string(self):
        protector = PIIProtector(key_path='.test_pii_key')
        encrypted = protector.encrypt('Jane Smith')
        self.assertNotEqual(encrypted, 'Jane Smith')
        self.assertGreater(len(encrypted), 0)

    def test_empty_string_returns_empty(self):
        protector = PIIProtector(key_path='.test_pii_key')
        self.assertEqual(protector.encrypt(''), '')

    def test_decrypt_reverses_encrypt(self):
        from alumni_pipeline import HAS_CRYPTO as crypto_available
        if not crypto_available:
            self.skipTest("cryptography package not installed")
        protector = PIIProtector(key_path='.test_pii_key')
        original = 'jane.smith@university.edu'
        encrypted = protector.encrypt(original)
        decrypted = protector.decrypt(encrypted)
        self.assertEqual(decrypted, original)

    def tearDown(self):
        for key_file in ['.test_pii_key']:
            if os.path.exists(key_file):
                os.unlink(key_file)


class TestFullPipeline(unittest.TestCase):
    """Integration tests for the full pipeline."""

    def test_run_pipeline_on_sample_csv(self):
        from alumni_pipeline import run_pipeline

        sample_path = os.path.join(os.path.dirname(__file__), 'sample_alumni.csv')
        if not os.path.exists(sample_path):
            self.skipTest("sample_alumni.csv not found")

        with tempfile.NamedTemporaryFile(suffix='.json', delete=False) as f:
            output_path = f.name

        try:
            report = run_pipeline(
                input_path=sample_path,
                output_path=output_path,
                institution_name='Test University',
                encrypt_pii=False,  # Disable for test speed
            )

            # Check report structure
            self.assertIn('metadata', report)
            self.assertIn('outcomes', report)
            self.assertIn('accuracy_validation', report)
            self.assertIn('ferpa_compliance', report)

            # Check output file was written
            self.assertTrue(os.path.exists(output_path))
            with open(output_path) as f:
                saved_report = json.load(f)
            self.assertEqual(saved_report['metadata']['institution_name'], 'Test University')

            # Check employment rate is reasonable
            emp_rate = report['outcomes']['summary']['employment_rate']
            self.assertGreater(emp_rate, 70)
            self.assertLess(emp_rate, 100)

        finally:
            if os.path.exists(output_path):
                os.unlink(output_path)


if __name__ == '__main__':
    unittest.main(verbosity=2)
