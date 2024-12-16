import React from 'react';
import PaymentForm from './PaymentForm';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="relative pt-12 pb-20 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Unified, global</span>
                <span className="block text-blue-600">payments to grow</span>
                <span className="block">your revenue</span>
              </h1>
              <p className="mt-6 text-lg text-gray-500 sm:max-w-xl">
                Accept payments online, in person, and around the world with a payments solution built for any business—from scaling startups to global enterprises.
              </p>
              <div className="mt-8 flex space-x-4">
                <a href="#start" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Start now →
                </a>
                <a href="#contact" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Contact sales
                </a>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:col-span-6">
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}