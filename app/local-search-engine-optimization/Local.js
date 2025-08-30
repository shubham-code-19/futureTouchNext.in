"use client";
import React from "react";
import cwd from "../Assets/loc.webp";
import {
  FaBook,
  FaBookMedical,
  FaChevronRight,
  FaGoogle,
  FaHandHoldingUsd,
  FaLaptopMedical,
  FaMapMarkerAlt,
  FaSearch,
  FaSearchDollar,
  FaThumbsUp,
  FaUser,
} from "react-icons/fa";
import image2 from "../Assets/lss.webp";
import { ecommerceData } from "../common/Service_comp";

const Local = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[350px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              LOCAL SEO SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Future IT Touch Pvt. Ltd. With about 46% of all the Google
                searches featuring a local intent, Google is placing more
                importance on delivering local results that offer an immediate
                solution to the customers. Also, studies reveal that 78% of
                location-oriented searches invariably lead to offline
                conversion. All these statistics are compelling businesses to
                prepare for proximity-based search. If your business is not
                optimized for geo-targeted search, it’s high time to avail local
                SEO services.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </a>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                <a href="tel:+917056937000">Call us - 7056937000</a>
              </button>
            </div>
          </div>
          <img
            src={cwd}
            alt=""
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-32 max-sm:px-0  max-lg:px-10 py-14">
        <div className="  max-sm:px-5   max-sm:py-7 gap-10 ">
          <h4 className="text-4xl font-bold mb-6 max-sm:text-2xl text-[#050748] ">
            Local SEO - An Overview by a Leading Local SEO Company India
          </h4>

          <div className="text-[#6a6a8e] mt-3 text-lg text-justify ">
            <p>
              Local SEO is about denoting the local presence of your business in
              a specific region. As every region and each location has its own
              customers and their requirements, they need to be marketed on a
              local level. Also, companies operating from multiple locations
              need an effective solution to cater to geo-targeted search. This
              is why local SEO has occupied a prominent place in digital
              marketing services.
            </p>
            <p className="mt-5">
              An efficient local SEO company in India can help to enhance your
              business growth by drawing further customers to your door as well
              as boosting your online presence in front of the relevant traffic.
              Hire SEO experts, well-versed in the latest tools and
              technologies, from Future IT Touch Pvt. Ltd. to improve the local
              exposure of your business.
            </p>
          </div>
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

      <div className="bg-[white]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Partner with Our Local SEO Experts to Get A Comprehensive Solution
        </h3>
        <p className=" text-lg mt-3 text-[#6a6a8e]">
          No matter whichever part of the world you operate in, our local SEO
          experts can help you target the local audience and witness a positive
          impact on your sales. Here is a glimpse into our comprehensive SEO
          services:
        </p>

        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaMapMarkerAlt className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Location, Audience & Competitor Analysis
                  </p>
                  <p className="mt-2">
                    Without a thorough location and audience research and
                    competitor analysis, it’s not possible to craft an effective
                    local SEO strategy. We closely work with the clients to
                    understand the target location and audience and also
                    evaluate the competitors’ strategies to outweigh them.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaSearch className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Keyword Research
                  </p>
                  <p className="mt-2">
                    Keyword research is an integral part of SEO services. We
                    conduct thorough keyword research to make sure that our SEO
                    efforts sprout the maximum results.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaBook className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Content Optimization
                  </p>
                  <p className="mt-2">
                    Our SEO and content writing team closely work to optimize
                    your website content with potential keywords. You may want
                    us to optimize only the homepage or the entire website and
                    we can customize our service accordingly. We can also
                    optimize your existing website content.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaBookMedical className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">Citation</p>
                  <p className="mt-2">
                    We build manual citation to avoid any error. We can submit
                    your detailed business information including name, address,
                    phone number, and website URL to the local online business
                    directories and mapping services to enhance your visibility
                    in the local searches.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaGoogle className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Google My Business Optimization
                  </p>
                  <p className="mt-2">
                    Google My Business or GMB optimization is crucial to enable
                    your business to appear on major Google results including
                    SERP and Google Maps. On availing our service, you can enjoy
                    huge exposure on the search results and provide updated
                    information to your audience all the time.
                  </p>
                </div>
              </div>
            </div>

            <div></div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaThumbsUp className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Online Review
                  </p>
                  <p className="mt-2">
                    To enhance your business reputation we can submit timely
                    business reviews. This will instil trust among your
                    potential customers about your business and build a positive
                    reputation. Evoking trust is crucial to winning a
                    competitive edge..
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaSearchDollar className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Link Building
                  </p>
                  <p className="mt-2">
                    Google pays attention to the quality of links you use and it
                    can impact your search rankings. Rely on our professionals
                    to research and build high-quality links to maximize SEO
                    efficacy.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaUser className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Image & Hyperlink Optimization
                  </p>
                  <p className="mt-2">
                    Our SEO professionals can optimize images and hyperlinks to
                    help the search bot better crawl and index your website. We
                    can feature the real-time images of your business to evoke
                    reliability among the potential consumers.
                  </p>
                </div>
              </div>
            </div>
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
                <a href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white text-nowrap font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[white]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Why Hire Local SEO Services from Us
        </h3>
        <p className=" text-lg mt-3 text-[#6a6a8e]">
          Once you hire local SEO services from Future IT Touch Pvt. Ltd., rest
          assured of the following:
        </p>

        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaUser className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Extensive Experience
                  </p>
                  <p className="mt-2">
                    We are operating in the digital marketing industry for the
                    last 15 years and have helped numerous clients worldwide to
                    reach their target audience. Rely on us to take your
                    business to the peak.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaSearch className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Custom Solution
                  </p>
                  <p className="mt-2">
                    Our local SEO strategies are highly customized to drive
                    quality traffic from specific location. Our well-researched
                    local SEO services bear optimum results in driving brand
                    visibility and local leads.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaLaptopMedical className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Guaranteed Results
                  </p>
                  <p className="mt-2">
                    With a dedicated and consistent effort, we ensure to provide
                    you with high rankings on Google and Bing search engines and
                    help your business to gain huge online exposure.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaHandHoldingUsd className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Competitive Rate
                  </p>
                  <p className="mt-2">
                    We offer high-quality service at a competitive rate. Discuss
                    your project scope with us to get a custom quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2]  px-32   max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Trusted Social Media Marketing Agency - Partner with Us
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          As a full-time social media marketing agency in India, we have a
          dedicated team of expert marketers who develop bespoke campaigns for
          your business. Hire social media marketing experts from us to lead
          your brand toward popularity.
        </p>
        <div className="flex max-sm:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {ecommerceData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.title}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full max-sm:mt-10">
            <img
              src={image2}
              alt=""
              className="border-[18px] border-[#dfdfdf]"
            />
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 max-sm:text-justify">
          As the providers of PPC services in India and abroad, we are upfront
          about our work process. Before starting your journey with us, clear
          all your doubts. to enterprise, single vendor to multi vendor, B2C to
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

export default Local;
