import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectDetail from '@/components/portfolio/ProjectDetail';
import { getProjectBySlug, getAllProjectSlugs, getYoutubeVideoId } from '@/data/projects';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  // Next.js 15에서는 params를 await 해야 함
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <ProjectDetail project={project} />
        </div>
      </main>
      <Footer />
    </>
  );
} 