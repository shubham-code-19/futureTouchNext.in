"use client";
import React from "react";
import devops from "../Assets/app-develops.webp";
import service1 from "../Assets/mob-1.webp";
import service2 from "../Assets/mob-2.webp";
import service3 from "../Assets/mob-3.webp";
import service4 from "../Assets/mob-4.webp";
import mission from "../Assets/process-1.webp";
import vision1 from "../Assets/process-2.webp";
import vision2 from "../Assets/Usability.webp";
import vision3 from "../Assets/Cloud.webp";
import vision4 from "../Assets/Cross.webp";
import vision5 from "../Assets/Security.webp";
import vision6 from "../Assets/Performance.webp";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import Counter from "../components/Counter";
import ChooseFuture from "../components/ChooseFuture";

const Mobile = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-96 max-sm:h-auto max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl max-lg:text-xl">
              WEBSITE, MOBILE APP & DIGITAL MARKETING SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                We are a full-stack Branding, Website Development, App
                Development, Digital marketing and web designing company in
                Chandigarh with all the expertise you need to build a
                successful, stable and scalable product. We follow our tried and
                tested processes that ensures that the product is a marketfit,
                and hence your marketing and technology partner.{" "}
                <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                  Future IT Touch Pvt. Ltd.
                </span>
                mobile app development & website design company in India offers
                a comprehensive range of digital solutions for all your online
                business needs. Our bouquet of services includes web design and
                development, mobility solutions, digital marketing, and
                corporate branding solutions. With our team of 50+ designers,
                developers, content writers, and marketing experts, we have been
                serving a global clientele in 3+ countries since 2017.
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
            <span className="text-lg text-[#e60072] uppercase  max-sm:pl-5">
              Overview
            </span>
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-5 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Mobile Application Testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              Future IT Touch is an eminent Mobile Application Testing
              organization that offers astounding versatile application testing
              administration. We developed our specialty in Mobile testing,
              particularly in mobile testing applications of iOS and Android
              gadgets. With a group of devoted certified testers, we play out a
              wide range of web, mobile, local and cross platform portable
              applications testing. So we are including a proven great mobile
              testing approach. We test applications for its functionality,
              usability, consistency and compatibility for longer use and
              stability.
            </p>
          </div>
        </div>
      </div>

      <h4 className="text-4xl text-center font-bold mb-10 text-[#050748] ">
        Why FTS for Testing?
      </h4>
      <div className="grid grid-cols-2  max-sm:block   gap-20 px-32  max-sm:px-5 max-lg:px-10 pb-14">
        <div className="col-span-1">
          <p className="mb-6 text-[#050748] text-2xl font-bold ">
            Advantages of Mobile App Development
          </p>
          <div className="Website text-[17px] text-justify text-[#6a6a8e] ">
            <ul className="text-xl key-points text-[#6a6a8e] list-none">
              <li>
                Completely utilitarian QA administrations for every client
                guarantees that product usefulness performs similarly, as
                indicated by prerequisites.
              </li>
              <li>
                Approval of information trustworthiness crosswise over business
                flows
              </li>
              <li>
                Powerful foundation and calamity recuperation plan give
                ceaseless testing administrations i.e. for 24X7.
              </li>
              <li>
                Our organisation has various repetitive servers giving us 99.9%
                uptime.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-1">
          <p className="mb-6 text-[#050748] text-2xl font-bold ">
            Advantages of Mobile App Development
          </p>

          <ul className="text-xl key-points text-[#6a6a8e] list-none">
            <li>
              Devoted testing labs with all around prepared servers reenact
              different customer conditions at our premises and broad
              utilization of the cloud in our testing foundation.
            </li>
            <li>
              Use of web-empowered imperfection the executives devices pondering
              straight-forwardness the testing cycle.
            </li>
            <li>
              Various groups work in various GEOs to track the deformities
              continuously.
            </li>
          </ul>

          <button className="bg-gradient-to-r from-[#f92c8b] to-[#b02cd6]   flex justify-center items-center mt-7 text-white px-6 py-4 text-base font-semibold  rounded-full">
            Request A Quote <FaAngleRight className="ml-2" />
            <span class="circle dkpr"></span>
          </button>
        </div>
      </div>

      <section className="service-section service-2 py-20">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <div className="text-center">
              <span className="text-5xl font-bold text-[#e60072] uppercase">
                Our Services
              </span>
              <h2 className="text-lg  mt-4 mb-8 text-[#6a6a8e]">
                We think big and have hands in all leading technology platforms
                to provide you wide array of services.
              </h2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2  max-lg:block   gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 px-40  max-sm:px-5 max-lg:px-10 my-10">
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex  max-sm:block   bg-[#e9ddff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service1}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  IOS App Development
                </h4>
                <span className="text-lg">
                  We provides cutting-edge mobile app development services to
                  turn your dreams of a business app into reality. We have a
                  proficient team for custom iOS app development.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex  max-sm:block  bg-[#ffdadb] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service2}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Android App Development
                </h4>
                <span className="text-lg">
                  Powering 2 Billion mobile devices across the globe, Android
                  inevitably stands out as one of the most sought-after
                  platforms for mobile app development.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block   bg-[#d6edff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service3}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Cross Platform App Development
                </h4>
                <span className="text-lg">
                  Need an app for your business that can run seamlessly across
                  Android and iPhone yet limited by budget constraints?{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block   bg-[#ffede1] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service4}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Mobile App Testing.
                </h4>
                <span className="text-lg">
                  We at Future IT Touch Pvt. Ltd. Technologies provide web
                  development solutions to clients. We happen to be a privately
                  managed software company.{" "}
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

      <div className="py-20 px-40 max-sm:px-0  z-10  max-md:px-10">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <div className="text-center">
              <span className="text-lg text-[#e60072] uppercase">Process</span>
              <h2 className=" text-4xl font-bold my-4 text-[#050748]">
                Our Services
              </h2>
              <h2 className="text-lg  mb-8 text-[#6a6a8e]">
                We think big and have hands in all leading technology platforms
                to provide you wide array of services.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 ">
          <div className="p-4 md:col-span-4 image-block ">
            <img
              src={mission}
              className="w-96 h-80 rounded-lg mx-auto"
              alt=""
            />
          </div>

          <div className="common-heading md:col-span-8 mt-10 ">
            <span className="py-3 px-8  text-5xl bg-[#f5f5ff] shadow-sm animation-custom text-[#6a6a8e] rounded-full ">
              <span>1</span>
            </span>
            <h3 className="text-4xl  max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-10 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Installation testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              We at FST are checking that software application is successfully
              installed and working as per expectation. This is most important
              testing phase and we understand this fact. With the use of
              required tools, devices and equipment we are bringing best of
              FineSoft.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
          <div className="common-heading md:col-span-8 mt-10 ">
            <span className="py-3 px-8  text-5xl bg-[#f5f5ff] shadow-sm animation-custom text-[#6a6a8e] rounded-full ">
              <span>2</span>
            </span>
            <h3 className="text-4xl  max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-10 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Functional Testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              Functional testing is a key component for improving the nature of
              the created programming. The dangers of discharging another item
              without thorough quality affirmation. It has more noteworthy
              ramifications now than any time in recent memory in light of the
              regularly changing desires and requests of the end clients.
              Discovering free QA and testing merchants, is essential to the
              accomplishment of a quality item. At FST, we esteem this, and
              being an autonomous programming testing organization empowers us
              to report the straightforward view. Our goal is to quantify the
              execution nature of the functional parts.
            </p>
          </div>
          <div className="p-4 md:col-span-4 image-block">
            <img
              src={vision1}
              className="w-96 h-96 rounded-lg mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
          <img src="" alt="" className="absolute -z-10 -top-0" />
          <div className="p-4 md:col-span-4 image-block ">
            <img
              src={vision2}
              className="w-96 h-96 rounded-lg mx-auto"
              alt=""
            />
          </div>

          <div className="common-heading md:col-span-8 mt-10 ">
            <span className="py-3 px-8  text-5xl bg-[#f5f5ff] shadow-sm animation-custom text-[#6a6a8e] rounded-full ">
              <span>3</span>
            </span>
            <h3 className="text-4xl  max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-10 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Usability Testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              Our usability testing administrations spread both web and mobile
              versions of applications and incorporates tests. For example,
              screen resolution checks, compatibility crosswise over gadgets, OS
              and frameworks working, A/B testing, among-st others to guarantee
              conformance to framework prerequisites as well as more
              significantly to client desires. So FST has assembled a mobile
              usability testing technique depending on our involvement with a
              wide scope of our customers and our great experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
          <div className="common-heading md:col-span-8 mt-10 ">
            <span className="py-3 px-8  text-5xl bg-[#f5f5ff] shadow-sm animation-custom text-[#6a6a8e] rounded-full ">
              <span>4</span>
            </span>
            <h3 className="text-4xl  max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-10 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Cloud Testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              We broadly work with a few cloud contributions including a portion
              of the main ones, for example, Amazon EC2, Microsoft Azure. We
              have utilized the cloud for a few of our customer assignments for
              zones, for example, useful, execution, similarity, globalization
              testing. At FST, cloud testing is a significant territory of
              enthusiasm for progressing innovative work (R&D) and we ensure
              maximum ROI for Client’s business.
            </p>
          </div>

          <div className="p-4 md:col-span-4 image-block">
            <img
              src={vision3}
              className="w-96 h-96 rounded-lg mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
          <div className="p-4 md:col-span-5 image-block ">
            <img
              src={vision4}
              className="w-full h-80  rounded-lg mx-auto"
              alt=""
            />
          </div>

          <div className="common-heading md:col-span-7 mt-10 ">
            <span className="py-3 px-8  text-5xl bg-[#f5f5ff] shadow-sm animation-custom text-[#6a6a8e] rounded-full ">
              <span>5</span>
            </span>
            <h3 className="text-4xl  max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-10 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Cross Platform (Hybrid) Testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              To guarantee the ideal similarity of a portable application with
              different stages, for example, Windows, Android, iOS, Linux,
              MacOS, and so forth. Our versatile application analyzers perform
              Cross-Platform testing that incorporates both mechanized and
              manual QA approaches.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
          <div className="common-heading md:col-span-8 mt-10 ">
            <span className="py-3 px-8  text-5xl bg-[#f5f5ff] shadow-sm animation-custom text-[#6a6a8e] rounded-full ">
              <span>6</span>
            </span>
            <h3 className="text-4xl  max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-10 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Security Testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              In this era of web and internet, data security is one of the prime
              worries for every advanced application. Security testing is
              directed to locate every single potential escape clause and
              shortcomings in the application at the soonest and enables the
              advancement. We at FST have a devoted and capable security testing
              group experienced in both open source and business apparatuses. As
              a result we take on Security and Penetration testing from
              beginning periods of the SDLC to avoid the loopholes in
              application.
            </p>
          </div>
          <div className="p-4 md:col-span-4 image-block">
            <img
              src={vision5}
              className="w-96 h-96 rounded-lg mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
          <div className="p-4 md:col-span-4 image-block ">
            <img
              src={vision6}
              className="w-96 h-96 rounded-lg mx-auto"
              alt=""
            />
          </div>

          <div className="common-heading md:col-span-8 mt-10 ">
            <span className="py-3 px-8  text-5xl bg-[#f5f5ff] shadow-sm animation-custom text-[#6a6a8e] rounded-full ">
              <span>7</span>
            </span>
            <h3 className="text-4xl  max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-10 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Performance Testing
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              One of the hardest challenges the companies are facing today
              includes accomplishing and keeping up their business’ central
              goal; basic applications at pinnacle performance and adaptability
              levels. Without a successful philosophy for anticipating framework
              conduct and performance under genuine pressure conditions. They
              are presented to the sorts of disastrous log jams and
              disappointments, therefore it cripple efficiency, head out clients
              and destroy the organization’s main concern. The need of great
              importance has in this manner, become a successful programming
              performance testing exertion to defeat such difficulties.
            </p>
          </div>
        </div>
      </div>
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

export default Mobile;
