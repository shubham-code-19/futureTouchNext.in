import React from "react";
import ec from "../Assets/ec.webp";
import cwd from "../Assets/cwd.webp";
import { FaChevronRight } from "react-icons/fa";
import { corporateData } from "../common/Service_comp";
import { cuttingData } from "../common/Service_comp";
import { customerData } from "../common/Service_comp";
const Corporate = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-96 max-sm:h-auto  max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              CORPORATE WEBSITE DESIGN
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                An innovative and engaging website is crucial to maximize your
                business efficiency. Future IT Touch Pvt. Ltd. corporate website
                design company can be your right partner. From simple,
                informative blogging site to complex web applications and
                eCommerce website development – we provide a comprehensive web
                solution. Our team is adept at developing fast-loading,
                responsive, and user-friendly websites that have consistent
                accessibility across multiple devices and browsers. Backed with
                a long experience and industry exposure, we have satisfied a
                global clientele with a futuristic web solution. Transform your
                ideas into reality with us.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </a>
              <a
                href="tel:+917056937000"
                className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading "
              >
                Call us - 7056937000
              </a>
            </div>
          </div>
          <img
            src={cwd}
            alt=""
            className="w-96 pt-0 max-sm:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Features of Our Business Website Design Service
        </h3>
        <p className="mt-5 text-lg text-[#6a6a8e]">
          We take pride in building innovative and robust web solutions with a
          wide suite of features. Take a look at these before you engage our
          business website design services:
        </p>

        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {cuttingData.map((item, index) => (
              <div className="Development-text" key={index}>
                <div className="flex items-center">
                  <item.icon className={`text-4xl text-[${item.color}]`} />
                  <p className={`text-xl ml-2 font-bold  text-[${item.color}]`}>
                    {item.title}
                  </p>
                </div>
                <p className="mt-5">{item.description}</p>
              </div>
            ))}
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
              <div className="flex iems-center mb-4">
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
          Cutting Edge Web Application Development for Corporate
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          As a premier corporate website design company in India, we can offer
          an end-to-end robust web solution for corporates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {customerData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex items-center">
                <item.icon className="text-5xl text-[#e33f70]" />
                <p className="ml-2 font-semibold  text-lg text-[#e33f70]">
                  {item.title}
                </p>
              </div>
              <p className="mt-5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-image-second  mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 max-sm:hidden"></div>

          <div className="md:w-1/2 md:ml-4">
            <div class="flex gap-5 items-center max-sm:items-start">
              <div class="text-white  ">
                <h5 className="text-lg font-semibold"> GET SUPPORT FOR</h5>
                <h3 className="text-5xl max-sm:text-3xl max-md:text-3xl  font-bold">
                  90 DAYS
                </h3>
              </div>

              <div>
                <a href="/our-portfolio">
                  <button className="bg-[#00a2ff] text-nowrap hover:bg-[#3b61e8] text-white font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Leading eCommerce Website Design Company India - Partner with Us
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          Leading eCommerce Website Design Company India - Partner with Us
        </p>
        <div className="flex max-sm:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div className="Development-text" key={index}>
                <div className="flex items-center">
                  <item.icon className="text-5xl text-[#e33f70]" />
                  <p className="ml-2 font-bold  text-lg text-[#e33f70]">
                    {item.title}
                  </p>
                </div>
                <p className="mt-5">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full max-sm:pt-10">
            <img src={ec} alt="" className="border-[18px] border-[#dfdfdf]" />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 max-sm:text-justify">
          Certified corporate website design company can be your right partner.
          From simple, informative blogging site to complex web applications and
          eCommerce website development – we provide a comprehensive web
          solution. Our team is adept at developing fast-loading, responsive,
          and user-friendly websites that have consistent accessibility across
          multiple devices and browsers. Backed with a long experience and
          industry exposure, we have satisfied a global clientele . <br />
          Further, we can promote the online stores through effective digital
          marketing. SEO, SMM, online reputation management, content & email
          marketing - we do it all. Rely on us and we will offer the best
          digital solutions for your eCommerce business.
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

export default Corporate;
