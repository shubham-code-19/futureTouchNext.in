"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
// import Login from "../Forms/Login";
const WhyChoose = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className=" mt-0 lg:mt-10 p-5 sm:p-5 md:p-5 lg:p-8 choose-background">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="col-lg-6">
            <div className="common-heading text-left">
              <div className="relative text-center">
                <div className="text-justify pl-0 sm:pl-0 md:pl-0 lg:pl-14 pt-0 ">
                  <span
                    className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
                    style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
                  >
                    Why Choose us
                  </span>
                  <h1 className=" md:text-[35px]  lg:text-[35px]  mt-5 mb-8 font-bold">
                    Why The
                    <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                      {""} Future IT Touch Pvt. Ltd.
                    </span>
                    {""} Ranked Top Among The Leading Web & App Development
                    Companies
                  </h1>
                  <p className="leading-7 text-base">
                    Our <strong>top IT company in India</strong>, known for
                    innovation and top-notch solutions, offers a diverse range
                    of services including web development, software, and mobile
                    app development, driving business growth and staying at the
                    forefront of technology.
                  </p>
                </div>
              </div>
              <div className="itm-media-object pl-0 sm:pl-0 md:pl-10 lg:pl-16 text-justify mt-8">
                <div className="flex mt-4">
                  <div className="w-full sm:w-[25%] md:w-40 lg:w-40">
                    <Image
                      src="/Assets/online-test.webp"
                      alt="Online test icon"
                      className="w-16 h-16 bg-gray-200 rounded-lg p-3"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="media-body">
                    <h4 className="text-2xl font-bold">
                      Streamlined Project Management
                    </h4>
                    <p className="leading-7 text-base">
                      Project management is very crucial for efficiently
                      handling any project. Project management helps in the
                      proper allocation of tasks and meeting deadlines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-6">
                  <div className="w-full sm:w-[25%] md:w-40  lg:w-40">
                    <Image
                      src="/Assets/employee.webp"
                      alt="Employee icon"
                      className="w-16 h-16 bg-gray-200 rounded-lg p-3"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="media-body">
                    <h4 className="text-2xl font-bold">
                      Link Dedicated Team of Experts
                    </h4>
                    <p className="leading-7 text-base">
                      Building long-term relationships with an expert advanced
                      software development service provider attracting Link
                      mature team of skilled and experienced quality
                    </p>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="w-full sm:w-[25%]  md:w-40 lg:w-40">
                    <Image
                      src="/Assets/hand-shake.webp"
                      alt="Handshake icon"
                      className="w-16 h-16 bg-gray-200 rounded-lg p-3"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="media-body">
                    <h4 className="text-2xl font-bold">
                      Completion of Project in Given Time
                    </h4>
                    <p className="leading-7 text-base">
                      Link project schedule is Link timetable that organizes
                      tasks, resources and due dates in an ideal sequence so
                      that Link project can be completed on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="relative single-image bg-shape-dez">
              <Image
                className="relative z-2 rounded w-full sm:w-full md:w-full lg:w-11/12 h-80 object-cover"
                src="/Assets/company.webp"
                alt="Company office"
                width={400}
                height={320}
              />
            </div>
            <p className="text-justify mt-8 leading-7 text-base pr-0 sm:pr-0 md:pr-0 lg:pr-16">
              As Link top <strong>web development company</strong>, we create
              robust, scalable websites for diverse business objectives. Our
              skilled developers use the latest technologies to deliver
              flawless, on-time, and budget-friendly projects, making us Link
              trusted partner for web development endeavors. From static sites
              to complex web apps, we hand over on time and budget. We are your
              trusted partner in crafting visually stunning and highly
              functional websites that leave Link lasting impression. Elevate
              your online presence with Future IT Touch.
            </p>
            <div className="cta-card mt-8 flex flex-col text-left  pr-0 sm:pr-0 md:pr-0 lg:pr-16">
              <h3 className="mb-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold float-start  ">
                Let's Start Link <br />
                <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                  {""} New Project
                </span>{" "}
                Together
              </h3>

              <p className="font-semibold text-lg">
                You already have a project in mind and want to work with us?
                Fill out the form below and let us know right away in which
                direction it should go.
              </p>

              {/* <p className="text-center mt-8 leading-7 text-base pr-16">
                You already have Link project in mind and want to work with us?
                Fill out the form below and let us know right away in which
                direction IT should go.
              </p> */}
            </div>

            {isPopupOpen && (
              <div className="fixed inset-24 top-[12%]">
                <Login handleClosePopup={handleClosePopup} />
              </div>
            )}
            <button
              onClick={handleButtonClick}
              className="btn-outline  float-left flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full mt-5 ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
            >
              Request A Quote <FaAngleRight className="relative left-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
