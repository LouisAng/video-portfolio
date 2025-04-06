'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getFeaturedTestimonials } from '@/data/testimonials';

export default function Testimonials() {
  const testimonials = getFeaturedTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 추천서</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            다양한 분야의 클라이언트들과 함께 작업해온 경험을 바탕으로 
            최상의 결과물을 제공해 드립니다.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute top-0 left-0 right-0 translate-x-8'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 bg-primary-800 rounded-full w-16 h-16 flex items-center justify-center">
                      {/* 실제 프로젝트에서는 아래 주석을 해제하여 이미지를 표시합니다 */}
                      {/* <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="rounded-full"
                      /> */}
                      <span className="text-2xl font-bold text-primary-300">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-xl italic mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-primary-400' : 'text-gray-600'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-500' : 'bg-gray-600'
                }`}
                aria-label={`추천서 ${index + 1} 보기`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 