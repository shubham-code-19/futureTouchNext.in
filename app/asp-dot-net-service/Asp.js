"use client";
import React from "react";
import app from "../Assets/asp.webp";
import loc from "../Assets/snet.webp";
import {
  FaBattleNet,
  FaChevronRight,
  FaEthernet,
  FaThumbsUp,
  FaWindowRestore,
} from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { rangeData } from "../common/Service_comp";

const Asp = () => {
  return (
    <>
      <Head>
        <title> ASP.NET Development - Future IT Touch Private Limited</title>
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
        <div className="flex max-sm:block max-lg:block px-28 max-sm:px-5  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              ASP.NET Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Microsoft ASP.NET is a set of technologies, built on top of the
                Microsoft .NET Framework, for building Web applications and XML
                Web services. ASP.NET web pages execute on a web server in IIS
                (Internet Information Server) and generate markup such as HTML
                and XML that is sent down to a desktop or mobile browser. This
                is important because the application does not require any
                installation on the client computer beyond a web browser. This
                means your application can be run from anywhere regardless of
                the hardware.
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
            className="w-60 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-32 max-sm:px-5  max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Providing High Level Of Security & Scalability To Your Business App
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          ASP.NET is a robust platform that allows the developers to create
          simplest to most complex web applications whilst offering the
          flexibility and scalability to develop solutions across devices. We
          develop highly functional, feature-rich and user-friendly applications
          for desktops, smartphones, as well as web platforms.
        </p>
        <div className="flex max-lg:block gap-10  max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            <div className="">
              <div className="flex items-center gap-5">
                <FaThumbsUp className="text-4xl text-[#673ab7]" />

                <p className="text-xl font-semibold text-[#050748]">
                  Reliable Platform
                </p>
              </div>
              <p className="mt-4 text-justify">
                Since its release, ASP.NET has been used to develop thousands of
                applications which make it the most popular platform among
                developer. Moreover, its performance on Microsoft Windows Server
                2003 and Windows 2000 Server is very stable and reliable.
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-5">
                <FaBattleNet className="text-4xl text-[#673ab7]" />

                <p className="text-xl font-semibold text-[#050748]">
                  Integration with legacy systems
                </p>
              </div>
              <p className="mt-4 text-justify">
                The ASP.NET platform can process all types of XML documents as
                well as to write any format of the file with swiftness and ease.
                That ultimately means that it provides multiple routes for
                integration.
              </p>
            </div>
          </div>
          <div className="w-1/3 max-lg:w-full mt-10">
            <img src={loc} alt="" className="w-full  max-lg:mx-auto" />
          </div>
        </div>

        <p className=" text-lg font-bold text-[#050748] mt-20  mb-5">
          OUR ASP.NET DEVELOPMENT SERVICES
        </p>
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Scalable, Powerful, & Leading-Edge Collaborative ASP.NET Solutions
        </h3>

        <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-10  text-lg text-[#6a6a8e]">
          {rangeData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-5">
                <item.iconFour className="text-4xl text-[#673ab7]" />

                <p className="text-xl font-semibold text-[#050748]">
                  {item.titleFour}
                </p>
              </div>
              <p className="mt-4 text-justify">{item.descriptionFour}</p>
            </div>
          ))}
          <div className="">
            <div className="flex items-center gap-5">
              <FaEthernet className="text-4xl text-[#673ab7]" />

              <p className="text-xl font-semibold text-[#050748]">
                NET Integration
              </p>
            </div>
            <p className="mt-4 text-justify">
              If you’re migrating from another platform and want some old
              features to keep in the new app as well, or you may also want some
              unique tool to integrate into your web application, then why
              should you worry as we are here to help you in integrating
              existing tools with your ASP.Net application.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-5">
              <FaWindowRestore className="text-4xl text-[#673ab7]" />

              <p className="text-xl font-semibold text-[#050748]">
                MVC Development
              </p>
            </div>
            <p className="mt-4 text-justify">
              With our ASP.Net MVC development service, our developers can help
              you build interactive and vibrant websites as well as some robust
              and scalable web applications for your business using the MVC
              design pattern.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32 max-sm:px-5  max-lg:px-10 py-14">
        <p className=" text-lg font-bold text-[#050748]  mb-5">
          ADVANTAGES OF .NET FOR A BUSINESS APP DEVELOPMENT
        </p>
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Why To Go With A Dot Net Development Company?
        </h3>
        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 py-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.iconThree className="text-4xl text-[#673ab7]" />

                  <p className="text-xl font-semibold text-[#050748]">
                    {item.titleThree}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionThree}</p>
              </div>
            ))}
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

export default Asp;
