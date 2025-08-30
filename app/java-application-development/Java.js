"use client";
import React from "react";
import gm from "../Assets/java.webp";
import ec from "../Assets/cod.webp";
import d1 from "../Assets/javawhy.webp";
import { FaChevronRight } from "react-icons/fa";
import m from "../Assets/m.webp";
import mi from "../Assets/mi.webp";
import m1 from "../Assets/m1.webp";
import m2 from "../Assets/m2.webp";
import h from "../Assets/h.webp";
import h1 from "../Assets/h1.webp";
import h2 from "../Assets/h2.webp";
import h3 from "../Assets/h3.webp";
import Link from "next/link";
import Head from "next/head";

const Java = () => {
  return (
    <>
      <Head>
        <title>Java - Future IT Touch Private Limited</title>
        <meta
          name="description"
          content="Future IT Touch Private Limited is a leading IT solutions provider."
        />
        <meta
          name="keywords"
          content="IT, Technology, Solutions, Future IT Touch"
        />
      </Head>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[410px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Java Blockchain Development Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                If you are coming from a technical background, it makes sense to
                build on that knowledge and see what blockchain brings to the
                table. In the end, blockchain is a new technology, but it
                contains a combination of existing technologies with human
                behavior fueled by network effects. It is worth stating that the
                popular technologies such as Java, .NET, and relational
                databases are not common in the blockchain space. This space is
                primarily dominated by C, Go, Rust on the server side, and
                JavaScript on the client side. But if you know Java, there are a
                few projects and components written in Java that can be used as
                a leveraged entry point to the blockchain space.
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
            src={gm}
            alt=""
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10  px-32  max-sm:px-5 max-lg:px-10 max-lg:px-10 py-14">
        <div className="w-3/5  max-lg:w-full">
          <h4 className="text-4xl font-bold  mb-3 text-[#050748] ">
            Why Java Application Development Services?
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Java offers multiple advanced features to satisfy the demand of a
              scripting and client-side programming language which allows web
              pages to be interactive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            <div className="flex items-center gap-5">
              <img src={h} alt="" className="text-3xl text-[#e33f70]" />

              <p className=" text-lg text-[#e33f70]">
                Platform-independent and Easy-to-adopt
              </p>
            </div>
            <div className="flex items-center gap-5">
              <img src={h1} alt="" className="text-3xl text-[#e33f70]" />

              <p className="text-lg text-[#e33f70]">
                Trouble-free connectivity features
              </p>
            </div>
            <div className="flex items-center gap-5">
              <img src={h2} alt="" className="text-3xl text-[#e33f70]" />

              <p className="text-lg text-[#e33f70]">
                Provides solution in reduced time
              </p>
            </div>
            <div className="flex items-center gap-5">
              <img src={h3} alt="" className="text-3xl text-[#e33f70]" />

              <p className="text-lg text-[#e33f70]">
                Allows you to create modular programs and reusable code
              </p>
            </div>
          </div>
        </div>

        <div className=" w-2/5 max-lg:w-full">
          <img
            src={d1}
            alt="Design 1"
            className="w-full h-80 max-sm:mb-3 max-lg:mx-auto"
          />
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
                <Link href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white font-semibold py-2 px-4 rounded-md mr-4">
                    RECENT PROJECTS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 pb-10  pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          <div className="">
            <div className="Development-text">
              <div className="flex items-center">
                <img src={m} alt="" className="rounded-full w-12" />
                <p className="ml-2 text-lg text-[#e33f70]">
                  Stable programming
                </p>
              </div>
              <p>
                Java app development provides Java developers with stable and
                customized{" "}
              </p>
            </div>
            <div className="Development-text mt-5">
              <div className="flex items-center">
                <img src={m1} alt="" className="rounded-full w-12" />
                <p className="ml-2 text-lg text-[#e33f70]">Dynamic design</p>
              </div>
              <p>
                Java development allows developers to create secure and dynamic
                designs for your application.
              </p>
            </div>
            <div className="Development-text mt-5">
              <div className="flex items-center">
                <img src={m2} alt="" className="rounded-full w-12" />
                <p className="ml-2 text-lg text-[#e33f70]">
                  Easy maintenanced{" "}
                </p>
              </div>
              <p>
                Easy support and maintenance makes Java the most loved app
                development language among app developers.
              </p>
            </div>
          </div>
          <img src={mi} alt="" />
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
                <Link href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white text-nowrap font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 max-lg:block gap-10  bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="col-span-7">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            From Our Blog
          </h4>
          <p className="mb-6 text-[#f00] text-xl mt-6">
            What Are The Advantages Of Using The React Framework?
          </p>
          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p>
              The rapidly changing digital landscape requires the building of
              rich and engaging frontend web applications quickly and
              efficiently. This needs choosing a framework that is simple, easy
              to use/reuse, flexible, and allows minimal coding. Among the many
              open source frameworks available, React aka React or React.js fits
              the bill perfectly to build robust, attractive, feature rich,
              scalable, and secure Single Page Applications (SPA).
            </p>
          </div>
        </div>

        <div className="col-span-5 mt-10">
          <img src={ec} alt="" className="" />
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

export default Java;
