'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgroundVideos = [
    '/videos/projects/nike-preview.mp4',
    '/videos/projects/documentary-preview.mp4',
    '/videos/projects/music-video-preview.mp4'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundVideos.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {/* 실제 영상이 없으므로, 검은 배경으로 대체합니다 */}
        <div className="absolute inset-0 w-full h-full bg-black">
          {/* 실제 프로젝트에서는 아래 주석을 해제하여 비디오를 표시합니다 */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={backgroundVideos[currentIndex]}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="block">이야기를 만드는</span>
          <span className="block mt-2 text-primary-400">영상 편집자 황가연</span>
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          Z세대 감각으로, 브랜드의 무드를 더하는 영상 PD
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-bold transition-colors">
            포트폴리오 보기
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-bold transition-colors">
            문의하기
          </Link>
          <Link href="https://notefolio.net/imcom1ng" target="_blank" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-bold transition-colors">
            더 많은 포트폴리오 보기
          </Link>
        </div>
      </div>
    </div>
  );
} 