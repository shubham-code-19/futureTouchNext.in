"use client";
import React from "react";
import phone from "../Assets/ec.webp";
import app from "../Assets/hhh.gif";
import { FaChevronRight } from "react-icons/fa";

import { ecommerceData } from "../common/Service_comp";
import { hybridData } from "../common/Service_comp";

const Hybrid = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[410px] max-sm:h-auto max-lg:h-auto">
        <div className="flex  max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl max-lg:text-xl">
              HYBRID APP DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify  max-lg:text-base">
              <p>
                Need an app for your business that can run seamlessly across
                Android and iPhone yet limited by budget constraints? A Hybrid
                App is the answer. It is a mixture of Native and Web Apps,
                giving you a cross-platform experience along with scalable
                features in a highly customized Mobile Application. Few most
                popular technologies for developing hybrid apps include Ionic, a
                PhoneGap / Cordova based HTML5 framework and Flutter, Google’s
                UI toolkit for building beautiful, natively compiled apps.
                Future IT Touch Pvt. Ltd. is an certified mobile app development
                agency with substantial experience in cross-platform app
                development. Our team of expert developers specialize in
                providing Hybrid App Development Services as per your business
                requirements.
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
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Hybrid App Development in India
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          A Hybrid App is a technological blend of a Native App and HTML5 based
          Web App. The scalable features and cross-platform functionality make
          Hybrid App Development in India the right choice for SMEs. This
          cross-platform mobile App is for the ones seeking fast development
          solutions at a lower cost.
        </p>
        <h3 className="text-2xl max-sm:text-xl max-md:text-3xl text-[#050748] font-bold">
          Why Should You Opt For Hybrid Mobile App?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 gap-10  text-lg text-[#6a6a8e]">
          {hybridData.map((item, index) => (
            <div className="flex items-start gap-5" key={index}>
              <item.icontwo className="text-3xl text-[#e33f70]" />

              <p className="">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Popular Technology Stack
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          Here’s a study of two of the most popular technologies used in hybrid
          app development:
        </p>

        <span className="text-[#df2466] text-xl  ">Ionic:</span>
        <div className="flex max-sm:block gap-10 mt-5 max-sm:mt-2">
          <div className="w-1/2 max-sm:w-full text-[17px] ">
            <p className="text-[#6a6a8e] flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2  text-sm" />
              Ionic is built on standardized Angular JS based technologies like
              HTML, JavaScript, and CSS and inspires stunning UI designs.
            </p>
            <p className="text-[#6a6a8e]  flex my-4 gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              It allows rapid prototyping.
            </p>
            <p className="text-[#6a6a8e] flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              Ionic has a powerful and useful Command Line Interface (CLI) that
              levels up scalability, and stability of the applications all the
              while reducing the development time. Once it comes to creating new
              files, folders, projects, or compiling projects to native apps,
              Ionic CLI is extremely handy.
            </p>
            <p className=" text-base ml-5 my-5">
              Engage{" "}
              <span className="font-bold">Ionic development services </span> to
              leverage the benefits..
            </p>
          </div>
          <div className="w-1/2  max-sm:w-full">
            <p className="text-[#6a6a8e] flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              This is an open-source SDK from Google, written in Dart.
            </p>
            <p className="text-[#6a6a8e] flex my-4 gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              Since the Dart code is compiled with the C-library of a native ARM
              machine code, it does not require a JavaScript interpreter or
              ‘bridge’ to interact with the native components. This enhances the
              performance of Flutter even while executing complex UI animations.
              Thereby, Flutter offers almost a native-like performance.
            </p>
            <p className="text-[#6a6a8e] flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              It has its own high-performing rendering engine Skia.
            </p>

            <p className=" text-base ml-5 my-5">
              <span className="font-bold">Hire Flutter developers</span> to
              craft spectacular mobile apps.
            </p>
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
        <h3 className="text-[27px] text-[#050748] font-bold">
          Our Hybrid App Development Process
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-3">
          If you are looking for a cost-effective cross-platform App quickly,
          only an experienced Mobile App Development agency can come of use to
          you. Our dedicated team of expert Hybrid app developers in India can
          go an extra mile to get your App up and running on the different App
          stores within the specified time. Just check our services to see what
          you can expect from us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {hybridData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex items-center">
                <item.icon className="text-3xl text-[#e33f70]" />
                <p className="ml-2  text-lg text-[#e33f70]">{item.title}</p>
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
          Hire Hybrid App Developers India - Why Choose Us
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-3">
          We offer advanced Ionic and Flutter development services to a global
          clientele. Hire hybrid app developers India from Future IT Touch Pvt.
          Ltd. to get a strong foothold in the mobility industry.
        </p>
        <div className="flex max-sm:block gap-10 mt-3">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {ecommerceData.map((item, index) => (
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
          <div className="w-full mt-10">
            <img
              src={phone}
              alt=""
              className="border-[18px] border-[#dfdfdf]"
            />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 text-justify">
          In the last 15 years, we have worked with hundreds of online retailers
          and delivered their customers with a beautiful online shopping
          experience. From startup to enterprise, single vendor to multi vendor,
          B2C to B2B business - we have provided effective eCommerce solutions
          to a global clientele. We have also built several eCommerce mobile
          apps as per the need of the businesses. <br />
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

export default Hybrid;
