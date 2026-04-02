'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Ready to demonstrate your institution's impact? Contact our team to discuss how edu.cloud can help you tell your alumni success story.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-blue-600">hello@edu.cloud</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">Washington, D.C., USA</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700">We typically respond within 24 business hours</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-900 mb-2">Institution</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}