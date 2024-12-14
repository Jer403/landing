import React, { useState } from 'react';
import { Code2, Mail, Github, Linkedin, Facebook, XIcon, LucideAlignJustify } from 'lucide-react';

export function Header() {
  const [icon, setIcon] = useState(<XIcon className="w-5 h-5" />);

  const handlerClick = () =>{
    document.querySelector(".mobile-links")?.classList.toggle("showLinks")
    setIcon(<LucideAlignJustify className="w-5 h-5" />)
  }


  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6" />
            <span className="text-xl font-bold">Jose Felix</span>
          </div>
          <div className="flex items-center gap-6 links-mobile">
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4 links-mobile">
            <a href="mailto:josefelixlr05@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/josefelix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://cu.linkedin.com/in/jos%C3%A9-felix-lorenzo-rodr%C3%ADguez-b747b6328" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088139118774" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <button className='switch-mobile' onClick={handlerClick}>{icon}</button>
          <div className="flex mobile-links">
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:josefelixlr05@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/josefelix" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://cu.linkedin.com/in/jos%C3%A9-felix-lorenzo-rodr%C3%ADguez-b747b6328" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100088139118774" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}