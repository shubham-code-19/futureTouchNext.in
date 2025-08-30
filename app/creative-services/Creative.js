"use client"
import React from "react";
import devops from "../Assets/app-intro.webp";
import cwd from "../Assets/cwd.webp";
import service1 from "../Assets/logo-and-branding.svg";
import service2 from "../Assets/branding.svg";
import service3 from "../Assets/back.svg";
import service4 from "../Assets/seo.svg";
import service5 from "../Assets/restro-app-1.webp";
import service6 from "../Assets/restro-app-2.webp";
import service7 from "../Assets/restro-app-3.webp";
import service8 from "../Assets/restro-app-4.webp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Creative = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change the autoplay speed as needed (3000ms = 3 seconds)
  };

  return (
    <>
      <Head>
        <title>Creative Agency Branding by Future ITtouch</title>
        <meta
          name="description"
          content="Transform your brand with Future ITtouch's creative agency services. We specialize in unique branding solutions to elevate your business identity."
        />
        <meta
          name="keywords"
          content="IT, Technology, Solutions, Future IT Touch"
        />
      </Head>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[430px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28 max-sm:px-5  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Creative Agency Branding
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Future IT Touch Pvt. Ltd. is the governing creative branding
                agency in India taking care of the details of customer's needs.
                Since, a brand is what people will perceive, the team at Future
                IT Touch Pvt. Ltd. sharpens the branding strategies in a way to
                attract your audience. The Internet is flooded with loads of
                diverse definitions of what a brand is. Let's just knock out the
                confusion and keep it simple and straight. A brand is the
                identity or personality of your business. And, when personality
                goes unpleasant, everything goes out of order. Future IT Touch
                Pvt. Ltd. is armed with quality dipped product branding services
                in India which leaves you with results giving your business an
                everlasting success. We guard the personality of your business
                to make you stand out in the crowd.
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
                Call us - 7056937000
              </a>
            </div>
          </div>
          <img
            src={cwd}
            alt=""
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" py-20 px-20 max-sm:px-0 max-md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className="p-4 md:col-span-5">
            <img src={devops} className="w-96  rounded-lg mx-auto" alt="" />
          </div>

          <div className="common-heading md:col-span-7">
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-5 px-0 max-sm:px-5 max-md:px-5">
              Brand Identity Strategies & Solution
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-lg:pl-0 ">
              Great designs reflect the brand's styles! It makes businesses
              stand aside from others and drives the attention of maximum
              audience. Future IT Touch Pvt. Ltd. has a creative team of
              designers that develops the brand guidelines not only to represent
              businesses mission and vision, but also convey clear message to
              esteemed clients. Brand guidelines are prepared on the basis of
              what companies do and what they are into. Future IT Touch Pvt.
              Ltd. offers brand identity services to helps individuals raise the
              awareness of their brand by engaging maximum audience through
              digital marketing and social media interactions.
            </p>
            <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-lg:pl-0 ">
              It involves all the strategies and tactics that are essential for
              business growth. We do everything to build an online brand
              identity that covers all the services you need to show to your
              potential clients. Look at our portfolio given below.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-20 px-32 max-sm:px-0 max-md:px-10">
        <div className="common-heading md:col-span-8">
          <span className="text-lg text-[#e60072] uppercase">Solutions</span>
          <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-5 px-0 max-sm:px-5 max-lg:px-0">
            How We Work
          </h3>
          <h3 className="text-2xl max-sm:text-xl max-md:text-3xl text-[#050748] font-semibold mt-5 px-0 max-sm:px-5 max-lg:px-0">
            Visuals run the world. Let us design them. Take a back seat as the
            magic of graphic formulation and campaign takes center stage.
          </h3>
          <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-lg:pl-0 ">
            It can be challenging for marketing and sales teams to get customers
            to pay attention to their presentations and collateral. Design,
            aesthetics, presentation, and branding are frequently out of sync.
            Getting customers to connect with marketing materials can mean the
            difference between a potential buyer and one who isn’t.
          </p>
          <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-lg:pl-0 ">
            Future IT Touch Pvt. Ltd. is a graphic design agency in Chandigarh
            with a high success rate in putting graphic design company
            Chandigarh to work for its clients. Our result-oriented graphic
            design services will help you increase your marketing conversion
            ratios! Our graphic design agency Chandigarh is proficient in using
            the most up-to-date programs and tools, including Adobe Suite,
            Affinity Designer, Vectr, DesignWizard, and Sketch.
          </p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 text-center  gap-10  mt-16 ">
          <div className="bg-white border border-[#d4f0ff] custom-shadow h-36 rounded-lg shadow-md overflow-hidden">
            <img src={service1} className="w-14 h-14 mx-auto mt-5" alt="img" />
            <div className="p-4">
              <h6 className="font-bold text-2xl text-[#050748]">
                UI/UX Design
              </h6>
            </div>
          </div>

          <div className="bg-white border border-[#d4f0ff] custom-shadow h-36 items-center rounded-lg shadow-md overflow-hidden">
            <img src={service2} className="w-14 h-14 mx-auto mt-5" alt="img" />
            <div className="p-4">
              <h6 className="font-bold text-2xl text-[#050748]">
                Front-end Dev
              </h6>
            </div>
          </div>

          <div className="bg-white border border-[#d4f0ff] custom-shadow h-36 items-center  rounded-lg shadow-md overflow-hidden">
            <img src={service3} className="w-14 h-14 mx-auto mt-5" alt="img" />
            <div className="p-4">
              <h6 className="font-bold text-2xl text-[#050748]">
                Back-end Dev
              </h6>
            </div>
          </div>

          <div className="bg-white border border-[#d4f0ff] custom-shadow h-36 items-center  rounded-lg shadow-md overflow-hidden">
            <img src={service4} className="w-14 h-14 mx-auto mt-5" alt="img" />
            <div className="p-4">
              <h6 className="font-bold text-2xl text-[#050748]">
                SEO Optimization
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-40 pb-10 max-sm:px-0 max-md:px-10">
        <Slider {...settings}>
          <div>
            <img src={service5} className="w-96 h-[800px]" alt="Slide 1" />
          </div>
          <div>
            <img src={service6} className="w-96 h-[800px]" alt="Slide 2" />
          </div>
          <div>
            <img src={service7} className="w-96 h-[800px]" alt="Slide 3" />
          </div>
          <div>
            <img src={service8} className="w-96 h-[800px]" alt="Slide 4" />
          </div>
        </Slider>
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

export default Creative;
