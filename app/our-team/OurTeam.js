"use client"
import React, { useEffect } from "react";

import card2 from "../Assets/gagan.webp";
import card3 from "../Assets/ravinder.webp";
import card4 from "../Assets/rahul.png";
import card7 from "../Assets/vishal.png";
import card6 from "../Assets/girl.png";
import card8 from "../Assets/shivam.png";
import card9 from "../Assets/shubham.png";
import card10 from "../Assets/DInesh.png";

import kajal from "../Assets/kajalmam.png";


import Bhawna from "../Assets/bhawna.png";
import Rohitsir from "../Assets/rohitsir.png";
import Rotang from "../Assets/rotang.png";

import Rishav from "../Assets/rishav.png";
import abhihek from "../Assets/abhihek.png";
// import  from "../Assets/rishav.png";





// import card7 from "../Assets/vishal.webp";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import CommonBanner from "../components/CommonBanner";

import Link from "next/link";

const OurTeam = () => {

  const portfolioItems = [
    {
      image: "/Assets/vinod.webp",
      category: "Founder & CEO",
      title: "Vinod Tanwar",
    },

    {
      image: "/Assets/girl.png",
      category: "Founder & CEO",
      title: "Pooja",
    },

    {
      image: "/Assets/rotang.png",
      category: "BDM (Chandigarh)",
      title: "Rohtash Tanwar",
    },


    {
      image: "/Assets/DInesh.png",
      category: "BDM (Bangalore)",
      title: "Dinesh",
    },

    {
      image: "/Assets/bhawna.png",
      category: "BDM (Chandigarh)",
      title: "Bhawna Bakshki",
    },
    {
      image: './texas.png',
      category: "BDM (Texas - USA)",
      title: "Rajan Sharma",
    },


    {
      image: "/Assets/kajalmam.png",
      category: "HR",
      title: "Kajal ",
    },


    

    // {
    //   image: card2,
    //   category: "Website Designer",
    //   title: "Gagan Kumar",
    // },
    {
      image: "/Assets/rohitsir.png",
      category: "Website Designer",
      title: "Rohit walia",
    },
    {
      image: "/Assets/ravinder.webp",
      category: ".Net Developer",
      title: "Ravinder Godara",
    },
    // {
    //   image: card4,
    //   category: "Web Developer",
    //   title: "Rahul Rana",
    // },
    {
      image: "/Assets/vishal.png",
      category: "Web Developer",
    
      title: "Vishal Thakur",
    },
    {
      image: "/Assets/shivam.png",
      category: "React Developer",
     
      title: "Shivam Lugwal",
    },
    {
      image: "/Assets/shubham.png",
      category: "React Developer",
     
      title: "Shubham",
    },

    // {
    //   image: Rishav,
    //   category: "Graphic Designer",
    //   title: "Rishav",
    // },

    // {
    //   image: abhihek,
    //   category: "MERN Stack  Developer",
    //   title: "Abhishek",
    // },

    {
      image: '/vivek.png',
      category: "Full Stack Developer",
      title: "Vivek Pundir",
    },



   
    // Add more portfolio items as needed
  ];
  // https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png
  return (
    <>
      

      <CommonBanner title="Our Leaders" breadcrumb="Our Leaders"/>

      <div className="mx-5 mt-10 sm:mx-5 md:mx-10 lg:mx-20 text-center">
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-8 font-bold">
          <span
            className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            We Are Awesome <br />
          </span>
          Our Team
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text ml-2">
            Members
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-20 pb-12 max-sm:px-5 lg:grid-cols-4 gap-14 ">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="our-team wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-image overflow-hidden border-1">
                <img className="zoom-image" src={item.image} alt={item.title} />
              </div>

              <div className="px-6 py-4 team-content flex justify-between items-center">
                <div className="">
                  <div className="font-bold text-xl mb-2 text-left">{item.title}</div>
                  <p className="text-left text-base">
                    {/* <Link href={item.link} className="font-semibold ">
                      {item.category}
                    </Link> */}
                  </p>
                </div>
                <div className="relative group">
                  <div className="media-btn p-2 w-10 h-10 my-2 bg-indigo-700 hover:bg-teal-400 text-white rounded">
                    <FaPlus className="icon-plus text-2xl" />
                  </div>
                  <ul className="social-icons list-inline  absolute bottom-0 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://www.facebook.com/"
                        tabIndex="0" target="blank"
                        className="text-white text-2xl"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://twitter.com/"
                        tabIndex="0" target="blank"
                        className="text-white text-2xl"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://in.pinterest.com/"
                        tabIndex="0" target="blank"
                        className="text-white text-2xl"
                      >
                        <FaPinterest />
                      </a>
                    </li>
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://www.instagram.com/"
                        tabIndex="0" target="blank"
                        className="text-white text-2xl"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
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

export default OurTeam;
