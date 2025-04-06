import Hero from '@/components/home/Hero';
import LatestWorks from '@/components/home/LatestWorks';
import Testimonials from '@/components/home/Testimonials';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <LatestWorks />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </>
  );
}
