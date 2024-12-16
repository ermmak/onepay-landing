import React from 'react';
import PaymentForm from './PaymentForm';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-12 pb-20 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Unified, global</span>
                <span className="block text-purple-400">payments to grow</span>
                <span className="block">your revenue</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 sm:max-w-xl">
                Accept payments online, in person, and around the world with a payments solution built for any business—from scaling startups to global enterprises.
              </p>
              <div className="mt-8 flex space-x-4">
                <a href="#start" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors">
                  Start now →
                </a>
                <a href="#contact" className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-full shadow-sm text-base font-medium text-gray-300 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                  Contact sales
                </a>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:col-span-6">
              {/* Glass effect for the payment form container */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-lg"></div>
                <PaymentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}