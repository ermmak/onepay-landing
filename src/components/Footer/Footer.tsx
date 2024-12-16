import React from 'react';
import FooterSection from './FooterSection';
import Copyright from './Copyright';

export default function Footer() {
  const footerSections = [
    {
      title: "OnePay",
      items: ["Secure payment processing solutions for modern businesses."],
      isDescription: true
    },
    {
      title: "Resources",
      items: ["Documentation", "API Reference", "Support Center", "Contact Us"]
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service", "Security", "Compliance"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
              isDescription={section.isDescription}
            />
          ))}
        </div>
        <Copyright />
      </div>
    </footer>
  );
}