import React from 'react';

interface TechnologyCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function TechnologyCard({ title, description, imageUrl }: TechnologyCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-gray-900 shadow-xl border border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
      <img 
        src={imageUrl} 
        alt={title}
        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
}