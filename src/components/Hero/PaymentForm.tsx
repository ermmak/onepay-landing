import React from 'react';
import { CreditCard } from 'lucide-react';

export default function PaymentForm() {
  return (
    <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-gray-700">
      <div className="px-6 py-4 bg-gray-900/90 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">Card number</label>
            <div className="mt-1 relative">
              <input
                type="text"
                className="block w-full px-3 py-2 bg-gray-700/90 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                placeholder="4242 4242 4242 4242"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Expiry date</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-gray-700/90 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                placeholder="MM / YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">CVC</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-gray-700/90 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                placeholder="123"
              />
            </div>
          </div>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
}