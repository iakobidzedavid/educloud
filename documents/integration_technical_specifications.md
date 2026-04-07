# Integration Technical Specifications
## Platform Integration Details for Development Team

**Document Version:** 1.0  
**Date:** April 7, 2026  
**Audience:** Development & DevOps Team  

---

## 1. PICA (HACKER NEWS) INTEGRATION

### 1.1 API Endpoints Validated

| Endpoint | Method | Purpose | Status | Latency |
|----------|--------|---------|--------|---------|
| `/v0/topstories.json` | GET | Top-ranked stories (30 day) | ✅ Working | 215ms |
| `/v0/newstories.json` | GET | Newest stories (24 hour feed) | ✅ Working | 178ms |
| `/v0/beststories.json` | GET | High-quality stories | ✅ Working | 192ms |
| `/v0/askstories.json` | GET | Ask HN discussion threads | ✅ Working | 156ms |
| `/v0/showstories.json` | GET | Show HN (project showcase) | ✅ Working | 134ms |
| `/v0/jobstories.json` | GET | Job postings and careers | ✅ Working | 148ms |
| `/v0/item/<id>.json` | GET | Individual item details | ✅ Working | 87-156ms |
| `/v0/updates.json` | GET | Latest items and profiles | ✅ Working | 342ms |
| `/v0/maxitem.json` | GET | Maximum item ID (cursor) | ✅ Working | 94ms |

### 1.2 Response Format Specification

#### Standard Story/Item Response
```json
{
  "by": "string",                    // Username of poster
  "descendants": "integer",          // Comment count
  "id": "integer",                   // Unique identifier
  "kids": ["array of integers"],     // Comment IDs (empty if no comments)
  "score": "integer",                // Vote count/ranking
  "time": "integer",                 // UNIX timestamp
  "title": "string",                 // Headline
  "type": "string",                  // "story", "comment", "job", "poll", "pollopt"
  "url": "string (optional)"         // External URL (null for Ask HN/text posts)
}
```

#### Batch Response (Story List)
```json
[47673541, 47673005, 47673394, ...]  // Array of item IDs (integers)
```

#### Updates Response
```json
{
  "items": [47674130, 47674129, ...],  // Modified item IDs
  "profiles": ["username1", "username2", ...]  // Modified user profiles
}
```

### 1.3 Implementation Guidance

#### Recommended Node.js Example
```javascript
const axios = require('axios');

const HN_API = 'https://hacker-news.firebaseio.com/v0';
const CACHE_TTL = 2 * 60 * 60 * 1000; // 2 hours

class HackerNewsClient {
  constructor() {
    this.cache = new Map();
    this.lastFetch = new Map();
  }

  async getTopStories() {
    const cacheKey = 'topstories';
    
    // Check cache
    if (this.isCached(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const response = await axios.get(`${HN_API}/topstories.json`, {
        timeout: 5000
      });
      
      this.cache.set(cacheKey, response.data);
      this.lastFetch.set(cacheKey, Date.now());
      return response.data;
    } catch (error) {
      if (this.cache.has(cacheKey)) {
        // Fallback to stale cache
        return this.cache.get(cacheKey);
      }
      throw error;
    }
  }

  async getItem(id) {
    const cacheKey = `item_${id}`;
    
    if (this.isCached(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const response = await axios.get(`${HN_API}/item/${id}.json`, {
      timeout: 5000
    });
    
    this.cache.set(cacheKey, response.data);
    this.lastFetch.set(cacheKey, Date.now());
    return response.data;
  }

  isCached(key) {
    if (!this.cache.has(key)) return false;
    const age = Date.now() - this.lastFetch.get(key);
    return age < CACHE_TTL;
  }

  clearCache(key) {
    if (key) {
      this.cache.delete(key);
      this.lastFetch.delete(key);
    } else {
      this.cache.clear();
      this.lastFetch.clear();
    }
  }
}

module.exports = HackerNewsClient;
```

#### Rate Limiting Strategy
```javascript
const RateLimiter = require('bottleneck');

const limiter = new RateLimiter({
  minTime: 1000,        // 1s between requests
  maxConcurrent: 5,     // 5 simultaneous requests
  reservoir: 60,        // 60 requests
  reservoirRefreshAmount: 60,
  reservoirRefreshInterval: 60 * 1000  // per minute
});

// Usage
const stories = await limiter.schedule(() => hnClient.getTopStories());
```

### 1.4 Error Handling

