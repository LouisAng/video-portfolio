export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  client: string;
  date: string;
  thumbnail: string;
  previewVideo: string;
  mainVideo: string;
  description: string;
  tools: string[];
  images: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  youtubeUrl?: string;
}

/* 

  {
    id: ,
    slug: 'bugi-tube',
    title: '<부기튜브> 전 시리즈 제작',
    category: '예능',
    client: '부산시청',
    date: '2024-07-15',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: ``,
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    images: [
      '/images/projects/bugi_tube_001.png',
      '/images/projects/bugi_tube_002.png',
      '/images/projects/bugi_tube_003.png',
    ],
    testimonial: {
      text: `총 제작기간 2일`,
      author: '',
      position: `모션 구성 100%
                 최종 편집 100%`
    },
    youtubeUrl: ''
  },
*/

// YouTube URL에서 비디오 ID를 추출하는 함수
export function getYoutubeVideoId(url: string): string | null {
  if (!url) return null;
  
  // YouTube URL 패턴에서 비디오 ID 추출
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11) ? match[2] : null;
}

// YouTube 썸네일 URL 생성 함수
export function getYoutubeThumbnailUrl(videoUrl: string, quality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault' = 'hqdefault'): string | null {
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId) return null;
  
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'nongshim-animation',
    title: '<너구리 라면가게> 애니메이션 제작',
    category: '애니메이션',
    client: '농심',
    date: '2025-03-18',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `너구리 캐릭터의 세계관을 확장해, 라면 가게를 운영하는 컨셉으로 기획된 애니메이션입니다.

                  기획부터 스토리보드, 모션 구성, 후반 연출까지 전반을 에프터이펙트 기반으로 작업했습니다. 

                  브랜드 특유의 친근하고 위트 있는 느낌을 살리기 위해 움직임의 리듬감과 컷 간 흐름에 집중했으며, 시청자에게 짧지만 몰입도 높은 콘텐츠로 전달되도록 구성했습니다.`,
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    images: [
      '/images/projects/nongshim_nergul_001.png',
      '/images/projects/nongshim_nergul_002.png',
      '/images/projects/nongshim_nergul_003.png',
    ],
    testimonial: {
      text: `총 제작기간 3일`,
      author: '',
      position: `기획 및 스토리보드 작업 100%
             모션 구성 100%
             최종 편집 100%`
    },
    youtubeUrl: 'https://youtu.be/egwYP0JAuE4'
  },
  {
    id: 2,
    slug: 'tech-presso',
    title: '<테크프레소> 전 시리즈 제작',
    category: '정보성',
    client: '부산대학교 기술지주',
    date: '2023-08-22',
    thumbnail: '/images/projects/documentary-thumbnail.jpg',
    previewVideo: '/videos/projects/documentary-preview.mp4',
    mainVideo: '/videos/projects/documentary-main.mp4',
    description: `“기술이 비즈니스가 되는 공간, 오픈 기술 플랫폼”이라는 슬로건 아래 제작된 정보성 콘텐츠입니다.
                  복잡한 기술 개념을 시청자가 쉽게 이해할 수 있도록, AE를 활용한 모션 그래픽 기반의 직관적인 구성을 기획하고 연출했습니다.

                  기획, 디자인, 모션 전반을 단독으로 리드하며, 전문성과 친근함 사이의 균형을 유지하고
                  짧은 러닝타임 안에 핵심 메시지가 명확히 전달되는 것에 초점을 맞춰 제작하였습니다.

                  해당 콘텐츠는 클라이언트로부터 높은 만족도를 얻어, 추가 영상 제작 계약으로 이어졌으며 현재까지 지속적인 협업을 이어가고 있습니다.

                  브랜드 방향성과 시청자 이해도를 모두 고려한 결과물로, 정보 콘텐츠에 감각을 더한 대표 사례입니다.`,
    tools: ['Final Cut Pro', 'After Effects', 'Photoshop'],
    images: [
      '/images/projects/tech_presso_001.png',
      '/images/projects/tech_presso_002.png',
      '/images/projects/tech_presso_003.png',
    ],
    testimonial: {
      text: '총 제작기간 1일',
      author: '',
      position: `화면 구성 100%
                 모션 구성 100%
                 최종 편집 100%`
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=4L_Iq-_iwvo&t=3s'
  },
  {
    id: 3,
    slug: 'mind-interview',
    title: '브랜드 CEO 인터뷰',
    category: '인터뷰',
    client: '마인드리퍼블릭',
    date: '2024-07-15',
    thumbnail: '/images/projects/mind_interview_004.png',
    previewVideo: '/videos/projects/music-video-preview.mp4',
    mainVideo: '/videos/projects/music-video-main.mp4',
    description: `회사의 방향성과 조직 문화, ‘직원 성장’이라는 키워드를 중심으로 제작한 인터뷰 콘텐츠입니다.
                  단순한 질의응답 형식이 아닌, 대표님의 철학과 회사의 정체성이 자연스럽게 드러나도록 기획 단계부터 신경 썼습니다.

                  사전 인터뷰와 브랜드 리서치를 기반으로 질문 리스트를 직접 구성했으며,
                  대표님의 답변이 영상 흐름 속에서 자연스럽게 이어지도록 구성해 편집 리듬과 톤을 설계했습니다.
                  질문과 편집 모두에서 회사 내부 문화와 핵심 가치가 시청자에게 전달될 수 있도록 주안점을 두었습니다.`,
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    images: [
      '/images/projects/mind_interview_001.png',
      '/images/projects/mind_interview_002.png',
      '/images/projects/mind_interview_003.png',
    ],
    testimonial: {
      text: `총 제작기간 4일`,
      author: '',
      position: `기획 및 스크립트 작업 100%
                 모션 구성 100%
                 최종 편집 100%`
    },
    youtubeUrl: 'https://youtu.be/lJHaSs2YR_M'
  },
  {
    id: 4,
    slug: 'bugi-tube',
    title: '<부기튜브> 전 시리즈 제작',
    category: '예능',
    client: '부산시청',
    date: '2024-07-15',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `부산시 마스코트 ‘부기’가 등장하는 웹 예능 콘텐츠로,
                  Z세대 타깃에 맞춘 트렌디한 예능형 편집을 중심으로 제작한 영상입니다.
                  요즘 웹 예능의 흐름을 반영해, 밈과 리액션 중심의 컷 구성, 박자감 있는 자막과 효과음, 간결한 리듬 편집을 적용했습니다.

                  콘텐츠의 핵심 포인트가 시청자에게 자연스럽게 전달되도록 타이밍과 감정선의 흐름에 집중했고,
                  현장 상황과 촬영소스의 유동성에 맞춰 유연하게 구성을 재정비하며 웃음 포인트를 극대화했습니다.

                  기획 의도에 맞는 재미와 흐름을 구현하며, 클라이언트로부터 높은 만족을 얻은 예능 콘텐츠 편집의 대표 사례입니다.`,
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    images: [
      '/images/projects/bugi_tube_001.png',
      '/images/projects/bugi_tube_002.png',
      '/images/projects/bugi_tube_003.png',
    ],
    testimonial: {
      text: `총 제작기간 2일`,
      author: '',
      position: `모션 구성 100%
                 최종 편집 100%`
    },
    youtubeUrl: 'https://youtu.be/itMLq-Q023Q'
  },
  {
    id: 5,
    slug: 'busan-godsang',
    title: '<갓생림픽> 전 시리즈 제작',
    category: '다큐멘터리',
    client: '부산시청',
    date: '2023-11-21',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: 
    `부산광역시 공식 유튜브 채널의 콘텐츠로, ‘갓생’이라는 MZ세대 키워드와 도시 부산을 연결하는 기획형 다큐멘터리입니다.
    단순 정보 전달을 넘어서, 부산이라는 지역성과 ‘갓생’이라는 개념이 어떻게 교차되는지를 드러내는 편집 구조에 집중했습니다.

    인터뷰와 현장 영상의 흐름을 따라가면서도 스토리텔링과 감정선을 고려해 컷 구성,
    시청자가 부산이라는 도시의 매력뿐 아니라, ‘열심히 살아가는 사람들’의 서사에 공감할 수 있도록 조율했습니다.

    브랜드 다큐 콘텐츠임에도 트렌디한 연출 감각과 세심한 컷 흐름으로 완성도 있게 편집한 작업으로,
    내러티브 중심 편집 역량을 보여줄 수 있는 대표 사례입니다.
    `,
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    images: [
      '/images/projects/busan_godsang_001.png',
      '/images/projects/busan_godsang_002.png',
      '/images/projects/busan_godsang_003.png',
    ],
    testimonial: {
      text: `총 제작기간 2일`,
      author: '',
      position: 
      `촬영 30%
      화면 구성 100%
      최종 편집 100%
      `
    },
    youtubeUrl: 'https://youtu.be/QowLS0zbsKI'
  },
  {
    id: 6,
    slug: 'busan-esports',
    title: '<부산e스포츠경기장 스케치 영상>',
    category: '스케치',
    client: '부산e스포츠경기장',
    date: '2023-10-06',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `리그오브레전드, 스타크래프트, 오버워치 등 다양한 종목이 펼쳐진 부산이스포츠경기장의 현장을 스케치 형식으로 구성한 콘텐츠입니다.
                  현장 분위기를 생생하게 전달하기 위해 컷의 박자감, BGM의 리듬, 현장 사운드 조율에 중점을 두어 편집했습니다.

                  게임에 대한 이해를 바탕으로, 각 종목의 특성과 열기를 시청자가 느낄 수 있도록 시선과 리듬을 조절했으며
                  다양한 인게임 컷과 현장 촬영분의 믹스를 통해 역동성과 몰입감 있는 스케치 영상으로 완성했습니다.
                  `,
    tools: ['Adobe Premiere Pro', 'After Effects'],
    images: [
      '/images/projects/busan_esports_001.png',
      '/images/projects/busan_esports_002.png',
      '/images/projects/busan_esports_003.png',
    ],
    testimonial: {
      text: '총 제작기간 1일',
      author: '',
      position: 
      `촬영 30%
      최종 편집 100%
      `
    },
    youtubeUrl: 'https://www.youtube.com/watch?v=_TsKJ11fNwQ&t=85s'
  },
  {
    id: 7,
    slug: 'buldak-tv',
    title: '<불닭TV> 불닭 어드벤트 캘린더 언박싱',
    category: '정보성',
    client: '삼양',
    date: '2022-12-05',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `삼양 불닭TV에서 제작한 브랜드 협업 콘텐츠로, 유튜버 소영님을 메인 호스트로 구성된 언박싱 영상입니다.
                  정보 전달이 주요 목적이었지만, 시청자의 이탈을 막기 위해 예능적 요소를 적극 반영해 유쾌한 흐름으로 구성했습니다.

                  브랜드 메시지를 자연스럽게 녹여내기 위해 템포 있는 리듬 편집, 라면 별 자막, 포인트 효과음 등을 활용했으며,
                  소영님 특유의 캐릭터와 브랜드의 컨셉이 어긋나지 않도록 톤 조율과 연출 방향에 세심하게 신경 썼습니다.

                  기획부터 편집까지 전반을 담당했으며, 정보성과 재미를 동시에 잡은 브랜드 콘텐츠 사례입니다.
                  `,
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    images: [
      '/images/projects/buldak_tv_001.png',
      '/images/projects/buldak_tv_002.png',
      '/images/projects/buldak_tv_003.png',
    ],
    testimonial: {
      text: '총 제작기간 3일',
      author: '',
      position: 
      `촬영 30%
      기획 40%
      최종 편집 100%
      `
    },
    youtubeUrl: 'https://youtu.be/pGuzijTLPDI'
  },
  {
    id: 8,
    slug: 'buldak-mukbang',
    title: '<불닭TV> 불닭타임 먹방 영상',
    category: '먹방',
    client: '삼양',
    date: '2023-01-12',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `삼양 불닭TV의 공식 먹방 콘텐츠로, 유튜버 유노와 함께한 몰입형 먹방 영상입니다. 
                  먹는 장면에 집중할 수 있도록 불필요한 자막이나 장치 없이, 컷 분할과 리듬감 있는 편집으로 영상의 흐름을 조율했습니다.

                  콘셉트에 맞춰 소리와 표정 중심의 내러티브를 구성, 자극적인 편집 대신 자연스러운 호흡을 살리는 연출을 선택하였고
                  시청자가 음식과 호스트의 반응에 집중할 수 있도록 시선의 흐름을 정돈했습니다.

                  콘텐츠 목적에 따른 연출 톤 조절 능력을 보여준 작업입니다.
                  `,
    tools: ['Adobe Premiere Pro'],
    images: [
      '/images/projects/buldak_mukbang_001.png',
      '/images/projects/buldak_mukbang_002.png',
      '/images/projects/buldak_mukbang_003.png',
    ],
    testimonial: {
      text: '총 제작기간 2일',
      author: '',
      position: 
      `촬영 50%
      최종 편집 100%
      `
    },
    youtubeUrl: 'https://youtu.be/LPGNmquDuaQ'
  },
  {
    id: 9,
    slug: 'flora-christmas-1',
    title: '<플로나> 브랜드 크리스마스 메타광고 (1)',
    category: '메타광고',
    client: '플로나',
    date: '2024-12-25',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `브랜드 감성을 살린 시즌 캠페인 콘텐츠로
                ‘Holiday Mood’라는 컨셉 아래, 제품을 자연스럽게 녹여낸 크리에이티브 구성이 핵심이었습니다.

                에프터이펙트를 활용해 잔잔한 무드의 모션과 따뜻한 연출 톤을 적용했으며,
                브랜드 이미지와 시즌 감성을 동시에 담아낸 감각적인 시각 연출을 중심으로 편집 전반을 담당했습니다.

                제품 중심이 아닌 ‘감정 중심’의 캠페인 영상으로, 브랜드의 이미지 강화와 분위기 전달에 초점을 맞춘 작업입니다.
    `,
    tools: ['Adobe Premiere Pro', 'After Effects'],
    images: [
    ],
    testimonial: {
      text: '총 제작기간 1일',
      author: '',
      position: 
      `최종 편집 100%
      `
    },
    youtubeUrl: 'https://youtu.be/-xBhamaXfF4'
  },
  {
    id: 10,
    slug: 'flora-christmas-2',
    title: '<플로나> 브랜드 크리스마스 메타광고 (2)',
    category: '메타광고',
    client: '플로나',
    date: '2024-12-25',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `브랜드 감성을 살린 시즌 캠페인 콘텐츠로
                ‘Holiday Mood’라는 컨셉 아래, 제품을 자연스럽게 녹여낸 크리에이티브 구성이 핵심이었습니다.

                에프터이펙트를 활용해 잔잔한 무드의 모션과 따뜻한 연출 톤을 적용했으며,
                브랜드 이미지와 시즌 감성을 동시에 담아낸 감각적인 시각 연출을 중심으로 편집 전반을 담당했습니다.

                제품 중심이 아닌 ‘감정 중심’의 캠페인 영상으로, 브랜드의 이미지 강화와 분위기 전달에 초점을 맞춘 작업입니다.
    `,
    tools: ['Adobe Premiere Pro', 'After Effects'],
    images: [
    ],
    testimonial: {
      text: '총 제작기간 1일',
      author: '',
      position: 
      `최종 편집 100%
      `
    },
    youtubeUrl: 'https://youtu.be/YmiMtjC0f5Y'
  },
  {
    id: 11,
    slug: 'creative-team-meta-ad-1',
    title: '<크리에이티브팀> 메타광고 (1)',
    category: '메타광고',
    client: '크리에이티브팀',
    date: '2025-04-10',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `크리에이티브팀의 정체성과 감도를 효과적으로 전달하기 위해 제작한 팀 브랜딩용 메타광고 콘텐츠입니다.
요즘 트렌드를 반영해 자기소개형 포맷과 간결한 카피, 빠른 편집 템포로 구성하여
잠재 클라이언트가 단시간에 팀의 톤앤매너를 직관적으로 파악할 수 있도록 기획했습니다.

연출, 모션 구성까지 전반을 담당했으며, 내부 브랜딩에 콘텐츠적 감각을 더한 대표 작업물입니다.
브랜드 외부가 아닌, 내부를 콘텐츠화한 기획형 영상으로 조직의 아이덴티티를 시각적으로 풀어낸 작업입니다.
    `,
    tools: ['Adobe Premiere Pro', 'After Effects'],
    images: [
    ],
    testimonial: {
      text: '총 제작기간 1일',
      author: '',
      position: 
      `최종 편집 100%
      `
    },
    youtubeUrl: 'https://youtu.be/awp5eQ2YzJo'
  },
  {
    id: 12,
    slug: 'creative-team-meta-ad-2',
    title: '<크리에이티브팀> 메타광고 (2)',
    category: '메타광고',
    client: '크리에이티브팀',
    date: '2025-04-10',
    thumbnail: '',
    previewVideo: '',
    mainVideo: '',
    description: `크리에이티브팀의 정체성과 감도를 효과적으로 전달하기 위해 제작한 팀 브랜딩용 메타광고 콘텐츠입니다.
요즘 트렌드를 반영해 자기소개형 포맷과 간결한 카피, 빠른 편집 템포로 구성하여
잠재 클라이언트가 단시간에 팀의 톤앤매너를 직관적으로 파악할 수 있도록 기획했습니다.

연출, 모션 구성까지 전반을 담당했으며, 내부 브랜딩에 콘텐츠적 감각을 더한 대표 작업물입니다.
브랜드 외부가 아닌, 내부를 콘텐츠화한 기획형 영상으로 조직의 아이덴티티를 시각적으로 풀어낸 작업입니다.
    `,
    tools: ['Adobe Premiere Pro', 'After Effects'],
    images: [
    ],
    testimonial: {
      text: '총 제작기간 1일',
      author: '',
      position: 
      `최종 편집 100%
      `
    },
    youtubeUrl: 'https://youtu.be/BLuTsT6IR8A'
  },
  
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

export function getLatestProjects(count = 3): Project[] {
  return projects.slice(0, count);
} 