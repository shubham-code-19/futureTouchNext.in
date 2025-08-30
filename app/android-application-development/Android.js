"use client";
import React from "react";
import ec from "../Assets/and.gif";
import phone from "../Assets/phone.webp";
import app from "../Assets/app.webp";
import { FaChevronRight } from "react-icons/fa";
import { corporateAndroid } from "../common/Service_comp";
import { rangeData } from "../common/Service_comp";
import { androidData } from "../common/Service_comp";
import { rangeAndroid } from "../common/Service_comp";

const Android = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[350px] max-sm:h-auto max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl  max-lg:text-xl">
              ANDROID APP DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Powering 2 Billion mobile devices across the globe, Android
                inevitably stands out as one of the most sought-after platforms
                for mobile app development. Future IT Touch Pvt. Ltd. is an
                certified leading Android app development company in India
                empowering the businesses of a global clientele with innovative,
                scalable, and interactive mobility solutions for years. Reach us
                for industry-standard android app development services at a
                competitive rate.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </a>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                <a href="tel:+917056937000">Call us - 7056937000</a>
              </button>
            </div>
          </div>
          <img
            src={app}
            alt=""
            className="w-96 pt-0 max-sm:pt-10 max-lg:mx-auto max-lg:mt-10"
          ></img>
        </div>
      </div>

      <div className=" px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Our Range of Android Application Development Services
        </h3>

        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeData.map((item, index) => (
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
      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Benefits of Our Android App Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Android comprises of a huge share of the mobile app market all over
          the world. Professional Android app development services can be used
          to leverage the power of this platform to reach a wide audience.
          Consider the following benefits of engaging our service:
        </p>
        <div className="flex max-sm:block gap-10 mt-10 max-sm:mt-2">
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
          <div className="w-full mt-10">
            <img src={ec} alt="" className="border-[18px] border-[#dfdfdf]" />
          </div>
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
                <a href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white font-semibold py-2 px-4 rounded-md mr-4">
                    RECENT PROJECTS
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl  text-[#050748] font-bold">
          Our Range of Android Application Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          We address all your Android application development needs. Take a look
          at the following passages to know our suite of services.
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
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
        <div className="flex flex-col items-center md:flex-row gap-5">
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
                <a href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white text-nowrap font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Rated as the Top Android App Development Company in India
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          We follow a step-by-step procedure in developing the apps to maintain
          a steady pace and provide you with on-time,
        </p>
        <div className="flex max-lg:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {androidData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={`rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.icon className={`text-4xl text-[${item.color}]`} />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.title}
                    </p>
                    <p className="mt-2 text-justify">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-10 ">
            <img
              src={phone}
              alt=""
              className="border-[18px] mx-auto h-[400px] border-[#dfdfdf]"
            />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 text-justify">
          In the last 15 years, we have worked with hundreds of online retailers
          and delivered their customers with a beautiful online shopping
          experience. From startup to enterprise, single vendor to multi vendor,
          B2C to B2B business - we have provided effective eCommerce solutions
          to a global clientele. We have also built several eCommerce mobile
          apps as per the need of the businesses.
        </p>
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

export default Android;
