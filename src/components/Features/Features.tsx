import React from 'react';
import { Shield, Clock, Globe, Zap, PieChart, HeartHandshake } from 'lucide-react';
import FeatureCard from './FeatureCard';

const featuresList = [
  {
    icon: <Shield className="h-6 w-6 text-purple-400" />,
    title: "Secure Transactions",
    description: "Bank-grade security with PCI DSS compliance and fraud prevention."
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-400" />,
    title: "Real-time Processing",
    description: "Instant payment processing and immediate transaction confirmation."
  },
  {
    icon: <Globe className="h-6 w-6 text-purple-400" />,
    title: "Global Coverage",
    description: "Accept payments from customers worldwide in multiple currencies."
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-400" />,
    title: "Quick Integration",
    description: "Easy-to-use APIs and SDKs for seamless integration."
  },
  {
    icon: <PieChart className="h-6 w-6 text-purple-400" />,
    title: "Detailed Analytics",
    description: "Comprehensive reporting and transaction analytics."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-purple-400" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support and technical assistance."
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose OnePay?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Everything you need to process payments securely and efficiently
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}