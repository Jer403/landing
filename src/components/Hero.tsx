import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Frontend Developer with a Passion for Creating Amazing Web Experiences
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Hi, I'm Jose Felix. With 1.5 years of experience in web development,
            I specialize in building responsive and user-friendly applications
            using modern technologies.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}