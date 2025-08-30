"use client"
import React, {useEffect} from "react";
import Image from "next/image";

import mission from "../Assets/mission.webp";
import visions from "../Assets/Visions.webp";
import vis from "../Assets/vision (1).webp";
import bgimage from "../Assets/shape-1.svg";
import bgsecond from "../Assets/shape-2.svg";
import vision from "../Assets/vision.webp";
import icon1 from "../Assets/logo-and-branding.svg";
import icon2 from "../Assets/service2.svg";
import icon3 from "../Assets/service3.svg";
import icon4 from "../Assets/service4.svg";
import icon5 from "../Assets/service5.svg";
import icon6 from "../Assets/service6.svg";
import shape from "../Assets/shape-13.svg";
import shape4 from "../Assets/shape-4.svg";
import shape2 from "../Assets/shape-3.webp";
import shape3 from "../Assets/breadcrumb-shape-5.webp";
import Link from "next/link";
import {  FaChevronRight } from "react-icons/fa";
import CommonBanner from "../components/CommonBanner";

const Mission = () => {
 
  const services = [
    {
      icon: icon1,
      title: "Professionalism",
      link: "https://webency.themejunction.net/services/logo-design/",
      description:
        "We pride in being punctual and organized. We help you and provide our services till the end. We also strive to understand your business and give you the best.",
    },
    {
      icon: icon2,
      title: "Enthusiasm",
      link: "https://webency.themejunction.net/services/web-design/",
      description:
        "We are a team of people who are excited and enthusiastic to learn new things and to push boundaries of the digital world. We work creatively and have fun bonding with our clients and team.",
    },
    {
      icon: icon3,
      title: "Diversity",
      link: "https://webency.themejunction.net/services/mobile-apps/",
      description:
        "We have worked with a variety of niches from health and services to banking, etc. We tackle diverse problems working with all kinds niches and it has only helped us gain experience and made us better.",
    },
    {
      icon: icon4,
      title: "Creativity",
      link: "https://webency.themejunction.net/services/digital-marketing/",
      description:
        "We have tailored or customized plans to suit all your needs and desires. We come up with new ideas to tackle your problems and make you unique. We love to feed our creative monsters.",
    },
    {
      icon: icon5,
      title: "Originality",
      link: "https://webency.themejunction.net/services/branding-art/",
      description:
        "Future IT Touch Pvt. Ltd. are creative heads come up with authentic content and plans tailored just for your needs. We give you quick and innovative solutions to your problems.",
    },
    {
      icon: icon6,
      title: " Agile",
      link: "https://webency.themejunction.net/services/3d-animation/",
      description:
        "We have a people-first approach. And we pride ourselves in understanding and bonding with the client and really getting to know what they desire and reflecting it in their website.",
    },
  ];
  return (
    <>
      <CommonBanner title="Mission & Vision" breadcrumb="Mission & Vision" />

      <div className=" relative z-10  py-20 px-20 max-sm:px-0 max-md:px-10 bg-gradient-to-b from-[#fff6f3]  to-[#fffefb]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 ">
          <img src={"/Assets/shape-1.svg"} alt="" className="absolute -z-10 -top-0" />
          <div className="p-4 md:col-span-4 image-block ">
            <img
              src={"/Assets/Visions.webp"}
              className="w-96 h-80 rounded-lg mx-auto"
              alt=""
            />
          </div>

          <div className="common-heading md:col-span-8 mt-4 ">
            <span className="text-lg text-[#e60072] font-medium ml-0 max-sm:ml-5">
              Vision
            </span>
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold my-2 px-0 max-sm:px-5 max-md:px-5">
              Our Vision
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10 max-lg:pr-0  max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              Future IT Touch Pvt. Ltd. Technologies, we are always looking
              toward the future. Our innovative solutions work to anticipate
              emerging trends and position your business for growth. That is why
              we make ongoing education and professional development a
              cornerstone of our own operations. We don’t say NO to any
              assignments. No assignment is small. We strictly follow the
              culture of integrity.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 ">
          <div className="common-heading md:col-span-8 mt-4 pl-10 max-sm:pl-0 max-md:pl-0 max-lg:pl-2">
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold my-2 px-0 max-sm:px-5 max-md:px-5 mt-5">
              Vision Statement
            </h3>
            <ul className="text-xl text-[#6a6a8e] text-justify pt-3  max-sm:px-5 max-md:px-0 pr-0 max-sm:pr-5 max-md:pr-10 ">
              <li>
                - Future IT Touch Pvt. Ltd. believes in exploring new
                opportunities that maximizes the business value, consistent
                growth and sustainability using our core competencies.
              </li>
              <li>
                - Meeting expectations of our customers, employees, and
                partners.
              </li>
              <li>
                - Operate globally and bring the benefits of IT to improve the
                quality of the products and services of our clients.
              </li>
              <li>
                - Be a vibrant organization where openness, trust, teamwork,
                simplicity, and innovation are valued and promoted.
              </li>
              <li>
                - We values integrity, commitment, excellence, teamwork,
                transparency, and satisfaction for our clients and ourselves.
              </li>
              <li>
                - Aenean sit amet elit euismod, aliquam quam eu, semper tellus.
              </li>
              <li>
                - Globally recognized for providing quality Services to its
                customers worldwide while adhering to our core values.
              </li>
            </ul>
          </div>
          <div className="p-4 md:pt-10 lg:p-10 md:col-span-4 image-block">
            <img src={"/Assets/vision (1).webp"} className="w-96 h-80 rounded-lg mx-auto" alt="" />
          </div>
          <img
            src={"/Assets/shape-2.svg"}
            alt=""
            className="absolute -z-10 -bottom-0 right-0"
          />
        </div>
      </div>

      <div className="px-40 py-20 max-sm:px-5 max-lg:px-5 bg-gradient-to-b from-teal-50 to-pink-100">
        <div className="text-center px-48 max-sm:px-0 max-md:px-10">
          <span className="text-lg text-[#e60072]  font-medium">Values</span>
          <h1 className="text-3xl max-sm:text-2xl max-md:text-2xl font-bold mt-4 mb-8">
            <span className="  py-1 px-2 bg-b rounded-full">
              Future IT Touch Pvt. Ltd.'s <br /> Core Values
            </span>
          </h1>
          <p className="text-lg text-justify text-[#6a6a8e] max-sm:px-5">
            Here are some of the reasons we think you should consider working
            with{" "}
            <span className=" py-1 px-2 rounded-full">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            We think big and have hands in all leading technology platforms to
            provide you wide array of services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg bg-white overflow-hidden border shadow-lg pt-10  text-center"
            >
              <Image src={service.icon} className="w-20 mx-auto " alt="" />
              <div className="px-6 py-10">
                <div className="font-bold text-2xl mb-4">{service.title}</div>
                <p className="text-[#6a6a8e] text-lg text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#fff6f3]  to-[#fffefb] py-20 px-20 relative z-10 max-sm:px-0 max-md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 ">
          <Image src={bgimage} alt="" className="absolute -z-10 -top-0" />
          <div className="p-4 md:col-span-4 image-block ">
            <Image
              src={mission}
              className="w-96 h-80 rounded-lg mx-auto"
              alt=""
            />
          </div>

          <div className="common-heading md:col-span-8 mt-4 ">
            <span className="text-lg text-[#e60072] font-medium ml-0 max-sm:ml-5">
              Mission
            </span>
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold my-2 px-0 max-sm:px-5 max-md:px-5">
              Our Mission
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10 max-lg:pr-0 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              Our mission is to maintain long-term relationship with our
              customers and delivering quality services on time with first class
              technology support at competitive pricing. We are dedicated to
              creating innovative and efficient ways to help our clients meet
              the rapidly changing demands of the digital marketplace. This
              allows us to devise intuitive and intelligent ways of addressing
              our clients' business challenges and create solutions that
              generate business value for our clients. That is why our clients
              enjoy a maximum return on their investment and are able to stay
              ahead of the competition.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 ">
          <div className="common-heading md:col-span-8 mt-4 pl-10 max-sm:pl-0 max-md:pl-0 max-lg:pl-2">
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold my-2 px-0 max-sm:px-5 max-md:px-5 mt-5">
              Mission Statement
            </h3>
            <ul className="text-xl text-[#6a6a8e] text-justify pt-3  max-sm:px-5 max-md:px-0 pr-0 max-sm:pr-5 max-md:pr-10 ">
              <li>
                - We understand needs and requirements of our customer and make
                technology to resolve the needs.
              </li>
              <li>
                - We believe to explore new opportunities that maximizes the
                business value, consistent growth and sustainability.
              </li>
              <li>
                - Empower our clients to respond faster and more intuitively to
                changing market dynamics.
              </li>
              <li>
                - Enable them to become more agile and competitive through
                leveraging new technologies.
              </li>
              <li>
                - Help our clients to bring great products to market in less
                time and at less cost
              </li>
              <li>
                - Collaborate with our clients in their continued success.
              </li>
            </ul>
          </div>
          <div className="p-4 md:pt-10 lg:p-10 md:col-span-4 image-block">
            <Image src={vision} className="w-96 h-80 rounded-lg mx-auto" alt="" />
          </div>
        </div>
      </div>

      <div className="px-40 py-20 max-sm:px-5 max-lg:px-5 relative max-md:px-10 bg-gradient-to-b from-teal-50 to-pink-100">

        <div className="text-center px-48 max-sm:px-5 max-lg:px-5 max-md:px-10">
          <span className="text-lg text-[#e60072]  font-medium">
            Let's work together
          </span>
          <h1 className="text-5xl max-sm:text-2xl max-md:text-2xl font-semibold mt-4 mb-8">
            We Love to Listen to Your Requirements
          </h1>
        </div>
        <Image src={shape} alt="" className="absolute right-0 top-0"/>
        <Image src={shape2} alt="" className="absolute left-0 z-10 max-lg:-z-10 bottom-0"/>
        <Image src={shape4} alt="" className="absolute right-0 z-10 max-lg:-z-10  bottom-0"/>
        <Image src={shape3} alt="" className="absolute right-40 opacity-50 w-40 -top-14"/>

          <h3 className=" text-xl text-center sm:text-xl md:text-3xl lg:text-4xl font-semibold text-[#6a6a8e]  ">
            <p className="cta-call">
              Or call us now <a to="tel:+91-7056937000">+91-7056937000</a>
            </p>
          </h3>

         
        
      </div>

      <div className="bg-custome py-10 px-4 sm:px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <h1 className="text-[#050748] text-3xl font-bold">
            Get New Insights Weekly
          </h1>
          <p className="mt-4 text-lg font-semibold text-slate-600">
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

export default Mission;
