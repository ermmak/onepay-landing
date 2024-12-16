import React from 'react';

export default function Copyright() {
  return (
    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} OnePay. All rights reserved.
    </div>
  );
}