import React from "react";
import { FaChevronRight, FaUsers } from "react-icons/fa";
import ecc from "../Assets/ecc.svg";
import image1 from "../Assets/SIT.webp";
import image2 from "../Assets/en.gif";
// import { ecommerceData } from "../common/Service_comp";
import { developmentData, ecommerceData } from "../common/Service_comp";
const Ecommerce = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-96 max-lg:h-auto">
        <div className="flex max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              ECOMMERCE WEBSITE DESIGN SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Are you planning to expand your business by reaching out to your
                customers online? An eCommerce website would be the best option
                to enhance your customer base and increase your sales. Whether
                you want to create your first online store or overcome the sales
                slump with your existing one, we can help you out with our
                results-driven eCommerce website design services. Hire
                experienced developers from Future IT Touch Pvt. Ltd. for
                top-notch eCommerce web development solutions with a rich user
                interface, integration of payment gateway and shipping API,
                advanced security features, easy-to-manage product inventory and
                much more.
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
            src={ecc}
            alt=""
            className="w-96 pt-0 max-sm:pt-10  max-lg:mx-auto"
          />
        </div>
      </div>

      <section className="Trusted-eCommerc px-28  max-sm:px-5 max-lg:px-10 py-10">
        <div className="trusted-text">
          <h4 className="text-3xl text-[#050748]">
            Trusted eCommerce Website Development Company
          </h4>
          <p className="text-[#6a6a8e] text-lg mt-3">
            The core objective of any online store development is to give the
            users an experience equivalent to that of a physical store as well
            as provide the administrator with easy management facilities. At
            Future IT Touch Pvt. Ltd., an certified eCommerce website
            development company in India, we take care of both the requirements
            by ensuring the following criteria for our online store development
            services:
          </p>
        </div>

        <div className="flex max-lg:block">
          <div className="">
            <h4 className="text-[#df2466] mt-10 mb-4  flex items-center gap-4 text-2xl">
              <FaUsers className="text-5xl" />
              THE USERS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Easy Navigation &amp; Engaging Interface
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Multiple Product Images For Real Life Feeling
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Easy & Quick Checkout Process
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Categories & Filters to Streamline Searche
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Secured Payment Gateways
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Proper Order Tracking Modes
              </p>
            </div>

            <h4 className="text-[#df2466] mt-10 mb-4  flex items-center gap-4 text-2xl">
              <FaUsers className="text-5xl" />
              Easy To Track & Manage Orders
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 ">
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Easy To Track & Manage Orders
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Manage Product Attributes
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Easy Integration of Tax & Shippings
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Manage Offers & Discounts
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Seamless Inventory Management
              </p>
              <p className="text-[#6a6a8e] text-lg flex  gap-3">
                <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
                Easy To Monitor eCommerce Analytics
              </p>
            </div>

            <p className="text-[#6a6a8e] pt-10 text-lg">
              In the last 15 years, we have built hundreds of online storefronts
              and marketplaces for B2B and B2C businesses. Avail of our custom
              eCommerce web design services to offer an exceptionally user
              engaging ecommerce experiences to your customers.
            </p>
          </div>
          <img
            src={image1}
            alt=""
            className="p-10 pr-0 max-sm:p-0 max-sm:pt-5  max-lg:mx-auto"
          />
        </div>
      </section>

      <div className="bg-image-third mt-5 mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row px-40  max-sm:px-5 max-lg:px-10">
          <div className="md:w-1/2"></div>

          <div className="md:w-1/2 md:ml-4">
            <div className="">
              <h3 className="text-3xl font-bold mb-4 text-[#050748]">
                ECOMMERCE MOBILE APP
              </h3>
              <p className="mb-4">
                We have the expertise in developing top of the line eCommerce
                websites as well as mobile apps. Please let us know your
                requirement and we would be happy to discuss the projects on
                developing ecommerce websites or mobile apps with you.
              </p>
              <div className="flex items-center mb-4">
                <span className="mr-2">Call us on :</span>
                <p className="text-lg">+91 7056937000</p>
              </div>
              <div>
                <a href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white font-semibold py-2 px-4 rounded-md mr-4">
                    RECENT PROJECTS
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Ecommerce Website Development Platforms We Use:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {developmentData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex items-center">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="rounded-full w-12"
                />
                <p className="ml-2 text-lg text-[#e33f70]">{item.title}</p>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-20 text-lg text-[#6a6a8e]">
          We are a customer-oriented eCommerce website development company in
          India striving to go beyond your expectations of a bespoke online
          store. To get an impressive B2C or B2B eCommerce solution, call us
          today or request a free quote now.
        </p>
      </div>

      <div className="bg-image-second  mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row gap-5">
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
                <a href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-nowrap text-white font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Leading eCommerce Website Design Company India - Partner with Us
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          As a trusted eCommerce website design company in India, we guarantee
          you of the following:
        </p>
        <div className="flex max-sm:block gap-10 mt-10">
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
                      {item.title}
                    </p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mt-10">
            <img
              src={image2}
              alt=""
              className="border-[18px] border-[#dfdfdf]"
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

export default Ecommerce;
