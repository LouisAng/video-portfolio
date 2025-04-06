import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              황가연 <span className="text-primary-400">PD</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              트렌디한 감각과 분석력을 갖춘 YOUTUBE / 상업 / 정보성 
            </p>
            <p className="text-gray-400 max-w-md">
              SNS 콘텐츠 전문 영상 편집자입니다.
            </p>
            <p className="text-gray-400 mb-4 max-w-md">
              귀하의 아이디어를 현실로 만들어 드립니다.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Vimeo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.983 7.523c-.072 1.596-.651 3.228-1.739 4.892-1.16 1.751-2.389 3.367-3.745 4.912-1.374 1.549-2.64 2.369-3.746 2.376-.637 0-1.177-.585-1.609-1.751-.875-3.204-1.266-5.041-1.734-5.517-.469-.477-1.209-.687-2.245-.645l-.673-1.463c.414-.565 1.224-1.339 2.447-2.317 1.225-.982 2.279-1.453 3.164-1.431.788.019 1.319.216 1.583.609.262.394.432.949.464 1.691.171 1.192.33 2.109.465 2.728.32.958.692 1.437 1.02 1.437.324 0 .714-.255 1.178-.764.464-.51.724-.957.779-1.335.099-.824-.324-1.229-1.247-1.229-.36 0-.738.071-1.147.191.673-2.454 2.127-3.628 4.359-3.527 1.567.053 2.313.799 2.226 2.143z" />
                </svg>
              </a> */}
              <a
                href="https://www.youtube.com/@%EB%A7%88%ED%8C%85-t5y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="https://notefolio.net/imcom1ng"
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-primary-400 transition-colors" 
                 aria-label="Notefolio">
                <svg className="w-8 h-8" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    fill="#9CA3AF" 
                    d="M18.8465 5.95162L13.1188 0.0594973C13.0983 0.0395263 13.0711 0.0283946 13.0429 0.0283946C13.0147 0.0283946 12.9875 0.0395263 12.967 0.0594973L9.74661 3.37234C9.6636 3.44441 9.55849 3.48394 9.44987 3.48394C9.34125 3.48394 9.23614 3.44441 9.15314 3.37234L5.90974 0.0311027C5.88924 0.0111316 5.86207 0 5.83383 0C5.80559 0 5.77843 0.0111316 5.75793 0.0311027L0.0302347 5.92323C0.010821 5.94432 0 5.97226 0 6.00131C0 6.03036 0.010821 6.05831 0.0302347 6.07941L5.75793 11.9668C5.76696 11.9777 5.77828 11.9863 5.79103 11.9921C5.80378 11.9978 5.81763 12.0005 5.83154 11.9999C5.84609 12.0002 5.86054 11.9975 5.874 11.9918C5.88746 11.9861 5.89962 11.9776 5.90974 11.9668L9.15774 8.62556C9.23566 8.55601 9.3352 8.51739 9.43837 8.51671C9.54921 8.51932 9.65539 8.56302 9.7374 8.63976L12.9578 11.9526C12.9668 11.9635 12.9781 11.9721 12.9909 11.9779C13.0036 11.9836 13.0175 11.9863 13.0314 11.9857C13.046 11.986 13.0604 11.9833 13.0739 11.9776C13.0873 11.9719 13.0995 11.9634 13.1096 11.9526L18.8373 6.06521C18.8484 6.04879 18.8551 6.02964 18.8568 6.00969C18.8584 5.98974 18.8548 5.96971 18.8465 5.95162Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-primary-400 transition-colors">
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">서울특별시 마포구</span>
              </li>
              {/* <li>
                <a href="tel:+82-10-1234-5678" className="text-gray-400 hover:text-primary-400 transition-colors">
                  010-1234-5678
                </a>
              </li> */}
              <li>
                <a href="mailto:gokite28@naver.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  gokite28@naver.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 황가연 PD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 