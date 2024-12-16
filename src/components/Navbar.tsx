import React from 'react';
import Logo from './common/Logo';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-12">
            <Logo />
            <div className="hidden md:flex md:space-x-8">
              <a href="#solutions" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Solutions</a>
              <a href="#developers" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Developers</a>
              <a href="#resources" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Resources</a>
              <a href="#pricing" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Pricing</a>
            </div>
          </div>
          <div>
            <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}