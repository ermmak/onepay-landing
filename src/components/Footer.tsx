import React from 'react';

export default function Footer() {
  const footerSections = [
    {
      title: "OnePay",
      items: ["Secure payment processing solutions for modern businesses."]
    },
    {
      title: "Products",
      items: ["Payment Gateway", "Virtual Terminal", "Payment Links", "Recurring Billing"]
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              {index === 0 ? (
                <p className="text-gray-400 text-sm">{section.items[0]}</p>
              ) : (
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} OnePay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}