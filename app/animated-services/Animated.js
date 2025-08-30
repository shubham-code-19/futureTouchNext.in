import React from "react";
import gm from "../Assets/ams.webp";
import ec from "../Assets/or.gif";
import d1 from "../Assets/logo-gif.gif";
import loc from "../Assets/logo-c.gif";
import { FaChevronRight } from "react-icons/fa";
import { corporateData } from "../common/Service_comp";
import Link from "next/link";
import Head from "next/head";

const Animated = () => {
  return (
    <>
      <Head>
        <title>Animated Videos - Future IT Touch Private Limited</title>
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
        <div className="flex max-sm:block max-lg:block px-28 max-sm:px-5  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Explainer Video Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Videos are a great means to explain your business, products or
                services to potential customers. Invest in a professional
                explainer video to get discovered faster, generate greater brand
                awareness, and grow your customer base. Future IT Touch Pvt.
                Ltd. is an certified company providing a wide array of digital
                solutions to clients across the world. Our corporate video
                production services help you turn your visitors into loyal
                followers of your brand. Avail our explainer video services and
                create amazing videos for your target audience.
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
            className="w-72 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10  px-32 max-sm:px-5  max-lg:px-10 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Corporate Explainer Video
          </h4>
          <h4 className="text-2xl font-semibold mb-3 text-[#050748] ">
            Encourage engagement and trust with an innovative & creative way!
          </h4>
          <div className="text-lg text-justify text-[#6a6a8e] ">
            <p>
              In the contemporary text-saturated digital realm, audio-visual is
              an ideal medium for most people to grasp a concept. Further, the
              advent of high-speed mobile networks and the mass adoption of
              smartphones have made online videos highly accessible. A corporate
              explainer video is an ideal tool to enhance user engagement and it
              acts as a crucial element for any business to succeed.
            </p>
            <p className="mt-6">
              With our excellent media services, you get high-quality videos to
              explain your products, services or brand in a simpler manner. This
              helps engage consumers in a more interactive way leading to higher
              view rates and higher conversion rates for your business. Hire our
              corporate explainer video makers to create beautiful animated
              videos for your brand at a reasonable rate.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full max-lg:mt-10">
          <img
            src={d1}
            alt="Design 1"
            className="w-96 h-96 max-sm:mb-3  max-lg:mx-auto "
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
          Why Choose Us as A Trusted Explainer Video Company in India
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          As reputed explainer video company in india, we offer bespoke services
          for our global client base. Here are some of our USPs.
        </p>
        <div className="flex max-sm:block gap-10 mt-10 max-sm:mt-2">
          <div className="w-2/3 max-sm:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div
                    className={` rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconthree
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleFour}
                    </p>
                    <p className="mt-2">{item.descriptionFour}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3 max-sm:w-full mt-10">
            <img src={loc} alt="" className="w-full" />
          </div>
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
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-nowrap text-white font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  bg-[#f2f2f2]  px-32 max-sm:px-5  max-lg:px-10 py-14">
        <div className="">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            From Our Blog
          </h4>
          <p className="mb-6 text-[#f00] text-xl mt-6">
            How to Increase Conversions through Content Marketing
          </p>
          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p>
              Are you one of those content creators who writes brilliant content
              that gets many likes? Are you of the opinion that getting likes is
              the be all and end all of content marketing strategy. Well, let me
              politely remind you that is not exactly the case, for marketing
              through content creation is about converting your readers into
              generating revenue.
            </p>
            <button className="flex mt-5 items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700">
              Quick Enquiry
            </button>
          </div>
        </div>

        <div className="col-span-1">
          <img src={ec} alt="" className="w-full  pt-0 max-sm:pt-10" />
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

export default Animated;
