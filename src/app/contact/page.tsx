'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  institution: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  institution?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    institution: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.institution.trim()) {
      newErrors.institution = 'Institution is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'An error occurred. Please try again.');
        return;
      }

      setSubmitStatus('success');
      setSubmitMessage(data.message || 'Thank you! We\'ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        institution: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-red-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 mb-12">
            Ready to measure your institution's impact? Contact us to learn more about how edu.cloud can help showcase your alumni success stories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">Send us your questions and project details</p>
              <p className="text-lg font-bold text-red-600 mt-4">info@edu.cloud</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Inquiry</h3>
              <p className="text-gray-600">Tell us about your institution and research needs</p>
              <p className="text-lg font-bold text-red-600 mt-4">Fast Response Time</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600">Learn about our alumni research and impact measurement</p>
              <p className="text-lg font-bold text-red-600 mt-4">Custom Solutions</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">{submitMessage}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">{submitMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-gray-300 focus:border-red-500'
                  }`}
                  placeholder="Your name"
                  disabled={loading}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-gray-300 focus:border-red-500'
                  }`}
                  placeholder="your@email.com"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="institution" className="block text-gray-700 font-bold mb-2">
                  Institution <span className="text-red-600">*</span>
                </label>
                <input
                  id="institution"
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors ${
                    errors.institution
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-gray-300 focus:border-red-500'
                  }`}
                  placeholder="Your institution name"
                  disabled={loading}
                />
                {errors.institution && (
                  <p className="text-red-600 text-sm mt-1">{errors.institution}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors h-32 resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-600 bg-red-50'
                      : 'border-gray-300 focus:border-red-500'
                  }`}
                  placeholder="Tell us about your institution and research needs"
                  disabled={loading}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 px-8 rounded-lg transition-colors ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="bg-red-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How long does the research process take?</h3>
                <p className="text-gray-600">Research timelines depend on the size of your alumni database. We provide detailed project timelines during the planning phase. Typical projects range from 4-12 weeks.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">What format should our alumni data be in?</h3>
                <p className="text-gray-600">We accept spreadsheets (Excel, CSV) with alumni names and, if available, graduation years and degree programs. Minimal data is needed to get started.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can we customize the research metrics?</h3>
                <p className="text-gray-600">Absolutely. We work with your institution to define which metrics are most important. Standard metrics include companies founded, jobs created, promotions, and exits.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do you ensure data privacy?</h3>
                <p className="text-gray-600">We follow strict privacy protocols. All research uses publicly available information. Your alumni data is treated confidentially and never shared with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
