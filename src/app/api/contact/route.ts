import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  institution: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactForm(data: unknown): {
  valid: boolean;
  errors?: ValidationError[];
  data?: ContactFormData;
} {
  if (!data || typeof data !== 'object') {
    return {
      valid: false,
      errors: [{ field: 'body', message: 'Invalid request body' }],
    };
  }

  const errors: ValidationError[] = [];
  const formData = data as Record<string, unknown>;

  const name = formData.name;
  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  const email = formData.email;
  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  const institution = formData.institution;
  if (!institution || typeof institution !== 'string' || !institution.trim()) {
    errors.push({ field: 'institution', message: 'Institution is required' });
  }

  const message = formData.message;
  if (!message || typeof message !== 'string' || !message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (message.trim().length < 10) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters long',
    });
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name: (name as string).trim(),
      email: (email as string).trim(),
      institution: (institution as string).trim(),
      message: (message as string).trim(),
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = validateContactForm(body);

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const contactData = validation.data!;

    // Log the contact form submission to console
    console.log('[Contact Form Submission]', {
      timestamp: new Date().toISOString(),
      name: contactData.name,
      email: contactData.email,
      institution: contactData.institution,
      message: contactData.message,
    });

    // Here you would typically:
    // - Store to database
    // - Send email notification
    // - Queue for processing
    // For now, we're just logging to console

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! We will be in touch soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact Form Error]', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
