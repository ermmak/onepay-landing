import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-colors">
        <div className="w-12 h-12 bg-gray-900/50 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
}