"use client";
import React from "react";
import gm from "../Assets/php.webp";
import d1 from "../Assets/logo-gif.gif";
import loc from "../Assets/logo-c.gif";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { corporateData } from "../common/Service_comp";
import { corporateAndroid } from "../common/Service_comp";
import { rangeAndroid } from "../common/Service_comp";

const PHP = () => {
  return (
    <>
      <Head>
        <title>
          PHP-Laravel, Codeigniter - Future IT Touch Private Limited
        </title>
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
      <div className=" relative overflow-hidden bg-[#442a79] h-[360px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              PHP-Laravel, Codeigniter SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Laravel/MySQL/PHP retains its immense value even after so many
                years of its inception. Being easy to code and manage with
                strong features and capabilities of developing robust custom web
                applications, PHP/Laravel inevitably stands out from other
                programming languages of today. Being an open-source platform,
                it helps developers create cost-effective and customized
                solutions to meet the specific needs of the client. Avail our
                custom PHP/Laravel development services to build robust and
                secure web applications.
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
      <div className="flex max-lg:block gap-10  px-32  max-sm:px-5 max-lg:px-10 max-lg:px-10 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            PHP has its own advantages when it comes to development-
          </h4>

          <div className="text-lg text-justify text-[#6a6a8e] ">
            <p>
              We follow a Customer-centric approach to building a website for
              your business which brings extreme ease of navigation for the
              visitors. This reduces the bounce rate as users can easily browse
              what they are looking for. Our developers know well how crucial a
              website appearance is for your business. Empathizing the same,
              they create custom websites composed of high-quality images,
              authentic logo, and relevant content. Custom PHP development is
              our USP to get your website listed in the initial pages of search
              results. This proliferates the website ranking on different search
              engines to reinforce a rigid business identity over the web.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full max-lg:mx-auto">
          <img
            src={d1}
            alt="Design 1"
            className="w-96 h-80 max-sm:mb-3 max-lg:mx-auto"
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

      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl  text-[#050748] font-bold">
          PHP Programming Services for Diverse Business Verticals
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          We offer comprehensive PHP programming services to meet your business
          requisites.
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeAndroid.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.titleTwo}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionTwo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 pb-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Advantage of Engaging our PHP Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          If you are looking for efficient PHP development services) Future IT
          Touch Pvt. Ltd. can be the right choice for you. From eCommerce Portal
          Development to Property Listing Website, Social Networking to Online
          Job Portals, our experienced PHP developers have the expertise to
          build and deliver custom PHP development solutions effectively and on
          time. Hire PHP developers for development and maintenance of web
          applications in Major MVC Frameworks including CakePHP, Laravel,
          CodeIgniter.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-4 pt-10 gap-10  text-lg text-[#6a6a8e]">
          {corporateAndroid.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-5">
                <item.iconTwo className={`text-4xl text-[${item.color}]`} />

                <p className={`text-xl font-bold text-[${item.color}]`}>
                  {item.titleTwo}
                </p>
              </div>
              <p className="mt-4 text-justify">{item.descriptionTwo}</p>
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
          Why Choose Us as Your Trusted PHP Programming Company India
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          As a leading PHP programming company India, we guarantee you of the
          following:
        </p>
        <div className="flex max-lg:block gap-10  max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full  grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={` rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconFive
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleFive}
                    </p>
                    <p className="mt-2">{item.descriptionFive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3 mt-10 max-lg:w-full">
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

export default PHP;
