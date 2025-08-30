import React from "react";
import gg from "../Assets/gg.webp";
import {
  FaAddressCard,
  FaChevronRight,
  FaDotCircle,
  FaMobile,
  FaToolbox,
  FaUserCog,
} from "react-icons/fa";
import image2 from "../Assets/gif.gif";
import web from "../Assets/web.gif";

import { appData } from "../common/Service_comp";
import { cards } from "../common/Service_comp";

const WebApplication = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[350px] max-sm:h-auto max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl max-lg:text-base">
              WEB APPLICATION DEVELOPMENT
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Future IT Touch Pvt. Ltd. is an award-winning website
                development company offering custom web application development
                services to startups, SMBs, and large enterprises. With an aim
                to driving business transformation, we are building quality web
                applications for diverse business domains since 2005. Leveraging
                cutting-edge technology frameworks, APIs, and databases, we can
                craft futuristic, conversion-driven, and highly optimized
                solutions that ensure excellent user experience..
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
            src={gg}
            alt=""
            className="w-96 pt-0 max-sm:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1">
        <div className="md:col-span-1  ">
          <h1 className="text-[#050748] font-bold text-4xl  max-sm:text-2xl">
            Premium Third-Party API Integration
          </h1>

          <div className="text-[#6a6a8e]  mt-5 text-lg text-justify ">
            <p>
              Take a further step towards digitization to streamline your
              business process and enhance user experience on your web
              application with our reliable third-party API integration service.
              Some of the prominent APIs we integrate include:
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#6a6a8e] mt-10">
            <div class="md:col-span-1">
              <div class="Premium-txt">
                <ul class="list-none">
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    Amazon S3 API with CloudFront
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    Twilio SMS &amp; Video API
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    Zoom Webinar / Video API
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    Vimeo Livestream API
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    USPS API
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:col-span-1">
              <div class="Premium-txt">
                <ul class="list-none">
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    Google Map API
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    xotel SMS &amp; Call API
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    nableX API
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaDotCircle className="text-[#e33f70]" />
                    alamove API
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          src={web}
          alt=""
          className="md:col-span-1 w-[500px] pt-0 max-sm:pt-10 mx-auto"
        />
      </div>

      <div className="grid grid-cols-3 max-sm:block max-lg:block px-28  max-sm:px-0 my-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md border-y border-gray-300 p-10   max-sm:p-5  text-center"
          >
            <card.icon className="text-4xl text-[#673ab7] mx-auto" />
            <h3 className="text-xl text-[#050748] font-bold  my-5">
              {card.title}
            </h3>
            <p className="text-[#6a6a8e] ">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="text-center">
          <h3 className="text-[27px] text-[#050748] font-bold">
            Our Suite of Web Application Development Services
          </h3>
          <p className=" text-lg mt-3 text-[#6a6a8e]">
            As a trusted web application development company, we are committed
            to drive business growth and market differentiation. Our team of
            software architects, developers, testers, project managers, and
            quality assurance specialists work dedicatedly to provide a
            high-quality service within a quick turnaround. Take a look at our
            wide array of services:
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 pt-20 gap-10 text-justify text-lg text-[#6a6a8e]">
          <div className="">
            <div className="flex items-start  md:justify-center  gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaAddressCard className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className=" text-xl font-bold text-[#e33f70]">
                  Web Portal Development
                </p>
                <p className="mt-2">
                  We are efficient in building user-focused web portals that
                  seamlessly blend excellent features and high-end
                  functionalities. Our tailored online destinations capture
                  individual brand aesthetics and encourage the users to
                  interact with the site.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaMobile className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className=" text-xl font-bold text-[#e33f70]">
                  Ecommerce Website Development
                </p>
                <p className="mt-2">
                  Our dedicated web developers can build B2B and B2C online
                  storefronts and multi-vendor marketplaces to help you start
                  selling online. From ideation to implementation and
                  performance tuning - we offer comprehensive eCommerce website
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaUserCog className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className=" text-xl font-bold text-[#e33f70]">
                  Enterprise Application Development
                </p>
                <p className="mt-2">
                  We have proven expertise in creating robust and highly secured
                  enterprise-grade applications. Our scalable web apps can adapt
                  to the market change and support your business growth. We
                  ensure a faster time to market to offer you a competitive
                  edge.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaAddressCard className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className=" text-xl font-bold text-[#e33f70]">
                  Web Portal Development
                </p>
                <p className="mt-2">
                  We are efficient in building user-focused web portals that
                  seamlessly blend excellent features and high-end
                  functionalities. Our tailored online destinations capture
                  individual brand aesthetics and encourage the users to
                  interact with the site.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaToolbox className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className=" text-xl font-bold text-[#e33f70]">
                  Progressive Web App Development
                </p>
                <p className="mt-2">
                  Reach us to build lightweight, user-engaging, and secure
                  Progressive Web Applications with varied features like push
                  notification, offline access, seamless performance on diverse
                  browsers and devices, and more. We adhere to Google's
                  progressiveness guideline.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaUserCog className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className=" text-xl font-bold text-[#e33f70]">
                  SPA Development
                </p>
                <p className="mt-2">
                  We can develop interactive single-page applications with a
                  flexible architecture. From a quick loading speed to an
                  immersive web experience and cross-browser responsiveness -
                  our web applications are optimized to fulfil the modern users’
                  expectations..
                </p>
              </div>
            </div>
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
      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Web Application Maintenance and Support
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          We offer cost and time-efficient web application maintenance services.
          Take a look at the support & services we cover
        </p>
        <div className="flex max-sm:block max-lg:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {appData.map((item, index) => (
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
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full max-sm:pt-10">
            <img
              src={image2}
              alt=""
              className="border-[18px] border-[#dfdfdf]"
            />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 max-lg:text-justify">
          If you want to develop real-time web applications such as gaming or
          chatting apps, Node JS is ideal for you. As a technically advanced app
          development platform, Node JS is preferable to both large and small
          scale business owners. Hire Node JS developers from us to build
          fast-loading and robust web and mobile applications. With long
          experience and expertise, our developers can support any of your
          custom app development projects. Learn more about our cost-effective
          yet high-quality services.
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

export default WebApplication;
