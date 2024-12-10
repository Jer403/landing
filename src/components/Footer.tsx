import React from 'react';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6" />
            <span className="text-xl font-bold">Jose Felix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}