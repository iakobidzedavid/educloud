# Contact Form with Email Notification System
**Date:** 2026-04-08  
**Author:** CRM & Prospect Management Agent  
**Status:** Complete — awaiting deployment

---

## Executive Summary

This document describes the implementation of a production-ready contact form system for edu.cloud. The form collects qualified leads from higher education institutions and routes them to the edu.cloud team via automated email notifications, with confirmation messages sent to the submitter. The system is designed to capture pilot program interest and funnel prospects directly into the sales pipeline.

All code is committed to the GitHub repository at `iakobidzedavid/educloud` on the feature branch `crm/contact-form-email-notifications`.

---

## Scope of Implementation

### 1. Enhanced Contact Page (`src/app/contact/page.tsx`)

**Previous state:** A static server-rendered page with a non-functional HTML form (no validation, no submission handling).

**New implementation:** A fully interactive `'use client'` React component with:

#### Form Fields
| Field | Type | Validation |
|-------|------|-----------|
| Full Name | Text input | Required, min 2 chars |
| Email Address | Email input | Required, RFC5322 format |
| Institution Name | Text input | Required, min 2 chars |
| Institution Type | Dropdown select | Required — one of 5 options |
| Message / Inquiry | Textarea | Required, 10–5000 chars |

#### Institution Type Options
- Research University
- Liberal Arts College
- Community College
- Professional School
- Other

#### Client-Side Validation
- **Real-time validation on blur** — errors appear as soon as the user leaves a field, giving immediate feedback without premature warnings
- **Live character counter** for message field (shows warning when approaching 5000 char limit)
- **Error highlighting** — invalid fields get a red border + background tint + inline error message with icon
- **Form-level error state** — if submission fails, a red banner explains the specific error
- **All-fields validation on submit** — validates all fields before POST

#### UX States
1. **Idle** — clean form ready for input
2. **Loading** — submit button shows spinner + "Sending..." text, form is non-interactive
3. **Success** — form is replaced with a green confirmation panel:
   - "Thank you! We'll be in touch within 24 hours."
   - Note about confirmation email sent to user
   - CTAs to send another message or explore the platform
4. **Error** — red banner with specific error message, form remains intact for resubmission

#### Accessibility
- All inputs have proper `id` and `htmlFor` label associations
- `aria-invalid` on invalid fields
- `aria-describedby` pointing to error message IDs
- `noValidate` on the form (browser validation disabled in favor of custom UI)

---

### 2. Contact API Route (`src/app/api/contact/route.ts`)

A Next.js App Router API route that handles POST requests from the contact form.

#### Request Validation
```json
{
  "name": "string (2–100 chars, required)",
  "email": "string (valid email format, required)",
  "institutionName": "string (2–200 chars, required)",
  "institutionType": "string (enum, required)",
  "message": "string (10–5000 chars, required)"
}
```

Input sanitization strips control characters from all string fields before processing.

#### Email Notification System

**Team notification email** sent to `CONTACT_TO_EMAIL` (env var):
- Subject: `[edu.cloud] New Contact: {institutionName} — {institutionType}`
- HTML email with formatted table showing all submission details
- "Reply to [Name]" CTA button with mailto link pre-filled
- Plain-text fallback for email clients that don't render HTML

**Auto-reply email** sent to the submitter:
- Subject: `We received your message — edu.cloud`
- Branded HTML template with edu.cloud header
- Confirmation of 24-hour response SLA
- Bulleted "What happens next?" process overview
- Link to explore platform and solutions pages

#### SMTP Configuration
The email system is designed to work with any SMTP provider. Configure via environment variables in `.env.local`:

```env
# Required for email sending
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-username@domain.com
SMTP_PASS=your-smtp-password

# Destination for team notifications
CONTACT_TO_EMAIL=team@edu.cloud
```

Compatible providers:
- **Gmail** (SMTP_HOST=smtp.gmail.com, port 587, use App Password)
- **SendGrid** (SMTP_HOST=smtp.sendgrid.net, port 587, user=apikey)
- **Mailgun** (SMTP_HOST=smtp.mailgun.org, port 587)
- **AWS SES** (SMTP_HOST=email-smtp.us-east-1.amazonaws.com, port 587)

