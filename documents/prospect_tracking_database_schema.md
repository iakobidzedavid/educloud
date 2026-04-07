# Automated Prospect Engagement Tracking System
## Database Schema & Infrastructure Documentation

**Document Version:** 1.0  
**Date Created:** April 7, 2026  
**Last Updated:** April 7, 2026  
**Owner:** Business Development Team  
**Status:** Production-Ready

---

## Executive Summary

This document defines the complete database schema, data model, and infrastructure for edu.cloud's automated prospect engagement tracking system. The system automates measurement of outreach campaign effectiveness by systematically capturing, parsing, and analyzing email interactions across the prospect pipeline.

**Key Capabilities:**
- Automated email response parsing and sentiment classification
- Real-time engagement metrics tracking (open rates, reply rates, conversion to calls)
- Weekly aggregated reporting with objection/question analysis
- Prospect lifecycle stage management
- Feature request and competitive intelligence extraction

**System Architecture:** Cloud-based prospect engagement database with Gmail integration for email parsing and automated classification workflows

---

## Table of Contents

1. [Core Data Model](#core-data-model)
2. [Database Schema](#database-schema)
3. [Email Response Parsing Logic](#email-response-parsing-logic)
4. [Engagement Scoring Methodology](#engagement-scoring-methodology)
5. [Data Quality & Validation](#data-quality--validation)
6. [Integration Architecture](#integration-architecture)
7. [Reporting & Analytics Framework](#reporting--analytics-framework)

---

## Core Data Model

The prospect engagement tracking system manages three interdependent data entities:

### Entity 1: Prospect Core Profile
Fundamental prospect information with institutional and contact context

**Key Attributes:**
- `prospect_id` (Primary Key): Unique identifier for prospect record
- `prospect_name`: Contact person's full name
- `institution_name`: Target institution name
- `institution_ipeds_id`: IPEDS identifier for verification against IPEDS database
- `institution_type`: Classification (R1_RESEARCH, R2_RESEARCH, LIBERAL_ARTS, COMMUNITY_COLLEGE, PROFESSIONAL_SCHOOL)
- `institution_enrollment`: Student population size
- `prospect_email`: Verified email address (from Apollo or institutional directory)
- `prospect_title`: Job title/role
- `prospect_department`: Department or functional area (IR, Advancement, Provost, etc.)
- `decision_maker_level`: Hierarchy level (EXECUTIVE, DIRECTOR, MANAGER, ANALYST)
- `apollo_enrichment_date`: Date of Apollo enrichment for data quality tracking
- `apollo_confidence_score`: Apollo data confidence (0-100)
- `created_date`: Record creation timestamp
- `status`: ACTIVE, ARCHIVED, DUPLICATE, INVALID_EMAIL

### Entity 2: Email Engagement Records
Complete tracking of email interactions and campaign execution

**Key Attributes:**
- `engagement_id` (Primary Key): Unique identifier for engagement record
- `prospect_id` (Foreign Key): Link to prospect profile
- `email_send_date`: Timestamp of email send
- `email_send_time`: Precise time of send (for analysis of optimal send windows)
- `campaign_id`: Campaign identifier for segmentation analysis
- `campaign_name`: Human-readable campaign name
- `email_template_version`: Which template variant was used
- `personalization_fields_used`: JSON array of personalized fields in email
- `email_subject_line`: Full subject line sent to prospect
- `email_tracking_id`: Unique identifier for this specific send (for webhook tracking)
- `email_open_status`: Boolean flag for email open
- `email_first_open_date`: Timestamp of first open
- `email_open_count`: Total number of times email was opened
- `email_last_open_date`: Timestamp of most recent open
- `link_click_status`: Boolean flag for link click
- `link_click_count`: Total number of link clicks
- `link_click_type`: Type of link clicked (SCHEDULING_LINK, SAMPLE_DATA, WEBSITE, OTHER)
- `scheduling_link_clicked`: Boolean flag for scheduling link
- `reply_received_status`: Boolean flag for email reply
- `reply_date`: Timestamp of first reply received
- `reply_count`: Total number of replies in conversation
- `email_sequence_position`: Position in follow-up sequence (1st, 2nd, 3rd, etc.)
- `days_since_send`: Calculated field for aging analysis
- `is_latest_email_in_sequence`: Boolean for filtering to most recent send

### Entity 3: Email Response & Classification Data
Parsed response content with automated sentiment and intent classification

**Key Attributes:**
- `response_id` (Primary Key): Unique identifier for response record
- `engagement_id` (Foreign Key): Link to original email send
- `prospect_id` (Foreign Key): Link to prospect profile
- `response_date`: Timestamp of response received
- `response_body_raw`: Full email body text (stored for audit trail)
- `response_body_cleaned`: Processed text (headers/signatures removed)
- `response_sentiment_classification`: AI-classified sentiment (POSITIVE_INTEREST, NEUTRAL_INQUIRY, OBJECTION, NO_RESPONSE, UNSUBSCRIBE, OUT_OF_OFFICE)
- `confidence_score_sentiment`: ML confidence for sentiment classification (0-100)
- `response_intent_classification`: Classified intent (INTERESTED_DEMO, INTERESTED_DISCUSSION, REQUEST_INFO, DEFER_DECISION, REJECT_PRODUCT, REJECT_TIMING, TECHNICAL_QUESTION, BUDGET_QUESTION, AUTHORITY_QUESTION, COMPLIANCE_QUESTION)
- `confidence_score_intent`: ML confidence for intent classification (0-100)
- `objection_extracted`: Boolean flag if objection identified
- `objection_type`: Classification of objection if present (BUDGET, TIMING, AUTHORITY, COMPLIANCE_CONCERN, COMPETITIVE_PREFERENCE, INTEGRATION_CONCERN, DATA_PRIVACY_CONCERN, NOT_PRIORITY)
- `objection_text_snippet`: Direct quote of objection from email
- `question_extracted`: Boolean flag if question identified
- `question_topic`: Classification of question (DATA_ACCURACY, PRICING, IMPLEMENTATION_TIMELINE, COMPLIANCE, FERPA_PRIVACY, INTEGRATION, SCOPE, ROI_MEASUREMENT, COMPETITIVE_COMPARISON)
- `question_text_snippet`: Direct quote of question from email
- `feature_request_extracted`: Boolean flag if feature request identified
- `feature_request_description`: Description of requested feature
- `feature_request_priority_context`: Context suggesting priority level
- `next_action_suggested`: Automated recommendation for follow-up (SCHEDULE_DEMO, SEND_CASE_STUDY, CLARIFY_OBJECTION, ESCALATE_EXECUTIVE, DEFER_FOLLOW_UP, REMOVE_FROM_SEQUENCE)
- `response_required`: Boolean flag indicating manual response needed
- `human_review_flag`: Flag set if classification confidence < 70%

### Supporting Entity 4: Campaign & Sequence Management
Campaign-level tracking for cohort analysis and effectiveness measurement

**Key Attributes:**
- `campaign_id` (Primary Key): Unique campaign identifier
- `campaign_name`: Human-readable campaign name
- `campaign_type`: Type of outreach (PILOT_RECRUITMENT, PARTNERSHIP_EXPLORATION, FEATURE_UPDATE, CASE_STUDY_RECRUITMENT)
- `campaign_start_date`: Campaign launch date
- `campaign_end_date`: Campaign conclusion date (if concluded)
- `target_prospect_count`: Number of prospects targeted
- `sequence_template_used`: Which email sequence template
- `sequence_step_count`: Number of steps in sequence
- `targeting_criteria`: JSON description of prospect segmentation
- `campaign_owner`: Team member responsible for campaign
- `campaign_status`: PLANNING, ACTIVE, PAUSED, COMPLETED, ARCHIVED

---

## Database Schema

### SQL Implementation: ProspectProfile Table

```sql
CREATE TABLE prospect_profile (
  prospect_id VARCHAR(36) PRIMARY KEY,
  prospect_name VARCHAR(255) NOT NULL,
  institution_name VARCHAR(255) NOT NULL,
  institution_ipeds_id VARCHAR(6),
  institution_type ENUM(
    'R1_RESEARCH', 
    'R2_RESEARCH', 
    'LIBERAL_ARTS', 
    'COMMUNITY_COLLEGE', 
    'PROFESSIONAL_SCHOOL'
  ),
  institution_enrollment INT,
  prospect_email VARCHAR(255) NOT NULL UNIQUE,
  prospect_title VARCHAR(255),
  prospect_department VARCHAR(100),
  decision_maker_level ENUM(
    'EXECUTIVE', 
    'DIRECTOR', 
    'MANAGER', 
    'ANALYST'
  ),
  apollo_enrichment_date TIMESTAMP,
  apollo_confidence_score INT CHECK (apollo_confidence_score >= 0 AND apollo_confidence_score <= 100),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('ACTIVE', 'ARCHIVED', 'DUPLICATE', 'INVALID_EMAIL') DEFAULT 'ACTIVE',
  INDEX idx_institution (institution_name),
  INDEX idx_email (prospect_email),
  INDEX idx_created_date (created_date),
  INDEX idx_status (status)
);
```

### SQL Implementation: EmailEngagement Table

```sql
CREATE TABLE email_engagement (
  engagement_id VARCHAR(36) PRIMARY KEY,
  prospect_id VARCHAR(36) NOT NULL,
  email_send_date DATE NOT NULL,
  email_send_time TIME NOT NULL,
  campaign_id VARCHAR(36),
  campaign_name VARCHAR(255),
  email_template_version VARCHAR(50),
  personalization_fields_used JSON,
  email_subject_line TEXT NOT NULL,
  email_tracking_id VARCHAR(100) UNIQUE,
  email_open_status BOOLEAN DEFAULT FALSE,
  email_first_open_date TIMESTAMP,
  email_open_count INT DEFAULT 0,
  email_last_open_date TIMESTAMP,
  link_click_status BOOLEAN DEFAULT FALSE,
  link_click_count INT DEFAULT 0,
  link_click_type ENUM('SCHEDULING_LINK', 'SAMPLE_DATA', 'WEBSITE', 'OTHER'),
  scheduling_link_clicked BOOLEAN DEFAULT FALSE,
  reply_received_status BOOLEAN DEFAULT FALSE,
  reply_date TIMESTAMP,
  reply_count INT DEFAULT 0,
  email_sequence_position INT,
  days_since_send INT GENERATED ALWAYS AS (DATEDIFF(CURDATE(), email_send_date)) STORED,
  is_latest_email_in_sequence BOOLEAN DEFAULT TRUE,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (prospect_id) REFERENCES prospect_profile(prospect_id),
  INDEX idx_prospect_id (prospect_id),
  INDEX idx_email_send_date (email_send_date),
  INDEX idx_campaign_id (campaign_id),
  INDEX idx_reply_received (reply_received_status),
  INDEX idx_email_open_status (email_open_status)
);
```

### SQL Implementation: EmailResponse Table

```sql
CREATE TABLE email_response (
  response_id VARCHAR(36) PRIMARY KEY,
  engagement_id VARCHAR(36) NOT NULL,
  prospect_id VARCHAR(36) NOT NULL,
  response_date TIMESTAMP NOT NULL,
  response_body_raw LONGTEXT,
  response_body_cleaned TEXT,
  response_sentiment_classification ENUM(
    'POSITIVE_INTEREST',
    'NEUTRAL_INQUIRY',
    'OBJECTION',
    'NO_RESPONSE',
    'UNSUBSCRIBE',
    'OUT_OF_OFFICE'
  ),
  confidence_score_sentiment INT CHECK (confidence_score_sentiment >= 0 AND confidence_score_sentiment <= 100),
  response_intent_classification ENUM(
    'INTERESTED_DEMO',
    'INTERESTED_DISCUSSION',
    'REQUEST_INFO',
    'DEFER_DECISION',
    'REJECT_PRODUCT',
    'REJECT_TIMING',
    'TECHNICAL_QUESTION',
    'BUDGET_QUESTION',
    'AUTHORITY_QUESTION',
    'COMPLIANCE_QUESTION'
  ),
  confidence_score_intent INT CHECK (confidence_score_intent >= 0 AND confidence_score_intent <= 100),
  objection_extracted BOOLEAN DEFAULT FALSE,
  objection_type ENUM(
    'BUDGET',
    'TIMING',
    'AUTHORITY',
    'COMPLIANCE_CONCERN',
    'COMPETITIVE_PREFERENCE',
    'INTEGRATION_CONCERN',
    'DATA_PRIVACY_CONCERN',
    'NOT_PRIORITY'
  ),
  objection_text_snippet TEXT,
  question_extracted BOOLEAN DEFAULT FALSE,
  question_topic ENUM(
    'DATA_ACCURACY',
    'PRICING',
    'IMPLEMENTATION_TIMELINE',
    'COMPLIANCE',
    'FERPA_PRIVACY',
    'INTEGRATION',
    'SCOPE',
    'ROI_MEASUREMENT',
    'COMPETITIVE_COMPARISON'
  ),
  question_text_snippet TEXT,
  feature_request_extracted BOOLEAN DEFAULT FALSE,
  feature_request_description TEXT,
  feature_request_priority_context TEXT,
  next_action_suggested ENUM(
    'SCHEDULE_DEMO',
    'SEND_CASE_STUDY',
    'CLARIFY_OBJECTION',
    'ESCALATE_EXECUTIVE',
    'DEFER_FOLLOW_UP',
    'REMOVE_FROM_SEQUENCE'
  ),
  response_required BOOLEAN DEFAULT FALSE,
  human_review_flag BOOLEAN DEFAULT FALSE,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (engagement_id) REFERENCES email_engagement(engagement_id),
  FOREIGN KEY (prospect_id) REFERENCES prospect_profile(prospect_id),
  INDEX idx_prospect_id (prospect_id),
  INDEX idx_response_date (response_date),
  INDEX idx_sentiment (response_sentiment_classification),
  INDEX idx_intent (response_intent_classification),
  INDEX idx_objection (objection_extracted),
  INDEX idx_question (question_extracted)
);
```

### SQL Implementation: Campaign Management Table

```sql
CREATE TABLE campaign (
  campaign_id VARCHAR(36) PRIMARY KEY,
  campaign_name VARCHAR(255) NOT NULL UNIQUE,
  campaign_type ENUM(
    'PILOT_RECRUITMENT',
    'PARTNERSHIP_EXPLORATION',
    'FEATURE_UPDATE',
    'CASE_STUDY_RECRUITMENT'
  ),
  campaign_start_date DATE NOT NULL,
  campaign_end_date DATE,
  target_prospect_count INT,
  sequence_template_used VARCHAR(100),
  sequence_step_count INT,
  targeting_criteria JSON,
  campaign_owner VARCHAR(255),
  campaign_status ENUM(
    'PLANNING',
    'ACTIVE',
    'PAUSED',
    'COMPLETED',
    'ARCHIVED'
  ) DEFAULT 'PLANNING',
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_campaign_status (campaign_status),
  INDEX idx_campaign_start_date (campaign_start_date)
);
```

---

## Email Response Parsing Logic

### Phase 1: Email Extraction & Preprocessing

**Trigger:** New email received in Gmail inbox with label "PROSPECT_RESPONSE"

**Steps:**
1. **Gmail Integration Hook**: Triggered on incoming email matching prospect email addresses
2. **Email Body Extraction**: Parse MIME message to extract plain text body
3. **Signature & Header Removal**: 
   - Remove standard email signatures (detection of "Best regards", "Sent from", etc.)
   - Remove forwarded/reply headers ("On [date], [person] wrote:")
   - Remove attachments metadata
4. **Whitespace Normalization**: Collapse multiple spaces, standardize line breaks
5. **Store Raw & Cleaned**: Save both raw (audit trail) and cleaned (for analysis) versions

**Implementation:**
```python
# Pseudo-code for email parsing logic
def parse_email_response(email_body_raw):
    # Remove signatures
    email_cleaned = remove_email_signatures(email_body_raw)
    
    # Remove forwarded headers
    email_cleaned = remove_forwarded_headers(email_cleaned)
    
    # Normalize whitespace
    email_cleaned = normalize_whitespace(email_cleaned)
    
    # Extract key metadata
    sender_email = extract_sender_email(email_metadata)
    receive_timestamp = extract_timestamp(email_metadata)
    
    return {
        'body_raw': email_body_raw,
        'body_cleaned': email_cleaned,
        'sender_email': sender_email,
        'receive_timestamp': receive_timestamp
    }
```

### Phase 2: Sentiment Classification

**Input:** Cleaned email body text  
**Output:** Sentiment classification + confidence score

**Classification Categories:**
- **POSITIVE_INTEREST** (confidence > 75%): Explicit interest in learning more, scheduling demo, or moving forward
- **NEUTRAL_INQUIRY** (confidence > 75%): Questions about product without clear interest signal
- **OBJECTION** (confidence > 70%): Concerns, hesitations, or rejection stated
- **NO_RESPONSE** (system classification): Email sent but no response received (timeout after 7 days)
- **UNSUBSCRIBE** (keyword match): Explicit request to be removed from communications
- **OUT_OF_OFFICE** (pattern match): Auto-reply indicating prospect unavailable

**Implementation Approach:**
1. **Keywords & Phrases**: Use labeled training dataset to identify high-confidence signals
2. **Negation Handling**: Account for "not interested" vs "not opposed"
3. **Context Window Analysis**: Analyze sentence-level sentiment in context

**Decision Tree:**

```
IF email_contains_keywords(['schedule', 'demo', 'call', 'interested', 'great', 'exactly what we need']):
  sentiment = 'POSITIVE_INTEREST'
  confidence = 85-95

ELSE IF email_contains_keywords(['unsubscribe', 'remove', 'no longer', 'stop']):
  sentiment = 'UNSUBSCRIBE'
  confidence = 95

ELSE IF email_contains_keywords(['currently', 'not right', 'not ready', 'expensive', 'too much', 'concern']):
  sentiment = 'OBJECTION'
  confidence = 70-85

ELSE IF email_contains_pattern(out_of_office_regex):
  sentiment = 'OUT_OF_OFFICE'
  confidence = 95

ELSE IF email_contains_questions AND NOT objection_detected:
  sentiment = 'NEUTRAL_INQUIRY'
  confidence = 70-80

ELSE:
  sentiment = 'NEUTRAL_INQUIRY'
  confidence = 50-60
  flag_for_human_review = TRUE
```

### Phase 3: Intent Classification

**Input:** Cleaned email body + sentiment classification  
**Output:** Intent classification + confidence score

**Classification Categories:**

| Intent | Trigger Keywords | Business Value |
|--------|-----------------|-----------------|
| INTERESTED_DEMO | "schedule", "call", "demo", "walk through" | Highest - Direct conversion signal |
| INTERESTED_DISCUSSION | "discuss", "talk", "meet", "learn more" | High - Exploratory momentum |
| REQUEST_INFO | "send", "information", "details", "specs" | Medium - Early funnel engagement |
| DEFER_DECISION | "future", "next quarter", "when budget allows" | Medium - Future opportunity |
| REJECT_PRODUCT | "not right for us", "wrong solution", "competitive" | Low - Closed opportunity |
| REJECT_TIMING | "not ready", "bad timing", "wait", "next year" | Low - Timing issue |
| TECHNICAL_QUESTION | "how does", "compatible", "integrations", "API" | Medium - Technical fit validation needed |
| BUDGET_QUESTION | "cost", "pricing", "ROI", "investment" | Medium - Financial validation needed |
| AUTHORITY_QUESTION | "need approval", "require sign-off", "stakeholders" | Medium - Process validation needed |
| COMPLIANCE_QUESTION | "FERPA", "privacy", "data security", "compliant" | High - Compliance concern critical |

### Phase 4: Objection Extraction

**Input:** Email response classified as OBJECTION  
**Output:** Objection type + quoted text snippet

**Objection Classification:**

```
BUDGET: "cost", "expensive", "price", "budget", "investment", "afford"
  → Business impact: Pricing strategy refinement needed
  
TIMING: "not now", "wait", "future", "next", "bad time", "hold off"
  → Business impact: Nurture sequence needed
  
AUTHORITY: "need approval", "require sign-off", "board decision", "CFO"
  → Business impact: Multi-threaded outreach needed
  
COMPLIANCE_CONCERN: "FERPA", "privacy", "security", "compliant", "audit"
  → Business impact: Product/messaging update needed
  
COMPETITIVE_PREFERENCE: "using", "prefer", "vendor", "competitor", "better fit"
  → Business impact: Competitive positioning analysis
  
INTEGRATION_CONCERN: "system", "integrate", "existing", "compatibility", "connect"
  → Business impact: Integration roadmap priority
  
DATA_PRIVACY_CONCERN: "data", "sensitive", "confidential", "concern"
  → Business impact: Privacy documentation refinement
  
NOT_PRIORITY: "focus", "priority", "backlog", "not urgent"
  → Business impact: Long-term nurture sequence
```

### Phase 5: Question & Feature Request Extraction

**Input:** Email response text  
**Output:** Question classification + feature request description

**Question Topic Extraction:**

| Topic | Keywords | Response Action |
|-------|----------|-----------------|
| DATA_ACCURACY | "accurate", "verify", "validated", "reliability" | Send case studies with accuracy metrics |
| PRICING | "cost", "pricing", "ROI", "investment calculator" | Send pricing guide + ROI calculator |
| IMPLEMENTATION_TIMELINE | "time", "how long", "deployment", "launch" | Send implementation roadmap |
| COMPLIANCE | "regulations", "policy", "allowed", "legal" | Send compliance documentation |
| FERPA_PRIVACY | "FERPA", "privacy", "regulations", "protected" | Send FERPA compliance brief |
| INTEGRATION | "system", "connect", "API", "compatible" | Send integration documentation |
| SCOPE | "what does", "covers", "includes", "alumni definition" | Send product feature matrix |
| ROI_MEASUREMENT | "measure", "impact", "outcomes", "effectiveness" | Send ROI calculation template |
| COMPETITIVE_COMPARISON | "vs", "compared to", "difference from", "competitive" | Send competitive comparison |

**Feature Request Extraction:**

Pattern: "would like", "could you", "if you added", "need to", "should include"

Extract full phrase and store context:
- Associated priority keywords: "critical", "important", "nice to have", "everyone asks for"
- Context: Is this blocking their adoption decision?
- Frequency: Track if multiple prospects request same feature

---

## Engagement Scoring Methodology

### Overall Engagement Score (0-100)

**Formula:**
```
engagement_score = (
  (email_open_weight × open_indicator) +
  (link_click_weight × click_indicator) +
  (reply_weight × reply_indicator) +
  (sentiment_weight × sentiment_score) +
  (intent_weight × intent_score)
)

where:
  email_open_weight = 15
  link_click_weight = 20
  reply_weight = 30
  sentiment_weight = 20
  intent_weight = 15
```

### Component Scores

**Email Open Indicator (0-15 points):**
- No open = 0 points
- Opened within 24 hours = 10 points
- Opened within 24-48 hours = 7 points
- Opened after 48 hours = 5 points
- Multiple opens (2+) = +5 bonus points (max 15)

**Link Click Indicator (0-20 points):**
- No click = 0 points
- Scheduling link clicked = 20 points
- Website link clicked = 12 points
- Sample data link clicked = 10 points
- Other link clicked = 8 points

**Reply Indicator (0-30 points):**
- No reply = 0 points
- Replied with POSITIVE_INTEREST = 30 points
- Replied with NEUTRAL_INQUIRY = 15 points
- Replied with OBJECTION = 10 points (objection = engagement)
- Replied with UNSUBSCRIBE = -30 points (remove from sequence)

**Sentiment Score (0-20 points):**
- POSITIVE_INTEREST = 20 points
- NEUTRAL_INQUIRY = 10 points
- OBJECTION = 8 points
- NO_RESPONSE = 0 points
- UNSUBSCRIBE = -20 points
- OUT_OF_OFFICE = 0 points

**Intent Score (0-15 points):**
- INTERESTED_DEMO = 15 points
- INTERESTED_DISCUSSION = 12 points
- REQUEST_INFO = 8 points
- DEFER_DECISION = 6 points
- TECHNICAL_QUESTION = 7 points
- BUDGET_QUESTION = 7 points
- COMPLIANCE_QUESTION = 10 points (high priority)
- AUTHORITY_QUESTION = 6 points
- REJECT_PRODUCT = -15 points
- REJECT_TIMING = 4 points

**Prospect Lifecycle Stage (Based on Score):**

| Score Range | Stage | Recommended Action |
|-------------|-------|-------------------|
| 70-100 | QUALIFIED_OPPORTUNITY | Schedule discovery call, assign to AE |
| 45-69 | ACTIVE_ENGAGEMENT | Continue nurture sequence, send case studies |
| 25-44 | EARLY_INTEREST | Complete follow-up sequence, monitor for signals |
| 10-24 | LOW_ENGAGEMENT | Long-term nurture, remove from immediate sequence |
| 0-9 | NO_ENGAGEMENT | Archive or mark for reactivation in 6 months |
| < 0 | UNSUBSCRIBED | Remove from all sequences |

---

## Data Quality & Validation

### Email Address Validation

**Before Add to Database:**
1. Format validation: RFC 5321 compliance check
2. Domain existence: Verify MX records exist
3. Apollo confidence score: Must be >= 85 for new prospects
4. Institutional email: Verify matches institution domain (e.g., @northwestern.edu)

**Duplicate Detection:**
- Fuzzy match on prospect name + institution
- Exact match on prospect email (unique constraint)
- Cross-reference with Apollo enrichment data

### Response Classification Quality Metrics

**Confidence Thresholds:**
- Sentiment classification: >= 75% confidence accepted as automated
- Intent classification: >= 75% confidence accepted as automated
- Objection extraction: >= 80% confidence accepted as automated
- Question extraction: >= 80% confidence accepted as automated

**Human Review Triggers:**
- Sentiment confidence < 75%
- Intent confidence < 75%
- Objection/question extracted but confidence < 80%
- Conflicting classifications (e.g., positive_interest + objection co-detected)

**Quality Review Process:**
1. Weekly review of all flagged responses (confidence < thresholds)
2. Feedback loop: Manual classifications used to retrain models
3. Monthly accuracy audit: Sample 5% of all classifications for human verification

### Data Completeness Standards

| Field | Required | Validation |
|-------|----------|-----------|
| prospect_name | YES | Not null |
| prospect_email | YES | RFC 5321 compliant, unique |
| institution_name | YES | Not null, matched to IPEDS |
| email_send_date | YES | Valid date >= campaign_start_date |
| email_tracking_id | YES | Unique identifier |
| response_body_cleaned | NO if no response | Text >= 10 characters if response received |
| sentiment_classification | YES if response | Must be one of enum values |
| intent_classification | YES if reply received | Must be one of enum values |

---

## Integration Architecture

### Gmail Integration for Response Parsing

**Architecture: Event-Driven Processing**

```
Gmail Inbox (PROSPECT_RESPONSE label)
    ↓
[Gmail API Webhook] - New email event
    ↓
[Message Parser Service]
    - Extract email body, sender, timestamp
    - Remove signatures/headers
    - Store raw email
    ↓
[Response Classification Service]
    - Sentiment analysis (ML model)
    - Intent classification (ML model)
    - Objection extraction (NLP)
    - Question extraction (NLP)
    ↓
[Database Writer Service]
    - Create email_response record
    - Update email_engagement record
    - Flag for human review if needed
    ↓
[Notification Service]
    - Alert sales team of POSITIVE_INTEREST
    - Alert product team of feature requests
    - Alert ops team of compliance questions
    ↓
[Analytics & Reporting]
    - Update weekly metrics
    - Calculate engagement scores
    - Populate dashboards
```

### Implementation Requirements

**Gmail API Setup:**
- Scope: `gmail.readonly` for message access
- Label: Create "PROSPECT_RESPONSE" label for auto-organizing replies
- Watch mechanism: `gmail.users.watch` for real-time push notifications

**Message Parsing Library:**
```python
from email.parser import BytesParser
from email import policy

def extract_email_content(message_id):
    """Extract email body from Gmail message"""
    message = service.users().messages().get(
        userId='me',
        id=message_id,
        format='full'
    ).execute()
    
    payload = message['payload']
    body = ''
    
    if 'parts' in payload:
        for part in payload['parts']:
            if part['mimeType'] == 'text/plain':
                data = part['body'].get('data', '')
                body = base64.urlsafe_b64decode(data).decode('utf-8')
    else:
        data = payload['body'].get('data', '')
        body = base64.urlsafe_b64decode(data).decode('utf-8')
    
    return body
```

**ML Models for Classification:**

1. **Sentiment Classification**: Pre-trained transformer model (e.g., DistilBERT fine-tuned on email classification)
2. **Intent Classification**: Custom FastText model trained on labeled prospect emails
3. **NLP Extraction**: spaCy for named entity recognition + custom rule-based patterns

---

## Reporting & Analytics Framework

### Weekly Engagement Report Template

See separate document: `weekly_engagement_report_template.md`

### Real-Time Dashboard Metrics

**Campaign-Level KPIs:**
- Total outreach volume (emails sent this campaign)
- Open rate (opens / sends)
- Click-through rate (clicks / opens)
- Reply rate (replies / sends)
- Positive reply rate (positive_interest replies / total replies)
- Conversion to call rate (calls_scheduled / sends)
- Average engagement score

**Prospect-Level Scoring:**
- Ranked list by engagement score (descending)
- Filtered by lifecycle stage
- Objection heatmap (most common objections)
- Question heatmap (most common questions)

**Funnel Analytics:**
- Prospect count by stage (Active → Qualified → Pilot Engaged)
- Conversion rates between stages
- Velocity (days from send to reply)

---

## Next Steps & Roadmap

**Phase 1 (Complete):** Database schema definition and email parsing logic documentation

**Phase 2 (Pending):** 
- Implement database tables in production environment
- Deploy Gmail integration hooks
- Train ML models on historical email data (retrospective labeling)

**Phase 3 (Pending):**
- Weekly automated report generation
- Real-time dashboard deployment
- Sales team training on engagement scoring system

**Phase 4 (Future):**
- Predictive models: likelihood to convert to pilot based on early engagement signals
- Automated objection response generation
- Cross-institutional benchmarking (comparing response rates by institution type)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 4/7/2026 | Business Dev Team | Initial schema definition, parsing logic, engagement scoring |
| | | | |

**Last reviewed:** April 7, 2026  
**Next review:** April 21, 2026 (post-first campaign cycle)
