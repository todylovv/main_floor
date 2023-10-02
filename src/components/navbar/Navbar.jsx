import React, { useState, useEffect } from "react";
import logo from '../../assets/logo.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto relative">
        <div className="md:mx-6">
          <div className="flex items-center justify-between border-b border-orange-200 dark:border-gray-700 py-2 mt-0">
            <div>
              <div className="cursor-pointer" role="img" aria-label="luxe. Logo.">
                <img className="h-14 pl-4 lg:h-auto" src={logo} alt="" />
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="text-orange-600 pr-4 dark:text-orange-300 text-base focus:outline-none"
                onClick={toggleMenu}
              >
                {showMenu ? "✕" : "☰"} 
              </button>
              {showMenu && (
                <div
                  className="absolute mt-2 bg-white dark:bg-gray-900 border border-orange-200 dark:border-gray-700 shadow-md"
                  style={{
                    right: "0",
                    minWidth: "200px",
                  }}
                >
                  <ul className=" flex flex-col space-y-2 p-2">
                    <li>
                      <a href="javascript:void(0)" className=" dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                        Главная
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                        О нас
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                        Услуги
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                        Портфолио
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                        Связаться
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {windowWidth >= 768 && (
              <div className="hidden md:block">
                <ul className="flex items-center space-x-6">
                  <li>
                    <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                      О нас
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                      Портфолио
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="dark:text-white dark:hover-text-orange-300 text-base text-right text-orange-600 focus:outline-none focus:underline hover:underline">
                      Связаться
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