**Graceful fallback:** If SMTP is not configured, the route logs a warning and continues — submissions are captured via file logging. This ensures no lead data is lost during initial deployment before SMTP is configured.

#### File-Based Backup Logging
All submissions are persisted to `.contact-submissions/submissions.jsonl` (JSONL format) as a backup layer independent of email delivery. Each line is a JSON object containing all submission fields plus timestamp and anonymized IP.

This backup ensures:
- Zero lead data loss if email delivery fails
- Audit trail for FERPA compliance documentation
- Easy import into CRM systems (Apollo, HubSpot)

#### HTTP Responses
| Status | Condition |
|--------|-----------|
| 201 Created | Success — submission logged, emails sent (or gracefully skipped) |
| 400 Bad Request | Invalid/missing fields — specific error message returned |
| 405 Method Not Allowed | GET requests blocked (prevents crawler hits) |
| 500 Internal Server Error | Unexpected failure — user shown contact email as fallback |

---

## Technical Architecture

```
Client Browser
     │
     │ POST /api/contact
     ▼
Next.js API Route
     │
     ├── Validate fields (server-side)
     ├── Sanitize inputs
     ├── Log to .contact-submissions/submissions.jsonl
     │
     ├── (if SMTP configured)
     │   ├── Send team notification email
     │   └── Send auto-reply to submitter
     │
     └── Return 201 JSON response
          │
          ▼
     Contact Page
          │
          └── Show success state (green confirmation panel)
```

---

## Integration Points

### Pricing Page CTAs
The existing `CTA.tsx` component already links to `/contact` — this form is now functional and will capture leads from all pricing page and landing page CTA clicks.

### Apollo CRM Integration
Submissions logged to `.contact-submissions/submissions.jsonl` can be imported directly into Apollo as a contact list. The JSONL schema maps to Apollo's import format:
- `name` → Contact Name
- `email` → Email
- `institutionName` → Account Name
- `institutionType` → Custom field "Institution Type"
- `message` → Notes

### Lead Segmentation
The Institution Type dropdown enables immediate segmentation in Apollo/CRM:
- **Research University** → High-value pilot target, full feature demo
- **Liberal Arts College** → Accreditation-focused messaging
- **Community College** → Workforce outcomes messaging
- **Professional School** → ROI and outcomes-focused messaging

---

## Environment Setup Instructions

To enable email notifications in production:

1. **Obtain SMTP credentials** from your email provider (see providers listed above)
2. **Create `.env.local`** in the project root (already in `.gitignore`):
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   CONTACT_TO_EMAIL=team@edu.cloud
   ```
3. **For Gmail specifically:** Enable 2FA on the Google account and create an [App Password](https://myaccount.google.com/apppasswords) — do not use your regular Google password
4. **Verify** by submitting a test form and checking that both the team notification and auto-reply arrive correctly
5. **Monitor** `.contact-submissions/submissions.jsonl` as a backup audit trail

---

## Quality Checklist

- [x] TypeScript strict mode — `npx tsc --noEmit` passes with 0 errors
- [x] All form fields validated client-side and server-side
- [x] Input sanitization (control character stripping)
- [x] Loading state prevents duplicate submissions
- [x] Success state provides clear confirmation
- [x] Error state is user-friendly and actionable
- [x] Email notifications with HTML and plain-text variants
- [x] Auto-reply email to submitter
- [x] File-based backup — no data loss if email fails
- [x] SMTP unconfigured gracefully handled (logs warning, continues)
- [x] GET requests to API route rejected (405)
- [x] Accessibility: labels, aria-invalid, aria-describedby
- [x] Privacy policy link in form
- [x] Character counter for message field
- [x] Responsive layout (grid collapses on mobile)
- [x] Institution type dropdown with all 5 options

---

## Next Steps

1. **Configure SMTP credentials** in Vercel environment variables (Settings → Environment Variables) to activate email sending
2. **Add Google Analytics / GTM event** on form success state to track contact form conversion rate (goal: >3% of contact page visitors)
3. **Connect to Apollo CRM** — set up a daily import of `.contact-submissions/submissions.jsonl` to Apollo for automated lead enrichment and sequencing
4. **A/B test CTA copy** — test "Send Message" vs. "Request a Pilot Demo" on the submit button to optimize conversion
5. **Add honeypot field** if spam submissions become a problem (hidden input that bots fill but humans don't)
