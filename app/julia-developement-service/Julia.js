"use client";
import React from "react";
import gm from "../Assets/Julia.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/juliad.webp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const Julia = () => {
  return (
    <>
      <Head>
        <title>Julia - Future IT Touch Private Limited</title>
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
      <div className=" relative overflow-hidden bg-[#442a79] h-[350px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              JULIA DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Julia is a relatively new programming language that has been
                gaining traction in the Machine Learning world. As it is getting
                more and more popular, I wanted to do this article to give you
                an in-depth overview of why and how to get started with Machine
                Learning in Julia. The main advantage of Julia over other
                Machine Learning languages is speed. Two main reasons for
                Julia’s speed advantage are, firstly, that it is a compiled
                language. Secondly, it has been designed for parallelism.
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
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Julia Web Development Company
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              The resources for Machine Learning in Julia are still relatively
              distributed over different packages. Julia being not (yet) as
              popular as other programming languages for Machine Learning, it
              can sometimes be a bit of work to find specific models. It can
              also be more effort to find (or write) certain basic data
              preparation functions that are easily available in Python and R.
              The good news is that there are initiatives to regroup Machine
              Learning models in larger libraries. At this point, there are two
              libraries that are seriously competing for becoming the go-to
              Machine Learning library in Julia: MLJ and Scikit Learn.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full max-sm:mt-10">
          <img
            src={d1}
            alt="Design 1"
            className="w-96 h-60  max-sm:mb-3 max-lg:mx-auto"
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

      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10  py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Why Julia programming language stands apart from existing
          frontrunners?
        </h3>
        <p className=" text-lg text-[#6a6a8e] text-justify my-5">
          Top tech giants like Amazon, Google Maps, Netflix, Siri, & more come
          under the hats of machine learning technology. With a plethora of
          data-driven prediction models & solutions, the innovation of Julia
          adds fuel in the fire in terms of speeding up the optimization process
          for increased ROI. ML is predicted to achieve excellent growth rate
          with a CAGR of 43% between the year 2019-24 in combination with
          Julialang.
        </p>
        <p className=" text-lg text-[#6a6a8e] text-justify my-5">
          Since its launch in 2012, Julia came out as a high-level
          general-purpose open-source programming language developed to perform
          high-end computations. If you’re new to this programming language then
          this brief introduction will definitely keep you engaged for the next
          few minutes. Julia stockpiles feature like multiple dispatch, built-in
          package, distributed computing, multiple dispatch, & other add-ons.
          Though it merges C, Python, MATLAB, Ruby, & R, it gained popularity
          within a shorter span of time, particularly for this reason.
        </p>
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

      <div className="grid grid-cols-12  max-lg:block gap-10  bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="col-span-7">
          <h4 className="text-3xl font-semibold  text-[#050748] ">
            Why Choose Us?
          </h4>
          <h4 className="text-4xl font-bold my-5 text-[#050748] ">
            From Our Blog
          </h4>

          <div className="text-xl text-justify text-[#6a6a8e] ">
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
            className="border-[18px] border-[#dfdfdf] max-lg:mx-auto max-lg:mt-10"
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

export default Julia;
