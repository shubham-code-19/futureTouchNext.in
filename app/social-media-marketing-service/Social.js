"use client";
import React from "react";
import cwd from "../Assets/soci.webp";
import soe from "../Assets/soe.webp";
import {
  FaBook,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaSearchDollar,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import image2 from "../Assets/smmne.webp";
import { appData } from "../common/Service_comp";
import Image from "next/image";

const Social = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[350px] max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              SOCIAL MEDIA MARKETING SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Future IT Touch Pvt. Ltd., an certified agency, provides dynamic
                and results-driven social media marketing services. We take into
                account the current brand value of a business and, work toward
                enhancing it. We use futuristic strategies and creative designs
                for maximum impact. Our team of proficient social media
                optimization and marketing specialists is adept at managing
                media platforms like Facebook, Twitter, Google+, LinkedIn and
                Pinterest. Together, we boost your social media presence,
                generating more leads in the process.
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

      <div className=" px-32  max-sm:px-5 max-lg:px-10 py-14">
        <div className="flex max-lg:block max-sm:px-0  max-sm:py-7 gap-10 ">
          <div className="  ">
            <h4 className="text-4xl font-bold mb-6 text-[#050748] ">
              Social Media Marketing For Business
            </h4>

            <div className="text-[#6a6a8e] mt-3 text-lg text-justify ">
              <p>
                The Social Media is a powerful platform to reach your
                prospective customers. More than 70% of people are daily active
                on the leading social media platforms like Facebook, Twitter,
                LinkedIn. Once your brand is popular in the social media, it
                will show on the newsfeeds of your target audience. The job of a
                professional social media marketing agency is thus to popularize
                your brand and improve its visibility.
              </p>
              <p className="mt-5">
                At Future IT Touch Pvt. Ltd., we have a team of qualified and
                creative social media experts developing successful campaigns
                and delivering measurable results. As business owners prefer
                ‘leads’ more than ‘likes’, our results-oriented social media
                services focus on generating quality leads by creating brand
                awareness, promoting engagement and increasing the number of
                conversions.
              </p>
            </div>
            <a href="/our-portfolio">
              <button className="bg-[#00a2ff] hover:bg-[#3b61e8] mt-10 text-white font-semibold py-2 px-6 rounded-md mr-4">
                Let’s Team Up
              </button>
            </a>
          </div>
          <Image
            src={soe}
            alt=""
            className="w-96 pt-0 max-sm:pt-10  max-lg:mx-auto"
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
          Our Custom Social Media Marketing Services
        </h3>
        <p className=" text-lg mt-3 text-[#6a6a8e] max-sm:text-justify">
          All social media platforms are unique and should be treated
          accordingly when optimizing them for individual brands. For example, a
          retail business will do good on Facebook, a web agency will generate
          more leads on LinkedIn and photography website will create havoc on
          Instagram. At Future IT Touch Pvt. Ltd., our social media management
          services leverage the different flavours of each platform to build you
          a strong presence in the social media. We launch, develop and monitor
          campaigns based on your target demographic roping in your business
          specifics.
        </p>
        <p className=" text-lg mt-3 text-[#6a6a8e]">
          Take a look at our wide array of social media specialities:
        </p>

        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaBook className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Content Creation & Marketing
                  </p>
                  <p className="mt-2">
                    Using premium stock images, custom made graphics, or unique
                    assets provided by you, we can create visual content
                    including static image, video, infographic, carousals etc.
                    Our in-house graphic designers, copywriters and marketing
                    experts work closely to craft engaging posts that drive
                    attention and encourage a positive brand impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaFacebook className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Facebook Page Management
                  </p>
                  <p className="mt-2">
                    Facebook page creation, post designing and upload, Facebook
                    Ad management, monitoring campaign performance, replying to
                    the potential customers’ queries, increasing your follower
                    base with engaging posts – we do it all.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaTwitter className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Twitter Account Management
                  </p>
                  <p className="mt-2">
                    Powerful words and trending hashtags – these define Twitter.
                    And our experts are the artists of the both. Our strategic
                    Twitter marketing will positively impact your brand-building
                    goal. With a blend of creativity and a set of tactics, we
                    can help to develop a brand authority on this micro-blogging
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaLinkedin className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    LinkedIn Profile Management
                  </p>
                  <p className="mt-2">
                    Reflect the professionalism of your business on this global
                    networking channel for professionals. Both B2B and B2C
                    marketers can be benefitted by an authoritative presence on
                    this platform and develop a large network of the like-minded
                    professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaInstagram className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Instagram Marketing
                  </p>
                  <p className="mt-2">
                    Level up your user engagement rate with our Instagram
                    marketing expertise. With high-end visuals, short and catchy
                    video, one-tap shopping destination – the dynamic social
                    media ecosystem can help you generate more leads and drive
                    conversions.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-start gap-5">
                <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                  <FaPinterestP className="text-4xl text-[#e33f70]" />
                </div>
                <div className="ml-2">
                  <p className=" text-xl font-bold text-[#e33f70]">
                    Pinterest Marketing
                  </p>
                  <p className="mt-2">
                    Pins, Feeds and Boards – we specialize in blending the art
                    of all the aspects of Pinterest lifecycle to drive results
                    and satisfy our clients. We’ll create catchy, innovative,
                    and creative visuals to keep your users engaged and generate
                    leads.
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
                    Social PPC
                  </p>
                  <p className="mt-2">
                    If you want to make the most of your social media marketing
                    efforts, opt for a PPC campaign. Both the start-ups and
                    established businesses can drive higher visibility, leads,
                    and ROI through a compelling PPC campaign. Our marketing
                    experts specialize in crafting results-driven PPC campaign
                    for any social media channel..
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
                    Community Management
                  </p>
                  <p className="mt-2">
                    Our social media activities will help to develop a community
                    revolving around your niche. Through meaningful and
                    informative conversation with your potential customers we
                    can ensure that your business is always on the driving-seat
                    in the competitive digital realm.
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
      <div className="bg-[#f2f2f2]  px-32  max-sm:px-5 max-lg:px-10 py-14">
        <h3 className="text-[27px] text-[#050748] max-sm:text-2xl font-bold">
          Trusted Social Media Marketing Agency - Partner with Us
        </h3>
        <p className=" text-lg text-[#6a6a8e] max-sm:text-justify">
          As a full-time social media marketing agency in India, we have a
          dedicated team of expert marketers who develop bespoke campaigns for
          your business. Hire social media marketing experts from us to lead
          your brand toward popularity.
        </p>
        <div className="flex max-sm:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {appData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.titleTwo}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionTwo}</p>
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

export default Social;
