import React from 'react';

interface FooterSectionProps {
  title: string;
  items: string[];
  isDescription?: boolean;
}

export default function FooterSection({ title, items, isDescription = false }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {isDescription ? (
        <p className="text-gray-400 text-sm">{items[0]}</p>
      ) : (
        <ul className="space-y-2 text-gray-400 text-sm">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}