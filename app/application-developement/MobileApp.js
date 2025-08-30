import React from "react";
// import Counter from "../Pages/Counter";
import devops from "../Assets/app-develops.webp";
// import ChooseFuture from "../Pages/ChooseFuture";
import service1 from "../Assets/mob-1.webp";
import service2 from "../Assets/mob-2.webp";
import service3 from "../Assets/mob-3.webp";
import service4 from "../Assets/mob-4.webp";
import { FaAngleRight, FaChevronRight, FaDotCircle } from "react-icons/fa";
import ChooseFuture from "../components/ChooseFuture";
import Counter from "../components/Counter";
const MobileApp = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-96 max-sm:h-auto max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block px-28  max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1  max-lg:px-10  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl max-lg:text-xl">
              WEBSITE, MOBILE APP & DIGITAL MARKETING SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                We are a full-stack Branding, Website Development, App
                Development, Digital marketing and web designing company in
                Chandigarh with all the expertise you need to build a
                successful, stable and scalable product. We follow our tried and
                tested processes that ensures that the product is a marketfit,
                and hence your marketing and technology partner.{" "}
                <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                  Future IT Touch Pvt. Ltd.
                </span>
                mobile app development & website design company in India offers
                a comprehensive range of digital solutions for all your online
                business needs. Our bouquet of services includes web design and
                development, mobility solutions, digital marketing, and
                corporate branding solutions. With our team of 50+ designers,
                developers, content writers, and marketing experts, we have been
                serving a global clientele in 3+ countries since 2017.
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
        </div>
      </div>

      <Counter />

      <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-20 px-20 max-sm:px-0 max-md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className="p-4 md:col-span-4">
            <img src={devops} className="w-96  rounded-lg mx-auto" alt="" />
          </div>

          <div className="common-heading md:col-span-8">
            <span className="text-lg text-[#e60072] uppercase">Overview</span>
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-5 px-0  max-sm:px-5 max-lg:px-10 max-md:px-5">
              Custom Mobile App Solutions
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              Our team has a decade-long experience in custom mobile application
              development that spans a wide range of industries from retail to
              healthcare and energy. You want a team of mobile app developers
              who can dive into your business ecosystem. Who can explore the
              market and understand your needs, requirements and capabilities.
              Who can build a truly custom strategy and unlock the full
              potential of mobile technology for your company. This is what
              custom mobile app development is about. We get to know your
              business and tailor our application development services to your
              goals and expectations.
            </p>
            <p className="text-xl text-[#6a6a8e] text-justify pt-5 pr-10  max-sm:px-5 max-lg:px-10 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              We provide custom mobile app development services. This includes
              expert business analysis, design and development of your mobile
              application from idea to launch, integrating the new product into
              your infrastructure and providing further optimization and
              scale-up on demand.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 max-sm:block gap-20  px-32  max-sm:px-5 max-lg:px-10 pb-14">
        <div className="col-span-4">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Get a complete strategy of mobile app development
          </h4>
          <p className="mb-6 text-[#050748] text-xl font-semibold ">
            Hire Expert Cross Platform Mobile App Developers to Boost Your
            Business
          </p>
          <div className="Website text-[17px] text-justify text-[#6a6a8e] ">
            <p>
              Communication has become React Native & swift as mobile apps are
              fast, visually amusing, interactive and can be easily integrated
              other mobile features. Smartphones have changed the life forever.
              The number of consumers accessing information via smartphones,
              tablets and wearable has been increasing with time. People prefer
              a mobile app for storing and managing data, on-line shopping,
              socialising, navigating etc.
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
        </div>

        <div className="col-span-3">
          <p className="mb-6 text-[#050748] text-2xl max-sm:mt-10 font-bold ">
            Advantages of Mobile App Development
          </p>

          <ul className="text-xl text-[#6a6a8e] list-none">
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Substitution of Traditional Method of Market
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              An effective way of Branding and engaging the audience
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Reduction in cost and raises standards
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Increase in Revenue
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Gives more value to customers
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              24*7 support facility
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Feasible and Convenient
            </li>
            <li className="flex gap-3 items-center">
              <FaDotCircle className="text-[#f92c8b]" />
              Secured from vulnerable attacks
            </li>
          </ul>

          <a href="/contact">
            {" "}
            <button className="bg-gradient-to-r from-[#f92c8b] to-[#b02cd6]   flex justify-center items-center mt-7 text-white px-6 py-4 text-base font-semibold  rounded-full">
              Request A Quote <FaAngleRight className="ml-2" />
              <span class="circle dkpr"></span>
            </button>
          </a>
        </div>
      </div>

      <section className="service-section service-2 py-20">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <div className="text-center">
              <span className="text-5xl font-bold text-[#e60072] uppercase">
                Our Services
              </span>
              <h2 className="text-lg  mt-4 mb-8">
                We think big and have hands in all leading technology platforms
                to provide you wide array of services.
              </h2>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 max-lg:block gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 px-40  max-sm:px-5 max-lg:px-10 my-10">
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex max-sm:block  bg-[#e9ddff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service1}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  IOS App Development
                </h4>
                <span className="text-lg max-sm:text-justify">
                  We provides cutting-edge mobile app development services to
                  turn your dreams of a business app into reality. We have a
                  proficient team for custom iOS app development.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex  max-sm:block   bg-[#ffdadb] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service2}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Android App Development
                </h4>
                <span className="text-lg">
                  Powering 2 Billion mobile devices across the globe, Android
                  inevitably stands out as one of the most sought-after
                  platforms for mobile app development.
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex  max-sm:block   bg-[#d6edff] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service3}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Cross Platform App Development
                </h4>
                <span className="text-lg">
                  Need an app for your business that can run seamlessly across
                  Android and iPhone yet limited by budget constraints?{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full  mb-8 md:mb-0">
            <div className="flex  max-sm:block   bg-[#ffede1] rounded-lg shadow-lg py-7 px-5 gap-3">
              <div className="w-full">
                <img
                  src={service4}
                  alt=""
                  className="max-sm:mx-auto max-sm:mb-4"
                />
              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                  Mobile App Testing.
                </h4>
                <span className="text-lg">
                  We at Future IT Touch Pvt. Ltd. Technologies provide web
                  development solutions to clients. We happen to be a privately
                  managed software company.{" "}
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

          <a
            href="#"
            className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full  ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current "
          >
            Hire Now <FaAngleRight className="relative left-2" />
          </a>
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

export default MobileApp;
