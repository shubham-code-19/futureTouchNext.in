"use client";
import React from "react";
import gm from "../Assets/solidity.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/ptndev.webp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const Customer = () => {
  return (
    <>
      <Head>
        <title>Customer Polls - Future IT Touch Private Limited</title>
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
      <div className=" relative overflow-hidden bg-[#442a79] h-[430px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Customer Polls Blockchain Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Future IT Touch Pvt. Ltd. provides blockchain dedicated teams to
                help our clients in getting top-notch and secure solutions
                tailored to their specific needs. We help business owners to
                translate their ideas into blockchain solutions, assist in
                polishing and reviewing existing blockchain applications.
                Whether you need to develop your blockchain solution from
                scratch or looking for ways to improve your existing
                implementations, you can always outsource this work to us. Being
                a blockchain app development company, Future IT Touch Pvt. Ltd.
                makes sure that each solution delivered ensures significant
                reduction in attack vulnerability. Our team has deep expertise
                in strengthening critical network and hardware requirements, as
                well as fixing data tampering issues by developing robust
                blockchain solutions.
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
            Why Blockchain Development Solution
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Blockchain is bringing a radical change in the business world with
              its characteristics of decentralization, immutability,
              transparency, and distributed ledger. We, with a clear
              understanding of its growing potential and experience of
              integrating blockchain into mobility solutions, are offering the
              best of both the worlds to startups and enterprises. From the
              development of a Smart Contract and Cryptocurrencies, Auditing the
              processes before they go live on the unaltered system and helping
              Start-ups raise an ICO, we have done it all.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full">
          <img
            src={d1}
            alt="Design 1"
            className="w-96 mt-5  h-60  max-sm:mb-3 max-lg:mx-auto "
          />
        </div>
      </div>

      <div className="bg-image-third mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row px-40  max-sm:px-5 max-lg:px-10">
          <div className="md:w-1/2"></div>

          <div className="md:w-1/2 md:ml-4">
            <div className="">
              <h3 className="text-3xl font-bold mb-4 text-[#050748]">
                Various Types of Blockchain:
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

      <div className="grid grid-cols-12 max-lg:block gap-10  bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="col-span-7">
          <h4 className="text-4xl font-bold my-5 text-[#050748] ">
            From Our Blog
          </h4>

          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p className="text-[#e33f70] mb-4">
              Why Blockchain development of cryptocurrency trading
            </p>
            <p>
              Future IT Touch Pvt. Ltd. offers the development of cryptocurrency
              trading platforms as well as OEM-white-labeled crypto exchanges on
              the basis of MetaTrader. We provide customers onboarding process,
              support of cryptocurrency deposits/withdrawals, trading dashboard
              development, integration with order matching engine. On average we
              ensure the support of up to 10 cryptocurrencies.
            </p>
          </div>
        </div>

        <div className="col-span-5 max-lg:mt-10">
          <img src={ec} alt="" className="border-[18px] border-[#dfdfdf]" />
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

export default Customer;
