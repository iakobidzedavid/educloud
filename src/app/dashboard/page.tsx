'use client';

import Link from 'next/link';
import { useState } from 'react';

// ── Types ────────────────────────────────────────────────────────────────────

interface MetricCard {
  label: string;
  value: string;
  delta: string;
  deltaPositive: boolean;
  icon: string;
  description: string;
}

interface IndustryRow {
  industry: string;
  count: number;
  pct: number;
  color: string;
}

interface RegionRow {
  region: string;
  count: number;
  pct: number;
}

interface ClassYearRow {
  year: number;
  employed: number;
  avgSalaryRange: string;
  topIndustry: string;
  responseRate: number;
}

interface SalaryBand {
  label: string;
  pct: number;
  color: string;
}

interface PipelineStatus {
  stage: string;
  count: number;
  status: 'complete' | 'running' | 'pending';
}

// ── Demo Data ────────────────────────────────────────────────────────────────

const INSTITUTION = 'Midwest Research University';
const REPORT_PERIOD = 'Classes 2019 – 2023';
const GENERATED = '2026-04-08';
const TOTAL_ALUMNI = 2847;
const SCRAPED = 2412;
const VERIFIED = 2108;

const metrics: MetricCard[] = [
  {
    label: 'Employment Rate',
    value: '91.4%',
    delta: '+3.2% vs. national avg',
    deltaPositive: true,
    icon: '💼',
    description: 'Proportion of alumni in full-time employment within 12 months of graduation',
  },
  {
    label: 'Median Salary Range',
    value: '$75K – $100K',
    delta: '+18% vs. 2019 cohort',
    deltaPositive: true,
    icon: '💰',
    description: 'Estimated compensation band based on role seniority and location signals',
  },
  {
    label: 'Entrepreneurship Rate',
    value: '8.3%',
    delta: '+1.4% vs. 2021 report',
    deltaPositive: true,
    icon: '🚀',
    description: 'Alumni who founded or co-founded a company within 5 years of graduation',
  },
  {
    label: 'Geographic Reach',
    value: '47 States + 32 Countries',
    delta: 'Global footprint confirmed',
    deltaPositive: true,
    icon: '🌍',
    description: 'Verified locations of alumni based on LinkedIn profiles and public records',
  },
];

const industries: IndustryRow[] = [
  { industry: 'Technology & Software', count: 631, pct: 29.9, color: '#ef4444' },
  { industry: 'Financial Services', count: 379, pct: 18.0, color: '#f97316' },
  { industry: 'Healthcare & Life Sciences', count: 337, pct: 16.0, color: '#eab308' },
  { industry: 'Education & Research', count: 253, pct: 12.0, color: '#22c55e' },
  { industry: 'Government & Non-Profit', count: 169, pct: 8.0, color: '#3b82f6' },
  { industry: 'Consulting & Professional Services', count: 148, pct: 7.0, color: '#8b5cf6' },
  { industry: 'Manufacturing & Engineering', count: 127, pct: 6.0, color: '#06b6d4' },
  { industry: 'Other', count: 64, pct: 3.1, color: '#6b7280' },
];

const regions: RegionRow[] = [
  { region: 'Northeast (NY, MA, CT, NJ, PA)', count: 549, pct: 26.0 },
  { region: 'West Coast (CA, WA, OR)', count: 507, pct: 24.0 },
  { region: 'Southeast (FL, GA, NC, VA, TX)', count: 380, pct: 18.0 },
  { region: 'Midwest (IL, OH, MI, MN, MO)', count: 338, pct: 16.0 },
  { region: 'Southwest (AZ, CO, NV, UT)', count: 190, pct: 9.0 },
  { region: 'International', count: 144, pct: 6.8 },
  { region: 'Other / Unknown', count: 0, pct: 0.2 },
];

const classYears: ClassYearRow[] = [
  { year: 2019, employed: 94.1, avgSalaryRange: '$85K–$120K', topIndustry: 'Technology', responseRate: 82 },
  { year: 2020, employed: 88.3, avgSalaryRange: '$70K–$100K', topIndustry: 'Technology', responseRate: 79 },
  { year: 2021, employed: 90.7, avgSalaryRange: '$72K–$105K', topIndustry: 'Finance', responseRate: 77 },
  { year: 2022, employed: 92.4, avgSalaryRange: '$74K–$110K', topIndustry: 'Technology', responseRate: 75 },
  { year: 2023, employed: 89.2, avgSalaryRange: '$65K–$95K', topIndustry: 'Technology', responseRate: 71 },
];

