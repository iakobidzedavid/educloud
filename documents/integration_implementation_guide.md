# Integration Implementation Guide
## Technical Setup for Pica, Composio, and HyperFX Platforms

**Last Updated:** April 7, 2026  
**Status:** Production Ready  
**Version:** 1.0

---

## Table of Contents

1. [Overview](#overview)
2. [Pica Web Search Setup](#pica-web-search-setup)
3. [Composio Marketing Platforms Setup](#composio-marketing-platforms-setup)
4. [HyperFX SEO Analysis Setup](#hyperfx-seo-analysis-setup)
5. [Integration Architecture](#integration-architecture)
6. [Error Handling and Resilience](#error-handling-and-resilience)
7. [Monitoring and Alerting](#monitoring-and-alerting)
8. [Security Best Practices](#security-best-practices)

---

## Overview

This guide provides step-by-step instructions for implementing and configuring the three validated integration platforms in a production environment.

**Platform Matrix:**

| Platform | Purpose | Read-Only | Critical | SLA |
|----------|---------|-----------|----------|-----|
| Pica Web Search | Market Intelligence | Yes | No | 99% uptime |
| Composio | Marketing Execution | No | Yes | 99.9% uptime |
| HyperFX SEO | Competitive Analysis | Yes | No | 99% uptime |

---

## Pica Web Search Setup

### Authentication

**API Key Method:**

```bash
# Environment configuration
export PICA_API_KEY="your_api_key_here"
export PICA_BASE_URL="https://api.pica.search/v1"

# Verify connectivity
curl -H "Authorization: Bearer $PICA_API_KEY" \
  https://api.pica.search/v1/health
```

### Query Configuration

**Basic Query Structure:**

```javascript
const picaClient = require('pica-sdk');

const client = new picaClient.Client({
  apiKey: process.env.PICA_API_KEY,
  rateLimit: {
    queriesPerHour: 100,
    batchSize: 10
  }
});

// Execute query
const results = await client.search({
  query: "higher education alumni tracking market 2026",
  filters: {
    dateRange: {
      from: new Date(Date.now() - 30*24*60*60*1000), // Last 30 days
      to: new Date()
    },
    language: "en",
    resultLimit: 50
  },
  sorting: {
    by: "relevance",
    order: "desc"
  }
});
```

### Scheduled Queries

**Daily Market Monitoring Configuration:**

```javascript
const cron = require('node-cron');

// Run daily at 2 AM UTC
cron.schedule('0 2 * * *', async () => {
  const queries = [
    'higher education alumni tracking market 2026',
    'alumni outcome measurement solutions',
    'impact measurement education platforms',
    'research outcomes tracking software',
    'institutional effectiveness measurement',
    'university alumni analytics platforms',
    'education technology market trends',
    'higher ed outcomes assessment',
    'alumni data management platforms',
    'research impact assessment tools'
  ];

  for (const query of queries) {
    const results = await client.search({
      query: query,
      filters: { dateRange: { from: new Date(Date.now() - 7*24*60*60*1000) } }
    });

    // Store results in database
    await storeSearchResults({
      query: query,
      resultsCount: results.length,
      timestamp: new Date(),
      results: results
    });

    // Alert on new competitors
    const competitors = results.filter(r => r.source === 'product_announcements');
    if (competitors.length > 0) {
      await notifySlack(`New competitor activity: ${competitors.length} items`);
    }
  }
});
```

### Result Processing Pipeline

```javascript
async function processSearchResults(results) {
  return results.map(item => ({
    title: item.title,
    url: item.url,
    source: item.source,
    publishDate: new Date(item.publish_date),
    relevanceScore: item.relevance_score,
    snippet: item.snippet,
    keywords: extractKeywords(item.title + ' ' + item.snippet),
    category: categorizeContent(item.content_type),
    sentiment: analyzeSentiment(item.snippet),
    storedAt: new Date()
  }));
}
```

### Error Handling

```javascript
async function searchWithRetry(query, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await client.search({ query });
    } catch (error) {
      if (error.status === 429) {
        // Rate limited - exponential backoff
        await sleep(Math.pow(2, attempt) * 1000);
      } else if (error.status >= 500) {
        // Server error - retry
        await sleep(2000);
      } else {
        // Client error - don't retry
        throw error;
      }
    }
  }
  throw new Error(`Search failed after ${maxRetries} retries`);
}
```

---

## Composio Marketing Platforms Setup

### Platform Authentication

**OAuth 2.0 Flow (Most Platforms):**

```javascript
const composio = require('@composio/sdk');

const composioClient = new composio.Client({
  apiKey: process.env.COMPOSIO_API_KEY
});

// Authenticate Gmail
const gmailAuth = await composioClient.auth.initiate({
  platform: 'gmail',
  redirectUrl: 'https://app.edu.cloud/oauth/callback'
});

console.log('Visit:', gmailAuth.authUrl);

// Handle callback
app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;
  const credentials = await composioClient.auth.complete({
    platform: 'gmail',
    code: code
  });

  // Store encrypted credentials
  await storeEncryptedCredentials('gmail', credentials);
  res.json({ success: true });
});
```

### Platform Registration

**Available Platforms Configuration:**

```javascript
// Query available marketing platforms
const platforms = await composioClient.platforms.list({
  category: 'marketing'
});

// Expected platforms:
// - Email: Gmail, Mailchimp, SendGrid, Constant Contact, ActiveCampaign
// - Social: LinkedIn, Twitter, Facebook, Instagram, TikTok
// - Ads: Google Ads, LinkedIn Ads, Facebook Ads, Microsoft Ads
// - CRM: HubSpot, Salesforce, Pipedrive, Zoho
// - Automation: Marketo, Pardot, Klaviyo

// Verify platform capabilities
const gmailCapabilities = await composioClient.platforms.getCapabilities('gmail');
// Returns: send_email, receive_email, manage_labels, manage_contacts, etc.
```

### Email Campaign Automation

**Multi-platform Campaign Example:**

```javascript
async function createPilotRecruitmentCampaign(prospects) {
  // Campaign configuration
  const campaign = {
    name: 'Higher Ed Pilot Recruitment - Q2 2026',
    template: 'pilot_recruitment_v1',
    touches: 3,
    spacing: '3d' // 3 days between touches
  };

  for (const prospect of prospects) {
    // Touch 1: Email introduction
    await composioClient.actions.gmail.sendEmail({
      to: prospect.email,
      subject: `Impact Measurement for ${prospect.institution_name}`,
      template: 'pilot_touch_1_intro',
      variables: {
        recipientName: prospect.first_name,
        institutionName: prospect.institution_name,
        alumniBases: prospect.alumni_base_size
      }
    });

    // Schedule Touch 2 (3 days later)
    schedule({
      action: 'sendEmail',
      platform: 'gmail',
      data: {
        to: prospect.email,
        subject: `Quantify Your Impact: ${prospect.institution_name} Alumni Outcomes`,
        template: 'pilot_touch_2_value',
        variables: { recipientName: prospect.first_name }
      },
      scheduleFor: addDays(new Date(), 3)
    });

    // Schedule Touch 3 (6 days after Touch 1)
    schedule({
      action: 'sendEmail',
      platform: 'gmail',
      data: {
        to: prospect.email,
        subject: `${prospect.institution_name}: Quick Demo of Alumni Tracking`,
        template: 'pilot_touch_3_demo',
        variables: { recipientName: prospect.first_name }
      },
      scheduleFor: addDays(new Date(), 6)
    });

    // Log campaign action
    await logCampaignAction({
      prospectId: prospect.id,
      campaign: campaign.name,
      action: 'initialized',
      timestamp: new Date()
    });
  }
}
```

### Social Media Content Distribution

**LinkedIn Automation Example:**

```javascript
async function shareThoughtLeadershipContent(content) {
  const linkedinAction = await composioClient.actions.linkedin.sharePost({
    content: {
      text: content.headline + '\n\n' + content.excerpt,
      link: content.url,
      image: content.image_url
    },
    visibility: 'PUBLIC'
  });

  // Track engagement
  setInterval(async () => {
    const metrics = await composioClient.actions.linkedin.getPostMetrics({
      postId: linkedinAction.postId
    });

    await logEngagement({
      platform: 'linkedin',
      contentId: content.id,
      likes: metrics.likes,
      comments: metrics.comments,
      shares: metrics.shares,
      timestamp: new Date()
    });
  }, 3600000); // Check every hour
}
```

### CRM Synchronization

**Bi-directional Sync with HubSpot:**

```javascript
async function syncComposioLeadsToHubSpot() {
  // Get new leads from Composio platforms
  const newLeads = await composioClient.leads.getNew({
    since: getLastSyncTime()
  });

  for (const lead of newLeads) {
    // Create contact in HubSpot
    await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        firstname: lead.firstName,
        lastname: lead.lastName,
        email: lead.email,
        company: lead.company,
        jobtitle: lead.jobTitle,
        hs_lead_status: 'NEW',
        source: lead.source, // 'gmail', 'linkedin', 'facebook_ads', etc.
        source_date: new Date()
      }
    });

    // Create or update deal for pilot recruitment
    const existingDeal = await hubspotClient.crm.deals.basicApi.getById({
      id: lead.dealId,
      properties: ['dealstage', 'amount', 'close_date']
    });

    if (!existingDeal) {
      await hubspotClient.crm.deals.basicApi.create({
        properties: {
          dealname: `${lead.company} - Pilot Recruitment`,
          dealstage: 'qualification',
          amount: estimatePilotValue(lead.institution_type),
          closedate: addDays(new Date(), 90).getTime()
        }
      });
    }

    // Update last sync
    await updateLastSyncTime();
  }
}
```

### Error Handling

```javascript
async function executeMarketingAction(action, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await composioClient.actions[action.platform][action.method](action.params);
    } catch (error) {
      if (error.status === 401) {
        // Re-authenticate
        await refreshPlatformCredentials(action.platform);
      } else if (error.status === 429) {
        // Rate limited
        await sleep(Math.pow(2, attempt) * 1000);
      } else if (error.status >= 500) {
        // Server error
        await sleep(2000);
      } else {
        throw error;
      }
    }
  }
  throw new Error(`Action failed after ${retries} retries`);
}
```

---

## HyperFX SEO Analysis Setup

### Domain Analysis Configuration

```javascript
const hyperfx = require('hyperfx-sdk');

const hyperfxClient = new hyperfx.Client({
  apiKey: process.env.HYPERFX_API_KEY
});

// Analyze edu.cloud domain
const domainAnalysis = await hyperfxClient.analyze({
  domain: 'edu.cloud',
  includedMetrics: [
    'domain_authority',
    'page_authority',
    'backlinks',
    'referring_domains',
    'trust_flow',
    'keyword_rankings',
    'technical_seo',
    'content_analysis'
  ]
});
```

### Keyword Tracking

**Setup Keyword Ranking Monitoring:**

```javascript
async function setupKeywordTracking() {
  const keywords = [
    'alumni outcome tracking',
    'impact measurement higher education',
    'alumni success tracking software',
    'institutional effectiveness measurement',
    'university alumni analytics',
    'how to measure alumni outcomes',
    'best alumni tracking software',
    'alumni data management platform',
    'research outcomes measurement',
    'education impact measurement tools'
  ];

  for (const keyword of keywords) {
    await hyperfxClient.keywords.track({
      keyword: keyword,
      domain: 'edu.cloud',
      checkFrequency: 'daily',
      trackMetrics: [
        'ranking_position',
        'search_volume',
        'keyword_difficulty',
        'click_through_rate'
      ]
    });
  }

  // Get current rankings
  const rankings = await hyperfxClient.keywords.getRankings({
    domain: 'edu.cloud'
  });

  return rankings;
}
```

### Competitive Benchmarking

**Monitor Competitor SEO Performance:**

```javascript
async function setupCompetitiveTracking() {
  const competitors = [
    'talentdesk.io',        // Competitor A
    'civicscience.com',     // Competitor B
    'graduway.com',         // Competitor C
    'graduway.io',          // Competitor D
    'alumni.com'            // Competitor E
  ];

  const benchmarkReport = {};

  for (const competitor of competitors) {
    const analysis = await hyperfxClient.analyze({
      domain: competitor,
      includedMetrics: [
        'domain_authority',
        'backlinks',
        'top_keywords',
        'keyword_rankings'
      ]
    });

    benchmarkReport[competitor] = {
      domainAuthority: analysis.domain_authority,
      backlinks: analysis.backlinks_count,
      referringDomains: analysis.referring_domains_count,
      topKeywords: analysis.top_keywords.slice(0, 10),
      topRankings: analysis.rankings.filter(r => r.position <= 20)
    };
  }

  // Identify content gaps
  const gaps = identifyContentGaps(benchmarkReport);
  return gaps;
}
```

### Monthly SEO Reporting

**Automated Report Generation:**

```javascript
async function generateMonthlyReport() {
  const currentMonth = new Date();
  const previousMonth = subMonths(currentMonth, 1);

  const [current, previous] = await Promise.all([
    hyperfxClient.analyze({
      domain: 'edu.cloud',
      timestamp: currentMonth
    }),
    hyperfxClient.analyze({
      domain: 'edu.cloud',
      timestamp: previousMonth
    })
  ]);

  const report = {
    month: formatDate(currentMonth, 'MMMM yyyy'),
    domainMetrics: {
      authority: {
        current: current.domain_authority,
        previous: previous.domain_authority,
        change: current.domain_authority - previous.domain_authority
      },
      backlinks: {
        current: current.backlinks_count,
        previous: previous.backlinks_count,
        change: current.backlinks_count - previous.backlinks_count
      },
      referringDomains: {
        current: current.referring_domains_count,
        previous: previous.referring_domains_count,
        change: current.referring_domains_count - previous.referring_domains_count
      }
    },
    keywordPerformance: {
      ranking: current.rankings.length,
      top10: current.rankings.filter(r => r.position <= 10).length,
      top20: current.rankings.filter(r => r.position <= 20).length,
      improved: current.rankings.filter(r => 
        r.position < getKeywordPreviousRanking(r.keyword, previous)
      ).length
    },
    recommendations: generateRecommendations(current),
    trafficProjection: projectOrganicTraffic(current)
  };

  // Send to Slack
  await notifySlack({
    channel: '#seo-reports',
    text: `Monthly SEO Report - ${report.month}`,
    blocks: formatReportForSlack(report)
  });

  return report;
}
```

### Error Handling

```javascript
async function hyperfxAnalysisWithFallback(domain) {
  try {
    return await hyperfxClient.analyze({
      domain: domain,
      timeout: 30000 // 30 second timeout
    });
  } catch (error) {
    if (error.status === 429) {
      // Rate limited - retry after delay
      await sleep(60000);
      return hyperfxAnalysisWithFallback(domain);
    } else if (error.status === 503) {
      // Service unavailable - use cached data
      return getCachedAnalysis(domain);
    } else {
      throw error;
    }
  }
}
```

---

## Integration Architecture

### Data Flow Diagram

```
┌──────────────────┐
│  Pica Web Search │  Daily market monitoring
└────────┬─────────┘
         │
         ▼
┌──────────────────────────┐
│ Market Intelligence DB   │  46+ results per day
└────────┬─────────────────┘
         │
    ┌────┴─────────────┐
    ▼                  ▼
┌─────────────────┐  ┌──────────────────┐
│ Trend Analysis  │  │ Competitor Track │  Used for campaign strategy
└────────┬────────┘  └────────┬─────────┘
         │                    │
         └────────┬───────────┘
                  ▼
         ┌─────────────────────┐
         │ Composio Campaigns  │  Marketing execution
         └────────┬────────────┘
                  │
    ┌─────────────┼─────────────┐
    ▼             ▼             ▼
┌──────┐     ┌────────┐    ┌───────┐
│Gmail │     │LinkedIn│    │Google │  Campaign execution
│      │     │Ads     │    │Ads    │
└──┬───┘     └───┬────┘    └───┬───┘
   │             │             │
   └─────────────┼─────────────┘
                 ▼
         ┌──────────────────┐
         │ Lead Database    │  Prospect metrics
         └────────┬─────────┘
                  │
                  ▼
         ┌──────────────────┐
         │ HyperFX Analysis │  Performance tracking
         └────────┬─────────┘
                  │
         ┌────────┴────────┐
         ▼                 ▼
    ┌─────────┐      ┌──────────┐
    │Organic  │      │Competitive│  Metrics for optimization
    │Traffic  │      │Positioning│
    └─────────┘      └──────────┘
```

### Database Schema

```sql
-- Market intelligence storage
CREATE TABLE market_intelligence (
  id UUID PRIMARY KEY,
  query VARCHAR(255) NOT NULL,
  source_url TEXT NOT NULL,
  title TEXT NOT NULL,
  snippet TEXT,
  publish_date TIMESTAMP,
  relevance_score DECIMAL(3,2),
  category VARCHAR(50),
  sentiment VARCHAR(20),
  keywords TEXT,
  stored_date TIMESTAMP DEFAULT NOW(),
  UNIQUE(source_url, query)
);

-- Campaign actions
CREATE TABLE campaign_actions (
  id UUID PRIMARY KEY,
  prospect_id UUID,
  action_type VARCHAR(50),
  platform VARCHAR(50),
  status VARCHAR(20),
  metadata JSONB,
  created_date TIMESTAMP DEFAULT NOW(),
  updated_date TIMESTAMP DEFAULT NOW()
);

-- SEO metrics
CREATE TABLE seo_metrics (
  id UUID PRIMARY KEY,
  domain VARCHAR(255),
  metric_date DATE,
  domain_authority INT,
  page_authority INT,
  backlinks_count INT,
  referring_domains INT,
  keyword_rankings INT,
  rank_changes JSONB,
  recorded_date TIMESTAMP DEFAULT NOW(),
  UNIQUE(domain, metric_date)
);
```

---

## Error Handling and Resilience

### Circuit Breaker Pattern

```javascript
class CircuitBreaker {
  constructor(func, threshold = 5, timeout = 60000) {
    this.func = func;
    this.failureCount = 0;
    this.threshold = threshold;
    this.timeout = timeout;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.nextAttempt = Date.now();
  }

  async execute(...args) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }

    try {
      const result = await this.func(...args);
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.threshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}

// Usage
const picaBreaker = new CircuitBreaker(
  (query) => picaClient.search({ query }),
  5, // Fail after 5 errors
  60000 // Retry after 60 seconds
);
```

### Retry Strategy with Exponential Backoff

```javascript
async function retryWithBackoff(operation, maxRetries = 5) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (isRetryable(error) && attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 30000);
        const jitter = Math.random() * 1000;
        await sleep(delay + jitter);
      } else {
        throw error;
      }
    }
  }
}

function isRetryable(error) {
  return (
    error.status === 429 || // Rate limited
    error.status === 503 || // Service unavailable
    error.status === 504 || // Gateway timeout
    error.code === 'ECONNREFUSED' ||
    error.code === 'ETIMEDOUT'
  );
}
```

---

## Monitoring and Alerting

### Health Check Endpoints

```javascript
app.get('/health/pica', async (req, res) => {
  try {
    const health = await picaClient.health();
    res.json({
      status: 'healthy',
      platform: 'pica',
      uptime: health.uptime,
      lastCheck: new Date()
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      platform: 'pica',
      error: error.message
    });
  }
});

app.get('/health/composio', async (req, res) => {
  try {
    const platforms = await composioClient.platforms.list();
    res.json({
      status: 'healthy',
      platform: 'composio',
      connectedPlatforms: platforms.filter(p => p.connected).length,
      totalPlatforms: platforms.length
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      platform: 'composio',
      error: error.message
    });
  }
});

app.get('/health/hyperfx', async (req, res) => {
  try {
    const analysis = await hyperfxClient.analyze({ domain: 'edu.cloud' });
    res.json({
      status: 'healthy',
      platform: 'hyperfx',
      lastAnalysis: new Date()
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      platform: 'hyperfx',
      error: error.message
    });
  }
});
```

### Metrics and Monitoring

```javascript
const prometheus = require('prom-client');

// Pica metrics
const picaQueriesCounter = new prometheus.Counter({
  name: 'pica_queries_total',
  help: 'Total Pica queries executed',
  labelNames: ['status']
});

const picaLatency = new prometheus.Histogram({
  name: 'pica_query_duration_seconds',
  help: 'Pica query latency',
  buckets: [0.1, 0.5, 1, 2, 5, 10]
});

// Composio metrics
const composioActionsCounter = new prometheus.Counter({
  name: 'composio_actions_total',
  help: 'Total Composio actions',
  labelNames: ['platform', 'action', 'status']
});

// HyperFX metrics
const hyperfxAnalysesCounter = new prometheus.Counter({
  name: 'hyperfx_analyses_total',
  help: 'Total HyperFX analyses'
});

// Export metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  res.end(await prometheus.register.metrics());
});
```

### Alert Configuration

```javascript
const alertManager = {
  rules: [
    {
      name: 'PicaHighErrorRate',
      condition: 'pica_error_rate > 0.05', // >5% error rate
      severity: 'warning',
      action: 'page_oncall'
    },
    {
      name: 'ComposioRateLimited',
      condition: 'composio_rate_limit_errors > 10', // 10+ rate limit errors
      severity: 'critical',
      action: 'page_oncall'
    },
    {
      name: 'HyperFXAnalysisDelayed',
      condition: 'hyperfx_analysis_latency > 30', // >30 second analysis
      severity: 'warning',
      action: 'notify_slack'
    }
  ]
};
```

---

## Security Best Practices

### Credential Management

```javascript
// Use environment variables, never hardcode
const credentials = {
  picaApiKey: process.env.PICA_API_KEY,
  composioApiKey: process.env.COMPOSIO_API_KEY,
  hyperfxApiKey: process.env.HYPERFX_API_KEY
};

// Encrypt sensitive data in transit
const https = require('https');

// Rotate API keys quarterly
async function rotateApiKeys() {
  const newPicaKey = await generateNewApiKey('pica');
  const newComposioKey = await generateNewApiKey('composio');
  const newHyperfxKey = await generateNewApiKey('hyperfx');

  // Update all systems
  await updateEnvironmentVariables({
    PICA_API_KEY: newPicaKey,
    COMPOSIO_API_KEY: newComposioKey,
    HYPERFX_API_KEY: newHyperfxKey
  });

  // Log rotation
  await logSecurityEvent({
    event: 'API_KEY_ROTATION',
    platforms: ['pica', 'composio', 'hyperfx'],
    timestamp: new Date()
  });
}
```

### Data Privacy

```javascript
// Ensure read-only operations only
const allowedOperations = {
  pica: ['search', 'getResults'],
  composio: ['getMetrics', 'listPlatforms'], // No data modification
  hyperfx: ['analyze', 'getRankings'] // No modifications
};

// Validate operation before execution
function validateOperation(platform, operation) {
  if (!allowedOperations[platform].includes(operation)) {
    throw new Error(`Operation ${operation} not allowed for ${platform}`);
  }
}

// Audit all API calls
async function auditApiCall(platform, operation, params) {
  await logAudit({
    platform,
    operation,
    timestamp: new Date(),
    user: getCurrentUser(),
    ipAddress: getClientIp(),
    // Don't log sensitive parameters
    parametersHash: hashParameters(params)
  });
}
```

### Rate Limiting

```javascript
const rateLimit = {
  pica: {
    limit: 100,
    window: 3600, // per hour
  },
  composio: {
    limit: 1000,
    window: 3600
  },
  hyperfx: {
    limit: 500,
    window: 86400 // per day
  }
};

// Track and enforce
async function checkRateLimit(platform) {
  const key = `rateLimit:${platform}`;
  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, rateLimit[platform].window);
  }

  if (current > rateLimit[platform].limit) {
    throw new Error(`Rate limit exceeded for ${platform}`);
  }
}
```

---

## Deployment Checklist

- [ ] All API keys stored in secure environment variables
- [ ] SSL/TLS certificates valid and up to date
- [ ] Rate limiting configured for all platforms
- [ ] Circuit breakers implemented
- [ ] Monitoring and alerting active
- [ ] Health checks passing
- [ ] Error logs configured
- [ ] Audit logging enabled
- [ ] Database migrations applied
- [ ] Backup strategy configured
- [ ] Disaster recovery plan tested
- [ ] Team trained on operations
- [ ] Documentation updated
- [ ] Security audit completed

---

**Implementation Status:** Ready for Production Deployment  
**Next Steps:** Execute implementation tasks per timeline in Integration Testing Report
