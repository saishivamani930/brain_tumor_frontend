//import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-slate-400">© 2025 Shivamani. All rights reserved.</span>
            <Heart className="h-4 w-4 text-red-400" />
          </div>
          <div className="text-sm text-slate-400">
            <strong className="text-yellow-400">For educational use only.</strong> This tool is not intended for clinical diagnosis or medical decision-making.
          </div>
          <div className="text-xs text-slate-500 max-w-2xl mx-auto">
            Always consult with qualified healthcare professionals for medical advice, diagnosis, and treatment decisions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;