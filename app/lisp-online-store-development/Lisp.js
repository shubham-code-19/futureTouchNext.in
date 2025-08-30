"use client";
import React from "react";
import gm from "../Assets/lisp.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/lispwhy.webp";
import { FaChevronRight, FaDotCircle } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const Lisp = () => {
  return (
    <>
      <Head>
        <title>Lisp - Future IT Touch Private Limited</title>
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
              lisp Online Store Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                LISP or List Processor language remains the principal language
                for AI work in the United States. LISP was invented at the
                Massachusetts Institute of Technology (MIT) by John McCarthy,
                who coined the term “artificial intelligence”. Lisp is the
                second-oldest high-level programming language in use today, and
                has become the programming language of choice for AI
                applications after its publication in 1960. LISP operates on
                Read–Eval–Print Loop (REPL), also known as an interactive top
                level or language shell, in an interactive computer programming
                environment that codes, compiles, and runs the code in 30+
                programming languages including JavaScript and Python.
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
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10  px-32  max-sm:px-5 max-lg:px-10 max-lg:px-10 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Why lisp For AI/ML Solution
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              LISP is used more by compilers than interpreters as it supports
              efficient and fast coding. Common adopters of LISP include
              Grammarly, a popular cloud-based free interactive writing platform
              to make messages, documents, and posts clear, mistake-free, and
              effective.
            </p>
            <ul class="list-none mt-10">
              <li className="flex gap-2 items-center">
                <FaDotCircle className="text-[#e33f70]" />
                Recursion is used as the control structure, not iteration (loop)
                as in imperative languages.
              </li>
              <li className="flex gap-2 items-center">
                <FaDotCircle className="text-[#e33f70]" />
                It is an ideal option for processing symbolic information.
              </li>
              <li className="flex gap-2 items-center">
                <FaDotCircle className="text-[#e33f70]" />
                It can be used to develop superior prototypes and create new
                objects dynamically.
              </li>
            </ul>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full ">
          <img
            src={d1}
            alt="Design 1"
            className="w-96 mt-10 h-60  max-sm:mb-3  max-lg:mx-auto "
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

      <div className="grid grid-cols-12 max-lg:block  gap-10  bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="col-span-7">
          <h4 className="text-4xl font-bold my-5 text-[#050748] ">
            From Our Blog
          </h4>

          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p className="text-[#e33f70] mb-4">
              Why Custom AI/ML Solution Is Important to Your Business
            </p>
            <p>
              Nowadays, almost every business has experienced that it can
              succeed when its offerings are visible to their customers. For
              that reason, business owners invest in spending money on
              developing visually attractive websites and look for sophisticated
              SEO experts to differentiate themselves amidst the clutter.
            </p>
          </div>
        </div>

        <div className="col-span-5">
          <img
            src={ec}
            alt=""
            className="border-[18px] border-[#dfdfdf] max-lg:mt-10"
          />
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

export default Lisp;
