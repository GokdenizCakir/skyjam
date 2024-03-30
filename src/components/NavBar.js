import { useState } from "react";
import logo from "../images/jam_logo.png";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow h-[10vh] fixed  items-center flex z-50 opacity-90 animate__animated animate__fadeInDown">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:mr-none   ">
        <div className="md:px-4 md:mr-[10vh]">
          <div className="flex items-center justify-between   md:block">
            <a href="#">
              <div className="flex">
                <div className="w-[15vh]">
                  <img src={logo} className="object-scale-down" />
                </div>
                {
                  <div className=" flex  items-center select-none">
                    <h2 className="press2p  ">YILDIZ JAM</h2>
                  </div>
                }
              </div>
            </a>
          </div>
        </div>
        <div className="md:ml-[15vh]">
          <div
            className={`flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600  hover:bg-second border-4 duration-200 border-second rounded-2xl p-2">
                <a
                  href="javascript:void(0)"
                  className="flex text-second  hover:text-white  font-bold"
                >
                  {" "}
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  ANASAYFA
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 border-4 border-first rounded-2xl p-2">
                <a
                  href="https://linktr.ee/ytuskylab"
                  className="flex text-first font-bold "
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  HAKKIMIZDA
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 border-4 border-pink-700 rounded-2xl p-2">
                <a
                  href="mailto:yildizskylab@gmail.com"
                  className="flex text-pink-700 font-bold"
                >
                  {" "}
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  İLETİŞİME GEÇ
                </a>
              </li>
              <li className="text-gray-600 hover:text-blue-600 border-4 border-first rounded-2xl p-2">
                <a
                  href="https://linktr.ee/skylabytu"
                  target="_blank"
                  className="flex text-first font-bold "
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  KAYIT OL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
