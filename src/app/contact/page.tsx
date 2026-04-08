'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  institutionName: string;
  institutionType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  institutionName?: string;
  institutionType?: string;
  message?: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

// ── Constants ─────────────────────────────────────────────────────────────────

const INSTITUTION_TYPES = [
  { value: '', label: 'Select institution type...' },
  { value: 'Research University', label: 'Research University' },
  { value: 'Liberal Arts College', label: 'Liberal Arts College' },
  { value: 'Community College', label: 'Community College' },
  { value: 'Professional School', label: 'Professional School' },
  { value: 'Other', label: 'Other' },
];

// ── Validation ─────────────────────────────────────────────────────────────────

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.institutionName.trim() || data.institutionName.trim().length < 2) {
    errors.institutionName = 'Please enter your institution name';
  }

  if (!data.institutionType) {
    errors.institutionType = 'Please select your institution type';
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Please enter a message (minimum 10 characters)';
  }

  if (data.message.length > 5000) {
    errors.message = 'Message is too long (maximum 5000 characters)';
  }

  return errors;
}

// ── Input Component ───────────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {message}
    </p>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    institutionName: '',
    institutionType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Real-time validation on blur
  function handleBlur(field: keyof FormData) {
    setTouched(prev => ({ ...prev, [field]: true }));
    const newErrors = validateForm(formData);
    setErrors(prev => ({ ...prev, [field]: newErrors[field] }));
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (touched[field]) {
      const newData = { ...formData, [field]: value };
      const newErrors = validateForm(newData);
      setErrors(prev => ({ ...prev, [field]: newErrors[field] }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all fields as touched to show all errors
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Scroll to first error
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormState('success');
        // Reset form
        setFormData({ name: '', email: '', institutionName: '', institutionType: '', message: '' });
        setTouched({});
        setErrors({});
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setFormState('error');
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setFormState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
      errors[field] && touched[field]
        ? 'border-red-400 focus:ring-red-200 bg-red-50'
        : 'border-gray-300 focus:ring-red-200 focus:border-red-500 bg-white'
    }`;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 mb-4">
            Ready to measure your institution's impact? Tell us about your goals and we'll be in touch within 24 hours.
          </p>
          <p className="text-base text-gray-500">
            Currently accepting applications for our pilot program — limited spots available for Q2 2026.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-500 text-sm mb-3">For questions and project details</p>
            <a href="mailto:info@edu.cloud" className="text-red-600 font-semibold hover:underline">info@edu.cloud</a>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Response Time</h3>
            <p className="text-gray-500 text-sm mb-3">We move fast for serious inquiries</p>
            <p className="text-red-600 font-semibold">Within 24 hours</p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Pilot Program</h3>
            <p className="text-gray-500 text-sm mb-3">Join our founding cohort</p>
            <p className="text-red-600 font-semibold">Limited Spots Available</p>
          </div>
        </div>

        {/* Success Message */}
        {formState === 'success' && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h2>
              <p className="text-gray-600 text-lg mb-4">
                Thank you! We&apos;ll be in touch within 24 hours.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                A confirmation email has been sent to your inbox. Please check your spam folder if you don&apos;t see it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setFormState('idle')}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
                <Link
                  href="/platform"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-2 px-6 rounded-lg transition-colors text-center"
                >
                  Explore Platform
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        {formState !== 'success' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Form</h2>
              <p className="text-gray-500 text-sm mb-8">
                All fields are required. We&apos;ll respond within 24 hours on business days.
              </p>

              {/* Global Error Banner */}
              {formState === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-semibold text-sm">Submission failed</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={e => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      className={inputClass('name')}
                      placeholder="Dr. Jane Smith"
                      autoComplete="name"
                    />
                    {touched.name && <FieldError message={errors.name} />}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      className={inputClass('email')}
                      placeholder="jsmith@university.edu"
                      autoComplete="email"
                    />
                    {touched.email && <FieldError message={errors.email} />}
                  </div>
                </div>

                {/* Row 2: Institution Name + Institution Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="institutionName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Institution Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="institutionName"
                      type="text"
                      value={formData.institutionName}
                      onChange={e => handleChange('institutionName', e.target.value)}
                      onBlur={() => handleBlur('institutionName')}
                      aria-invalid={!!(errors.institutionName && touched.institutionName)}
                      className={inputClass('institutionName')}
                      placeholder="State University"
                      autoComplete="organization"
                    />
                    {touched.institutionName && <FieldError message={errors.institutionName} />}
                  </div>

                  <div>
                    <label htmlFor="institutionType" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Institution Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="institutionType"
                      value={formData.institutionType}
                      onChange={e => handleChange('institutionType', e.target.value)}
                      onBlur={() => handleBlur('institutionType')}
                      aria-invalid={!!(errors.institutionType && touched.institutionType)}
                      className={`${inputClass('institutionType')} cursor-pointer`}
                    >
                      {INSTITUTION_TYPES.map(opt => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {touched.institutionType && <FieldError message={errors.institutionType} />}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message / Inquiry <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={e => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={!!(errors.message && touched.message)}
                    rows={5}
                    className={`${inputClass('message')} resize-y min-h-[120px]`}
                    placeholder="Tell us about your institution's alumni tracking needs, current challenges, or questions about our pilot program..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {touched.message ? (
                      <FieldError message={errors.message} />
                    ) : (
                      <span className="text-xs text-gray-400">Min. 10 characters</span>
                    )}
                    <span className={`text-xs ml-auto ${formData.message.length > 4500 ? 'text-red-500' : 'text-gray-400'}`}>
                      {formData.message.length}/5000
                    </span>
                  </div>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-gray-400">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-red-500 hover:underline">Privacy Policy</Link>.
                  Your information is never shared with third parties.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className={`w-full font-bold py-3.5 px-8 rounded-lg transition-all text-lg ${
                    formState === 'loading'
                      ? 'bg-red-300 cursor-not-allowed text-white'
                      : 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg active:scale-[0.99]'
                  }`}
                >
                  {formState === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does the research process take?</h3>
              <p className="text-gray-600 leading-relaxed">
                Research timelines depend on the size of your alumni database. Typical projects range from 4–12 weeks. Pilot programs
                begin with a 2-week data assessment phase. We provide detailed project timelines during the discovery call.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What format should our alumni data be in?</h3>
              <p className="text-gray-600 leading-relaxed">
                We accept spreadsheets (Excel, CSV) with alumni names and, if available, graduation years and degree programs.
                Minimal data is needed to get started — we enrich it through public record aggregation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can we customize the research metrics?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. We work with your institution to define which metrics matter most. Standard metrics include companies founded,
                jobs created, career progression, salary ranges, and geographic distribution. Custom metrics available on Enterprise plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure data privacy and FERPA compliance?</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only publicly available information for research. All reports are based on aggregated outcomes — no individual
                PII is exposed. We follow strict FERPA guidelines and maintain minimum cohort size enforcement. Learn more in our{' '}
                <Link href="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the pilot program?</h3>
              <p className="text-gray-600 leading-relaxed">
                Our pilot program provides a limited cohort of institutions access to edu.cloud at reduced rates in exchange for feedback
                and a case study. Pilots run for 60 days and include dedicated support. We're currently accepting applications for Q2 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
