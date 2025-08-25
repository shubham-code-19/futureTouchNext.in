"use client";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { usePathname } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

import Link from "next/link";
export default function Header() {
  const [fixed, setFixed] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const scrollHanlder = () => {
      if (window.scrollY > 400) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", scrollHanlder);

    return () => window.removeEventListener("scroll", scrollHanlder);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);

  const handleMouseLeaveSecond = () => {
    setIsSecond(false);
  };

  const handleMouseLeaveThird = () => {
    setIsThird(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    setIsSecond(false);
    setIsThird(false);
  };

  const handleMouseSecond = () => {
    setIsSecond(true);
    setIsOpen(false);
    setIsThird(false);
  };

  const handleMouseThird = () => {
    setIsSecond(false);
    setIsOpen(false);
    setIsThird(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path
      ? "bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text"
      : "";
  };

  return (
    <div
      className={`${
        fixed ? "bg-white top-0 shadow-md" : "pt-4"
      } px-5 md:px-8 xl:px-20 fixed z-10 w-full `}
    >
      <div className="bg-white flex items-center justify-between py-1 px-5 md:px-12 lg:px-5 xl:px-12 rounded-sm relative">
        <div>
          <img
            src="/images/Header/secondary-logo.webp"
            alt="header logo"
            className="w-[180px]  xl:w-[280px]"
          />
        </div>
        <ul className="hidden lg:flex items-center lg:gap-x-3 xl:gap-x-5">
          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <span className="group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-indigo-700 group-hover:text-transparent group-hover:bg-clip-text">
              Home
            </span>
          </li>

          <li onMouseEnter={handleMouseEnter} className="relative">
            <Link
              href="/about"
              className={`font-semibold flex gap-2 items-center py-2 px-3 icon-change md:hover:bg-transparent md:border-0 hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-700 hover:text-transparent hover:bg-clip-text md:p-0 dark:text-black ${isActive(
                "/about"
              )}`}
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-indigo-700 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                About
              </span>
              <span className="inline-block bg-gradient-to-r from-teal-400 group-hover:to-indigo-700  bg-clip-text transition duration-300">
                <IoMdAdd className=" text-indigo-700 group-hover:text-indigo-700" />
              </span>

             

              {isOpen && (
                <ul
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-8 left-0 mt-2 w-48 bg-white border-t-2 border-teal-400 to-indigo-700 shadow-lg "
                >
                  <li>
                    <Link
                      href="/why-us"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100  "
                    >
                      Why Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-team"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mission"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-portfolio"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Our Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/price"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Our Pricing Package
                    </Link>
                  </li>
                </ul>
              )}
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link
              href="/about"
              onMouseEnter={handleMouseSecond}
              className="flex gap-x-2 items-center"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-indigo-700 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Service
              </span>
              <span className="inline-block group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-indigo-700 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                <IoMdAdd className="text-indigo-700 group-hover:text-indigo-700" />
              </span>
             
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link
              href="/trending-technology"
              onMouseEnter={handleMouseThird}
              className="flex gap-x-2 items-center"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-indigo-700 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Technologies
              </span>
              <span className="">
                <IoMdAdd className="text-indigo-700 group-hover:text-indigo-700" />{" "}
              </span>
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link href="/blog" className="flex gap-x-2 items-center">
              <span className="group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-indigo-700 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Blogs
              </span>
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link href="/contact" className="flex gap-x-2 items-center">
              <span className="group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-indigo-700 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          {sidebarOpen ? <RxCross2 /> : <BiMenuAltRight />}
        </button>
        <button className="hidden lg:flex w-fit items-center bg-dark-200 justify-center text-white py-[15px] sm:py-[12px] px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-full text-xs sm:text-xs md:text-sm text-nowrap xl:text-base focus:outline-none hover:bg-gray-300 bg-gradient-to-r from-teal-400 to-indigo-700">
          Request A Quote
        </button>

        {/* Dropdowns  */}

        {isSecond && (
          <>
            <div
              className="hidden lg:flex gap-3 justify-around font-semibold border-t border-teal-400 to-indigo-700 px-5 pb-5 bg-white absolute top-[75px] left-0 w-full"
              onMouseLeave={handleMouseLeaveSecond}
            >
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="/website-design"
                    className="flex gap-3 px-4 py-4 font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Website Design{" "}
                    <img
                      src="/Assets/web-development.webp"
                      className="w-7 "
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ecommerce-website-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    eCommerce Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-app-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Web Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cms-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    CMS Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-developement"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Small Business Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-app-developemnt-corporate"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Corporate Website
                  </Link>
                </li>
              </ul>
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="/application-developement"
                    className="flex gap-3 py-[15px] px-[10px] font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Mobile App Development{" "}
                    <img
                      src="Assets/mobile-PPC-Management.webp"
                      className="w-7 "
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/android-application-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Android App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ios-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    IOS App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hybrid-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Hybrid App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mobile-application-testing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Mobile App Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quality-assurance"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Quality Assurance
                  </Link>
                </li>
              </ul>

              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="/digital-marketing-service"
                    className="flex gap-3 py-[15px] px-[10px]  font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Digital Marketing Service{" "}
                    <img
                      src="/Assets/social-media-marketing.webp"
                      className="w-7 "
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search-engine-optimization"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Seo Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pay-per-click-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    PPC Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social-media-marketing-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/local-search-engine-optimization"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Local Seo Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-marketing-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Content Marketing Services
                  </Link>
                </li>
              </ul>
              <ul className=" top-8 left-0 mt-2 w-84 bg-white font-semibold  ">
                <li className="border-b">
                  <Link
                    href="/graphic-design-services"
                    className="flex gap-3 px-4 py-4 font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Design & Branding
                    <img src="/Assets/cms_1.webp" className="w-7" alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logo-design-services"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-stationery-design"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Corporate Identity Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brochure-design-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Brochure Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/animated-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Animated Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/creative-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Creative Agency
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {isThird && (
          <>
            <div
              className="hidden lg:flex max-sm:block gap-3 justify-around font-semibold border-t border-teal-400 to-indigo-700 px-5 pb-5 bg-white absolute top-[75px] left-0 w-full"
              onMouseLeave={handleMouseLeaveThird}
            >
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-3 px-4 py-4  text-gray-800 font-semibold hover:bg-gray-100 "
                  >
                    Web Technology
                    <img
                      src="Assets/web-development.webp"
                      className="w-7 "
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/php-laravel-codeigniter-services"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    PHP-Laravel, Codeigniter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reactjs-vuejs-nodejs-development-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    React js, Vue js, Node js
                  </Link>
                </li>
                <li>
                  <Link
                    href="/asp-dot-net-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Asp .net
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-and-django-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Python-Django, flask
                  </Link>
                </li>
                <li>
                  <Link
                    href="/angularjs-development-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Angular
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wordpress-and-shopify-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    WP, Shopify, Joomla, Magento
                  </Link>
                </li>
              </ul>
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-2 px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100 "
                  >
                    Mobile Application{" "}
                    <img
                      src="Assets/mobile-PPC-Management.webp"
                      className="w-7 "
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/swift-app-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Swift
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-native-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    React native
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flutter-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Flutter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ionic-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Ionic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/java-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/unity-game-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    UNITY - 2D, 3D
                  </Link>
                </li>
              </ul>

              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-3 px-4 py-4 font-semibold  text-gray-800 hover:bg-gray-100 "
                  >
                    AI / ML{" "}
                    <img src="/Assets/ai-ml.webp" className="w-7 " alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-numpy-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Python-NumPy, Pandas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ruby-and-pybrain-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Ruby, Pybrain
                  </Link>
                </li>
                <li>
                  <Link
                    href="/java-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/julia-developement-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Julia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lisp-online-store-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Lisp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/haskell-ai-and-ml-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Haskell
                  </Link>
                </li>
              </ul>
              <ul className=" top-8 left-0 mt-2 w-84 bg-white   ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-3 px-4 py-4 font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Blockchain
                    <img src="/Assets/blockchain.webp" className="w-7" alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/c-plus-plus-blockchain-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    C++
                  </Link>
                </li>
                <li>
                  <Link
                    href="/java-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customer-polls-blockchain"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Customer Polls
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solidity-blockchain-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Solidity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/php-laravel-codeigniter-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    PHP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-blockchain-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Python
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* side bar  */}
      {sidebarOpen && (
        <>
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50"
          />
        </>
      )}

      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } duration-300 transition-transform fixed inset-y-0 left-0 p-4 md:w-[500px] w-full rounded-2xl bg-white text-black z-50 shadow-lg overflow-y-auto`}
      >
        <div className="shadow-lg p-6 flex flex-col">
          <button
            className="self-end mb-6 p-2 rounded focus:outline-none"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col gap-y-4">
            {[
              "Home",
              "About",
              "Service",
              "Technologies",
              "Blogs",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className="block py-2 px-3 hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-700 hover:text-transparent hover:bg-clip-text dark:text-black bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text"
              >
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-8 w-full flex items-center justify-center text-white py-3 px-4 font-heading transition duration-400 ease-in-out rounded-full text-base focus:outline-none hover:bg-gray-300 bg-gradient-to-r from-teal-400 to-indigo-700">
            Request A Quote
          </button>
        </div>
      </div>
    </div>
  );
}
