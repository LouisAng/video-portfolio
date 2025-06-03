import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VideoGrid from '@/components/portfolio/VideoGrid';
import { getAllProjects } from '@/data/projects';
import Link from 'next/link';

export default function Portfolio() {
  const projects = getAllProjects();
  
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">포트폴리오</h1>
            <Link href="https://notefolio.net/imcom1ng" 
                  target="_blank" 
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-bold transition-colors text-sm"
            >더 많은 포트폴리오 보기</Link>
            </div>
            <p className="text-gray-600 max-w-2xl">
              다양한 분야에서의 작업물을 살펴보세요. 각 프로젝트는 클라이언트의 요구사항과 
              브랜드 가치를 고려하여 최적의 편집 스타일로 완성되었습니다.
            </p>
          </div>
          <VideoGrid projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
} 