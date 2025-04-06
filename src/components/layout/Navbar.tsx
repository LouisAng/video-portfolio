'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/portfolio', label: '포트폴리오' },
  { href: '/about', label: '소개' },
  { href: '/contact', label: '문의하기' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      {/* 모바일 메뉴 버튼 */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="메뉴 열기"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* 데스크톱 메뉴 */}
      <ul className="hidden md:flex md:items-center md:gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                pathname === link.href ? 'text-primary-400' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="absolute top-8 right-0 w-48 py-2 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-sm ${
                    pathname === link.href ? 'text-primary-400' : 'text-white'
                  } hover:bg-white/10`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
} 