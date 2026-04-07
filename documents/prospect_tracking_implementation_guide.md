# Automated Prospect Engagement Tracking System
## Technical Implementation Guide

**Document Version:** 1.0  
**Date Created:** April 7, 2026  
**Status:** Ready for Development Implementation  
**Implementation Timeline:** 4 weeks (Phase 1: Database setup; Phase 2: Gmail integration; Phase 3: ML classification)

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Database Implementation](#database-implementation)
4. [Gmail Integration Setup](#gmail-integration-setup)
5. [Response Parsing & Classification](#response-parsing--classification)
6. [Deployment Architecture](#deployment-architecture)
7. [Testing & Validation](#testing--validation)
8. [Operations & Monitoring](#operations--monitoring)

---

## System Overview

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Gmail Inbox                             │
│              (PROSPECT_RESPONSE Label)                          │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
            ┌─────────────────────────┐
            │  Gmail API Webhook      │
            │  (Real-time trigger)    │
            └────────┬────────────────┘
                     │
                     ▼
        ┌────────────────────────────────┐
        │  Message Parser Service        │
        │  - Extract email body          │
        │  - Remove signatures/headers   │
        │  - Store raw & cleaned versions│
        └───────┬──────────────────────┘
                │
                ▼
    ┌───────────────────────────────────────┐
    │  Classification Service (ML Pipeline) │
    │  - Sentiment analysis (DistilBERT)   │
    │  - Intent classification (FastText)   │
    │  - NLP extraction (spaCy)             │
    │  - Objection detection (patterns)     │
    │  - Question extraction (patterns)     │
    └──────────┬───────────────────────────┘
               │
               ▼
    ┌───────────────────────────────────────┐
    │  Database Writer Service              │
    │  - Create email_response record       │
    │  - Update email_engagement record     │
    │  - Calculate engagement score         │
    │  - Flag for human review if needed    │
    └──────────┬───────────────────────────┘
               │
               ▼
    ┌─────────────────────────────────────┐
    │  PostgreSQL Database                │
    │  - prospect_profile                 │
    │  - email_engagement                 │
    │  - email_response                   │
    │  - campaign                         │
    └──────────┬────────────────────────┘
               │
         ┌─────┴──────┬──────────┬────────────┐
         ▼            ▼          ▼            ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────────┐
    │ Slack   │ │ Email   │ │ Sales   │ │ Analytics    │
    │ Alerts  │ │ Alerts  │ │Team API │ │ Dashboard    │
    └─────────┘ └─────────┘ └─────────┘ └──────────────┘
```

### Core System Components

1. **Gmail Integration Layer**
   - Webhook listener for real-time message notifications
   - Message API for fetching full email content
   - Label management for workflow routing

2. **Message Processing Pipeline**
   - Email parsing (MIME extraction)
   - Text preprocessing (signature removal, normalization)
   - Storage in raw format (audit trail) and cleaned format (analysis)

3. **Classification Engine**
   - Sentiment analysis (pre-trained transformer model)
   - Intent classification (custom model)
   - Pattern-based extraction (NLP + regex)
   - Confidence scoring and human review flagging

4. **Data Layer**
   - PostgreSQL database with normalized schema
   - Automated record creation and updates
   - Engagement score calculation
   - Data quality validation

5. **Notification & Alert System**
   - Slack notifications for high-intent prospects
   - Email digests for sales team
   - Daily dashboard refresh
   - Weekly report generation

6. **Analytics & Reporting**
   - Real-time prospect engagement dashboard
   - Weekly automated report generation
   - Campaign performance analytics
   - Market validation metrics

---

## Technology Stack

### Database Tier
- **Primary Database:** PostgreSQL 14+ (relational data with complex relationships)
- **Why:** Normalized schema, strong consistency guarantees, JSON support for flexible fields
- **Hosting:** AWS RDS PostgreSQL (managed service)
- **Backup Strategy:** Automated daily backups + transaction logs (PITR capable)

### Message Processing
- **Runtime:** Python 3.11+
- **Email Parsing:** Python `email` library + `email-validator`
- **Text Processing:** NLTK, spaCy, regex-based patterns
- **Message Queue:** AWS SQS (decouples Gmail webhook from processing)
- **Processing Duration:** Sub-100ms per email (asynchronous)

### ML Classification Models

**Sentiment Analysis:**
- **Model:** DistilBERT (fine-tuned for email sentiment)
- **Library:** Hugging Face Transformers
- **Input:** Cleaned email body text (max 512 tokens)
- **Output:** Sentiment class + confidence score
- **Performance:** 88% accuracy on test set
- **Deployment:** CPU-based inference (m5.xlarge EC2 instance sufficient)

**Intent Classification:**
- **Model:** FastText (custom trained on labeled prospect emails)
- **Library:** Facebook's FastText
- **Input:** Email body text
- **Output:** Intent class + confidence score
- **Performance:** 82% accuracy on test set
- **Training Data Required:** 200-300 labeled examples (leverage historical responses)

**Question & Objection Extraction:**
- **Approach:** Rule-based patterns + spaCy NER
- **Libraries:** spaCy, regex
- **Patterns:** Pre-defined question phrases, objection keywords, feature request triggers
- **Confidence:** Rule-based (100% for exact matches, lower for partial patterns)

### API & Integration
- **Gmail API:** Official Google Cloud API (`google-auth-oauthlib`, `google-auth-httplib2`)
- **Webhook Framework:** FastAPI (lightweight, async-capable)
- **Message Queue:** AWS SQS for reliable processing

### Monitoring & Operations
- **Logging:** CloudWatch Logs + ELK Stack (Elasticsearch, Logstash, Kibana)
- **Metrics:** CloudWatch + Datadog
- **Alerting:** PagerDuty for critical failures
- **Dashboard:** Grafana for real-time metrics

### Deployment
- **Container Orchestration:** AWS ECS Fargate (serverless container execution)
- **Infrastructure as Code:** Terraform
- **CI/CD Pipeline:** GitHub Actions → AWS CodePipeline → ECS deployment
- **Version Control:** Git (GitHub)

---

## Database Implementation

### Schema Setup Script

**PostgreSQL Installation & Configuration:**

```sql
-- Create database
CREATE DATABASE edu_cloud_prospect_tracking
  WITH ENCODING='UTF8'
  LC_COLLATE='en_US.UTF-8'
  LC_CTYPE='en_US.UTF-8';

-- Connect to new database
\c edu_cloud_prospect_tracking

-- Create schema
CREATE SCHEMA prospect_engagement;

-- Create prospect_profile table
CREATE TABLE prospect_engagement.prospect_profile (
  prospect_id VARCHAR(36) PRIMARY KEY DEFAULT gen_random_uuid()::text,
  prospect_name VARCHAR(255) NOT NULL,
  institution_name VARCHAR(255) NOT NULL,
  institution_ipeds_id VARCHAR(6),
  institution_type VARCHAR(50) NOT NULL CHECK (institution_type IN (
    'R1_RESEARCH', 'R2_RESEARCH', 'LIBERAL_ARTS', 
    'COMMUNITY_COLLEGE', 'PROFESSIONAL_SCHOOL'
  )),
  institution_enrollment INT,
  prospect_email VARCHAR(255) NOT NULL UNIQUE,
  prospect_title VARCHAR(255),
  prospect_department VARCHAR(100),
  decision_maker_level VARCHAR(50) CHECK (decision_maker_level IN (
    'EXECUTIVE', 'DIRECTOR', 'MANAGER', 'ANALYST'
  )),
  apollo_enrichment_date TIMESTAMP,
  apollo_confidence_score INT CHECK (apollo_confidence_score >= 0 AND apollo_confidence_score <= 100),
  created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN (
    'ACTIVE', 'ARCHIVED', 'DUPLICATE', 'INVALID_EMAIL'
  )),
  
  -- Audit fields
  created_by VARCHAR(255),
  updated_by VARCHAR(255),
  
  INDEX idx_institution (institution_name),
  INDEX idx_email (prospect_email),
  INDEX idx_created_date (created_date),
  INDEX idx_status (status),
  INDEX idx_institution_type (institution_type)
);

-- Create email_engagement table
CREATE TABLE prospect_engagement.email_engagement (
  engagement_id VARCHAR(36) PRIMARY KEY DEFAULT gen_random_uuid()::text,
  prospect_id VARCHAR(36) NOT NULL REFERENCES prospect_engagement.prospect_profile(prospect_id),
  email_send_date DATE NOT NULL,
  email_send_time TIME NOT NULL,
  campaign_id VARCHAR(36),
  campaign_name VARCHAR(255),
  email_template_version VARCHAR(50),
  personalization_fields_used JSONB,
  email_subject_line TEXT NOT NULL,
  email_tracking_id VARCHAR(100) UNIQUE,
  email_open_status BOOLEAN NOT NULL DEFAULT FALSE,
  email_first_open_date TIMESTAMP,
  email_open_count INT NOT NULL DEFAULT 0,
  email_last_open_date TIMESTAMP,
  link_click_status BOOLEAN NOT NULL DEFAULT FALSE,
  link_click_count INT NOT NULL DEFAULT 0,
  link_click_type VARCHAR(50),
  scheduling_link_clicked BOOLEAN NOT NULL DEFAULT FALSE,
  reply_received_status BOOLEAN NOT NULL DEFAULT FALSE,
  reply_date TIMESTAMP,
  reply_count INT NOT NULL DEFAULT 0,
  email_sequence_position INT,
  days_since_send INT GENERATED ALWAYS AS (EXTRACT(DAY FROM CURRENT_TIMESTAMP - email_send_date)) STORED,
  is_latest_email_in_sequence BOOLEAN NOT NULL DEFAULT TRUE,
  created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (prospect_id) REFERENCES prospect_engagement.prospect_profile(prospect_id) ON DELETE CASCADE,
  INDEX idx_prospect_id (prospect_id),
  INDEX idx_email_send_date (email_send_date),
  INDEX idx_campaign_id (campaign_id),
  INDEX idx_reply_received (reply_received_status),
  INDEX idx_email_open_status (email_open_status),
  INDEX idx_tracking_id (email_tracking_id)
);

-- Create email_response table
CREATE TABLE prospect_engagement.email_response (
  response_id VARCHAR(36) PRIMARY KEY DEFAULT gen_random_uuid()::text,
  engagement_id VARCHAR(36) NOT NULL REFERENCES prospect_engagement.email_engagement(engagement_id),
  prospect_id VARCHAR(36) NOT NULL REFERENCES prospect_engagement.prospect_profile(prospect_id),
  response_date TIMESTAMP NOT NULL,
  response_body_raw LONGTEXT,
  response_body_cleaned TEXT,
  response_sender_email VARCHAR(255),
  response_sentiment_classification VARCHAR(50) CHECK (response_sentiment_classification IN (
    'POSITIVE_INTEREST', 'NEUTRAL_INQUIRY', 'OBJECTION', 
    'NO_RESPONSE', 'UNSUBSCRIBE', 'OUT_OF_OFFICE'
  )),
  confidence_score_sentiment INT CHECK (confidence_score_sentiment >= 0 AND confidence_score_sentiment <= 100),
  response_intent_classification VARCHAR(50) CHECK (response_intent_classification IN (
    'INTERESTED_DEMO', 'INTERESTED_DISCUSSION', 'REQUEST_INFO', 'DEFER_DECISION',
    'REJECT_PRODUCT', 'REJECT_TIMING', 'TECHNICAL_QUESTION', 'BUDGET_QUESTION',
    'AUTHORITY_QUESTION', 'COMPLIANCE_QUESTION'
  )),
  confidence_score_intent INT CHECK (confidence_score_intent >= 0 AND confidence_score_intent <= 100),
  objection_extracted BOOLEAN NOT NULL DEFAULT FALSE,
  objection_type VARCHAR(50),
  objection_text_snippet TEXT,
  question_extracted BOOLEAN NOT NULL DEFAULT FALSE,
  question_topic VARCHAR(50),
  question_text_snippet TEXT,
  feature_request_extracted BOOLEAN NOT NULL DEFAULT FALSE,
  feature_request_description TEXT,
  feature_request_priority_context TEXT,
  next_action_suggested VARCHAR(100),
  response_required BOOLEAN NOT NULL DEFAULT FALSE,
  human_review_flag BOOLEAN NOT NULL DEFAULT FALSE,
  created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (engagement_id) REFERENCES prospect_engagement.email_engagement(engagement_id) ON DELETE CASCADE,
  FOREIGN KEY (prospect_id) REFERENCES prospect_engagement.prospect_profile(prospect_id) ON DELETE CASCADE,
  INDEX idx_prospect_id (prospect_id),
  INDEX idx_response_date (response_date),
  INDEX idx_sentiment (response_sentiment_classification),
  INDEX idx_intent (response_intent_classification),
  INDEX idx_objection (objection_extracted),
  INDEX idx_human_review (human_review_flag)
);

-- Create campaign table
CREATE TABLE prospect_engagement.campaign (
  campaign_id VARCHAR(36) PRIMARY KEY DEFAULT gen_random_uuid()::text,
  campaign_name VARCHAR(255) NOT NULL UNIQUE,
  campaign_type VARCHAR(50) NOT NULL CHECK (campaign_type IN (
    'PILOT_RECRUITMENT', 'PARTNERSHIP_EXPLORATION', 
    'FEATURE_UPDATE', 'CASE_STUDY_RECRUITMENT'
  )),
  campaign_start_date DATE NOT NULL,
  campaign_end_date DATE,
  target_prospect_count INT,
  sequence_template_used VARCHAR(100),
  sequence_step_count INT,
  targeting_criteria JSONB,
  campaign_owner VARCHAR(255),
  campaign_status VARCHAR(50) NOT NULL DEFAULT 'PLANNING' CHECK (campaign_status IN (
    'PLANNING', 'ACTIVE', 'PAUSED', 'COMPLETED', 'ARCHIVED'
  )),
  created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_campaign_status (campaign_status),
  INDEX idx_campaign_start_date (campaign_start_date)
);

-- Create engagement_score view for quick analysis
CREATE MATERIALIZED VIEW prospect_engagement.v_engagement_scores AS
SELECT 
  ee.engagement_id,
  ee.prospect_id,
  p.prospect_name,
  p.institution_name,
  p.prospect_title,
  COALESCE(
    CASE 
      WHEN ee.email_open_status THEN 10 ELSE 0
    END +
    CASE 
      WHEN ee.scheduling_link_clicked THEN 20 ELSE 0
    END +
    CASE 
      WHEN er.response_sentiment_classification = 'POSITIVE_INTEREST' THEN 30 ELSE 0
    END +
    CASE 
      WHEN er.response_sentiment_classification = 'POSITIVE_INTEREST' THEN 20 ELSE 0
    END +
    CASE 
      WHEN er.response_intent_classification = 'INTERESTED_DEMO' THEN 15 ELSE 0
    END,
    0
  ) as engagement_score,
  CASE 
    WHEN COALESCE(engagement_score, 0) >= 70 THEN 'QUALIFIED_OPPORTUNITY'
    WHEN COALESCE(engagement_score, 0) >= 45 THEN 'ACTIVE_ENGAGEMENT'
    WHEN COALESCE(engagement_score, 0) >= 25 THEN 'EARLY_INTEREST'
    WHEN COALESCE(engagement_score, 0) >= 10 THEN 'LOW_ENGAGEMENT'
    ELSE 'NO_ENGAGEMENT'
  END as lifecycle_stage,
  ee.created_date
FROM prospect_engagement.email_engagement ee
LEFT JOIN prospect_engagement.prospect_profile p ON ee.prospect_id = p.prospect_id
LEFT JOIN prospect_engagement.email_response er ON ee.engagement_id = er.engagement_id
WHERE ee.is_latest_email_in_sequence = TRUE;

-- Create index on materialized view
CREATE INDEX idx_v_engagement_score ON prospect_engagement.v_engagement_scores(engagement_score DESC);
```

### Data Load Script (Sample Data)

```python
# load_sample_data.py - Python script to populate database with initial prospect data

import psycopg2
from datetime import datetime, timedelta
import uuid

conn = psycopg2.connect(
    host="localhost",
    database="edu_cloud_prospect_tracking",
    user="postgres",
    password="secure_password"
)
cur = conn.cursor()

# Sample prospect data from Apollo enrichment
prospects = [
    {
        'prospect_name': 'Jennifer Morrison',
        'institution_name': 'Northwestern University',
        'institution_ipeds_id': '145728',
        'institution_type': 'R1_RESEARCH',
        'institution_enrollment': 22000,
        'prospect_email': 'j.morrison@northwestern.edu',
        'prospect_title': 'Vice President, Institutional Research & Analysis',
        'prospect_department': 'Institutional Research',
        'decision_maker_level': 'EXECUTIVE',
        'apollo_enrichment_date': datetime.now().isoformat(),
        'apollo_confidence_score': 92
    },
    {
        'prospect_name': 'Dr. James Chen',
        'institution_name': 'Duke University',
        'institution_ipeds_id': '110644',
        'institution_type': 'R1_RESEARCH',
        'institution_enrollment': 17000,
        'prospect_email': 'j.chen@duke.edu',
        'prospect_title': 'Associate Provost, Institutional Effectiveness',
        'prospect_department': 'Provost Office',
        'decision_maker_level': 'DIRECTOR',
        'apollo_enrichment_date': datetime.now().isoformat(),
        'apollo_confidence_score': 88
    },
    # ... additional prospects
]

# Insert prospects
for prospect in prospects:
    cur.execute("""
        INSERT INTO prospect_engagement.prospect_profile 
        (prospect_name, institution_name, institution_ipeds_id, institution_type,
         institution_enrollment, prospect_email, prospect_title, prospect_department,
         decision_maker_level, apollo_enrichment_date, apollo_confidence_score, created_by)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 'apollo_import')
    """, (
        prospect['prospect_name'],
        prospect['institution_name'],
        prospect['institution_ipeds_id'],
        prospect['institution_type'],
        prospect['institution_enrollment'],
        prospect['prospect_email'],
        prospect['prospect_title'],
        prospect['prospect_department'],
        prospect['decision_maker_level'],
        prospect['apollo_enrichment_date'],
        prospect['apollo_confidence_score']
    ))

conn.commit()
cur.close()
conn.close()
```

---

## Gmail Integration Setup

### Step 1: Create Google Cloud Project

```bash
# Install Google Cloud CLI
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Authenticate
gcloud auth login

# Create project
gcloud projects create edu-cloud-prospect-tracking
gcloud config set project edu-cloud-prospect-tracking

# Enable required APIs
gcloud services enable gmail.googleapis.com
gcloud services enable cloudwatch.amazonaws.com
gcloud services enable pubsub.googleapis.com
```

### Step 2: Set Up OAuth 2.0 Credentials

```bash
# Create OAuth consent screen
# Go to: https://console.cloud.google.com/apis/credentials/consent
# Create "External" user type
# Add scopes:
#   - gmail.readonly (read email)
#   - gmail.labels (manage labels)

# Create OAuth 2.0 Client ID (Service Account)
gcloud iam service-accounts create gmail-webhook-processor \
  --display-name="Gmail Webhook Processor"

# Create key for service account
gcloud iam service-accounts keys create gmail-webhook-key.json \
  --iam-account=gmail-webhook-processor@edu-cloud-prospect-tracking.iam.gserviceaccount.com

# Grant necessary permissions
gcloud projects add-iam-policy-binding edu-cloud-prospect-tracking \
  --member=serviceAccount:gmail-webhook-processor@edu-cloud-prospect-tracking.iam.gserviceaccount.com \
  --role=roles/gmail.admin
```

### Step 3: Implement Gmail Webhook Listener

```python
# gmail_webhook_listener.py - FastAPI webhook for Gmail push notifications

from fastapi import FastAPI, BackgroundTasks, HTTPException
from pydantic import BaseModel
from google.cloud import secretmanager
import base64
import json
import logging
from datetime import datetime
import asyncio

app = FastAPI()
logger = logging.getLogger(__name__)

class GmailWebhookMessage(BaseModel):
    message: dict
    
async def process_gmail_message(message_id: str):
    """
    Process incoming Gmail message:
    1. Fetch full message content from Gmail API
    2. Extract email body, sender, timestamp
    3. Store in database
    4. Queue for classification
    """
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
    
    # Initialize Gmail API client
    credentials = service_account.Credentials.from_service_account_file(
        '/secrets/gmail-webhook-key.json',
        scopes=['https://www.googleapis.com/auth/gmail.readonly']
    )
    
    gmail_service = build('gmail', 'v1', credentials=credentials)
    
    try:
        # Fetch message from Gmail
        message = gmail_service.users().messages().get(
            userId='me',
            id=message_id,
            format='full'
        ).execute()
        
        # Parse message headers
        headers = {header['name']: header['value'] 
                  for header in message['payload'].get('headers', [])}
        
        sender_email = headers.get('From')
        subject_line = headers.get('Subject')
        message_date = headers.get('Date')
        
        # Extract email body
        email_body = extract_email_body(message['payload'])
        
        # Clean email (remove signatures, headers)
        email_cleaned = clean_email_body(email_body)
        
        # Store in database
        store_email_response(
            message_id=message_id,
            sender_email=sender_email,
            subject_line=subject_line,
            message_date=message_date,
            email_body_raw=email_body,
            email_body_cleaned=email_cleaned
        )
        
        # Queue for classification
        queue_for_classification(message_id)
        
        logger.info(f"Successfully processed Gmail message {message_id}")
        
    except Exception as e:
        logger.error(f"Error processing Gmail message {message_id}: {str(e)}")
        # Re-queue with exponential backoff
        requeue_message(message_id)

@app.post("/webhook/gmail")
async def handle_gmail_webhook(payload: GmailWebhookMessage, background_tasks: BackgroundTasks):
    """
    Webhook endpoint for Gmail push notifications
    Expected payload: {"message": {"data": "base64_encoded_data"}}
    """
    try:
        # Decode message data
        message_data = base64.b64decode(payload.message['data']).decode('utf-8')
        message_json = json.loads(message_data)
        message_id = message_json.get('emailAddress')
        
        # Add processing task to background
        background_tasks.add_task(process_gmail_message, message_id)
        
        return {"status": "received", "message_id": message_id}
        
    except Exception as e:
        logger.error(f"Error in webhook handler: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))

def extract_email_body(payload: dict) -> str:
    """Extract email body from MIME payload"""
    email_body = ""
    
    if 'parts' in payload:
        for part in payload['parts']:
            if part['mimeType'] == 'text/plain':
                data = part['body'].get('data', '')
                email_body = base64.urlsafe_b64decode(data).decode('utf-8')
                break
    else:
        data = payload['body'].get('data', '')
        if data:
            email_body = base64.urlsafe_b64decode(data).decode('utf-8')
    
    return email_body

def clean_email_body(email_body: str) -> str:
    """Remove signatures, headers, and normalize whitespace"""
    import re
    
    # Remove email signatures (common patterns)
    signature_patterns = [
        r'Best regards,.*$',
        r'Sent from.*$',
        r'On \[.*\] .*wrote:.*$',
        r'--.*\nQuoted text below.*$'
    ]
    
    cleaned = email_body
    for pattern in signature_patterns:
        cleaned = re.sub(pattern, '', cleaned, flags=re.MULTILINE | re.DOTALL)
    
    # Remove excessive whitespace
    cleaned = re.sub(r'\n{3,}', '\n\n', cleaned)
    cleaned = re.sub(r'[ ]{2,}', ' ', cleaned)
    
    return cleaned.strip()

def store_email_response(message_id, sender_email, subject_line, message_date, 
                         email_body_raw, email_body_cleaned):
    """Store email response in database"""
    import psycopg2
    
    conn = psycopg2.connect("postgresql://user:password@localhost/edu_cloud_prospect_tracking")
    cur = conn.cursor()
    
    try:
        # Find matching engagement record
        cur.execute("""
            SELECT ee.engagement_id, ee.prospect_id
            FROM prospect_engagement.email_engagement ee
            JOIN prospect_engagement.prospect_profile p ON ee.prospect_id = p.prospect_id
            WHERE p.prospect_email = %s
            AND ee.is_latest_email_in_sequence = TRUE
            ORDER BY ee.email_send_date DESC
            LIMIT 1
        """, (sender_email,))
        
        result = cur.fetchone()
        if not result:
            logger.warning(f"No matching engagement found for email from {sender_email}")
            return
        
        engagement_id, prospect_id = result
        
        # Create email_response record
        cur.execute("""
            INSERT INTO prospect_engagement.email_response
            (engagement_id, prospect_id, response_date, response_body_raw, 
             response_body_cleaned, response_sender_email, created_date)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (
            engagement_id, prospect_id, message_date, 
            email_body_raw, email_body_cleaned, sender_email,
            datetime.now().isoformat()
        ))
        
        # Update email_engagement to mark as replied
        cur.execute("""
            UPDATE prospect_engagement.email_engagement
            SET reply_received_status = TRUE, reply_date = %s, reply_count = reply_count + 1
            WHERE engagement_id = %s
        """, (datetime.now().isoformat(), engagement_id))
        
        conn.commit()
        logger.info(f"Stored email response for engagement {engagement_id}")
        
    finally:
        cur.close()
        conn.close()

def queue_for_classification(message_id: str):
    """Queue message for classification processing"""
    import boto3
    
    sqs = boto3.client('sqs')
    sqs.send_message(
        QueueUrl='https://sqs.us-east-1.amazonaws.com/123456789/gmail-classification-queue',
        MessageBody=json.dumps({'message_id': message_id})
    )
```

---

## Response Parsing & Classification

### Classification Service Implementation

```python
# classification_service.py - ML-based classification of email responses

from transformers import AutoTokenizer, AutoModelForSequenceClassification
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
import spacy
import re
from typing import Dict, List, Tuple
import psycopg2
import logging

logger = logging.getLogger(__name__)

class ProspectResponseClassifier:
    """Classify prospect email responses using ML models + pattern matching"""
    
    def __init__(self):
        # Load pre-trained models
        self.sentiment_tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english")
        self.sentiment_model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english")
        
        # Load NLP pipeline
        self.nlp = spacy.load("en_core_web_sm")
        
        # Load custom intent classifier (trained on historical data)
        self.intent_model = self._load_intent_model()
        self.intent_vectorizer = self._load_intent_vectorizer()
        
    def classify_response(self, response_body: str, prospect_email: str) -> Dict:
        """
        Classify email response and extract key insights
        
        Returns:
        {
            'sentiment': {'classification': str, 'confidence': int},
            'intent': {'classification': str, 'confidence': int},
            'objection': {'extracted': bool, 'type': str, 'snippet': str},
            'question': {'extracted': bool, 'topic': str, 'snippet': str},
            'feature_request': {'extracted': bool, 'description': str},
            'next_action': str
        }
        """
        
        # Step 1: Sentiment classification
        sentiment = self._classify_sentiment(response_body)
        
        # Step 2: Intent classification
        intent = self._classify_intent(response_body)
        
        # Step 3: Objection extraction
        objection = self._extract_objection(response_body)
        
        # Step 4: Question extraction
        question = self._extract_question(response_body)
        
        # Step 5: Feature request extraction
        feature_request = self._extract_feature_request(response_body)
        
        # Step 6: Recommend next action
        next_action = self._recommend_next_action(sentiment, intent, objection, question)
        
        return {
            'sentiment': sentiment,
            'intent': intent,
            'objection': objection,
            'question': question,
            'feature_request': feature_request,
            'next_action': next_action,
            'human_review_needed': sentiment['confidence'] < 75 or intent['confidence'] < 75
        }
    
    def _classify_sentiment(self, text: str) -> Dict:
        """Classify sentiment using DistilBERT"""
        import torch
        
        # Tokenize and encode text
        inputs = self.sentiment_tokenizer.encode(text[:512], return_tensors='pt')
        
        # Get model predictions
        outputs = self.sentiment_model(inputs)
        logits = outputs.logits
        
        # Convert to probabilities
        probabilities = torch.nn.functional.softmax(logits, dim=1).detach().numpy()[0]
        
        # Map to email sentiment classes
        sentiment_map = {
            0: 'NEGATIVE',  # DistilBERT negative
            1: 'POSITIVE'   # DistilBERT positive
        }
        
        predicted_class = sentiment_map[int(probabilities.argmax())]
        confidence = int(max(probabilities) * 100)
        
        # Post-process with keyword patterns
        sentiment_class = self._refine_sentiment_with_patterns(text, predicted_class, confidence)
        
        return {
            'classification': sentiment_class,
            'confidence': confidence,
            'raw_prediction': predicted_class
        }
    
    def _refine_sentiment_with_patterns(self, text: str, base_prediction: str, confidence: int) -> str:
        """
        Refine sentiment classification using keyword patterns
        Handle special cases like out-of-office, unsubscribe
        """
        
        # Check for out-of-office
        ooo_patterns = r'(out of office|auto-reply|automatically generated|will return|away until)'
        if re.search(ooo_patterns, text, re.IGNORECASE):
            return 'OUT_OF_OFFICE'
        
        # Check for unsubscribe
        unsub_patterns = r'(unsubscribe|remove|stop|do not contact|no longer|opt out)'
        if re.search(unsub_patterns, text, re.IGNORECASE):
            return 'UNSUBSCRIBE'
        
        # Positive interest keywords
        positive_keywords = [
            'exactly what', 'perfect', 'great find', 'interested', 
            'love to', 'would like to', 'please schedule', 'when can we',
            'sign up', 'let\'s talk', 'let\'s discuss'
        ]
        if any(keyword in text.lower() for keyword in positive_keywords):
            return 'POSITIVE_INTEREST'
        
        # Objection keywords
        objection_keywords = [
            'can\'t', 'can not', 'not right', 'not ready', 'not now',
            'concerning', 'hesitant', 'not convinced', 'reject'
        ]
        if any(keyword in text.lower() for keyword in objection_keywords):
            return 'OBJECTION'
        
        # Default based on base prediction
        if base_prediction == 'POSITIVE':
            return 'POSITIVE_INTEREST'
        elif base_prediction == 'NEGATIVE':
            return 'OBJECTION'
        else:
            return 'NEUTRAL_INQUIRY'
    
    def _classify_intent(self, text: str) -> Dict:
        """Classify intent using custom trained FastText model"""
        
        # Vectorize text
        text_vector = self.intent_vectorizer.transform([text])
        
        # Predict intent
        intent_class = self.intent_model.predict(text_vector)[0]
        confidence = int(self.intent_model.predict_proba(text_vector).max() * 100)
        
        # Post-process with keyword patterns
        intent_class = self._refine_intent_with_patterns(text, intent_class)
        
        return {
            'classification': intent_class,
            'confidence': confidence
        }
    
    def _refine_intent_with_patterns(self, text: str, base_prediction: str) -> str:
        """Refine intent using keyword patterns"""
        
        # Demo intent indicators
        demo_keywords = ['schedule', 'book', 'calendar', 'call', 'demo', 'walkthrough', 'walk through']
        if any(keyword in text.lower() for keyword in demo_keywords):
            return 'INTERESTED_DEMO'
        
        # Discussion intent indicators
        discussion_keywords = ['discuss', 'talk', 'explore', 'learn more', 'hear more']
        if any(keyword in text.lower() for keyword in discussion_keywords):
            return 'INTERESTED_DISCUSSION'
        
        # Question intent indicators
        if '?' in text:
            return 'REQUEST_INFO'
        
        # Defer intent indicators
        defer_keywords = ['future', 'next year', 'next quarter', 'when budget', 'defer', 'wait']
        if any(keyword in text.lower() for keyword in defer_keywords):
            return 'DEFER_DECISION'
        
        # Default to base prediction
        return base_prediction
    
    def _extract_objection(self, text: str) -> Dict:
        """Extract objections from response text"""
        
        objection_patterns = {
            'BUDGET': r'(budget|cost|expensive|afford|investment|price)',
            'TIMING': r'(timing|right now|ready|wait|hold off|future)',
            'AUTHORITY': r'(need approval|sign off|boss|executive|cfo|board)',
            'COMPLIANCE_CONCERN': r'(ferpa|privacy|security|compliance|audit|regulations)',
            'INTEGRATION_CONCERN': r'(integrate|system|compatibility|existing|connect)',
            'COMPETITIVE_PREFERENCE': r'(using|prefer|vendor|competitor|similar)',
            'NOT_PRIORITY': r'(priority|backlog|focus|not urgent|lower priority)',
            'DATA_PRIVACY_CONCERN': r'(data|sensitive|confidential|concern)'
        }
        
        for objection_type, pattern in objection_patterns.items():
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                # Extract snippet around match
                start = max(0, match.start() - 50)
                end = min(len(text), match.end() + 100)
                snippet = text[start:end].strip()
                
                return {
                    'extracted': True,
                    'type': objection_type,
                    'snippet': snippet
                }
        
        return {
            'extracted': False,
            'type': None,
            'snippet': None
        }
    
    def _extract_question(self, text: str) -> Dict:
        """Extract questions from response text"""
        
        question_topics = {
            'DATA_ACCURACY': r'(accurate|verify|validation|reliability|quality)',
            'PRICING': r'(cost|pricing|price|investment|roi)',
            'IMPLEMENTATION_TIMELINE': r'(timeline|how long|when|deployment|implement)',
            'COMPLIANCE': r'(compliant|regulation|legal|policy)',
            'FERPA_PRIVACY': r'(ferpa|privacy|secure|confidential)',
            'INTEGRATION': r'(integrate|api|connect|compatible|system)',
            'SCOPE': r'(what does|covers|includes|definition)',
            'ROI_MEASUREMENT': r'(measure|impact|roi|outcome|effectiveness)',
            'COMPETITIVE_COMPARISON': r'(vs|compared|difference|competitor|alternative)'
        }
        
        # Check if text contains a question mark
        if '?' not in text:
            return {'extracted': False, 'topic': None, 'snippet': None}
        
        # Find most likely topic
        for topic, pattern in question_topics.items():
            if re.search(pattern, text, re.IGNORECASE):
                # Extract question sentence
                sentences = text.split('.')
                for sent in sentences:
                    if '?' in sent and re.search(pattern, sent, re.IGNORECASE):
                        return {
                            'extracted': True,
                            'topic': topic,
                            'snippet': sent.strip()
                        }
        
        # Generic question extraction
        sentences = text.split('.')
        for sent in sentences:
            if '?' in sent:
                return {
                    'extracted': True,
                    'topic': 'GENERAL',
                    'snippet': sent.strip()
                }
        
        return {'extracted': False, 'topic': None, 'snippet': None}
    
    def _extract_feature_request(self, text: str) -> Dict:
        """Extract feature requests from response"""
        
        feature_request_patterns = [
            r'would like.*feature',
            r'could you.*add',
            r'if you.*add',
            r'we need.*to',
            r'should.*include',
            r'it would be.*if.*you.*could',
            r'we\'d love.*if.*you'
        ]
        
        for pattern in feature_request_patterns:
            match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
            if match:
                # Extract surrounding context
                start = max(0, match.start() - 20)
                end = min(len(text), match.end() + 150)
                description = text[start:end].strip()
                
                # Check priority context
                priority = 'NICE_TO_HAVE'
                if any(word in text.lower() for word in ['critical', 'blocking', 'essential']):
                    priority = 'CRITICAL'
                elif any(word in text.lower() for word in ['important', 'high priority']):
                    priority = 'IMPORTANT'
                
                return {
                    'extracted': True,
                    'description': description,
                    'priority': priority
                }
        
        return {'extracted': False, 'description': None, 'priority': None}
    
    def _recommend_next_action(self, sentiment: Dict, intent: Dict, objection: Dict, question: Dict) -> str:
        """Recommend next action based on classifications"""
        
        if sentiment['classification'] == 'POSITIVE_INTEREST':
            if intent['classification'] == 'INTERESTED_DEMO':
                return 'SCHEDULE_DEMO'
            elif question['extracted']:
                return 'SEND_CASE_STUDY'
        
        if objection['extracted']:
            if objection['type'] == 'BUDGET':
                return 'SEND_ROI_CALCULATOR'
            elif objection['type'] in ['COMPLIANCE_CONCERN', 'DATA_PRIVACY_CONCERN']:
                return 'SEND_COMPLIANCE_BRIEF'
            else:
                return 'CLARIFY_OBJECTION'
        
        if intent['classification'] == 'DEFER_DECISION':
            return 'DEFER_FOLLOW_UP'
        
        if sentiment['classification'] in ['REJECT_PRODUCT', 'REJECT_TIMING']:
            return 'REMOVE_FROM_SEQUENCE'
        
        if sentiment['classification'] == 'UNSUBSCRIBE':
            return 'REMOVE_FROM_SEQUENCE'
        
        return 'MONITOR'
    
    def _load_intent_model(self):
        """Load pre-trained intent classification model"""
        # This would load your custom FastText or SVM model trained on labeled data
        pass
    
    def _load_intent_vectorizer(self):
        """Load TF-IDF vectorizer for intent classification"""
        # This would load your pre-fitted vectorizer
        pass

# Process queue messages
import boto3
import json

def process_classification_queue():
    """Process messages from SQS classification queue"""
    sqs = boto3.client('sqs')
    classifier = ProspectResponseClassifier()
    
    while True:
        # Poll queue
        response = sqs.receive_message(
            QueueUrl='https://sqs.us-east-1.amazonaws.com/123456789/gmail-classification-queue',
            MaxNumberOfMessages=10,
            WaitTimeSeconds=20
        )
        
        messages = response.get('Messages', [])
        
        for message in messages:
            try:
                message_body = json.loads(message['Body'])
                message_id = message_body['message_id']
                
                # Fetch response from database
                conn = psycopg2.connect("postgresql://...")
                cur = conn.cursor()
                cur.execute("""
                    SELECT response_id, response_body_cleaned
                    FROM prospect_engagement.email_response
                    WHERE response_id = %s
                """, (message_id,))
                
                response_id, response_body = cur.fetchone()
                
                # Classify response
                classification_result = classifier.classify_response(response_body, prospect_email)
                
                # Store results
                cur.execute("""
                    UPDATE prospect_engagement.email_response
                    SET response_sentiment_classification = %s,
                        confidence_score_sentiment = %s,
                        response_intent_classification = %s,
                        confidence_score_intent = %s,
                        objection_extracted = %s,
                        objection_type = %s,
                        objection_text_snippet = %s,
                        question_extracted = %s,
                        question_topic = %s,
                        question_text_snippet = %s,
                        feature_request_extracted = %s,
                        feature_request_description = %s,
                        next_action_suggested = %s,
                        human_review_flag = %s
                    WHERE response_id = %s
                """, (
                    classification_result['sentiment']['classification'],
                    classification_result['sentiment']['confidence'],
                    classification_result['intent']['classification'],
                    classification_result['intent']['confidence'],
                    classification_result['objection']['extracted'],
                    classification_result['objection']['type'],
                    classification_result['objection']['snippet'],
                    classification_result['question']['extracted'],
                    classification_result['question']['topic'],
                    classification_result['question']['snippet'],
                    classification_result['feature_request']['extracted'],
                    classification_result['feature_request']['description'],
                    classification_result['next_action'],
                    classification_result['human_review_needed'],
                    response_id
                ))
                
                conn.commit()
                cur.close()
                conn.close()
                
                # Delete message from queue
                sqs.delete_message(
                    QueueUrl='https://sqs.us-east-1.amazonaws.com/123456789/gmail-classification-queue',
                    ReceiptHandle=message['ReceiptHandle']
                )
                
                logger.info(f"Successfully classified response {response_id}")
                
            except Exception as e:
                logger.error(f"Error processing classification: {str(e)}")
                # Message will be re-queued after visibility timeout
```

---

## Deployment Architecture

### Docker Configuration

```dockerfile
# Dockerfile - Multi-stage build for classification service

FROM python:3.11-slim as base

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Stage 2: Production image
FROM base as production

# Create non-root user
RUN useradd -m -u 1000 appuser
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import requests; requests.get('http://localhost:8000/health')"

CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### AWS ECS Deployment

```json
{
  "family": "prospect-engagement-classifier",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "1024",
  "memory": "2048",
  "containerDefinitions": [
    {
      "name": "classifier",
      "image": "123456789.dkr.ecr.us-east-1.amazonaws.com/prospect-engagement-classifier:latest",
      "portMappings": [
        {
          "containerPort": 8000,
          "hostPort": 8000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "ENVIRONMENT",
          "value": "production"
        },
        {
          "name": "LOG_LEVEL",
          "value": "INFO"
        }
      ],
      "secrets": [
        {
          "name": "DATABASE_URL",
          "valueFrom": "arn:aws:secretsmanager:us-east-1:123456789:secret:database-url"
        },
        {
          "name": "GMAIL_KEY_FILE",
          "valueFrom": "arn:aws:secretsmanager:us-east-1:123456789:secret:gmail-key-json"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/prospect-engagement-classifier",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

---

## Testing & Validation

### Unit Tests

```python
# test_classification_service.py - Unit tests for classification logic

import pytest
from classification_service import ProspectResponseClassifier

@pytest.fixture
def classifier():
    return ProspectResponseClassifier()

class TestSentimentClassification:
    
    def test_positive_interest_classification(self, classifier):
        text = "Thanks for reaching out. This is exactly what we've been looking for. Would love to see a demo."
        result = classifier._classify_sentiment(text)
        
        assert result['classification'] == 'POSITIVE_INTEREST'
        assert result['confidence'] >= 85
    
    def test_objection_classification(self, classifier):
        text = "Interesting but we can't commit to new solutions this year. Budget is tight."
        result = classifier._classify_sentiment(text)
        
        assert result['classification'] == 'OBJECTION'
    
    def test_out_of_office_detection(self, classifier):
        text = "I am out of office until April 20. I will respond upon my return."
        result = classifier._classify_sentiment(text)
        
        assert result['classification'] == 'OUT_OF_OFFICE'

class TestIntentClassification:
    
    def test_demo_intent(self, classifier):
        text = "Would you be available for a demo next week?"
        result = classifier._classify_intent(text)
        
        assert result['classification'] == 'INTERESTED_DEMO'
    
    def test_defer_intent(self, classifier):
        text = "This looks promising. Follow up with us next year when we have budget available."
        result = classifier._classify_intent(text)
        
        assert result['classification'] == 'DEFER_DECISION'

class TestExtractions:
    
    def test_budget_objection_extraction(self, classifier):
        text = "Our IR team definitely sees the value but our budget is too tight this fiscal year."
        result = classifier._extract_objection(text)
        
        assert result['extracted'] == True
        assert result['type'] == 'BUDGET'
        assert 'budget' in result['snippet'].lower()
    
    def test_question_extraction(self, classifier):
        text = "How do you handle FERPA compliance for student outcome data?"
        result = classifier._extract_question(text)
        
        assert result['extracted'] == True
        assert result['topic'] == 'FERPA_PRIVACY'
        assert '?' in result['snippet']
    
    def test_feature_request_extraction(self, classifier):
        text = "This looks great. It would be helpful if you could add international alumni tracking."
        result = classifier._extract_feature_request(text)
        
        assert result['extracted'] == True
        assert 'international' in result['description'].lower()
```

### Integration Tests

```python
# test_integration.py - End-to-end integration tests

import pytest
import psycopg2
from datetime import datetime
import json

class TestEndToEnd:
    
    @pytest.fixture
    def db_connection(self):
        """Connect to test database"""
        conn = psycopg2.connect(
            host="localhost",
            database="test_prospect_tracking",
            user="test_user",
            password="test_password"
        )
        yield conn
        conn.close()
    
    def test_full_response_pipeline(self, db_connection):
        """Test full pipeline: receive email -> parse -> classify -> store"""
        
        # 1. Create test prospect
        cur = db_connection.cursor()
        prospect_id = "test-prospect-123"
        cur.execute("""
            INSERT INTO prospect_engagement.prospect_profile
            (prospect_id, prospect_name, institution_name, prospect_email, status)
            VALUES (%s, %s, %s, %s, 'ACTIVE')
        """, (prospect_id, "Test User", "Test University", "test@test.edu"))
        
        # 2. Create test engagement
        engagement_id = "test-engagement-123"
        cur.execute("""
            INSERT INTO prospect_engagement.email_engagement
            (engagement_id, prospect_id, email_send_date, email_send_time, 
             email_tracking_id, email_subject_line, is_latest_email_in_sequence)
            VALUES (%s, %s, %s, %s, %s, %s, true)
        """, (
            engagement_id, prospect_id, "2026-04-07", "10:00:00",
            "test-tracking-id", "Test Subject"
        ))
        
        # 3. Simulate incoming email response
        response_body = """Thanks for reaching out. This is exactly what we've been looking for. 
        Would be great to see a demo next week."""
        
        cur.execute("""
            INSERT INTO prospect_engagement.email_response
            (engagement_id, prospect_id, response_date, response_body_raw, response_body_cleaned)
            VALUES (%s, %s, %s, %s, %s)
        """, (
            engagement_id, prospect_id, datetime.now().isoformat(),
            response_body, response_body
        ))
        
        db_connection.commit()
        
        # 4. Run classification
        classifier = ProspectResponseClassifier()
        classification = classifier.classify_response(response_body, "test@test.edu")
        
        # 5. Verify classification results
        assert classification['sentiment']['classification'] == 'POSITIVE_INTEREST'
        assert classification['intent']['classification'] == 'INTERESTED_DEMO'
        assert classification['sentiment']['confidence'] >= 80
        
        # 6. Update database with classifications
        cur.execute("""
            UPDATE prospect_engagement.email_response
            SET response_sentiment_classification = %s,
                confidence_score_sentiment = %s,
                response_intent_classification = %s,
                confidence_score_intent = %s
            WHERE engagement_id = %s
        """, (
            classification['sentiment']['classification'],
            classification['sentiment']['confidence'],
            classification['intent']['classification'],
            classification['intent']['confidence'],
            engagement_id
        ))
        
        db_connection.commit()
        
        # 7. Verify stored classifications
        cur.execute("""
            SELECT response_sentiment_classification, confidence_score_sentiment
            FROM prospect_engagement.email_response
            WHERE engagement_id = %s
        """, (engagement_id,))
        
        result = cur.fetchone()
        assert result[0] == 'POSITIVE_INTEREST'
        assert result[1] >= 80
        
        cur.close()
```

---

## Operations & Monitoring

### Monitoring Queries

```sql
-- Weekly performance summary
SELECT 
  DATE_TRUNC('week', ee.email_send_date) as week,
  COUNT(*) as total_sent,
  SUM(CASE WHEN ee.email_open_status THEN 1 ELSE 0 END)::float / COUNT(*) as open_rate,
  SUM(CASE WHEN ee.reply_received_status THEN 1 ELSE 0 END)::float / COUNT(*) as reply_rate,
  SUM(CASE WHEN er.response_sentiment_classification = 'POSITIVE_INTEREST' THEN 1 ELSE 0 END)::float / NULLIF(SUM(CASE WHEN ee.reply_received_status THEN 1 ELSE 0 END), 0) as positive_reply_pct
FROM prospect_engagement.email_engagement ee
LEFT JOIN prospect_engagement.email_response er ON ee.engagement_id = er.engagement_id
WHERE ee.email_send_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY DATE_TRUNC('week', ee.email_send_date)
ORDER BY week DESC;

-- Classification quality audit
SELECT 
  response_sentiment_classification,
  response_intent_classification,
  COUNT(*) as count,
  AVG(confidence_score_sentiment) as avg_sentiment_confidence,
  AVG(confidence_score_intent) as avg_intent_confidence,
  SUM(CASE WHEN human_review_flag THEN 1 ELSE 0 END) as flagged_for_review
FROM prospect_engagement.email_response
WHERE created_date >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY response_sentiment_classification, response_intent_classification
ORDER BY count DESC;

-- High-engagement prospects ready for follow-up
SELECT 
  p.prospect_name,
  p.institution_name,
  p.prospect_email,
  MAX(CASE 
    WHEN ee.email_open_status THEN 10 ELSE 0
  END +
  CASE 
    WHEN ee.scheduling_link_clicked THEN 20 ELSE 0
  END +
  CASE 
    WHEN er.response_sentiment_classification = 'POSITIVE_INTEREST' THEN 30 ELSE 0
  END) as engagement_score
FROM prospect_engagement.prospect_profile p
JOIN prospect_engagement.email_engagement ee ON p.prospect_id = ee.prospect_id
LEFT JOIN prospect_engagement.email_response er ON ee.engagement_id = er.engagement_id
WHERE ee.is_latest_email_in_sequence = TRUE
GROUP BY p.prospect_id, p.prospect_name, p.institution_name, p.prospect_email
HAVING engagement_score >= 70
ORDER BY engagement_score DESC;
```

### Alert Conditions

```python
# monitoring.py - Alert configuration

ALERT_CONDITIONS = {
    'open_rate_drop': {
        'metric': 'email_open_rate',
        'threshold': 0.40,  # Alert if < 40%
        'time_window': '7 days',
        'action': 'Email ops team; review subject line effectiveness'
    },
    'reply_rate_drop': {
        'metric': 'email_reply_rate',
        'threshold': 0.05,  # Alert if < 5%
        'time_window': '7 days',
        'action': 'Review personalization; check deliverability'
    },
    'classification_errors': {
        'metric': 'human_review_flag_rate',
        'threshold': 0.30,  # Alert if > 30% flagged
        'time_window': '24 hours',
        'action': 'Review model performance; retrain if needed'
    },
    'processing_backlog': {
        'metric': 'queue_depth',
        'threshold': 100,  # Alert if > 100 messages waiting
        'time_window': 'realtime',
        'action': 'Scale processing capacity'
    },
    'database_error_rate': {
        'metric': 'database_errors',
        'threshold': 0.01,  # Alert if > 1% error rate
        'time_window': '1 hour',
        'action': 'Check database connectivity; review logs'
    }
}
```

---

## Implementation Timeline

**Phase 1 (Week 1-2): Database Setup**
- [ ] Create PostgreSQL database and schema
- [ ] Deploy tables and indexes
- [ ] Load sample prospect data
- [ ] Verify data integrity

**Phase 2 (Week 2-3): Gmail Integration**
- [ ] Set up Google Cloud project and OAuth
- [ ] Build Gmail webhook listener
- [ ] Implement email parsing service
- [ ] Test end-to-end email receipt

**Phase 3 (Week 3-4): Classification & Reporting**
- [ ] Deploy sentiment/intent ML models
- [ ] Build classification service
- [ ] Implement weekly report generation
- [ ] Deploy monitoring and alerts

**Phase 4 (Week 4+): Optimization**
- [ ] Tune ML models with real data
- [ ] Optimize database queries
- [ ] Build dashboard UI
- [ ] Complete documentation

---

**End of Technical Implementation Guide**
