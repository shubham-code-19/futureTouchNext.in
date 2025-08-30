"use client";
import React from "react";
import gm from "../Assets/ruby.webp";
import ec from "../Assets/rubyb.webp";
import d1 from "../Assets/rubywhy.webp";
import { developmentData } from "../common/Service_comp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const Ruby = () => {
  return (
    <>
      <Head>
        <title>Ruby, Pybrain - Future IT Touch Private Limited</title>
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
              RUBY & PYBRAIN DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Technology is becoming advanced, and with the latest development
                in technology, Machine Learning is on the rise. As we know,
                machine learning is nothing but a type of artificial
                intelligence that makes the computer self-sufficient to learn
                new things without being explicitly programmed. The rapidly
                growing market has resulted in successful web applications and
                services such as Netflix, Amazon, Facebook, Spotify, etc. So,
                the question is when you are looking for such kind of output and
                development to enhance your startup, is AI with Ruby on Rails or
                Machine Learning with Ruby on Rails a perfect choice?
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
                Call us-7056937000
              </a>
            </div>
          </div>
          <img
            src={gm}
            alt=""
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10  px-32 max-sm:px-5 max-lg:px-10 py-14">
        <div className="w-2/3 pt-5 max-lg:w-full">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            How would you better define Machine Learning?
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Machine learning and data science are the two sides of the same
              coin. You can’t work on one of them by avoiding the other. The
              machine learning automatically behaves by predicting the unknown
              results depending upon the related data sources. The uncertainty
              is almost diminished as the predictions are based on the
              behavioral actions of the users, and hence, the recommendations
              are also correctly displayed. When the computer itself gains the
              ability to smartly learn the mindset of the person using the
              application or web solution, it is called as AI learning or
              machine learning in a layman’s language.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full">
          <img
            src={d1}
            alt="Design 1"
            className="w-96  max-sm:mb-3 max-lg:mx-auto"
          />
        </div>
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

      <div className="bg-[#f2f2f2] px-32 max-sm:px-5 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Why Use Python for AI and Machine Learning?
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          AI based projects are completely different from traditional software
          developments. The significant difference lies in the tech stack, as
          AI-based projects require deep research. To implement your AI
          aspirations, a stable and flexible language like Python makes great
          sense.
        </p>
        <h3 className="text-2xl text-[#050748] font-semibold">
          Advantages of React Web and Mobile App Development
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {developmentData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex gap-3 items-center">
                <item.iconFour className="text-4xl text-[#e33f70]" />
                <p className="ml-2 text-xl font-semibold text-[#e33f70] ">
                  {item.titleFive}
                </p>
              </div>
              <p className="mt-4">{item.descriptionFive}</p>
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

      <div className="grid grid-cols-12 max-lg:block gap-10  bg-[#f2f2f2]  px-32 max-sm:px-5 py-14">
        <div className="col-span-7">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            From Our Blog
          </h4>
          <p className="mb-6 text-[#f00] text-xl mt-6">
            What Are The Advantages Of Using The Ruby Framework?
          </p>
          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p>
              Native developers are going crazy in the discussion of Ruby vs.
              Python and Python over Ruby because it is one of the most
              preferred and convenient programming languages for developing data
              sciences, machine learning, and AI-based solutions. Python is
              offering a far more convenient then Ruby machine learning gem. At
              Bacancy Technology we are globally renowned Python developers, and
              we have proven expertise in building Python based Machine Learning
              and Artificial Intelligence modules. If you are still wondering
              why you should opt Python and not Ruby on Rails for Machine
              Learning, then get in touch with our expert to discuss in detail.
            </p>
          </div>
        </div>

        <div className="col-span-5 mt-10">
          <img src={ec} alt="" />
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

export default Ruby;
