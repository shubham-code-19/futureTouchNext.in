import React from "react";
import gm from "../Assets/qa.webp";
import d1 from "../Assets/cr.webp";
import { FaChevronRight, FaCircle } from "react-icons/fa";
import { cardData } from "../common/Service_comp";

const Quality = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-72 max-sm:h-auto max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Quality Assurance
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Our services are of assured quality so drop us an email. Clients
                expect their interactive agency to guard the reputation of their
                products and company. Quality assurance testing protects a
                client’s brand reputation by verifying that their customers’
                experiences with their product, website, app, and campaign are
                consistently positive.
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
            className="w-52 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            We Create A Trustworthy Brand Experience
          </h4>
          <div className="text-lg text-justify text-[#6a6a8e] ">
            <p>
              From our perspective, quality assurance is a subset of the overall
              usability goal—after all, a website isn’t usable if it isn’t
              working. Quality assurance is an important step in the website
              development process and, by all means, must not be skipped. A
              broken link or a misspelled word may seem like trivial mistakes,
              but they can greatly undermine the credibility of your website.
              You want people who visit your site to feel confident about the
              quality of the information they find.{" "}
            </p>
            <p className="mt-6">
              Quality Assurance that we offer are the following qualities:
            </p>

            <ul className="text-lg mt-5 text-[#6a6a8e] list-none">
              <li className="flex gap-3 items-start">
                <FaCircle className="text-[#df2466] text-xs mt-2" />
                The ability to bring, and use, tools that make Quality Assurance
                more efficient.
              </li>
              <li className="flex gap-3 items-start">
                <FaCircle className="text-[#df2466] text-xs mt-2" />A track
                record in addressing the unique demands and culture of digital
                agencies.
              </li>
              <li className="flex gap-3 items-start">
                <FaCircle className="text-[#df2466] text-sm mt-2" />
                The ability to translate Quality Assurance results in terms that
                your development team can act upon.
              </li>
              <li className="flex gap-3 items-start">
                <FaCircle className="text-[#df2466] text-sm mt-2" />
                The willingness to provide cost estimates for Quality Assurance
                when bidding on forthcoming projects.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-1">
          <img src={d1} alt="Design 1" className="w-full max-sm:mb-3 " />
        </div>
      </div>

      <div className=" px-32  max-sm:px-5 max-lg:px-10 pb-10">
        <h3 className="text-4xl text-center text-[#050748] font-bold">
          Some of Our<span className="text-[#df2466]"> Quality Assurance</span>{" "}
          &amp; Testing for desktop, Web &amp; Mobile
        </h3>

        <div className="grid grid-cols-6 max-sm:grid-cols-2  max-lg:grid-cols-3 mt-10 gap-7">
          {cardData.map((card, index) => (
            <div key={index} className="col-span-1">
              <div class="quality-box  p-5">
                <div className="">
                  <card.icon className="text-4xl text-[#673ab7] mx-auto" />
                  <p className="text-[#6a6a8e] text-lg text-center pt-5">
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

export default Quality;
