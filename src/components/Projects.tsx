import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import myImage from '../localproductyflow.png';

const projects = [
  {
    title: 'Blog application',
    subtitle: 'Blog application',
    description: 'A responsive admin dashboard for managing online store inventory and orders. Built with React and Node.js.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwnX4TzxmuGZLxHQqk6rufArI80qldMNuew&s',
    tags: [ 'WordPress', 'MySQL','In Process'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'ProductyFlow',
    subtitle: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
    tags: ['Javascript' , 'Spring Boot', 'MySQL','In Process'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Encuest Website',
    subtitle: 'Encuest Website',
    description: 'A weather application that displays current conditions and forecasts using external APIs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Nodejs', 'Express', 'MySQL','In Process'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Weather Dashboard',
    subtitle: 'Weather Dashboard',
    description: 'A weather application that displays current conditions and forecasts using external APIs.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    tags: ['HTML5', 'CSS3', 'Javascript', 'React', 'API REST','In Process'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Local ProductyFlow',
    subtitle: 'Task Management App',
    description: 'This is the local version without server of ProductyFlow.',
    image: myImage,
    tags: ['HTML5', 'CSS3', 'Javascript'],
    liveUrl: 'https://localproductyflow.pages.dev/',
    githubUrl: 'https://github.com/Jer403/localproductyflow'
  },
{
    title: '[Jet to find] Studio',
    subtitle: 'Studio store',
    description: "A store website for the 
 Studio's games",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: [ 'React', 'Node.js', 'Express', 'MySQL','In Process'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title,subtitle, description, image, tags, liveUrl, githubUrl }: {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}