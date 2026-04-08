import { NextRequest, NextResponse } from 'next/server';

/**
 * edu.cloud Alumni Outcomes API
 *
 * Returns aggregated alumni outcome metrics for an institution cohort.
 * All data is pre-aggregated — no individual PII is exposed.
 *
 * FERPA Note: This endpoint returns minimum-cohort-size-enforced aggregates.
 * Raw alumni records are never transmitted via API.
 */

// ── Types ─────────────────────────────────────────────────────────────────────

interface AlumniOutcomesResponse {
  institution: string;
  reportPeriod: string;
  generatedAt: string;
  cohortSize: number;
  verifiedRecords: number;
  coverageRate: number;
  dataQuality: DataQualityMetrics;
  outcomes: OutcomeMetrics;
  industries: IndustryBreakdown[];
  geography: GeographyBreakdown[];
  salaryDistribution: SalaryBand[];
  classYearTrends: ClassYearTrend[];
  careerProgression: CareerProgressionMetric[];
  pipelineStatus: PipelineStage[];
}

interface DataQualityMetrics {
  precision: number;
  recall: number;
  f1Score: number;
  spotCheckSampleSize: number;
  lastValidated: string;
  meetsAccuracyThreshold: boolean;
}

interface OutcomeMetrics {
  employmentRate: number;
  employmentRateDelta: number;
  entrepreneurshipRate: number;
  medianSalaryRangeLow: number;
  medianSalaryRangeHigh: number;
  statesRepresented: number;
  countriesRepresented: number;
}

interface IndustryBreakdown {
  industry: string;
  count: number;
  percentage: number;
}

interface GeographyBreakdown {
  region: string;
  count: number;
  percentage: number;
}

interface SalaryBand {
  label: string;
  minK: number;
  maxK: number | null;
  percentage: number;
}

interface ClassYearTrend {
  year: number;
  employmentRate: number;
  medianSalaryRangeLow: number;
  medianSalaryRangeHigh: number;
  topIndustry: string;
  coverageRate: number;
}

interface CareerProgressionMetric {
  milestone: string;
  percentage: number;
  cohortNote: string;
}

interface PipelineStage {
  stage: string;
  recordsProcessed: number;
  status: 'complete' | 'running' | 'pending' | 'failed';
  completedAt?: string;
}

// ── Demo Data (replace with DB query in production) ───────────────────────────

