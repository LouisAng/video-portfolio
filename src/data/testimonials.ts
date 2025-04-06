export interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: '황가연 편집자와 함께한 작업은 언제나 기대 이상의 결과물을 만들어냅니다. 그의 미학적 감각과 기술적 완성도는 타의 추종을 불허합니다.',
    author: '김태호',
    position: 'PD',
    company: 'MBC 예능 제작부',
    image: '/images/testimonials/testimonial-1.jpg',
    rating: 5
  },
  {
    id: 2,
    text: '세 번의 공동 작업을 통해 그의 영상 편집 능력뿐 아니라 프로젝트에 임하는 책임감과 소통 능력도 매우 뛰어남을 알 수 있었습니다.',
    author: '이지원',
    position: '크리에이티브 디렉터',
    company: '현대자동차',
    image: '/images/testimonials/testimonial-2.jpg',
    rating: 5
  },
  {
    id: 3,
    text: '짧은 시간 내에 저희의 콘셉트를 정확히 이해하고 브랜드 메시지를 효과적으로 전달하는 영상을 제작해주셨습니다. 다음 프로젝트도 함께 하고 싶습니다.',
    author: '박미영',
    position: '마케팅 담당자',
    company: '삼성전자',
    image: '/images/testimonials/testimonial-3.jpg',
    rating: 5
  },
  {
    id: 4,
    text: '긴급한 일정에도 불구하고 퀄리티를 타협하지 않고 훌륭한 결과물을 만들어주셨습니다. 특히 음악과 영상의 조화가 인상적이었습니다.',
    author: '정성민',
    position: '프로듀서',
    company: '인디레코드',
    image: '/images/testimonials/testimonial-4.jpg',
    rating: 4
  }
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getFeaturedTestimonials(count = 3): Testimonial[] {
  return testimonials.slice(0, count);
} 