import React from 'react';
import { Code2, Mail, Github, Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6" />
            <span className="text-xl font-bold">Jose Felix</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@josefelix.dev" className="hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/josefelix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/josefelix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}