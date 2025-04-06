import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">문의하기</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="bg-gray-50 p-8 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-600">연락처</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-gray-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <div>
                        <h3 className="font-medium text-gray-900">이메일</h3>
                        <p className="text-gray-700">gokite28@naver.com</p>
                      </div>
                    </div>
                    {/* <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <div>
                        <h3 className="font-medium text-gray-900">전화번호</h3>
                        <p className="text-gray-700">010-1234-5678</p>
                      </div>
                    </div> */}
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-gray-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <h3 className="font-medium text-gray-900">주소</h3>
                        <p className="text-gray-700">서울특별시 마포구</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-gray-600">소셜 미디어</h2>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-600 transition">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/watch?v=bAnGaEhcaRI" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                    <a href="https://notefolio.net/imcom1ng" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition">
                      <svg className="w-8 h-8" viewBox="0 0 20 13" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          fill="#4B5563" 
                          d="M18.8465 5.95162L13.1188 0.0594973C13.0983 0.0395263 13.0711 0.0283946 13.0429 0.0283946C13.0147 0.0283946 12.9875 0.0395263 12.967 0.0594973L9.74661 3.37234C9.6636 3.44441 9.55849 3.48394 9.44987 3.48394C9.34125 3.48394 9.23614 3.44441 9.15314 3.37234L5.90974 0.0311027C5.88924 0.0111316 5.86207 0 5.83383 0C5.80559 0 5.77843 0.0111316 5.75793 0.0311027L0.0302347 5.92323C0.010821 5.94432 0 5.97226 0 6.00131C0 6.03036 0.010821 6.05831 0.0302347 6.07941L5.75793 11.9668C5.76696 11.9777 5.77828 11.9863 5.79103 11.9921C5.80378 11.9978 5.81763 12.0005 5.83154 11.9999C5.84609 12.0002 5.86054 11.9975 5.874 11.9918C5.88746 11.9861 5.89962 11.9776 5.90974 11.9668L9.15774 8.62556C9.23566 8.55601 9.3352 8.51739 9.43837 8.51671C9.54921 8.51932 9.65539 8.56302 9.7374 8.63976L12.9578 11.9526C12.9668 11.9635 12.9781 11.9721 12.9909 11.9779C13.0036 11.9836 13.0175 11.9863 13.0314 11.9857C13.046 11.986 13.0604 11.9833 13.0739 11.9776C13.0873 11.9719 13.0995 11.9634 13.1096 11.9526L18.8373 6.06521C18.8484 6.04879 18.8551 6.02964 18.8568 6.00969C18.8584 5.98974 18.8548 5.96971 18.8465 5.95162Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-600">메시지 보내기</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-gray-600" 
                      placeholder="이름을 입력하세요" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-gray-600" 
                      placeholder="이메일을 입력하세요" 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-gray-600" 
                      placeholder="제목을 입력하세요" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">메시지</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-gray-600" 
                      placeholder="메시지를 입력하세요"
                    ></textarea>
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-gray-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                      보내기
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 