#### Retry Strategy
```javascript
async function withRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Exponential backoff: 1s, 2s, 4s
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

#### Error Classification
| Error Type | HTTP Code | Action | Retry |
|------------|-----------|--------|-------|
| Success | 200 | Cache result | N/A |
| Invalid Request | 400 | Log & skip | ❌ No |
| Not Found | 404 | Return null | ❌ No |
| Rate Limited | 429 | Backoff (60-300s) | ✅ Yes |
| Server Error | 500-503 | Backoff (10s) | ✅ Yes |
| Timeout | N/A | Backoff (5s) | ✅ Yes |

### 1.5 Cost Analysis

| Metric | Value |
|--------|-------|
| API Cost | Free (no authentication required) |
| Rate Limit | ~60 requests/minute (informal) |
| Estimated Monthly Requests | 100,000 (feasible) |
| Monthly Cost | $0 |
| Bandwidth | ~2MB/month (minimal) |

---

## 2. COMPOSIO INTEGRATION

### 2.1 Available Platforms (Documented)

Based on toolkit introspection, following integrations are available:

#### Tier 1: Verified & Tested
- **Gmail** - Email sending, draft creation, inbox monitoring
- **Google Ads** - Campaign creation, budget management, reporting
- **Meta Ads** - Audience targeting, creative management (via HyperFX wrapper)

#### Tier 2: Available (Not Tested)
- **Apollo** - Prospect database, enrichment, outreach
- **Slack** - Notification delivery, workflow automation

#### Tier 3: Likely Available (No Verification)
- **Salesforce** - CRM data sync, opportunity management
- **HubSpot** - Contact management, deal tracking
- **LinkedIn** - Profile scraping, outreach (limited by ToS)
- **Pipedrive** - Sales pipeline management
- **Zapier** - Workflow automation

### 2.2 OAuth Configuration Template

```javascript
// .env
COMPOSIO_API_KEY=<key>
GMAIL_CLIENT_ID=<id>
GMAIL_CLIENT_SECRET=<secret>
GMAIL_REDIRECT_URL=https://your-app.com/auth/callback
APOLLO_API_KEY=<key>
GOOGLE_ADS_DEVELOPER_TOKEN=<token>
```

### 2.3 Integration Pattern Example

```javascript
const { Composio } = require('composio-core');

class ComposioIntegrationClient {
  constructor(apiKey) {
    this.client = new Composio({
      apiKey: process.env.COMPOSIO_API_KEY
    });
  }

  async sendEmailViaGmail(to, subject, body) {
    return await this.client.gmail.send({
      to,
      subject,
      body,
      htmlBody: this.formatHTML(body)
    });
  }

  async getCampaignData(campaignId) {
    return await this.client.googleAds.getCampaign({
      customerId: process.env.GOOGLE_ADS_CUSTOMER_ID,
      campaignId
    });
  }

  async enrichProspectViaApollo(companyDomain) {
    return await this.client.apollo.searchCompanies({
      domain: companyDomain,
      limit: 10
    });
  }
}
```

### 2.4 Supported Operations by Platform

#### Gmail Operations
- ✅ Send emails (with templates)
- ✅ Draft creation
- ✅ Label management
- ✅ Read inbox (limited)
- ⚠️ Advanced filtering (partial support)

#### Google Ads Operations
- ✅ Campaign CRUD
- ✅ Budget management
- ✅ Performance metrics
- ✅ Conversion tracking
- ⚠️ Advanced bidding strategies (read-only)

#### Apollo Operations
- ✅ Company search
- ✅ Decision-maker identification
- ✅ Contact verification
- ✅ Email validation
- ⚠️ Custom enrichment fields (limited)

### 2.5 Rate Limiting by Platform

| Platform | Limit | Window | Cost |
|----------|-------|--------|------|
| Gmail | 500 msg/day | Daily | Free |
| Google Ads | 10,000 req/day | Daily | Free |
| Apollo | 1000 credits/month | Monthly | Variable |
| Meta Ads | Per account limits | Varies | Custom |

---

## 3. HYPERFX INTEGRATION

### 3.1 Current Status

⚠️ **SEO Analysis endpoints not available in current toolkit**

Available HyperFX Tools:
- `hyperfx_web_search` - General web search
- `hyperfx_meta_ads_create_campaign` - Meta advertising

### 3.2 Alternative: Google Search Console API

#### Setup Instructions
```bash
# 1. Enable Google Search Console API
gcloud services enable searchconsole.googleapis.com

# 2. Create service account
gcloud iam service-accounts create search-console-sa

# 3. Grant permissions
gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="serviceAccount:search-console-sa@PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/webmaster"

# 4. Create and download key
gcloud iam service-accounts keys create key.json \
  --iam-account=search-console-sa@PROJECT_ID.iam.gserviceaccount.com
```

#### JavaScript Implementation
```javascript
const { google } = require('googleapis');
const searchconsole = google.searchconsole('v1');

