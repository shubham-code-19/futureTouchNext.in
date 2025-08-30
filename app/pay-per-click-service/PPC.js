"use client";
import React from "react";
import ec from "../Assets/or.gif";
import cwd from "../Assets/ppc (1).webp";
import { FaChevronRight } from "react-icons/fa";
import { corporateData } from "../common/Service_comp";
import { cuttingData } from "../common/Service_comp";
import { developmentData } from "../common/Service_comp";

const PPC = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[360px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              PPC MANAGEMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Looking for the quickest way to bring ready-to-buy customers to
                your website and mobile app? PPC (Pay-per-Click) offers the
                perfect solution. As a leading PPC management company in India
                we specialize in various PPC management services such as Google
                Adwords, Facebook and YouTube advertisements. As an certified
                PPC service provider in India, we have been serving a global
                clientele from varied industries and demographic for the past
                ten years in the most efficient manner.
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
            src={cwd}
            alt=""
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-4xl text-[#050748] font-bold">
          Result-Oriented PPC Management Company India
        </h3>
        <p className="mt-5 text-lg  text-[#6a6a8e]">
          Cost-effective and measurable – PPC marketing is a powerful way to
          instantly improve your online visibility. Our result-driven PPC
          service in India ensures that you get the highest returns out of your
          campaigns. As a notable PPC management company India, our experts
          follow a proven methodology:
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {cuttingData?.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={`rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconthree className="text-3xl text-[#e33f70]" />{" "}
                  </div>

                  <div className="ml-2">
                    <p>{item.descriptionthree}</p>
                  </div>
                </div>
              </div>
            ))}
            <a href="/our-portfolio">
              <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white font-semibold py-4 px-6 rounded-md mr-4">
                Discuss Your Project
              </button>
            </a>
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

      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Scale Your Business with Smart PPC Management Services India
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {developmentData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex gap-3 items-center">
                <item.iconthree className="text-4xl text-[#e33f70]" />
                <p className="ml-2 text-lg text-[#e33f70]">{item.titlethree}</p>
              </div>
              <p className="mt-4">{item.descriptionthree}</p>
            </div>
          ))}
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-16">
          As a reliable PPC management company, we can help you reap the
          following benefits:. Share your project details with us to learn how
          long it will take to develop the siteWe offer a high-end solution
          within a quick turnaround time to give you a competitive edge. Share
          your project details with us to learn how long it will take to develop
          the site.
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            From Our Blog
          </h4>
          <p className="mb-6 text-[#f00] text-xl mt-6">
            How to Increase Conversions through Content Marketing
          </p>
          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p>
              Are you one of those content creators who writes brilliant content
              that gets many likes? Are you of the opinion that getting likes is
              the be all and end all of content marketing strategy. Well, let me
              politely remind you that is not exactly the case, for marketing
              through content creation is about converting your readers into
              generating revenue.
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <img src={ec} alt="" className="w-full  pt-0 max-sm:pt-10" />
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

export default PPC;
