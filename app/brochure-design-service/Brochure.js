import React from "react";
import gm from "../Assets/bb.gif";
import phone from "../Assets/ec.webp";
import { ecommerceData } from "../common/Service_comp";
import d1 from "../Assets/bro.gif";
import { FaBook, FaChevronRight, FaFirefox, FaPrint } from "react-icons/fa";
import { cuttingData } from "../common/Service_comp";
import Link from "next/link";
import Head from "next/head";

const Brochure = () => {
  return (
    <>
      <Head>
        <title>Professional Brochure Design Services | Future ITtouch</title>
        <meta
          name="description"
          content="Enhance your brand with stunning brochure designs. Future ITtouch offers professional brochure design services  to your business needs."
        />
        <meta
          name="keywords"
          content="IT, Technology, Solutions, Future IT Touch"
        />
      </Head>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[375px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28 max-sm:px-5  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              BROCHURE DESIGN SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Future IT Touch Pvt. Ltd., an certified company, has the
                experience of crafting the right brand message and promoting
                your business through custom brochure design services. Our
                specialization includes corporate & business brochure design,
                product catalogues, leaflets, flyers and much more. With a team
                of skilled and experienced designers we create unique designs
                that stand apart. Hire our graphic designers to present your
                business in a professional and graceful manner.
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
        <div className="w-3/5  max-lg:w-full">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Top Brochure Design Company in India
          </h4>

          <div className="text-lg text-justify text-[#6a6a8e] ">
            <p>
              A professionally designed sales brochure evokes reliability &
              trustworthiness. As the top flyer and brochure design company in
              India, we provide impressive business brochure designs and sales
              flyers to create a lasting impression on your target audience. Our
              unique and innovative custom brochure designs can give you an edge
              over your competitors and help you stay ahead of the curve. So,
              boost your sales with our strategically designed brochure.
            </p>
          </div>
          <h4 className="text-2xl font-semibold my-5 text-[#050748] ">
            What makes our business brochure designs unique?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <p className="text-[#6a6a8e] text-lg flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              Use of professional images purchased from the best online photo
              stores
            </p>
            <p className="text-[#6a6a8e] text-lg flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              Modern fonts and the right colors matching your services or
              products
            </p>
            <p className="text-[#6a6a8e] text-lg flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              Brand specific content encompassing all the information about your
              business
            </p>
            <p className="text-[#6a6a8e] text-lg flex  gap-3">
              <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
              Intelligent blending of text, images and white space to encourage
              reading
            </p>
          </div>
        </div>

        <div className=" w-2/5 max-lg:w-full max-lg:mt-10">
          <img
            src={d1}
            alt="Design 1"
            className="w-full h-96 max-sm:mb-3  max-lg:mx-auto"
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
          Best Brochure Design Services for Various Business Needs
        </h3>
        <p className="mb-6 text-[#6a6a8e] mt-5 text-lg text-justify">
          With our years of experience and expertise in crafting company
          brochure designs, we have mastered the art of creating impressive
          brochures of various styles like bi-fold brochure, tri-fold brochure,
          business presentation brochure, flyers and leaflets. Depending on your
          business needs, the experts offering brochure design services at
          Webguru can provide you with appealing designs to project the best
          image of your company, be it for a promotional brochure of a sales
          brochure. Starting from conceptualization to actual design of the
          brochures and flyers, our professionals work closely with you every
          step of the way, helping you to penetrate the reader’s mind with
          influential and persuasive corporate brochures and business flyers
          design. Some primary categories of brochures are:
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-12  text-lg text-[#6a6a8e]">
          <div className="">
            <div className="flex items-start gap-5">
              <FaFirefox className="text-3xl text-[#e33f70]" />
              <p className="text-xl text-[#e33f70]">Company Brochure Design</p>
            </div>
            <p className="mt-2">
              A company brochure serves as an ideal marketing tool to help you
              create a lasting impression of your brand and improve the
              visibility of your business in the market.
            </p>
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <FaPrint className="text-3xl text-[#e33f70]" />
              <p className="text-xl text-[#e33f70]">Product Catalog Design</p>
            </div>
            <p className="mt-2">
              Product catalogs help you inform your target audience about your
              product range and their features in an eye-catchy and unique
              manner.
            </p>
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <FaBook className="text-3xl text-[#e33f70]" />
              <p className="text-xl text-[#e33f70]">Sales Brochure Design</p>
            </div>
            <p className="mt-2">
              Inform your customers about new offerings, sales or special
              promotions related to your products or services.
            </p>
          </div>
        </div>

        <h3 className="text-2xl text-[#050748] mt-16 font-semibold">
          Various Types of Brochure Designs:
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-12  text-lg text-[#6a6a8e]">
          {cuttingData.map((item, index) => (
            <div key={index}>
              <div className="flex items-start gap-5">
                <item.iconSix className={`text-3xl text-[${item.color}]`} />
                <p className={`text-xl text-[${item.color}]`}>
                  {item.titleSix}
                </p>
              </div>
              <p className="mt-2">{item.descriptionSix}</p>
            </div>
          ))}
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

        <div className="flex max-lg:block gap-10 mt-3">
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
                      {item.titleFour}
                    </p>
                    <p className="mt-2 text-justify">{item.descriptionFour}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[500px] max-lg:w-full mt-10">
            <img
              src={phone}
              alt=""
              className="border-[18px] border-[#dfdfdf]  max-lg:mx-auto"
            />
          </div>
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

export default Brochure;
