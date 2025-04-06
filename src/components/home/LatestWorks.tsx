'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLatestProjects } from '@/data/projects';
import ProjectCard from '@/components/portfolio/ProjectCard';

export default function LatestWorks() {
  const latestProjects = getLatestProjects(3);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">최근 작업물</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            이야기가 머무는 영상, 감각이 살아있는 편집.
            최근 제가 가장 집중한 결과물들을 소개합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/portfolio" 
            className="px-8 py-3 border border-primary-500 text-gray-600 hover:bg-primary-50 rounded-full font-medium transition-colors"
          >
            모든 작업물 보기
          </Link>
        </div>
      </div>
    </section>
  );
} 