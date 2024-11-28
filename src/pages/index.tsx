import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const MainPage = () => {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto text-center">
        <p className="text-base/7 font-semibold text-indigo-600">
          프론트엔드 지원 - 윤수빈 포트폴리오
        </p>
        <h2 className="mt-6 text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          사용자 경험을 최우선으로
        </h2>
        <div className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          <p>
            저는 기술과 디자인의 완벽한 조화를 이루며, 웹에서 사용자가 경험하는
          </p>
          <p>모든 순간을 혁신적으로 개선하는 데 열정을 다하고 있습니다.</p>
        </div>

        <div className="mt-4 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          <p>
            효율적이고 직관적인 인터페이스를 통해 복잡한 문제를 간단하고
            명확하게 해결하며,
          </p>
          <p>
            언제나 더 나은 사용자 경험을 제공하기 위해 끊임없이 배우고 성장하는
            개발자입니다.
          </p>
        </div>
      </div>
      <p className="my-20 mx-auto border-t border-[rgba(55,53,47,0.16)] w-1/3"></p>
      <div className="mx-auto">
        <h2 className="text-center mt-10 mb-20 text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Project
        </h2>
        <div className="mx-auto text-center">
          <div>
            <p className="font-semibold mb-2">프로젝트 개요</p>
            <ul className="text-sm">
              <li>프로젝트명 : 쇼핑몰</li>
              <li>목표 : 웹 기반 쇼핑몰 개발, 상품 판매 시스템 제공</li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="font-semibold mb-2">기능 정의</p>
            <ul className="text-sm">
              <li className="">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-sm mr-3 w-auto text-indigo-600"
                />
                사용자 인증 시스템 : 로그인 및 회원가입
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-sm mr-3 w-auto text-indigo-600"
                />
                상품 목록 및 상세 페이지
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-sm mr-3 w-auto text-indigo-600"
                />
                장바구니 및 좋아요
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-sm mr-3 w-auto text-indigo-600"
                />
                결제 및 주문 내역
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="my-20 mx-auto border-t border-[rgba(55,53,47,0.16)] w-1/3"></p>
      <div className="mx-auto">
        <h2 className="text-center mt-10 mb-20 text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Skills and Tools
        </h2>
        {/* 프론트 개발 */}
        <div className="flex justify-center gap-x-20 py-5">
          <p className="w-[150px] font-semibold">Frontend</p>
          <div className="grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                alt="React Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                width={22}
                height={22}
                className="col-span-2 object-contain lg:col-span-1 mr-2"
              />
              React
            </div>
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                src="https://vitejs.dev/logo.svg"
                alt="Vite Logo"
                width={22}
                height={22}
                className="col-span-2 object-contain lg:col-span-1 mr-2"
              />
              Vite
            </div>
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt="GraphQL Logo"
                width={22}
                height={22}
                className="col-span-2 object-contain lg:col-span-1 mr-2"
              />
              tailwind
            </div>
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                src="assets/images/ts_logo.svg"
                alt="typeScript Logo"
                width={22}
                height={22}
                className="col-span-2 object-contain lg:col-span-1 mr-2"
              />
              TypeScript
            </div>
          </div>
        </div>
        {/* 상태 */}
        <div className="flex justify-center gap-x-20 py-5">
          <p className="w-[150px] font-semibold">State</p>
          <div className="grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                src="https://recoiljs.org/img/logo.svg"
                alt="Recoil Logo"
                width={70}
                height={22}
                className="col-span-2 max-h-12 object-contain lg:col-span-1"
              />
            </div>
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                src="https://tanstack.com/_build/assets/logo-color-100w-br5_Ikqp.png"
                alt="TanStack Logo"
                width={22}
                height={22}
                className="col-span-2 object-contain lg:col-span-1 mr-2"
              />
              <div>
                <p>TanStack</p>
                <p>(React-query)</p>
              </div>
            </div>
          </div>
        </div>
        {/* 백엔드 및 API */}
        <div className="flex justify-center gap-x-20 py-5">
          <p className="w-[150px] font-semibold">Backend / API</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                src="https://graphql.org/img/logo.svg"
                alt="GraphQL Logo"
                width={22}
                height={22}
                className="col-span-2 object-contain lg:col-span-1 mr-2"
              />
              GraphQL
            </div>
            <div className="w-[205px] h-[60px] px-[12px] py-[16px] rounded-[4px] border border-[rgba(55,53,47,0.16)] flex items-center font-semibold text-[#3c3c43] text-md">
              <img
                src="https://mswjs.io/_astro/msw.ChZQPzKa.svg"
                alt="Mock Service Worker Logo"
                width={22}
                height={22}
                className="col-span-2 object-contain lg:col-span-1 mr-2"
              />
              MSW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
