import React from 'react'
import CommonBanner from '../components/CommonBanner'
import WhyChoose from '../components/WhyChoose'
import { FaChevronRight } from 'react-icons/fa'

export default function WhyusChild() {
  return (
    <div>
            <CommonBanner title="Why Us" breadcrumb="Why Us" />

              <section className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb]   py-20">
      <div className=" mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12">
            <div className="text-center">
              <span className="text-lg text-[#e60072]  font-medium">
                We Are Creative Agency
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8">
                Why Choose{' '}
                <span className="  py-1 px-2 bg-b rounded-full">
                  Future IT Touch Pvt. Ltd.
                </span>
              </h1>
              <p className="text-lg text-justify text-[#6a6a8e] max-sm:px-5">
                Here are some of the reasons we think you should consider
                working with{' '}
                <span className=" py-1 px-2 rounded-full">
                  Future IT Touch Pvt. Ltd.
                </span>{' '}
                Designs & Marketing, Inc. As your full service web development,
                online marketing and web hosting company. We create experiences
                that are attractive, simple to use, and drive results for your
                company. We are not your typical web development agency. Sure,
                we’re strong on corporate branding and web design, but we’re
                really focused on making things work for your audience ... and
                your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
         <WhyChoose/>


            
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
          <form className="flex items-center justify-center relative">
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


      
    </div>
  )
}
