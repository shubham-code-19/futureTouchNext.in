import React from "react";

import realestate from "../Assets/teama.svg";
import tour from "../Assets/link.svg";
import education from "../Assets/tech.svg";
import transport from "../Assets/hi.svg";
import event from "../Assets/badge.svg";
import ecommerce from "../Assets/tin.svg";
import { FaAngleRight } from "react-icons/fa";

const ChooseFuture = () => {
  const industriesData = [
    { icon: realestate, title: "Reliable Service. In House Team" },
    { icon: tour, title: "Trusted by People Like You" },
    { icon: education, title: "Complete Technical Competency" },
    { icon: transport, title: "Friendly & Cordial in Nature" },
    { icon: event, title: "Excellent Quality Delivered on Timeent" },
    { icon: ecommerce, title: "Effective & Continuous Communication" },
  ];
  return (
    <>
      <div className=" bg-gradient-to-b from-[#ffe2e2] to-[#fff9f4] pb-20">
        <div className="">
          <div className="pt-24 md:col-span-12 text-center">
            <span className="text-xl font-semibold mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest">
              We Deliver Our Best
            </span>
            <h2 className="text-4xl m-2 font-bold">
              Why Choose Future IT Touch Pvt. Ltd.
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap px-40 max-sm:px-0 max-md:px-5 mt-16 ">
          {industriesData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/3 px-4 mb-4"
            >
              <div className="bg-white border border-[#d4f0ff] custom-shadow flex h-36 items-center pl-5 rounded-lg shadow-md overflow-hidden">
                <img src={item.icon} className="w-14 h-14" alt="img" />
                <div className="p-4">
                  <h6 className="font-bold text-2xl text-[#050748]">
                    {item.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-card mt-10 flex max-sm:block max-md:block justify-center items-center gap-5 px-5">
          <h3 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold   ">
            Let's Start Link
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
              {""} New Project
            </span>
            {""} Together
          </h3>

          <a
            href="/login"
            className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full  ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
          >
            Request A Quote <FaAngleRight className="relative left-2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ChooseFuture;
