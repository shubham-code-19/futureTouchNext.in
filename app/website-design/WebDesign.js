"use client";
import React, { useEffect } from "react";
import company from "../Assets/about-service.webp";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import service1 from "../Assets/service-img-1_1.webp";
import service2 from "../Assets/service-img-2.webp";
import service3 from "../Assets/service-img-3.webp";
import service4 from "../Assets/service-img-4.webp";

const WebDesign = () => {


  return (
    <>
      {/* Spacer */}
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#442a79] h-[360px] max-sm:h-auto max-lg:h-auto">
        <div className="px-28 max-sm:px-5 max-lg:px-10 pt-14 max-sm:py-7 max-lg:py-5">
          <h1 className="text-white font-bold text-4xl max-sm:text-2xl max-lg:text-xl">
            WEBSITE DESIGN & DEVELOPMENT SERVICES
          </h1>
          <div className="text-[#dcd7f8] mt-3 text-lg text-justify max-lg:text-base">
            <p>
              The biggest challenge faced by any small business is to expand
              its customer base. With the rising expenses of electronic and
              print media, the only option left for the small business owners
              is to create a strong digital presence. A professionally
              developed website for small business is the first step toward
              achieving this aim.{" "}
              <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                Future IT Touch Pvt. Ltd.
              </span>{" "}
              company providing a range of business website design services to
              clients worldwide. Our small business website design services are
              customized exclusively for startups at affordable rates. In the
              last 15 years, we have delivered effective web solutions to a
              number of small businesses and helped them enhance their growth
              online.
            </p>
          </div>

          <div className="flex gap-3 mt-5">
            <Link
              href="/contact"
              className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
            >
              Quick Enquiry
            </Link>

            <a
              href="tel:+917056937000"
              className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2 sm:px-8 font-heading"
            >
              Call us - 7056937000
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-10 p-5 sm:p-5 md:p-5 lg:p-8 choose-background">
        <div className="grid grid-cols-1 md:grid-cols-2 p-20 max-sm:p-5 max-lg:p-10">
          <div>
            <img
              className="relative z-10 rounded w-full lg:w-11/12 h-full object-cover"
              src={company.src}
              alt="About Company"
            />
          </div>
          <div>
            <div className="common-heading text-left max-sm:pt-10">
              <span className="text-lg text-[#e60072]">
                What our clients say about Future IT Touch Pvt. Ltd.
              </span>
              <h3 className="text-4xl sm:text-2xl md:text-5xl mt-5 mb-8 font-bold">
                Website For Small Business & Startups
              </h3>
              <p className="leading-7 text-lg text-justify text-[#6a6a8e]">
                Rise from a startup to an established brand. Whether you run a
                small business or have invested in a startup, we can build a
                professional website for business at a very reasonable price
                point. We use the latest technologies, create attractive design
                layouts and develop business oriented features to upscale user
                experience. A well-built website for small businesses can
                convert visitors into buyers by creating a strong impression
                within their target audience. This in turn increases revenue and
                helps your business grow.
              </p>
              <button className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center mt-7 text-white px-6 py-4 text-base font-semibold rounded-full">
                Learn More <FaAngleRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="service-section service-2 py-20 max-lg:py-10">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 text-center">
            <span className="text-lg text-[#e60072] uppercase">
              Services We’re Provided
            </span>
            <h2 className="text-5xl max-sm:text-3xl font-bold mt-4 mb-8">
              Our Web Development Services
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 max-sm:block md:grid-cols-1 lg:grid-cols-2 px-40 max-sm:px-5 max-lg:px-5 my-10">
          {/* Service Card */}
          <div className="flex bg-[#e9ddff] rounded-lg shadow-lg p-10 max-sm:p-4">
            <div className="text-[#6a6a8e]">
              <span className="text-lg">APP</span>
              <h4 className="text-2xl font-bold mt-4 mb-4 text-[#050748]">
                Web Application Development
              </h4>
              <Link href="/web-app-development" className="flex text-lg items-center">
                Learn More <FaAngleRight className="ml-2" />
              </Link>
            </div>
            <div className="w-64">
              <img src={service1.src} alt="Web App" />
            </div>
          </div>

          {/* Repeat other 3 cards with href instead of to */}
          <div className="flex bg-[#ffdadb] rounded-lg shadow-lg p-10 max-sm:p-4">
            <div className="text-[#6a6a8e]">
              <span className="text-lg uppercase">marketing</span>
              <h4 className="text-2xl font-bold mt-4 mb-4 text-[#050748]">
                Small Business Website
              </h4>
              <Link href="/business-developement" className="flex text-lg items-center">
                Learn More <FaAngleRight className="ml-2" />
              </Link>
            </div>
            <div className="w-64">
              <img src={service2.src} alt="Small Business Website" className="w-52" />
            </div>
          </div>

          <div className="flex bg-[#d6edff] rounded-lg shadow-lg p-10 max-sm:p-4">
            <div className="text-[#6a6a8e]">
              <span className="text-lg">CMS</span>
              <h4 className="text-2xl font-bold mt-4 mb-4 text-[#050748]">
                CMS Web Development
              </h4>
              <Link href="/cms-development" className="flex text-lg items-center">
                Learn More <FaAngleRight className="ml-2" />
              </Link>
            </div>
            <div className="w-64">
              <img src={service3.src} alt="CMS" className="w-52" />
            </div>
          </div>

          <div className="flex bg-[#ffede1] rounded-lg shadow-lg p-10 max-sm:p-4">
            <div className="text-[#6a6a8e]">
              <span className="text-lg">WEBSITE DESIGN</span>
              <h4 className="text-2xl font-bold mt-4 mb-4 text-[#050748]">
                Website Design & Development
              </h4>
              <Link
                href="/web-app-developemnt-corporate"
                className="flex text-lg items-center"
              >
                Learn More <FaAngleRight className="ml-2" />
              </Link>
            </div>
            <div className="w-64">
              <img src={service4.src} alt="Website Design" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="bg-custome py-10 px-4 sm:px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <h1 className="text-[#050748] text-3xl font-bold">
            Get New Insights Weekly
          </h1>
          <p className="mt-4">
            Your Personal data is secure as per our policy we don’t share your
            personal information, <br /> Freely Subscribe!
          </p>
        </div>
        <div className="relative md:col-span-6 w-full lg:w-11/12 top-5">
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Email Your Address"
              name="emails"
              className="w-full h-16 px-8 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="inline-flex items-center absolute top-0 right-0 mr-1 mt-1 px-4 py-2 text-base font-medium rounded-full text-white bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{
                borderRadius: "28px 100px 100px 28px",
                lineHeight: "40px",
              }}
            >
              Subscribe <FaChevronRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WebDesign;
