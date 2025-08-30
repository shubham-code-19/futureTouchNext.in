import React from "react";
import gm from "../Assets/cro.webp";
import phone from "../Assets/ec.webp";
import { ecommerceData } from "../common/Service_comp";
import d1 from "../Assets/logo-gif.webp";
import { FaChevronRight } from "react-icons/fa";
import { cuttingData } from "../common/Service_comp";
import Link from "next/link";
import Head from "next/head";

const Identity = () => {
  return (
    <>
      <Head>
        <title>
          Unique Corporate Identity Design Services - Future ITtouch
        </title>
        <meta
          name="description"
          content="Boost your brand with Future ITtouch's expert corporate identity design services. We create cohesive, memorable identities that set your business apart."
        />
        <meta
          name="keywords"
          content="IT, Technology, Solutions, Future IT Touch"
        />
      </Head>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-96 max-lg:h-auto ">
        <div className="flex max-sm:block max-lg:block px-28 max-sm:px-5  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              The first impression is the best one
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Your business card builds your first impression. A
                professionally designed letterhead containing your business
                proposal increases your chances of acquiring the project. We
                start the process of crafting a corporate stationary design by
                knowing the ins and outs of your business so as to offer you
                with the best solution. Being a leading graphic design company
                in India, our aim is to uphold the corporate culture of your
                business and enhance its public image through our corporate
                identity design services. .
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
              <Link href="tel:+917056937000" legacyBehavior>
                <a className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                  Call us - 7056937000
                </a>
              </Link>
            </div>
          </div>
          <img
            src={gm}
            alt=""
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10  px-32 max-sm:px-5  max-lg:px-10 py-14">
        <div className="w-3/5 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Corporate Stationery Design
          </h4>
          <h4 className="text-2xl font-semibold mb-3 text-[#050748] ">
            The first impression is the best one
          </h4>
          <div className="text-lg text-justify text-[#6a6a8e] ">
            <p>
              Your business card builds your first impression. A professionally
              designed letterhead containing your business proposal increases
              your chances of acquiring the project. We start the process of
              crafting a corporate stationary design by knowing the ins and outs
              of your business so as to offer you with the best solution. Being
              a leading graphic design company in India, our aim is to uphold
              the corporate culture of your business and enhance its public
              image through our corporate identity design services.
            </p>
          </div>
        </div>

        <div className=" w-2/5 max-lg:w-full max-lg:mt-10">
          <img
            src={d1}
            alt="Design 1"
            className="w-full h-72 max-sm:mb-3  max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="bg-image-third mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row px-40 max-sm:px-5">
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
                <Link href="/our-portfolio" className="inline-block">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white font-semibold py-2 px-4 rounded-md mr-4">
                    RECENT PROJECTS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32 max-sm:px-5  max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Cutting Edge Web Application Development for Corporate
        </h3>

        <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-12  text-lg text-[#6a6a8e]">
          {cuttingData.map((item, index) => (
            <div key={index}>
              <div className="flex items-start gap-5">
                <div className="py-4">
                  <item.iconfive className={`text-4xl text-[${item.color}]`} />
                </div>

                <p className="mt-2">{item.descriptionfive}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl my-14 text-[#050748] font-bold">
          To help create a strong brand identity for you, our comprehensive
          range of business stationery items:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Logo Design
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Letterheads
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Presentation folder
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Brochure Design
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            ID Card
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Packaging design
          </p>

          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Business cards
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Envelopes
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Leaflet/Flyer design
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Sticker design
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Book cover design
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Catalog design
          </p>
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
                <Link href="/our-portfolio" className="inline-block">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white text-nowrap font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32 max-sm:px-5  max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Why Choose Us ?
        </h3>

        <div className="flex max-sm:block gap-10 mt-3">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {ecommerceData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={`rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.icon className={`text-4xl text-[${item.color}]`} />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleThree}
                    </p>
                    <p className="mt-2 text-justify">{item.descriptionTwo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-10">
            <img
              src={phone}
              alt=""
              className="border-[18px] border-[#dfdfdf]"
            />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 text-justify">
          As the providers of PPC services in India and abroad, we are upfront
          about our work process. Before starting your journey with us, clear
          all your doubts.to enterprise, single vendor to multi vendor, B2C to
          B2B business - we have provided effective eCommerce solutions to a
          global clientele. We have also built several eCommerce mobile apps as
          per the need of the businesses. <br />
          Further, we can promote the online stores through effective digital
          marketing. SEO, SMM, online reputation management, content & email
          marketing - we do it all. Rely on us and we will offer the best
          digital solutions for your eCommerce business.
        </p>
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

export default Identity;
