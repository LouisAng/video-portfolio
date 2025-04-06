'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getYoutubeVideoId, getYoutubeThumbnailUrl, Project } from '@/data/projects';
import VideoPlayer from '@/components/ui/VideoPlayer';

// 유효한 썸네일 최소 너비
const MIN_VALID_THUMBNAIL_WIDTH = 300;

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(true); // 비디오 또는 메인 이미지 표시 여부
  const [thumbnailError, setThumbnailError] = useState(false);
  const [isYoutubeRestricted, setIsYoutubeRestricted] = useState(false);
  const thumbnailCheckRef = useRef<boolean>(false); // 썸네일 체크 여부를 추적
  
  // YouTube 영상 ID와 썸네일 URL 가져오기
  const youtubeVideoId = project.youtubeUrl ? getYoutubeVideoId(project.youtubeUrl) : null;
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
    <div className="container mx-auto px-4">
      <div className="mb-6">
        <Link href="/portfolio" className="text-primary-500 hover:text-primary-600 inline-flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          포트폴리오로 돌아가기
        </Link>
      </div>
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1 text-gray-400" 
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{project.client}</span>
          </div>
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1 text-gray-400" 
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{project.date}</span>
          </div>
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1 text-gray-400" 
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>{project.category}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-6">
            {showPreview ? (
              <VideoPlayer
                videoUrl={project.mainVideo}
                thumbnail={project.thumbnail}
                youtubeUrl={project.youtubeUrl}
                className="aspect-video"
              />
            ) : (
              // 선택된 이미지 표시
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={project.images[selectedImageIndex]}
                  alt={`${project.title} 이미지 ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {/* 비디오 썸네일 추가 */}
            <button
              onClick={() => {
                setShowPreview(true);
              }}
              className={`relative aspect-video rounded-md overflow-hidden ${
                showPreview ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gray-200" />
              <Image
                src={thumbnailToUse}
                alt={`${project.title} 비디오`}
                fill
                className="object-cover"
                unoptimized={!!youtubeThumbnail && !thumbnailError && !isYoutubeRestricted}
                onError={() => setThumbnailError(true)}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary-600/80 rounded-full p-1 shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
            
            {/* 프로젝트 이미지 썸네일 */}
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImageIndex(index);
                  setShowPreview(false);
                }}
                className={`relative aspect-video rounded-md overflow-hidden ${
                  !showPreview && selectedImageIndex === index ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gray-200" />
                <Image
                  src={image}
                  alt={`${project.title} 이미지 ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-600">프로젝트 정보</h2>
            <p className="text-gray-700 mb-6" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
            
            <h3 className="font-bold text-gray-600 mb-2">사용 도구</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            {project.testimonial && (
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <div className="flex items-center">
                  <div>
                    <div className="italic font-medium text-gray-600 mb-4">{project.testimonial.text}</div>
                    <div className="text-gray-500 text-sm" style={{ whiteSpace: 'pre-line' }} >{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block w-full py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              비슷한 프로젝트 문의하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 