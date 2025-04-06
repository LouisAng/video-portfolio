'use client';

import { useRef, useState, useEffect } from 'react';
import useVideoPlayer from '@/hooks/useVideoPlayer';
import { getYoutubeVideoId, getYoutubeThumbnailUrl } from '@/data/projects';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  youtubeUrl?: string;
  autoPlay?: boolean;
  className?: string;
}

export default function VideoPlayer({ 
  videoUrl, 
  thumbnail, 
  youtubeUrl,
  autoPlay = false,
  className = ''
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const { togglePlay, handleTimeUpdate, progress, isMuted, toggleMute } = useVideoPlayer(videoRef);
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [isYoutubeRestricted, setIsYoutubeRestricted] = useState(false);
  const thumbnailCheckRef = useRef<boolean>(false);
  
  // YouTube 비디오 ID 및 썸네일 URL 추출
  const youtubeVideoId = youtubeUrl ? getYoutubeVideoId(youtubeUrl) : null;
  const youtubeThumbnail = youtubeUrl ? getYoutubeThumbnailUrl(youtubeUrl, 'maxresdefault') : null;
  
  // 실제 사용할 썸네일 URL 결정 (유튜브 썸네일 우선, 오류나 제한시 기본 썸네일)
  const thumbnailToUse = youtubeThumbnail && !thumbnailError && !isYoutubeRestricted 
    ? youtubeThumbnail 
    : thumbnail;
  
  // YouTube 썸네일 유효성 확인
  useEffect(() => {
    if (youtubeThumbnail && !thumbnailCheckRef.current) {
      thumbnailCheckRef.current = true; // 중복 체크 방지
      
      const img = new window.Image();
      img.onload = () => {
        // 이미지 크기로 유효성 확인 (유튜브 제한 비디오는 작은 기본 이미지 반환)
        if (img.width < 300) { // 최소 유효 썸네일 너비
          console.log('YouTube 비디오가 제한적 상태입니다. 기본 썸네일을 사용합니다.');
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
  
  const handleOpenYoutubeVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (youtubeUrl) {
      window.open(youtubeUrl, '_blank');
    }
  };
  
  const handleShowYoutubePlayer = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowYoutubePlayer(true);
  };

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('자동 재생이 차단되었습니다.');
      });
    }
  }, [autoPlay]);

  if (youtubeVideoId && showYoutubePlayer) {
    return (
      <div className={`relative rounded-lg overflow-hidden ${className}`}>
        <iframe 
          className="w-full h-full aspect-video"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`} 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        
        <div className="absolute top-2 right-2">
          <button
            onClick={handleOpenYoutubeVideo}
            className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            YouTube에서 보기
          </button>
        </div>
      </div>
    );
  }
  
  if (youtubeVideoId && !showYoutubePlayer) {
    return (
      <div className={`relative rounded-lg overflow-hidden group ${className}`}>
        <div className="relative w-full h-full aspect-video">
          <img 
            src={thumbnailToUse || undefined} 
            alt="비디오 썸네일" 
            className="w-full h-full object-cover"
            onError={() => {
              if (youtubeThumbnail) {
                setThumbnailError(true);
              }
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button
              onClick={handleShowYoutubePlayer}
              className="bg-primary-600/90 rounded-full p-3 shadow-lg hover:bg-primary-700/90 transition-colors mb-4"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            
            <button
              onClick={handleOpenYoutubeVideo}
              className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              YouTube에서 보기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-lg overflow-hidden group ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoUrl && videoUrl.trim() !== '' ? videoUrl : undefined}
        poster={thumbnail || undefined}
        onClick={() => togglePlay(setIsPlaying)}
        onTimeUpdate={handleTimeUpdate}
        playsInline
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4 cursor-pointer">
          <div
            className="bg-primary-500 h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              togglePlay(setIsPlaying);
            }}
            className="text-white bg-primary-500 hover:bg-primary-600 p-2 rounded-full transition-colors"
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMute();
            }}
            className="text-white p-2 hover:text-primary-400 transition-colors"
            aria-label={isMuted ? '음소거 해제' : '음소거'}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243a1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 