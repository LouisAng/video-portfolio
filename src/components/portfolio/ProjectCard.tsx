'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project, getYoutubeThumbnailUrl } from '@/data/projects';
import VideoPlayer from '@/components/ui/VideoPlayer';

// 유효한 썸네일 최소 너비
const MIN_VALID_THUMBNAIL_WIDTH = 300;

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [isYoutubeRestricted, setIsYoutubeRestricted] = useState(false);
  const thumbnailCheckRef = useRef<boolean>(false); // 썸네일 체크 여부를 추적
  
  // YouTube 썸네일 URL 가져오기
  const youtubeThumbnail = project.youtubeUrl && !thumbnailError ? 
    getYoutubeThumbnailUrl(project.youtubeUrl, 'maxresdefault') : null;
  
  // 실제 사용할 썸네일 URL
  const thumbnailToUse = youtubeThumbnail && !isYoutubeRestricted ? youtubeThumbnail : project.thumbnail;
  
  // YouTube 썸네일 유효성 확인 (일부 공개 비디오 확인)
  useEffect(() => {
    if (youtubeThumbnail && !thumbnailCheckRef.current) {
      thumbnailCheckRef.current = true; // 중복 체크 방지
      
      const img = new window.Image();
      img.onload = () => {
        // 이미지 크기로 유효성 확인 (기본 썸네일이나 오류 이미지는 작은 크기)
        if (img.width < MIN_VALID_THUMBNAIL_WIDTH) {
          console.log('YouTube 비디오가 일부 공개 상태이거나 제한적 상태입니다.');
          setIsYoutubeRestricted(true);
        } else {
          setIsYoutubeRestricted(false);
        }
      };
      
      img.onerror = () => {
        console.log('YouTube 썸네일 로딩 실패, 프로젝트 썸네일을 사용합니다.');
        setThumbnailError(true);
      };
      
      img.src = youtubeThumbnail;
    }
  }, [youtubeThumbnail]);
  
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div
        className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video">
          {isHovered ? (
            <VideoPlayer
              videoUrl={project.previewVideo}
              thumbnail={thumbnailToUse}
              youtubeUrl={project.youtubeUrl}
              autoPlay={project.previewVideo ? true : false}
            />
          ) : (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gray-200" />
              {/* 실제 이미지 표시 */}
              <Image
                src={thumbnailToUse}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized={!!youtubeThumbnail && !thumbnailError && !isYoutubeRestricted}
                onError={() => setThumbnailError(true)}
              />
              {project.youtubeUrl && (
                <div className="absolute inset-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                  <div className="bg-primary-600/80 rounded-full p-2 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 text-primary-800">
              {project.category}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{project.client}</p>
          <p className="text-gray-800 text-sm line-clamp-2">{project.description}</p>
          
          <div className="mt-4 flex gap-2 flex-wrap">
            {project.tools.slice(0, 2).map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                +{project.tools.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}