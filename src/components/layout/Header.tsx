'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-white">
          황가연 <span className="text-primary-400">PD</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
} 