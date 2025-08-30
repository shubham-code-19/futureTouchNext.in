"use client";
import React from "react";
import gm from "../Assets/reactnative.webp";
import ec from "../Assets/cod.webp";
import d1 from "../Assets/Reactbft.webp";
import { FaChevronRight } from "react-icons/fa";
import { developmentData } from "../common/Service_comp";
import Link from "next/link";
import Head from "next/head";

const Native = () => {
  return (
    <>
      <Head>
        <title>React Native - Future IT Touch Private Limited</title>
        <meta
          name="description"
          content="Future IT Touch Private Limited is a leading IT solutions provider."
        />
        <meta
          name="keywords"
          content="IT, Technology, Solutions, Future IT Touch"
        />
      </Head>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[440px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              React Native App Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                React Native is a JavaScript framework for creating natively
                rendering mobile applications for iOS and Android, that is based
                on React, Facebook’s JavaScript library for building user
                interfaces. React Native app is completely focused on mobile
                platforms to embed the real look and feel of the mobile app with
                its native functionality. It enables web developers to craft
                applications that really feel Native. Due to standard methods,
                it is quite possible to use the same code between platforms.
                React Native applications are written with a mix of JavaScript
                and XML-Esque markup, known as JSX. React Native “bridge”
                invokes the native rendering APIs based on respective platforms.
                React Native also exposes JavaScript interfaces for platform
                APIs, so React Native apps can access platform features like the
                phone camera, or the user’s location.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                <Link href="tel:+917056937000">Call us - 7056937000</Link>
              </button>
            </div>
          </div>
          <img
            src={gm}
            alt=""
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="w-3/5 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            React Native App Development – Characteristics
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              We are a leading React development company in India building
              dynamic, attractive, feature-rich, and secure web and mobile
              applications. Whether you want to build a new web or mobile
              application or integrate React into the existing one, our expert
              React developer craft the best solutions for you. Our premier
              React web and mobile application development services build
              robust, attractive, SEO friendly and secure web applications at
              reasonable rates..
            </p>
          </div>
          <div className="flex gap-3 mt-5">
            <button className="flex items-center bg-[#00a2ff] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700">
              Quick Enquiry
            </button>
            <button className="flex items-center border-[#00a2ff] bg-dark-200 justify-center border text-[#f246a7] py-2  px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-[#00a2ff]">
              See Our Work
            </button>
          </div>
        </div>

        <div className=" w-2/5 max-lg:w-full max-sm:mt-10">
          <img
            src={d1}
            alt="Design 1"
            className="w-full h-80 max-sm:mb-3  max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="bg-image-third mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row px-40  max-sm:px-5 max-lg:px-10">
          <div className="md:w-1/2"></div>

          <div className="md:w-1/2 md:ml-4">
            <div className="">
              <h3 className="text-3xl font-bold mb-4 text-[#050748]">
                WHAT CAN WE DO FOR YOU?
              </h3>
              <p className="mb-4">
                We would be happy to discuss the project with you in person
              </p>
              <div className="flex items-center mb-4">
                <span className="mr-2">Call us on :</span>
                <p className="text-lg">+91 7056937000</p>
              </div>
              <div>
                <Link href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white font-semibold py-2 px-4 rounded-md mr-4">
                    RECENT PROJECTS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Hire React developers
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          By leveraging the simple and flexible JavaScript based framework of
          React, our expert React developers build attractive and feature rich
          web and mobile applications quickly and efficiently. The dynamic React
          based web and mobile applications delivered by the React services of
          Webguru are easy to manage, support third party API integration, and
          render a great performance. Hire React developers of Webguru and turn
          your website into an attractive and engaging digital interface.
        </p>
        <h3 className="text-2xl text-[#050748] font-semibold">
          Advantages of React Web and Mobile App Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {developmentData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex gap-3 items-center">
                <item.iconFour className="text-4xl text-[#e33f70]" />
                <p className="ml-2 text-lg text-[#e33f70]">{item.titleFour}</p>
              </div>
              <p className="mt-4">{item.descriptionFour}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl text-[#050748] mt-14 font-semibold">
          React Development Company
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          The web and mobile apps developed by Webguru, the premier React
          development company using the React framework are lightweight and
          compatible with all modern browsers, operating systems and devices. As
          a leading React web and mobile app development company, the Future IT
          Touch Pvt. Ltd. understands your business needs and delivers robust,
          feature rich and secure web/mobile applications within the turnaround
          time. Talk to our expert React web and mobile application developer
          about your business requirement. We will be happy to deliver a great
          online experience for your customers.
        </p>
      </div>

      <div className="bg-image-second  mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 max-sm:hidden"></div>

          <div className="md:w-1/2 md:ml-4">
            <div class="flex gap-5 items-center ">
              <div class="text-white  ">
                <h5 className="text-lg font-semibold"> GET SUPPORT FOR</h5>
                <h3 className="text-5xl max-sm:text-3xl max-md:text-3xl  font-bold">
                  90 DAYS
                </h3>
              </div>

              <div>
                <Link href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white text-nowrap font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 max-lg:block gap-10  bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="col-span-7">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            From Our Blog
          </h4>
          <p className="mb-6 text-[#f00] text-xl mt-6">
            What Are The Advantages Of Using The React Framework?
          </p>
          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p>
              The rapidly changing digital landscape requires the building of
              rich and engaging frontend web applications quickly and
              efficiently. This needs choosing a framework that is simple, easy
              to use/reuse, flexible, and allows minimal coding. Among the many
              open source frameworks available, React aka React or React.js fits
              the bill perfectly to build robust, attractive, feature rich,
              scalable, and secure Single Page Applications (SPA).
            </p>
          </div>
        </div>

        <div className="col-span-5 mt-10">
          <img src={ec} alt="" className="" />
        </div>
      </div>

      <div className="bg-custome py-10 px-4 sm:px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <h1 className="text-[#050748] text-3xl font-bold">
            Get New Insights Weekly
          </h1>
          <p className="mt-4">
            Your Personal data is secure as per our policy we dont share your
            personal information, <br /> Freely Subscribe !
          </p>
        </div>
        <div className="new-component relative md:col-span-6 w-full sm:w-full md:w-full lg:w-11/12 left-0 sm:left-0 md:left-1 lg:left-10 top-5">
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Email Your Address"
              name="emails"
              className="w-full h-16 px-8 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              name="submit"
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

export default Native;
