'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface VideoGridProps {
  projects: Project[];
}

export default function VideoGrid({ projects }: VideoGridProps) {
  const [category, setCategory] = useState<string | null>(null);
  const categories = [...new Set(projects.map(project => project.category))];
  
  const filteredProjects = category
    ? projects.filter(project => project.category === category)
    : projects;
  
  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category === null
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          전체
        </button>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === cat
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
} 