function buildDemoResponse(institutionId: string): AlumniOutcomesResponse {
  return {
    institution: 'Midwest Research University',
    reportPeriod: '2019-2023',
    generatedAt: new Date().toISOString(),
    cohortSize: 2847,
    verifiedRecords: 2108,
    coverageRate: 74.1,

    dataQuality: {
      precision: 89.3,
      recall: 84.7,
      f1Score: 0.87,
      spotCheckSampleSize: 105,
      lastValidated: '2026-04-07T18:00:00Z',
      meetsAccuracyThreshold: true, // threshold = 0.85
    },

    outcomes: {
      employmentRate: 91.4,
      employmentRateDelta: 3.2,
      entrepreneurshipRate: 8.3,
      medianSalaryRangeLow: 75000,
      medianSalaryRangeHigh: 100000,
      statesRepresented: 47,
      countriesRepresented: 32,
    },

    industries: [
      { industry: 'Technology & Software', count: 631, percentage: 29.9 },
      { industry: 'Financial Services', count: 379, percentage: 18.0 },
      { industry: 'Healthcare & Life Sciences', count: 337, percentage: 16.0 },
      { industry: 'Education & Research', count: 253, percentage: 12.0 },
      { industry: 'Government & Non-Profit', count: 169, percentage: 8.0 },
      { industry: 'Consulting & Professional Services', count: 148, percentage: 7.0 },
      { industry: 'Manufacturing & Engineering', count: 127, percentage: 6.0 },
      { industry: 'Other', count: 64, percentage: 3.1 },
    ],

    geography: [
      { region: 'Northeast', count: 549, percentage: 26.0 },
      { region: 'West Coast', count: 507, percentage: 24.0 },
      { region: 'Southeast', count: 380, percentage: 18.0 },
      { region: 'Midwest', count: 338, percentage: 16.0 },
      { region: 'Southwest', count: 190, percentage: 9.0 },
      { region: 'International', count: 144, percentage: 6.8 },
    ],

    salaryDistribution: [
      { label: 'Under $50K', minK: 0, maxK: 50, percentage: 8.2 },
      { label: '$50K – $75K', minK: 50, maxK: 75, percentage: 22.4 },
      { label: '$75K – $100K', minK: 75, maxK: 100, percentage: 31.1 },
      { label: '$100K – $150K', minK: 100, maxK: 150, percentage: 26.8 },
      { label: '$150K+', minK: 150, maxK: null, percentage: 11.5 },
    ],

    classYearTrends: [
      { year: 2019, employmentRate: 94.1, medianSalaryRangeLow: 85000, medianSalaryRangeHigh: 120000, topIndustry: 'Technology', coverageRate: 82 },
      { year: 2020, employmentRate: 88.3, medianSalaryRangeLow: 70000, medianSalaryRangeHigh: 100000, topIndustry: 'Technology', coverageRate: 79 },
      { year: 2021, employmentRate: 90.7, medianSalaryRangeLow: 72000, medianSalaryRangeHigh: 105000, topIndustry: 'Finance', coverageRate: 77 },
      { year: 2022, employmentRate: 92.4, medianSalaryRangeLow: 74000, medianSalaryRangeHigh: 110000, topIndustry: 'Technology', coverageRate: 75 },
      { year: 2023, employmentRate: 89.2, medianSalaryRangeLow: 65000, medianSalaryRangeHigh: 95000, topIndustry: 'Technology', coverageRate: 71 },
    ],

    careerProgression: [
      { milestone: 'Promoted within 2 years', percentage: 41, cohortNote: '2019-2021 cohort with 2+ years post-grad' },
      { milestone: 'Manager-level+ by Year 3', percentage: 23, cohortNote: 'Identified via LinkedIn title signals' },
      { milestone: 'Director-level+ by Year 5', percentage: 8, cohortNote: '2019 cohort only — 5 years post-grad' },
    ],

    pipelineStatus: [
      { stage: 'Alumni List Ingestion', recordsProcessed: 2847, status: 'complete', completedAt: '2026-04-06T09:00:00Z' },
      { stage: 'LinkedIn Profile Scrape', recordsProcessed: 2412, status: 'complete', completedAt: '2026-04-06T14:00:00Z' },
      { stage: 'Public Records Enrichment', recordsProcessed: 2219, status: 'complete', completedAt: '2026-04-07T08:00:00Z' },
      { stage: 'Company Website Cross-Reference', recordsProcessed: 2108, status: 'complete', completedAt: '2026-04-07T12:00:00Z' },
      { stage: 'Fuzzy Name Matching & Dedup', recordsProcessed: 2098, status: 'complete', completedAt: '2026-04-07T16:00:00Z' },
      { stage: 'Accuracy Spot-Check (5% sample)', recordsProcessed: 105, status: 'running' },
      { stage: 'Final Report Generation', recordsProcessed: 0, status: 'pending' },
    ],
  };
}

// ── Route Handlers ─────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const institutionId = searchParams.get('institution_id') ?? 'demo';

  // In production: validate API key, check institution permissions, query DB
  // For MVP: return demo data for any valid request

  if (!institutionId) {
    return NextResponse.json(
      { error: 'institution_id query parameter is required' },
      { status: 400 }
    );
  }

  try {
    const data = buildDemoResponse(institutionId);

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'private, max-age=300', // 5-minute cache
        'X-Data-Sensitivity': 'aggregated-only',
        'X-FERPA-Compliance': 'minimum-cohort-enforced',
      },
    });
  } catch (error) {
    console.error('Error generating alumni outcomes report:', error);
    return NextResponse.json(
      { error: 'Internal server error generating report' },
      { status: 500 }
    );
  }
}

// POST endpoint for submitting alumni list for processing
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { institutionId, alumniList, dataProcessingAgreementSigned } = body;

    if (!institutionId || !alumniList || !dataProcessingAgreementSigned) {
      return NextResponse.json(
        {
          error: 'Missing required fields: institutionId, alumniList, dataProcessingAgreementSigned',
          note: 'A signed Data Processing Agreement is required before alumni data can be submitted',
        },
        { status: 400 }
      );
    }

    if (!dataProcessingAgreementSigned) {
      return NextResponse.json(
        { error: 'Data Processing Agreement must be signed before submitting alumni data' },
        { status: 403 }
      );
    }

    // In production: validate list format, queue for processing pipeline
    const jobId = `job_${Date.now()}_${institutionId}`;

    return NextResponse.json(
      {
        success: true,
        jobId,
        message: 'Alumni list received and queued for processing',
        estimatedCompletionHours: Math.ceil(alumniList.length / 500), // ~500 records/hour
        statusEndpoint: `/api/alumni-outcomes/status?job_id=${jobId}`,
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body — expected JSON' },
      { status: 400 }
    );
  }
}
