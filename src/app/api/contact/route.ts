import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// ── Types ─────────────────────────────────────────────────────────────────────

interface ContactSubmission {
  name: string;
  email: string;
  institutionName: string;
  institutionType: string;
  message: string;
  submittedAt: string;
  ipAddress: string;
}

// ── Validation ─────────────────────────────────────────────────────────────────

const VALID_INSTITUTION_TYPES = [
  'Research University',
  'Liberal Arts College',
  'Community College',
  'Professional School',
  'Other',
];

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitize(str: string): string {
  return str.trim().replace(/[\x00-\x1F\x7F]/g, ''); // strip control chars
}

// ── Email Transport ────────────────────────────────────────────────────────────

function createTransport() {
  // Supports any SMTP provider: Gmail, SendGrid, Mailgun, etc.
  // Configure via environment variables in .env.local
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT ?? '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null; // email disabled — submissions will only be logged
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: { rejectUnauthorized: process.env.NODE_ENV === 'production' },
  });
}

// ── Notification Email (to edu.cloud team) ────────────────────────────────────

function buildNotificationEmail(submission: ContactSubmission): nodemailer.SendMailOptions {
  const adminEmail = process.env.CONTACT_TO_EMAIL ?? 'team@edu.cloud';

  return {
    from: `"edu.cloud Contact Form" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: `[edu.cloud] New Contact: ${submission.institutionName} — ${submission.institutionType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #ef4444; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: #fecaca; margin: 8px 0 0;">edu.cloud — Pilot Recruitment Lead</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 160px;">Contact Name:</td>
              <td style="padding: 10px 0; color: #111827;">${submission.name}</td>
            </tr>
            <tr style="background: #f3f4f6;">
              <td style="padding: 10px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px; color: #2563eb;"><a href="mailto:${submission.email}">${submission.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Institution:</td>
              <td style="padding: 10px 0; color: #111827;">${submission.institutionName}</td>
            </tr>
            <tr style="background: #f3f4f6;">
              <td style="padding: 10px; font-weight: bold; color: #374151;">Type:</td>
              <td style="padding: 10px;">
                <span style="background: #fef2f2; color: #dc2626; padding: 3px 10px; border-radius: 12px; font-size: 13px; font-weight: bold;">
                  ${submission.institutionType}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Submitted:</td>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">${new Date(submission.submittedAt).toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: white; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message / Inquiry:</p>
            <p style="color: #374151; margin: 0; white-space: pre-wrap; line-height: 1.6;">${submission.message}</p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${submission.email}?subject=Re: Your edu.cloud Inquiry"
               style="display: inline-block; background: #ef4444; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Reply to ${submission.name}
            </a>
          </div>

          <p style="margin-top: 20px; color: #9ca3af; font-size: 12px; text-align: center;">
            Submitted from edu.cloud contact form · IP: ${submission.ipAddress}
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission — edu.cloud

Name: ${submission.name}
Email: ${submission.email}
Institution: ${submission.institutionName}
Type: ${submission.institutionType}
Submitted: ${submission.submittedAt}

Message:
${submission.message}

---
Reply to: ${submission.email}
    `.trim(),
  };
}

// ── Auto-Reply Email (to the user) ────────────────────────────────────────────

function buildAutoReplyEmail(submission: ContactSubmission): nodemailer.SendMailOptions {
  return {
    from: `"edu.cloud Team" <${process.env.SMTP_USER}>`,
    to: submission.email,
    subject: `We received your message — edu.cloud`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #ef4444; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">edu.cloud</h1>
          <p style="color: #fecaca; margin: 8px 0 0; font-size: 14px;">Alumni Impact Measurement Platform</p>
        </div>
        <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <h2 style="color: #111827; margin-top: 0;">Thank you, ${submission.name}!</h2>
          <p style="color: #374151; line-height: 1.6;">
            We've received your inquiry from <strong>${submission.institutionName}</strong> and our team will be in touch within <strong>24 hours</strong>.
          </p>

          <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
            <p style="color: #374151; font-weight: bold; margin: 0 0 8px;">Your message:</p>
            <p style="color: #6b7280; margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${submission.message}</p>
          </div>

          <h3 style="color: #111827;">What happens next?</h3>
          <ol style="color: #374151; line-height: 2; padding-left: 20px;">
            <li>Our team reviews your inquiry (within 24 hours)</li>
            <li>We'll schedule a brief discovery call to understand your needs</li>
            <li>We'll prepare a tailored proposal for ${submission.institutionName}</li>
            <li>You receive a pilot program overview with scope and timeline</li>
          </ol>

          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 24px 0; text-align: center;">
            <p style="color: #374151; margin: 0 0 8px; font-weight: bold;">While you wait</p>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Explore our <a href="https://edu.cloud/platform" style="color: #ef4444;">platform capabilities</a> or review our
              <a href="https://edu.cloud/solutions" style="color: #ef4444;">solution tiers</a> to prepare for our conversation.
            </p>
          </div>

          <p style="color: #374151; line-height: 1.6;">
            Have an urgent question? Reply directly to this email or reach us at
            <a href="mailto:info@edu.cloud" style="color: #ef4444;">info@edu.cloud</a>.
          </p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #9ca3af; font-size: 12px; text-align: center;">
            edu.cloud · Alumni Outcomes & Impact Measurement<br />
            <a href="https://edu.cloud/privacy" style="color: #9ca3af;">Privacy Policy</a> ·
            <a href="https://edu.cloud/terms" style="color: #9ca3af;">Terms of Service</a>
          </p>
        </div>
      </div>
    `,
    text: `
Thank you, ${submission.name}!

We've received your inquiry from ${submission.institutionName} and our team will be in touch within 24 hours.

Your message:
"${submission.message}"

What happens next:
1. Our team reviews your inquiry (within 24 hours)
2. We'll schedule a brief discovery call
3. We'll prepare a tailored proposal for ${submission.institutionName}
4. You receive a pilot program overview with scope and timeline

Questions? Reply to this email or contact info@edu.cloud

— The edu.cloud Team
    `.trim(),
  };
}

// ── File-based backup logging ─────────────────────────────────────────────────

function logSubmissionToFile(submission: ContactSubmission): void {
  try {
    const logDir = path.join(process.cwd(), '.contact-submissions');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const logFile = path.join(logDir, 'submissions.jsonl');
    const line = JSON.stringify(submission) + '\n';
    fs.appendFileSync(logFile, line, 'utf8');
  } catch (err) {
    // Non-fatal — just log to stderr
    console.error('[contact] Failed to write submission log:', err);
  }
}

// ── Route Handler ──────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ── Validate required fields ──────────────────────────────────────────────
    const { name, email, institutionName, institutionType, message } = body;

    if (!name || !email || !institutionName || !institutionType || !message) {
      return NextResponse.json(
        { error: 'All fields are required: name, email, institutionName, institutionType, message' },
        { status: 400 }
      );
    }

    const cleanName = sanitize(String(name));
    const cleanEmail = sanitize(String(email)).toLowerCase();
    const cleanInstitutionName = sanitize(String(institutionName));
    const cleanInstitutionType = sanitize(String(institutionType));
    const cleanMessage = sanitize(String(message));

    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json({ error: 'Name must be between 2 and 100 characters' }, { status: 400 });
    }

    if (!validateEmail(cleanEmail)) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    if (cleanInstitutionName.length < 2 || cleanInstitutionName.length > 200) {
      return NextResponse.json({ error: 'Institution name must be between 2 and 200 characters' }, { status: 400 });
    }

    if (!VALID_INSTITUTION_TYPES.includes(cleanInstitutionType)) {
      return NextResponse.json(
        { error: `Institution type must be one of: ${VALID_INSTITUTION_TYPES.join(', ')}` },
        { status: 400 }
      );
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 5000) {
      return NextResponse.json({ error: 'Message must be between 10 and 5000 characters' }, { status: 400 });
    }

    // ── Build submission object ───────────────────────────────────────────────
    const ipAddress =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    const submission: ContactSubmission = {
      name: cleanName,
      email: cleanEmail,
      institutionName: cleanInstitutionName,
      institutionType: cleanInstitutionType,
      message: cleanMessage,
      submittedAt: new Date().toISOString(),
      ipAddress,
    };

    // ── Log submission (file-based backup) ────────────────────────────────────
    logSubmissionToFile(submission);

    console.log(`[contact] New submission from ${submission.name} <${submission.email}> — ${submission.institutionName} (${submission.institutionType})`);

    // ── Send emails ───────────────────────────────────────────────────────────
    const transport = createTransport();
    let emailsSent = 0;

    if (transport) {
      try {
        // Send team notification
        await transport.sendMail(buildNotificationEmail(submission));
        emailsSent++;
        console.log(`[contact] Notification email sent to ${process.env.CONTACT_TO_EMAIL ?? 'team@edu.cloud'}`);

        // Send auto-reply to user
        await transport.sendMail(buildAutoReplyEmail(submission));
        emailsSent++;
        console.log(`[contact] Auto-reply sent to ${submission.email}`);
      } catch (emailError) {
        // Email failure is non-fatal — submission is already logged
        console.error('[contact] Email sending failed (submission still logged):', emailError);
      }
    } else {
      console.warn('[contact] SMTP not configured — submission logged to file only. Set SMTP_HOST, SMTP_USER, SMTP_PASS env vars to enable email.');
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
        emailsSent,
        submittedAt: submission.submittedAt,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[contact] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly at info@edu.cloud' },
      { status: 500 }
    );
  }
}

// Disallow GET to avoid crawlers triggering the endpoint
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
