import React from 'react';
import TechnologyCard from './TechnologyCard';

const technologies = [
  {
    title: "Modern API Integration",
    description: "RESTful APIs with comprehensive documentation and SDKs for all major programming languages.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Developer Tools",
    description: "Powerful dashboard, testing environment, and debugging tools for seamless development.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Security Infrastructure",
    description: "Enterprise-grade security with end-to-end encryption and advanced fraud detection.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  }
];

export default function TechnologySection() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Built with Modern Technology
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Leverage our cutting-edge technology stack to process payments efficiently and securely
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              title={tech.title}
              description={tech.description}
              imageUrl={tech.imageUrl}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#documentation"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            View Documentation →
          </a>
        </div>
      </div>
    </section>
  );
}