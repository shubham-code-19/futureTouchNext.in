"use client";
import React from "react";
import loc from "../Assets/logo-g.webp";
import and from "../Assets/and.gif";
import app from "../Assets/gam2d3d.webp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { rangeData } from "../common/Service_comp";
import { corporateData } from "../common/Service_comp";

const Unity = () => {
  return (
    <>
      <Head>
        <title> Unity 2D/3D - Future IT Touch Private Limited</title>
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
        <div className="flex max-sm:block max-lg:block px-28 max-sm:px-5  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              2D & 3D Game Development Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Unity 2D/3D games development is taking the gaming world by
                storm through technological advances and innovation. We have an
                exclusive and highly skilled team dedicated to unity 2D/3D game
                development for last 7 years in this sphere. We are the only
                company providing Unity 2D/3D game development in New York –
                Canada. Team of Future IT Touch Pvt. Ltd. support for high end
                gaming solution with standard parameters of the gaming world
                reached a commendable height driven by the demands of a quality
                conscious user. Unity 3D games have had a revolutionary
                breakthrough in the domain of mobile game development
                frameworks. Unity lets you work on various platforms such as
                iOS, android, windows, Linux, Xbox etc.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
              <a
                href="tel:+917056937000"
                className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading "
              >
                Call us - 7056937000
              </a>
            </div>
          </div>
          <img
            src={app}
            alt=""
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-32 max-sm:px-5 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Why For Mobile App Development?
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Get feature rich and impressive apps easily for all major platforms
        </p>
        <p className=" text-lg text-[#6a6a8e] mt-3">
          Building a hybrid mobile app with the help of Ionic framework has
          multiple advantages for both big and small businesses.
        </p>
        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 py-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.iconSix className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-semibold text-[${item.color}]`}>
                    {item.titleSix}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionSix}</p>
              </div>
            ))}
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Node JS stands out as a technically advanced application development
          platform for both small and large scale businesses. Opt for our Node
          JS development services for robust and fast-operating web and mobile
          applications.
        </p>
      </div>

      <div className="bg-image-third mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row px-40 max-sm:px-5">
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
      <div className="flex items-center max-lg:block gap-10 bg-[#f2f2f2]  max-sm:mt-0 px-32 max-sm:px-5 py-14">
        <div className="w-2/3 max-lg:w-full">
          <h1 className=" font-bold text-4xl text-[#050748] max-sm:text-2xl">
            Hybrid App Development Using Ionic Framework
          </h1>

          <div className="text-[#6a6a8e] mt-5 text-lg text-justify ">
            <p>
              The apps built with our Ionic app development services can deliver
              great results in terms of looks and functionality, yet have an
              uncomplicated structure. The apps look and function just as native
              apps would on their respective platforms, despite basically being
              a browser shell running with a native wrapper such as Cordova or
              PhoneGap. .
            </p>
            <p className="mt-5">
              App development through the Ionic framework is quicker, changes
              can be implemented faster, all at a much lower price point. Hybrid
              app development is only going to grow from here on in. Future IT
              Touch Pvt. Ltd. is an certified company with extensive experience
              in providing mobile app development services. We realise the
              immense potential of this framework and are committed to providing
              the best quality of service to our customers at a reasonable price
              point .
            </p>
          </div>
        </div>
        <div className="w-1/3 max-lg:w-full">
          <img src={and} alt="" className="w-full max-lg:mt-10" />
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

      <div className="bg-[#f2f2f2] px-32 max-sm:px-5 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">Why Choose Us?</h3>
        <div className="flex max-lg:block gap-10  max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={` rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconEight
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleEight}
                    </p>
                    <p className="mt-2">{item.descriptionEight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3 max-lg:w-full max-lg:mt-10">
            <img src={loc} alt="" className="w-full" />
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

export default Unity;
