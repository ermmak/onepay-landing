import React from 'react';
import { Shield, Clock, Globe, Zap, PieChart, HeartHandshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure Transactions",
      description: "Bank-grade security with PCI DSS compliance and fraud prevention."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Real-time Processing",
      description: "Instant payment processing and immediate transaction confirmation."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Global Coverage",
      description: "Accept payments from customers worldwide in multiple currencies."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Quick Integration",
      description: "Easy-to-use APIs and SDKs for seamless integration."
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "Detailed Analytics",
      description: "Comprehensive reporting and transaction analytics."
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance."
    }
  ];

  return (
    <div id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose OnePay?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to process payments securely and efficiently
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}