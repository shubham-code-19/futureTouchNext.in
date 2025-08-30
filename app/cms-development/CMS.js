import React from "react";
import Ism from "../Assets/lsm.gif";
import gm from "../Assets/gm.webp";
import cms from "../Assets/cms.gif";
import { cmsData } from "../common/Service_comp";
import {
  FaAtom,
  FaAudible,
  FaBookOpen,
  FaBookReader,
  FaChevronRight,
  FaHandHoldingUsd,
  FaSearch,
} from "react-icons/fa";

import { developmentData } from "../common/Service_comp";

const CMS = () => {
  const filteredData = developmentData.filter(
    (item, index) => index >= 2 && index <= 5
  );

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[350px] max-sm:h-auto max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              CMS WEB DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                A CMS (Content Management System) allows you to control and
                manage the content of your website with little or no knowledge
                of coding. It provides an easy interface to add / delete new
                pages and edit the content within. CMS offers a site-search tool
                for the visitors to find any specific content they are looking
                for. At Future IT Touch Pvt. Ltd., a leading CMS web development
                company in India, we deal with all types of open source content
                management systems and provide customized solutions to meet your
                needs.
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
            src={gm}
            alt=""
            className="w-96 pt-0 max-sm:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <section className="Trusted-eCommerc px-28  max-sm:px-5 max-lg:px-10 py-10">
        <div className="trusted-text">
          <h4 className="text-3xl text-[#050748]">CMS Website Development</h4>
          <p className="text-[#6a6a8e] text-lg mt-3 max-sm:text-justify">
            Websites built on CMS have an edge over others because of their
            inherent features and ease of management. Let us check out some
            other benefits of CMS website development: website development
            company in India, we take care of both the requirements by ensuring
            the following criteria for our online store development services:
          </p>
        </div>

        <div className="flex gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
            <div className="">
              <div className="flex items-start gap-5">
                <div className="">
                  <FaHandHoldingUsd className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Affordability:
                  </p>
                  <p className="mt-2">
                    It reduces the website maintenance cost by providing the
                    website owners with the ease of managing their sites
                    single-handedly.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="">
                  <FaBookOpen className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    What You See Is What You Get:
                  </p>
                  <p className="mt-2">
                    Edit, modify and format your content easily with WYSIWYG
                    editor.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="">
                  <FaBookReader className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Better Content Management:
                  </p>
                  <p className="mt-2">
                    A CMS supports seamless management of media and document
                    files.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="">
                  <FaAudible className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Multiple languages:
                  </p>
                  <p className="mt-2">
                    Any Content Management System allows you to develop and
                    maintain a multilingual website with little effort.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="">
                  <FaAtom className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Social Media Integration:
                  </p>
                  <p className="mt-2">
                    You can connect your website to your social media networks
                    and integrate its feeds on your website with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="">
                  <FaSearch className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    SEO Friendly Website Development:
                  </p>
                  <p className="mt-2">
                    An SEO friendly coding structure helps rank your website at
                    the top of search engine results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          Custom CMS Website Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] max-sm:text-justify">
          Being an certified company, it is our responsibility to see that
          highest quality of services is meted out to our clients. Our effective
          custom CMS website development services ensure that the content on
          your website is properly organized, helping you to manage the content
          easily. Some important features of our CMS Solutions are -
        </p>
        <div className="flex max-lg:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {cmsData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div>
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
            <img src={cms} alt="" />
          </div>
        </div>
        <div className="bg-[#f2f2f2]  pt-16">
          <h3 className="text-[27px] text-[#050748] font-bold">
            CMS Web Development Using Open Source Platforms:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
            {filteredData.map((item, index) => (
              <div className="Development-text" key={index}>
                <div className="flex items-center">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="rounded-full w-12"
                  />
                  <p className="ml-2 text-lg text-[#e33f70]">{item.title}</p>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <p className=" text-lg text-[#6a6a8e] mt-10">
            We are a customer-oriented eCommerce website development company in
            India striving to go beyond your expectations of a bespoke online
            store. To get an impressive B2C or B2B eCommerce solution, call us
            today or request a free quote now.
          </p>
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
          Custom CMS Website Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          We would be happy to discuss the project with you in person
        </p>
        <div className="flex max-sm:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {cmsData.map((item, index) => (
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
            <img src={Ism} alt="" className="border-[18px] border-[#dfdfdf]" />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 max-sm:text-justify">
          In the last 15 years, we have worked with hundreds of online retailers
          and delivered their customers with a beautiful online shopping
          experience. From startup to enterprise, single vendor to multi vendor,
          B2C to B2B business - we have provided effective eCommerce solutions
          to a global clientele. We have also built several eCommerce mobile
          apps as per the need of the businesses. <br /> Further, we can promote
          the online stores through effective digital marketing. SEO, SMM,
          online reputation management, content & email marketing - we do it
          all. Rely on us and we will offer the best digital solutions for your
          eCommerce business.
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

export default CMS;
