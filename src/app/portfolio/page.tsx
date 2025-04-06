import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VideoGrid from '@/components/portfolio/VideoGrid';
import { getAllProjects } from '@/data/projects';

export default function Portfolio() {
  const projects = getAllProjects();
  
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">포트폴리오</h1>
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