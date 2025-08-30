import React from "react";
import Ism from "../Assets/lsm.gif";
import gm from "../Assets/gm.webp";
import d1 from "../Assets/d1.webp";
import d2 from "../Assets/portfolio-img-6.webp";
import { FaChevronRight } from "react-icons/fa";
import { businessData } from "../common/Service_comp";

const Business = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[400px] max-sm:h-auto  max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              SMALL BUSINESS WEBSITE DESIGN
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                The biggest challenge faced by any small business is to expand
                it's customer base. With the rising expenses of electronic and
                print media, the only option left for the small business owners
                is to create a strong digital presence. A professionally
                developed website for small business is the first step toward
                achieving this aim. Future IT Touch Pvt. Ltd. is an certified
                company providing a range of business website design services to
                clients worldwide. Our small business website design services
                are customized exclusively for startups at affordable rates. In
                the last 15 years, we have delivered effective web solutions to
                a number of small businesses and helped them enhance their
                growth online.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </a>
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
            className="w-96 pt-0 max-sm:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Website For Small Business & Startups
          </h4>
          <p className="mb-6 text-[#6a6a8e] text-lg ">
            Rise from a startup to an established brand
          </p>
          <div className="Website text-justify text-[#6a6a8e] ">
            <p>
              Whether you run a small business or have invested in a startup, we
              can build a professional website for business at a very reasonable
              price point. We use the latest technologies, create attractive
              design layouts and develop business-oriented features to upscale
              user experience. A well-built website for small businesses can
              convert visitors into buyers by creating a strong impression
              within their target audience. This, in turn, increases revenue and
              helps your business grow.
            </p>
            <p className="mt-6">
              At Future IT Touch Pvt. Ltd., we take utmost care in delivering
              websites as Search Engine friendly for wider reach and best ROI.
              Our Responsive coding ensures optimal viewing experience across
              various mobile devices. We effectively link your website with
              various social media platforms to enhance your brand identity
              further. Make your business grow into an established brand with
              our all-inclusive small business web design services.
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid grid-cols-2 max-sm:block gap-4">
            <div>
              <img src={d1} alt="Design 1" className="w-full max-sm:mb-3 " />
            </div>
            <div>
              <img
                src={d2}
                alt="Design 2"
                className="w-full h-[203px] max-sm:mb-3  object-cover "
              />
            </div>
            <div>
              <img src={d1} alt="Design 3" className="w-full " />
            </div>
            <div>
              <img
                src={d2}
                alt="Design 4"
                className="w-full h-[203px]  max-sm:mb-3  object-cover "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Rated as the Top Android App Development Company in India
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          We follow a step-by-step procedure in developing the apps to maintain
          a steady pace and provide you with on-time,
        </p>
        <div className="flex max-sm:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {businessData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={`rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.icon className={`text-4xl text-[${item.color}]`} />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.title}
                    </p>
                    <p className="mt-2 text-justify">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-10 ">
            <img
              src={Ism}
              alt=""
              className="border-[18px] mx-auto  border-[#dfdfdf]"
            />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 text-justify">
          In the last 15 years, we have worked with hundreds of online retailers
          and delivered their customers with a beautiful online shopping
          experience. From startup to enterprise, single vendor to multi vendor,
          B2C to B2B business - we have provided effective eCommerce solutions
          to a global clientele. We have also built several eCommerce mobile
          apps as per the need of the businesses.
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

export default Business;