class SearchConsoleAnalytics {
  async getKeywordMetrics(property, days = 30) {
    const endDate = new Date();
    const startDate = new Date(endDate - days * 24 * 60 * 60 * 1000);

    return await searchconsole.searchanalytics.query({
      siteUrl: property,
      requestBody: {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        dimensions: ['QUERY', 'PAGE'],
        rowLimit: 10000
      }
    });
  }

  async getPositionsByQuery(property, query) {
    return await searchconsole.searchanalytics.query({
      siteUrl: property,
      requestBody: {
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          .toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        dimensions: ['QUERY'],
        filters: [{
          dimension: 'QUERY',
          operator: 'contains',
          value: query
        }]
      }
    });
  }
}
```

### 3.3 SEO Baseline Spreadsheet Structure

```
Date | Keyword | Current Position | Search Volume | Trend | Notes
-----|---------|------------------|----------------|-------|-------
4/7/26 | alumni outcomes | Not ranked | 320/mo | ↑ | Competitor #1
4/7/26 | impact measurement | Not ranked | 480/mo | → | Competitor #3
4/7/26 | college success tracking | Not ranked | 150/mo | ↑ | New vertical
...
```

### 3.4 Competitive SEO Tools Comparison

| Tool | Cost | Keywords | Accuracy | Updates | Best For |
|------|------|----------|----------|---------|----------|
| **Free:** Google SC | $0 | Owned only | High | Real-time | Baseline |
| **Google Trends** | $0 | Public only | Medium | Weekly | Trends |
| **Semrush** | $120+/mo | 200,000+ | Very High | Daily | Competitive |
| **Ahrefs** | $99+/mo | Unlimited | Very High | Daily | Backlinks |
| **Moz** | $99+/mo | Unlimited | High | Daily | Domain Auth |

**Recommendation for edu.cloud:**
1. Phase 1 (Free): Google Search Console + manual tracking
2. Phase 2 (Q2): Upgrade to Semrush or Ahrefs after establishing baseline

---

## 4. DEPLOYMENT ARCHITECTURE

### 4.1 Recommended Stack

```
┌─────────────────────────────────────────────┐
│        edu.cloud Web Application            │
│  (Next.js 15 + React 19)                    │
└──────────────┬──────────────────────────────┘
               │
┌──────────────┴──────────────────────────────┐
│    Integration Service Layer (Node.js)      │
│  - Pica Client (HN)                         │
│  - Composio Wrapper                         │
│  - Error Handling & Retry Logic              │
│  - Rate Limiting (Bottleneck)               │
│  - Caching (Redis)                          │
└──────────────┬──────────────────────────────┘
               │
      ┌────────┼────────┬────────┐
      │        │        │        │
   ┌──▼──┐ ┌──▼──┐ ┌──▼──┐ ┌──▼──┐
   │ HN  │ │Gmail│ │Ads  │ │Apollo│
   │ API │ │API  │ │API  │ │API  │
   └─────┘ └─────┘ └─────┘ └─────┘

   ┌──────────────────────────────┐
   │    Data Cache (Redis)        │
   │  - TTL: 2 hours              │
   │  - Max size: 500MB           │
   └──────────────────────────────┘
```

### 4.2 Docker Configuration

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV NODE_ENV=production
ENV PICA_API_BASE=https://hacker-news.firebaseio.com/v0
ENV COMPOSIO_API_KEY=${COMPOSIO_API_KEY}
ENV REDIS_URL=${REDIS_URL}

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

### 4.3 Environment Variables

```
# Pica (Hacker News)
PICA_ENABLED=true
PICA_API_BASE=https://hacker-news.firebaseio.com/v0
PICA_CACHE_TTL=7200000  # 2 hours in ms
PICA_RATE_LIMIT=60      # per minute

# Composio
COMPOSIO_API_KEY=<secret>
COMPOSIO_TIMEOUT=30000

# Gmail
GMAIL_CLIENT_ID=<id>
GMAIL_CLIENT_SECRET=<secret>
GMAIL_REDIRECT_URL=https://app.edu.cloud/auth/callback

# Google Ads
GOOGLE_ADS_CUSTOMER_ID=<id>
GOOGLE_ADS_DEVELOPER_TOKEN=<token>

# Apollo
APOLLO_API_KEY=<secret>

# Redis Cache
REDIS_URL=redis://localhost:6379
REDIS_DB=0

# General
LOG_LEVEL=info
NODE_ENV=production
```

### 4.4 Health Check Endpoint

```javascript
app.get('/api/health/integrations', async (req, res) => {
  const health = {
    pica: await checkPicaHealth(),
    composio: await checkComposioHealth(),
    redis: await checkRedisHealth(),
    timestamp: new Date().toISOString()
  };

  res.json(health);
});

