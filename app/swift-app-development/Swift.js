"use client";
import React from "react";
import cwd from "../Assets/swift.webp";
import ec from "../Assets/or.gif";
import mrk from "../Assets/benefits-of-swift.webp";
import {
  FaChevronRight,
  FaGetPocket,
  FaHeadset,
  FaSearchLocation,
  FaTimesCircle,
} from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { cuttingData, corporateData } from "../common/Service_comp";
import loc from "../Assets/logo-c.gif";

const Swift = () => {
  return (
    <>
      <Head>
        <title>Swift - Future IT Touch Private Limited</title>
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
      <div className=" relative overflow-hidden bg-[#442a79] h-96 max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              SWIFT MOBILE APP DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify  max-lg:text-base">
              <p>
                Introduced by Apple for the development of iOS and Mac Apps,
                Swift is an efficient and feature-rich high-level programming
                language. The iOS apps built on Swift run very fast and are
                quite interactive. Besides developing new apps for a range of
                platforms namely, iOS, macOS, watchOS, tvOS, Swift can also be
                used in revamping existing apps. Future IT Touch Pvt. Ltd. has a
                dedicated team of skilled and experienced iOS app developers who
                are well versed in the language to develop a wide variety of
                apps swiftly. Our Swift mobile app development services are
                customized to your specific business requisites.
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
            src={cwd}
            alt=""
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-4xl text-[#050748] font-bold">
          Business Benefits Of Swift App Development
        </h3>
        <p className="mt-5 text-lg  text-[#6a6a8e] text-justify">
          According to Tim Cook, Swift is the next big programming language
          developers will be building apps in. Designed for the enterprises,
          this language is easier to read for developers, almost like English.
          Furthermore, the language is comparatively new in the market, making
          it all the more desirable by developers and enterprises alike.
        </p>
        <p className="mt-5 text-lg  text-[#6a6a8e]">
          See how businesses can benefit from Swift app development:
        </p>
        <div className="flex max-lg:block gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {cuttingData?.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <div className="rounded-full ">
                    <item.iconSeven className="text-3xl text-[#e33f70]" />{" "}
                  </div>
                  <p className=" text-lg text-[#e33f70]">{item.titleSeven}</p>
                </div>
                <div className="pt-3">
                  <p>{item.descriptionSeven}</p>
                </div>
              </div>
            ))}
          </div>

          <img src={mrk} alt="" className="w-96 h-80 mt-10 mx-auto" />
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
          Our Swift App Development Services
        </h3>
        <p className="mb-6 text-[#6a6a8e] mt-5 text-lg text-justify">
          Future IT Touch Pvt. Ltd. provides end-to-end Swift app development
          services to clients across diverse industry verticals spanning small
          startups and mid-level companies to large scale enterprises. We use
          the interactive programming tool to develop amazing applications on
          the iOS platform. We also use the highly functional programming
          language to reduce development speed and bring down overhead costs of
          your business. Our Swift app development services include:
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-4 pt-10 gap-12  text-lg text-[#6a6a8e]">
          <div className="flex items-start gap-3">
            <FaSearchLocation className="text-4xl text-[#e33f70]" />
            <p className="">Mapping of iOS7 Apps to iOS8 or 9</p>
          </div>
          <div className="flex items-start gap-3">
            <FaTimesCircle className="text-4xl text-[#e33f70]" />
            <p className="">Converting Objective C Apps to Swift</p>
          </div>
          <div className="flex items-start gap-3">
            <FaGetPocket className="text-4xl text-[#e33f70]" />
            <p className="">Socket Development With Swift</p>
          </div>

          <div className="flex items-start gap-3">
            <FaHeadset className="text-4xl text-[#e33f70]" />
            <p className="">Swift Apps Maintenance & Support</p>
          </div>
        </div>

        <h3 className="text-2xl text-[#050748] mt-16 font-semibold">
          An overview our Swift app development process:
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-12  text-lg text-[#6a6a8e]">
          {cuttingData.map((item, index) => (
            <div key={index}>
              <div className="flex items-start gap-5">
                <item.iconEight className={`text-3xl text-[${item.color}]`} />
                <p className={`text-xl text-[${item.color}]`}>
                  {item.titleEight}
                </p>
              </div>
              <p className="mt-2">{item.descriptionEight}</p>
            </div>
          ))}
        </div>
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
      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Check Out Other Reasons Why You Should Hire Swift iOS App Developers
          From Us:
        </h3>

        <div className="flex max-lg:block gap-10 mt-10 max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={` rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconSeven
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleSeven}
                    </p>
                    <p className="mt-2">{item.descriptionSeven}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3 max-lg:w-full mt-10">
            <img src={loc} alt="" className="w-full " />
          </div>
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

export default Swift;
