import React from "react";
import devops from "../Assets/graphic-design.webp";
import brand from "../Assets/branding-.webp";
import service1 from "../Assets/logo-design.webp";
import service2 from "../Assets/packaging-design.webp";
import service3 from "../Assets/brochure-.webp";
import service4 from "../Assets/flyer-.webp";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import ChooseFuture from "../components/ChooseFuture";
import Counter from "../components/Counter";
const Branding = () => {
  return (
    <>
      <Head>
        <title>Design & Branding - Future IT Touch Private Limited</title>
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
      <div className=" relative overflow-hidden bg-[#442a79] h-80 max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Graphic Design Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Simplicity, creativity, a dash of humor and good typography are
                essential elements of graphic designs at
                <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                  Future IT Touch Pvt. Ltd.
                </span>
                . Effective Design plays a vital role in distinguishing your
                business from the rest to give you, The Design Edge. With right
                aesthetics prompting visual perception, your business is bound
                to be valued more. It is our passion to infuse fun and colors
                into our designs that ensures every single design is packed with
                a message. As a leading Graphic Designing Company in Chandigarh,
                our team is always more than ready to jump with brilliant ideas
                and thoughts to convey a story through design.
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
        </div>
      </div>

      <Counter />

      <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-20 px-20 max-sm:px-0 max-md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className="px-4 md:col-span-4">
            <div className="relative single-image bg-shape-dez max-sm:mb-5">
              <img
                className="relative z-10 rounded w-full sm:w-full h-80 md:w-full lg:w-11/12  object-cover"
                src={devops}
                alt=""
              />
            </div>
          </div>

          <div className=" common-heading md:col-span-8">
            <span className="text-lg text-[#e60072] uppercase max-sm:p-5  max-lg:hidden">
              Overview
            </span>
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-5 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Custom Graphic Design Services We Offer
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-lg:pl-0 ">
              Are you at the moment looking for the best graphic design company
              in Chandigarh? If yes, then you have landed at the right place.
              Future IT Touch Pvt. Ltd. being one of the leading graphic design
              agencies in Chandigarh an gives your business a distinct
              expression and shows it to the world on a branded platter of your
              own. We have been ranked amongst top graphic design companies in
              Chandigarh, that invests its creativity, innovative minds, and
              technology at the helm of its graphic designers that are aimed
              towards attaining clients’ graphic design outsourcing requisites.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 max-lg:block  gap-20  px-32  max-sm:px-5 max-lg:px-10 pb-14">
        <div className="col-span-4">
          <h4 className="text-4xl font-semibold mb-3 text-[#050748] max-sm:text-2xl">
            We use advanced graphic designing tools to create impressive ideas
            for you
          </h4>

          <div className="Website text-[17px] text-justify text-[#6a6a8e] mt-5 ">
            <p>
              Vibrant, high-resolution pictures, engaging videos and explanatory
              graphics can assist potential customers to better understand your
              products and services, and aid them see—accurately—the advantages
              they offer. We never compromise on the quality of our graphic
              design services. That makes our services finest as the best
              graphic design company in Chandigarh of all time
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
              <ul className="font-semibold list-none">
                <li># 800+ Mobile Delivered</li>
                <li># 200+ Team Strength</li>
                <li># User-Friendly Interface</li>
              </ul>
              <ul className="font-semibold list-none">
                <li># 400 Happy Clients</li>
                <li># 95% Repeat business</li>
                <li># Quality Service UX</li>
              </ul>
            </div>
          </div>

          <Link href="/contact" className="inline-block">
            <button className="bg-gradient-to-r from-[#f92c8b] to-[#b02cd6]   flex justify-center items-center mt-7 text-white px-6 py-4 text-base font-semibold  rounded-full">
              Request A Quote <FaAngleRight className="ml-2" />
              <span className="circle dkpr"></span>
            </button>
          </Link>
        </div>

        <div className="col-span-3 max-sm:mt-10">
          <img src={brand} alt="" />
        </div>
      </div>

      <section className="service-section service-2 py-20">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <div className="text-center">
              <p className="mb-3 text-lg text-[#ff1f8e]">Service</p>
              <span className="text-4xl  font-bold text-[#050748] uppercase">
                Graphic Design services we offer
              </span>
              <h2 className="text-lg  mt-4 mb-8">
                We think big and have hands in all leading technology platforms
                to provide you wide array of services.
              </h2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 max-sm:block  max-sm:px-5 max-lg:px-10 px-40 my-10">
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block bg-[#e9ddff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full max-sm:w-1/2 max-sm:mx-auto max-sm:mb-10">
                <img src={service1} alt="" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Logo Designing
                </h4>
                <span className="text-lg text-justify">
                  A logo is considered to be a brand’s silent ambassador. As an
                  experienced Graphic Designing company in Chandigarh, our logos
                  have created an enviable market appeal for our customers,
                  while the message is delivered spontaneously. Connect With
                  Future IT Touch Pvt. Ltd.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex  max-sm:block bg-[#ffdadb] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full max-sm:w-1/2 max-sm:mx-auto max-sm:mb-10">
                <img src={service2} alt="" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Business Stationery Design
                </h4>
                <span className="text-lg">
                  The right design on corporate stationery can be the miniature
                  masterpieces that go a long way as a professional impression.
                  Our expertise as a leading graphic design company in
                  Chandigarh, has played an important role in elevating our
                  clients’ brand image.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block bg-[#d6edff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full max-sm:w-1/2 max-sm:mx-auto max-sm:mb-10">
                <img src={service3} alt="" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Brochure Design
                </h4>
                <span className="text-lg">
                  Our compelling designs have been captivating clients’ target
                  audience. We ensure the world knows about your products and
                  services through one of the best graphic designing company in
                  Chandigarh that assures of clean designs, great images and
                  innovative ideas.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block bg-[#ffede1] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full max-sm:w-1/2 max-sm:mx-auto max-sm:mb-10">
                <img src={service4} alt="" />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Socail Media Post
                </h4>
                <span className="text-lg">
                  Our visually-arresting social media posts are the toast of the
                  social media platforms and contribute to excellent brand
                  recall too. Our graphic designers have created many a
                  impactful masterpieces and classics. Humour and topical issues
                  are a huge part of our posts.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-card mt-20 flex max-sm:block max-md:block justify-center items-center gap-5 px-5">
          <h3 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl  ">
            Hire a {""}
            <span className="font-bold">Dedicated Developer</span>
          </h3>

          <Link
            href="#"
            className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full  ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
          >
            Hire Now <FaAngleRight className="relative left-2" />
          </Link>
        </div>
      </section>

      <ChooseFuture />

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

export default Branding;