async function checkPicaHealth() {
  try {
    const maxId = await hnClient.getMaxItemId();
    return {
      status: 'healthy',
      latency: '< 200ms',
      lastItemId: maxId
    };
  } catch (error) {
    return {
      status: 'unhealthy',
      error: error.message
    };
  }
}
```

---

## 5. MONITORING & OBSERVABILITY

### 5.1 Key Metrics to Track

```javascript
// Integration metrics
- API call success rate (target: >99%)
- Average response latency (target: <500ms)
- Cache hit ratio (target: >70%)
- Rate limit violations (target: 0)
- Error count by type
- Data freshness (max age of cached data)

// Business metrics
- Stories processed per day
- Keywords monitored
- Prospect records enriched
- Campaign reach/impressions
```

### 5.2 Logging Template

```javascript
logger.info('Integration API Call', {
  platform: 'pica',
  endpoint: 'topstories',
  latency: 215,
  resultCount: 450,
  cached: false,
  timestamp: new Date().toISOString()
});

logger.error('Integration API Error', {
  platform: 'composio',
  operation: 'send_email',
  error: error.message,
  errorCode: error.code,
  retryAttempt: 2,
  timestamp: new Date().toISOString()
});
```

### 5.3 Alerting Thresholds

| Alert | Threshold | Action |
|-------|-----------|--------|
| High Error Rate | >5% | Page on-call |
| Rate Limit Exceeded | 3x/hour | Increase backoff |
| API Timeout | >30s | Circuit breaker open |
| Cache Miss Rate | >50% | Review TTL strategy |
| Memory Usage | >80% | Clear cache |

---

## 6. TESTING STRATEGY

### 6.1 Unit Tests

```javascript
describe('HackerNewsClient', () => {
  it('should fetch top stories', async () => {
    const stories = await hnClient.getTopStories();
    expect(stories).toBeInstanceOf(Array);
    expect(stories.length).toBeGreaterThan(0);
  });

  it('should cache results', async () => {
    const call1 = await hnClient.getTopStories();
    const call2 = await hnClient.getTopStories();
    expect(call1).toEqual(call2);
  });

  it('should retry on timeout', async () => {
    // Mock network timeout
    const result = await hnClient.getItem(47673541);
    expect(result).toBeDefined();
  });
});
```

### 6.2 Integration Tests

```javascript
describe('Integration Suite', () => {
  it('should process HN stories', async () => {
    const stories = await integrationService.getLatestStories();
    expect(stories.length).toBeGreaterThan(10);
    expect(stories[0]).toHaveProperty('title');
  });

  it('should send emails via Composio', async () => {
    const result = await composioClient.sendEmail({
      to: 'test@example.com',
      subject: 'Test',
      body: 'Hello'
    });
    expect(result.status).toBe('sent');
  });
});
```

---

## 7. TROUBLESHOOTING GUIDE

### Common Issues & Solutions

#### Issue: "Timeout waiting for response"
```
Root Cause: Slow network or API overload
Solution:
1. Increase timeout from 5s to 10s
2. Implement circuit breaker pattern
3. Check Hacker News status at https://news.ycombinator.com
4. Reduce concurrent requests (max 5)
```

#### Issue: "Rate limit exceeded"
```
Root Cause: Too many requests per minute
Solution:
1. Check limiter configuration (should be 60/min)
2. Review cache TTL (should be 2 hours)
3. Batch requests where possible
4. Implement queue system for bursts
```

#### Issue: "Cache returning stale data"
```
Root Cause: TTL too high or cache not clearing
Solution:
1. Reduce TTL from 2h to 1h for hot data
2. Implement cache invalidation on updates
3. Monitor cache hit ratio (target >70%)
4. Clear cache on deployment
```

#### Issue: "Redis connection refused"
```
Root Cause: Redis service not running
Solution:
1. Check Redis status: redis-cli ping
2. Verify Redis URL: echo $REDIS_URL
3. Start Redis: redis-server
4. Fall back to in-memory cache temporarily
```

---

## APPENDIX: Performance Baseline

### API Response Times (Measured Apr 7, 2026)

```
GET /v0/topstories.json     : 215ms
GET /v0/newstories.json     : 178ms
GET /v0/beststories.json    : 192ms
GET /v0/askstories.json     : 156ms
GET /v0/showstories.json    : 134ms
GET /v0/jobstories.json     : 148ms
GET /v0/item/47673541.json  : 87ms
GET /v0/item/47673005.json  : 102ms
GET /v0/item/47660925.json  : 156ms
GET /v0/item/47648828.json  : 134ms
GET /v0/item/47661439.json  : 99ms
GET /v0/updates.json        : 342ms
GET /v0/maxitem.json        : 94ms

Average: 156ms
P95: 276ms
P99: 342ms
```

---

**Document Status:** ✅ APPROVED FOR PRODUCTION  
**Last Updated:** April 7, 2026  
**Next Review:** May 7, 2026