const salaryBands: SalaryBand[] = [
  { label: 'Under $50K', pct: 8.2, color: '#6b7280' },
  { label: '$50K – $75K', pct: 22.4, color: '#f97316' },
  { label: '$75K – $100K', pct: 31.1, color: '#ef4444' },
  { label: '$100K – $150K', pct: 26.8, color: '#dc2626' },
  { label: '$150K+', pct: 11.5, color: '#991b1b' },
];

const pipeline: PipelineStatus[] = [
  { stage: 'Alumni List Ingestion (CSV/SFTP)', count: TOTAL_ALUMNI, status: 'complete' },
  { stage: 'LinkedIn Profile Scrape', count: 2412, status: 'complete' },
  { stage: 'Public Records Enrichment', count: 2219, status: 'complete' },
  { stage: 'Company Website Cross-Reference', count: 2108, status: 'complete' },
  { stage: 'Fuzzy Name Matching & Dedup', count: 2098, status: 'complete' },
  { stage: 'Accuracy Spot-Check (5% sample)', count: 105, status: 'running' },
  { stage: 'Final Report Generation', count: 0, status: 'pending' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function MetricCardComponent({ m }: { m: MetricCard }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-300 transition-all">
      <div className="text-3xl mb-3">{m.icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{m.value}</div>
      <div className="text-sm font-medium text-gray-500 mb-2">{m.label}</div>
      <div className={`text-xs font-semibold mb-3 ${m.deltaPositive ? 'text-green-600' : 'text-red-600'}`}>
        {m.deltaPositive ? '↑' : '↓'} {m.delta}
      </div>
      <div className="text-xs text-gray-400">{m.description}</div>
    </div>
  );
}

function HorizontalBar({ pct, color, label, count }: { pct: number; color: string; label: string; count: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-500">{count.toLocaleString()} ({pct.toFixed(1)}%)</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div
          className="h-3 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function PipelineBadge({ status }: { status: PipelineStatus['status'] }) {
  if (status === 'complete') return <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">✓ Complete</span>;
  if (status === 'running') return <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">⟳ Running</span>;
  return <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">○ Pending</span>;
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'outcomes' | 'pipeline' | 'compliance'>('outcomes');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-600">edu.cloud</Link>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
            <Link href="/platform" className="hover:text-red-600 transition-colors">Platform</Link>
            <Link href="/contact" className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg transition-colors">
              Request Demo
            </Link>
          </nav>
        </div>
      </header>

      {/* Report Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-red-200 text-sm font-medium mb-1">Alumni Outcomes Report — Beta MVP</div>
              <h1 className="text-3xl font-bold">{INSTITUTION}</h1>
              <p className="text-red-100 mt-1">{REPORT_PERIOD} · Generated {GENERATED}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
                <div className="text-2xl font-bold">{TOTAL_ALUMNI.toLocaleString()}</div>
                <div className="text-red-200 text-xs">Alumni in Cohort</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
                <div className="text-2xl font-bold">{VERIFIED.toLocaleString()}</div>
                <div className="text-red-200 text-xs">Records Verified</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-3 text-center">
                <div className="text-2xl font-bold">{((VERIFIED / TOTAL_ALUMNI) * 100).toFixed(0)}%</div>
                <div className="text-red-200 text-xs">Coverage Rate</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-8">
            {(['outcomes', 'pipeline', 'compliance'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-t-lg text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-red-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab === 'outcomes' ? '📊 Outcomes' : tab === 'pipeline' ? '⚙️ Data Pipeline' : '🔒 Compliance'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── OUTCOMES TAB ──────────────────────────────────────────────── */}
        {activeTab === 'outcomes' && (
          <div className="space-y-8">

            {/* Key Metrics */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Outcome Metrics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m, i) => <MetricCardComponent key={i} m={m} />)}
              </div>
            </section>

            {/* Industry + Geography */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <section className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Industry Distribution</h2>
                {industries.map((ind) => (
                  <HorizontalBar
                    key={ind.industry}
                    label={ind.industry}
                    count={ind.count}
                    pct={ind.pct}
                    color={ind.color}
                  />
                ))}
              </section>

              <section className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Geographic Distribution</h2>
                {regions.map((reg) => (
                  <HorizontalBar
                    key={reg.region}
                    label={reg.region}
                    count={reg.count}
                    pct={reg.pct}
                    color="#ef4444"
                  />
                ))}
              </section>
            </div>

            {/* Salary Distribution */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Salary Range Distribution</h2>
              <p className="text-sm text-gray-500 mb-5">
                Estimated from role seniority signals, job postings, and compensation databases — not direct salary disclosure.
                <span className="ml-1 text-red-600 font-medium">FERPA compliant — no individual salaries disclosed.</span>
              </p>
              <div className="flex items-end gap-3 h-40">
                {salaryBands.map((band) => (
                  <div key={band.label} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs font-semibold text-gray-600">{band.pct}%</span>
                    <div
                      className="w-full rounded-t-md transition-all duration-700"
                      style={{ height: `${(band.pct / 35) * 120}px`, backgroundColor: band.color }}
                    />
                    <span className="text-xs text-gray-500 text-center leading-tight">{band.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Class Year Comparison */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Outcomes by Class Year</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 font-semibold text-gray-700">Class Year</th>
                      <th className="text-left py-2 pr-4 font-semibold text-gray-700">Employment Rate</th>
                      <th className="text-left py-2 pr-4 font-semibold text-gray-700">Avg. Salary Range</th>
                      <th className="text-left py-2 pr-4 font-semibold text-gray-700">Top Industry</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Data Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classYears.map((cy) => (
                      <tr key={cy.year} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 pr-4 font-bold text-red-600">{cy.year}</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-gray-100 rounded-full h-2">
                              <div
                                className="h-2 rounded-full bg-green-500"
                                style={{ width: `${cy.employed}%` }}
                              />
                            </div>
                            <span className="text-gray-700 font-medium">{cy.employed}%</span>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-gray-600">{cy.avgSalaryRange}</td>
                        <td className="py-3 pr-4 text-gray-600">{cy.topIndustry}</td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            cy.responseRate >= 80
                              ? 'bg-green-100 text-green-700'
                              : cy.responseRate >= 75
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {cy.responseRate}% verified
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Career Progression */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Career Progression Patterns</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { milestone: 'Promoted within 2 years', pct: 41, icon: '⬆️', note: 'Of employed 2019–2021 cohort' },
                  { milestone: 'Manager-level+ by Year 3', pct: 23, icon: '👥', note: 'Identified via LinkedIn title signals' },
                  { milestone: 'Director-level+ by Year 5', pct: 8, icon: '🎯', note: '2019 cohort only — 5 years post-grad' },
                ].map((item) => (
                  <div key={item.milestone} className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-4xl font-bold text-red-600 mb-1">{item.pct}%</div>
                    <div className="text-sm font-semibold text-gray-800 mb-1">{item.milestone}</div>
                    <div className="text-xs text-gray-400">{item.note}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Accuracy Validation Panel */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-amber-900 mb-3">📋 Data Accuracy Validation</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[
                  { label: 'Precision', value: '89.3%', note: 'Correct matches / total predicted matches' },
                  { label: 'Recall', value: '84.7%', note: 'Found alumni / total alumni in cohort' },
                  { label: 'F1 Score', value: '0.87', note: 'Harmonic mean of precision & recall' },
                  { label: 'Spot-check sample', value: '5%', note: '105 records manually verified' },
                ].map((m) => (
                  <div key={m.label} className="bg-white rounded-lg p-3 text-center border border-amber-100">
                    <div className="text-2xl font-bold text-amber-800">{m.value}</div>
                    <div className="text-xs font-semibold text-amber-700 mt-1">{m.label}</div>
                    <div className="text-xs text-amber-500 mt-1">{m.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-amber-700">
                Accuracy validated against 105 manually spot-checked records (5% sample) comparing edu.cloud scraped data
                against registrar records and alumni surveys. Target threshold: ≥ 85% F1 score. Current F1 = 0.87 ✓
              </p>
            </section>
          </div>
        )}

        {/* ── PIPELINE TAB ──────────────────────────────────────────────── */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Data Collection Pipeline</h2>
              <p className="text-gray-500 text-sm mb-6">
                Multi-source pipeline combining web scraping, public records enrichment, and fuzzy matching to produce
                verified alumni outcome records. All processing occurs on edu.cloud infrastructure — no alumni data is
                stored on external platforms.
              </p>
              <div className="space-y-3">
                {pipeline.map((stage, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                        {i + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{stage.stage}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      {stage.count > 0 && (
                        <span className="text-gray-500 text-sm">{stage.count.toLocaleString()} records</span>
                      )}
                      <PipelineBadge status={stage.status} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Data Sources & Collection Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    source: 'LinkedIn Public Profiles',
                    method: 'Headless browser scraping (Playwright)',
                    fields: 'Current title, employer, location, education history',
                    reliability: 'High',
                    icon: '🔗',
                  },
                  {
                    source: 'Company Websites',
                    method: 'Team page crawling + fuzzy name matching',
                    fields: 'Role, seniority, company size, industry',
                    reliability: 'Medium',
                    icon: '🌐',
                  },
                  {
                    source: 'News & Press Releases',
                    method: 'Google News API + NLP entity extraction',
                    fields: 'Promotions, funding events, awards, exits',
                    reliability: 'Medium',
                    icon: '📰',
                  },
                  {
                    source: 'Public Records Databases',
                    method: 'API integrations (Pipl, Spokeo, BeenVerified)',
                    fields: 'Verified contact info, career history',
                    reliability: 'High',
                    icon: '🗃️',
                  },
                  {
                    source: 'Crunchbase / PitchBook',
                    method: 'Founder name matching against alumni list',
                    fields: 'Startup founded, funding raised, exit events',
                    reliability: 'High',
                    icon: '🚀',
                  },
                  {
                    source: 'Alumni Surveys (optional)',
                    method: 'Structured survey with direct import',
                    fields: 'All fields — self-reported (highest quality)',
                    reliability: 'Very High',
                    icon: '📋',
                  },
                ].map((ds) => (
                  <div key={ds.source} className="border border-gray-200 rounded-lg p-4">
                    <div className="text-2xl mb-2">{ds.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{ds.source}</h3>
                    <div className="text-xs text-gray-500 mb-1"><span className="font-medium">Method:</span> {ds.method}</div>
                    <div className="text-xs text-gray-500 mb-2"><span className="font-medium">Fields:</span> {ds.fields}</div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      ds.reliability === 'Very High'
                        ? 'bg-green-100 text-green-700'
                        : ds.reliability === 'High'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {ds.reliability} reliability
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ── COMPLIANCE TAB ────────────────────────────────────────────── */}
        {activeTab === 'compliance' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-3">🔒 FERPA Compliance Framework</h2>
              <p className="text-blue-700 text-sm mb-4">
                edu.cloud operates as a <strong>school official</strong> under FERPA (20 U.S.C. § 1232g; 34 CFR Part 99)
                with a legitimate educational interest. Our data collection methodology is designed to comply with
                FERPA's requirements for protecting student educational records while enabling lawful alumni research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    rule: 'Publicly Available Information Only',
                    detail: 'We collect only information alumni have voluntarily made public (LinkedIn profiles, company bios, news articles). No access to educational records without written consent.',
                    status: '✓ Compliant',
                    color: 'green',
                  },
                  {
                    rule: 'No Individual Record Disclosure',
                    detail: 'Reports present aggregated data only (minimum cohort size of 10). No individual salary, GPA, or financial aid records are disclosed.',
                    status: '✓ Compliant',
                    color: 'green',
                  },
                  {
                    rule: 'Data Minimization',
                    detail: 'We collect only outcome data directly relevant to institutional impact measurement. PII is hashed and not stored longer than 90 days after report generation.',
                    status: '✓ Compliant',
                    color: 'green',
                  },
                  {
                    rule: 'Institution Controls Access',
                    detail: 'Institution retains data ownership. edu.cloud acts as a data processor. Alumni can request removal via institution opt-out mechanism.',
                    status: '✓ Compliant',
                    color: 'green',
                  },
                  {
                    rule: 'Directory Information Protocol',
                    detail: 'Institution confirms FERPA directory information policy before engagement. Students who have opted out of directory listings are excluded from scraping scope.',
                    status: '⚠ Requires Confirmation',
                    color: 'yellow',
                  },
                  {
                    rule: 'Data Processing Agreement',
                    detail: 'Formal DPA required before data transfer. Covers sub-processor obligations, data retention limits, breach notification timelines (<72 hours).',
                    status: '⚠ Template Ready — Not Yet Signed',
                    color: 'yellow',
                  },
                ].map((item) => (
                  <div key={item.rule} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.rule}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                        item.color === 'green'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Privacy Safeguards Implemented</h2>
              <ul className="space-y-3">
                {[
                  'All alumni names are hashed (SHA-256) before storage; raw names exist only in memory during processing',
                  'Minimum cohort size of 10 enforced in all aggregated reports to prevent re-identification',
                  'Salary data is never sourced from educational records — estimated from public compensation signals only',
                  'Data retention: scraped records purged 90 days post-report; aggregated reports retained indefinitely',
                  'No data sold or shared with third parties; institution is the only authorized report recipient',
                  'EU GDPR compliance path documented for institutions with international alumni populations',
                  'Opt-out registry: alumni can request exclusion via institution portal — processed within 30 days',
                  'Annual privacy impact assessment scheduled for Q1 of each year',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © 2026 edu.cloud · Alumni Outcomes MVP Dashboard · Beta v0.1.0
            </p>
            <p>
              Data for demonstration purposes. Real institution data requires signed Data Processing Agreement.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
