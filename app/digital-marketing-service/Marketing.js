"use client";
import React from "react";
import devops from "../Assets/digitalmarketing.webp";
import ChooseFuture from "../components/ChooseFuture";
import service1 from "../Assets/seoOne.webp";
import service2 from "../Assets/smo.webp";
import service3 from "../Assets/ppcOne.webp";
import service4 from "../Assets/cont.webp";
import { FaAngleRight, FaChevronRight, FaDotCircle } from "react-icons/fa";
import Counter from "../components/Counter";

const Marketing = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[360px] max-sm:h-auto max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Professional Digital Marketing Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Digital marketing needs have changed over the years with today’s
                dynamic industry. It is always worthwhile to calibrate your
                digital strategy. As a towering Digital Marketing Agency in
                Chandigarh that has led to many successful digital campaigns, we
                ensure that our clients move from mere digital tactics to a
                well-crafted digital strategy. The trust levels are a direct
                result of unwavering commitment to innovative ideas, quality
                work, and time-bound deadlines. Our clients have realized
                through experience that our digital agency in Chandigarh is
                capable of unbiased judgment when it is time to create and
                launch an all-encompassing digital marketing campaign.
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
        </div>
      </div>

      <Counter />

      <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-20 px-20 max-sm:px-0 max-md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className="p-4 md:col-span-4">
            <img src={devops} className="w-96  rounded-lg mx-auto" alt="" />
          </div>

          <div className="common-heading md:col-span-8">
            <span className="text-lg text-[#e60072] uppercase max-sm:pl-5">
              Overview
            </span>
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-5 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Digital Marketing Services for Growing Your Company
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              Digital Marketing Agency is a lot like fishing…you need to wait
              patiently for the catch…only if there are fishes …in the first
              place. With the advent of internet, a new avenue for advertising
              and even selling has opened up for marketers and advertisers.
              Although marketing and advertising on the internet is inexpensive,
              it is challenging. This is because there is a whole lot of
              information that is available on the internet for users and
              consumers to absorb that there are chances that your brand may get
              lost in the noise and clutter. Mere presence on social media and
              posting of a few images here and there cannot give you visibility
              in the virtual world.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-20 max-sm:block   px-32  max-sm:px-5 max-lg:px-10 pb-14">
        <div className="col-span-4">
          <h4 className="text-4xl font-semibold mb-3 text-[#050748] ">
            Online Marketing Services Proven to Increase Leads, Sales, & Revenue
          </h4>

          <div className="Website text-[17px] text-justify text-[#6a6a8e] mt-5 ">
            <p>
              More leads. More sales. More revenue. That's digital marketing
              services from Future IT Touch Pvt. Ltd.. With a custom strategy,
              plus data-driven insights from IBM Watson and Google AI, we'll
              help your business impact the metrics that matter most, from
              traffic to revenue. Are you ready to see what our digital
              marketing services can do for your business? Chat with us by
              contacting us online or calling 705-693-7000!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
              <ul className="font-semibold list-none">
                <li># 800+ Mobile Delivered</li>
                <li># 200+ Team Strength</li>
                <li># User-Friendly Interface</li>
              </ul>
              <ul className="font-semibold list-none">
                <li># 400 Happy Clients</li>
                <li># 95% Repeat business</li>
                <li># Quality Service UX</li>
              </ul>
            </div>
          </div>
          <a href="/contact">
            {" "}
            <button className="bg-gradient-to-r from-[#f92c8b] to-[#b02cd6]   flex justify-center items-center mt-7 text-white px-6 py-4 text-base font-semibold  rounded-full">
              Request A Quote <FaAngleRight className="ml-2" />
              <span className="circle dkpr"></span>
            </button>
          </a>
        </div>

        <div className="col-span-3">
          <p className="mb-6 text-[#050748] text-2xl font-bold max-sm:mt-10">
            Advantages of Digital Marketing
          </p>

          <ul className="text-xl text-[#6a6a8e] list-none">
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Strategize with The Valuable Data and Analytics
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Content Performance and Lead Generation
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Reduction in cost and raises standards
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Improved Conversion Rates
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              More Cost Effective Than Traditional Marketing
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Higher Revenues
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Higher ROI from Your Campaigns
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Earn People’s Trust and Build Brand Reputation
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Know All About Your Competitors
            </li>
          </ul>
        </div>
      </div>

      <section className="service-section service-2 py-20">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <div className="text-center">
              <span className="text-5xl font-bold text-[#e60072] uppercase">
                Our Services
              </span>
              <h2 className="text-lg  mt-4 mb-8">
                We think big and have hands in all leading technology platforms
                to provide you wide array of services.
              </h2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 max-lg:block   px-40  max-sm:px-5 max-lg:px-10 my-10">
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block   bg-[#e9ddff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img src={service1} alt="" className="max-sm:mb-5" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Search Engine Optimization
                </h4>
                <span className="text-lg">
                  If you are looking to grow your business nationwide, our
                  advanced skillset can deliver you just that. With high-end
                  tools and proven process, our experts can help you generate a
                  strong market position & drive more conversions.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block   bg-[#ffdadb] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img src={service2} alt="" className="max-sm:mb-5" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Social Media Marketing
                </h4>
                <span className="text-lg">
                  The Social Media is a powerful platform to reach your
                  prospective customers . More than 70% of people are daily
                  active on the leading social media platforms like Facebook,
                  Twitter, LinkedIn.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex bg-[#d6edff] max-sm:block   rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img src={service3} alt="" className="max-sm:mb-5" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Pay per Click
                </h4>
                <span className="text-lg">
                  Cost-effective and measurable PPC marketing is a powerful way
                  to instantly improve your online visibility. Our result-driven
                  PPC service in India ensures that you get the highest returns
                  out of your campaigns.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex bg-[#ffede1] max-sm:block rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img src={service4} alt="" className="max-sm:mb-5" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Content Marketing
                </h4>
                <span className="text-lg">
                  Our creative content marketing services are SEO-centric,
                  ROI-focussed and customer-driven. We create a well-defined,
                  goal-oriented strategy before plunging into full-fledged
                  content development and marketing.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-card mt-20 flex max-sm:block max-md:block justify-center items-center gap-5 px-5">
          <h3 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl  ">
            Hire a {""}
            <span className="font-bold">Dedicated Developer</span>
          </h3>

          <a
            href="#"
            className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full  ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
          >
            Hire Now <FaAngleRight className="relative left-2" />
          </a>
        </div>
      </section>

      <ChooseFuture />

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

export default Marketing;
