import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="/assets/images/onepay-logo.png" 
        alt="OnePay"
        className="h-8 w-auto"
      />
    </div>
  );
}