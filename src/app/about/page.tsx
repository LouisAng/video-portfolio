import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">안녕하세요, 황가연입니다</h1>
            <div className="flex justify-center mb-8">
              <Image src="/images/about/about_me.png" alt="About Me" width={150} height={150} />
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-10">
              <p className="text-xl text-gray-700 mb-6">
                기획부터 컷편집까지, 감각으로 밀어붙이는 25살 영상 PD
              </p>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-600">내 이야기</h2>
                <p className="mb-4 text-gray-600">
                  대학에서 신문 방송학을 전공한 후, 기획부터 편집, 모션그래픽까지 한 프로젝트의 처음과 끝을 책임지는 콘텐츠 제작자입니다.
                  영상의 목적과 흐름을 읽고, 브랜드가 원하는 무드를 감각적으로 풀어내는 데 집중해왔습니다.
                </p>
                <p className="mb-4 text-gray-600">
                  숏폼, 인터뷰, 애니메이션, 광고 등 다양한 포맷을 경험하며 실무의 속도와 기준을 익혔고,
                  툴은 물론, 트렌드와 팀워크까지 놓치지 않기 위해 꾸준히 공부하고 있습니다.
                </p>
                <p className="mb-4 text-gray-600">
                  익숙함보다는 새로움을, 평범함보다는 한 끗 차이를 추구합니다.
                  오늘도 더 나은 콘텐츠를 위해 한 컷, 한 컷 고민하며 일하고 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-600">기술 스택</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Adobe Premiere Pro</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Adobe After Effects</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Adobe Illustrator</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Final Cut Pro</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Adobe Photoshop</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-600">전문 분야</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">메타 광고 제작</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">웹 예능 제작</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">정보성 콘텐츠 제작</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">SNS 콘텐츠 제작</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">모션 그래픽 디자인</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-600">경력 사항</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-600 pl-4">
                    <h3 className="text-xl font-semibold text-gray-600">주니어 영상 편집자</h3>
                    <p className="text-gray-600">서울 광고대행사 | 2024년 - 재직 중</p>
                    <p className="text-gray-600">부산 프로덕션 &nbsp;&nbsp; | 2023년 - 2024년</p>
                    <p className="text-gray-600">울산 프로덕션 &nbsp;&nbsp; | 2022년 - 2023년</p>
                    <p className="italic mt-2 text-gray-600">웹 예능 제작 및 편집 작업을 수행했습니다.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-600">교육</h2>
                <div className="border-l-4 border-gray-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-600">신문방송학과</h3>
                  <p className="text-gray-600"> 2019년 - 2022년</p>
                  <p className="italic mt-2 text-gray-600">신문방송학과 및 문화콘텐츠학과 학사 학위 취득</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 