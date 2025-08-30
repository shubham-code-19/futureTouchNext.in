"use client";
import React from "react";
import phone from "../Assets/flt.webp";
import app from "../Assets/Flutter.webp";
import image from "../Assets/hhh (1).gif";
import { FaChevronRight, FaClock, FaMobile } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { corporateAndroid } from "../common/Service_comp";
import { ecommerceData } from "../common/Service_comp";
import { rangeAndroid } from "../common/Service_comp";

const Flutter = () => {
  return (
    <>
      <Head>
        <title>Flutter App Development - Future IT Touch Private Limited</title>
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
      <div className=" relative overflow-hidden bg-[#442a79] h-[350px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Flutter App Development Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Flutter is Google’s open-source UI toolkit that helps the
                developers to build dynamic and feature-rich applications for
                both Android and iOS platforms. At Future IT Touch Pvt. Ltd., we
                craft industry-standard cross-platform applications to
                streamline your business. Our next-gen Flutter app development
                services ensure future-ready applications for Android and iOS
                devices. As an experienced mobile app development agency, we
                offer end-to-end Flutter development services to craft
                expressive, agile, and flexible applications.
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
            src={app}
            alt=""
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="">
          <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
            Our Suite of Flutter Development Services
          </h3>
          <p className=" text-lg text-[#6a6a8e] mt-5">
            As an experienced mobile app development agency, we offer end-to-end
            Flutter development services to craft expressive, agile, and
            flexible applications. Our solution is available at a competitive
            rate. Take a look at our range of services:
          </p>
          <div className="flex gap-10 mt-5">
            <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
              {corporateAndroid.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-5">
                    <item.icon className={`text-4xl text-[${item.color}]`} />

                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-4 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          src={image}
          alt=""
          className="w-96 h-96 pt-0 max-lg:pt-10  max-lg:mx-auto"
        />
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

      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl  text-[#050748] font-bold">
          Advantages of App Development with Flutter
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Our app development with Flutter has earned appreciation from a global
          clientele. Here are some of the advanced features of our Flutter
          solutions.
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {/* <div className="flex items-start gap-5">
                  <div
                    className="rounded-full p-4 bg-white border-2 border-[#e33f70]"
                  >
                    <FaMobile className="text-4xl text-[#e33f70]" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xl font-bold text-[#e33f70]">
                    Future-ready Apps
                    </p>
                    <p className="mt-2 text-justify">Adept with the latest industry trends and tools, our developers craft advanced mobility solutions to cater to the next-gen audience. Stay ahead of your competitors by engaging our service.</p>
                  </div>
                </div>
          <div className="flex items-start gap-5">
                  <div
                    className="rounded-full p-4 bg-white border-2 border-[#e33f70]"
                  >
                    <FaClock className="text-4xl text-[#e33f70]" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xl font-bold text-[#e33f70]">
                    Faster Time-to-Market
                    </p>
                    <p className="mt-2 text-justify">With its extensive library of utility packages, UI building blocks, and functions, Flutter actively helps in accelerating the design process. While using Flutters, the developers need not micro-optimize al.</p>
                  </div>
            </div> */}
            {rangeAndroid.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.title}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
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
          Trusted Flutter App Development Company - Why Partner with Us
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          As a reliable Flutter app development company in India, we guarantee
          you of the following:
        </p>
        <div className="flex max-lg:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {ecommerceData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.title}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full mt-10">
            <img
              src={phone}
              alt=""
              className="border-[18px] border-[#dfdfdf]"
            />
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

export default Flutter;
