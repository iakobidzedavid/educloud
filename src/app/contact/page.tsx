'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">Brand</div>
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Mail className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600">support@company.com</p>
            <p className="text-sm text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
          </div>

          {/* Contact Info Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Phone className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
            </div>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500 mt-2">Monday to Friday, 9 AM - 6 PM EST</p>
          </div>

          {/* Contact Info Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-lg font-bold text-gray-900">Address</h3>
            </div>
            <p className="text-gray-600">123 Business Street</p>
            <p className="text-sm text-gray-500 mt-2">New York, NY 10001, USA</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900">Message Sent Successfully!</h3>
                  <p className="text-green-700 text-sm mt-1">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  disabled={isLoading}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  disabled={isLoading}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}