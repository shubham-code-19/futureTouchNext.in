import React from 'react'

export default function DigitalMarketingService() {
  return (
    <>
         <div className="grid grid-cols-1 bg-[#FAFAFC] md:grid-cols-12 mt-2  py-2 px-5 sm:px-5 md:px-10 lg:px-20 h-[85rem] lg:h-[43rem]  ">
  <div className="p-0 sm:p-0 md:p-4 p-2 lg:p-0 lg:p-4 md:col-span-12 lg:col-span-6">
    <div className="w-full">
      <div className="text-start">
        <span
          className="text-2xl lg:text-4xl  bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
          style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
        >
        Digital Marketing Services
        </span>
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl mt-5 text-justify font-bold text-gray-900 mb-4">
          We Make Finest Marketing With
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
          &nbsp;  Great Passion
          </span>
        </h2>
      </div>
    </div>

    <div className="rounded-lg  my-2 p-2 lg:p-0 lg:my-0 border border-[#705fff] sm:border-[#705fff] md:border-[#ccc] lg:border-[#FAFAFC]  ">
      <div className="block sm:block md:block lg:flex lg:gap-5 text-justify mb-4">
        <img src="/Assets/search.webp" className="w-12 h-12 mr-4 mt-[1rem]" alt="" />
        <div>
          <h4 className="text-2xl font-bold mt-2 sm:mt-2 md:mt-2 mb-2 bg-[#705fff] text-transparent bg-clip-text text-gray-900">
            Search Engine optimisation
          </h4>
          <p className="text-gray-700">
      Boost your website's visibility with our personalized SEO services, designed to improve search rankings and connect you with your ideal audience.

          </p>
          <div className="w-full bg-gray-300 rounded-full">
            {/* <div
              className="bg-[#705fff] hover:bg-gradient-to-r from-teal-400 to-indigo-700 text-xs leading-none py-1 text-center text-white rounded-full"
              style={{ width: "90%" }}
            >
              90%
            </div> */}
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-lg p-2 lg:p-0  my-2 lg:my-0  border border-[#705fff] sm:border-[#705fff] md:border-[#ccc] lg:border-[#FAFAFC]   ">
      <div className="block sm:block md:block lg:flex lg:gap-5 text-justify mb-4">
        <img src="/Assets/family.webp" className="w-12 h-12 mr-4 mt-[1rem]" alt="" />
        <div>
          <h4 className="text-2xl font-bold mt-2 sm:mt-2 md:mt-2 mb-2 bg-[#705fff] text-transparent bg-clip-text text-gray-900">
          Social Media Marketing
          </h4>
          <p className="text-gray-700 ">
          Enhance your brand’s reach with our customized Social Media Marketing services, designed to authentically engage your audience and foster meaningful growth.
          </p>
          <div className="w-full bg-gray-300 rounded-full">
            {/* <div
              className="bg-[#705fff] hover:bg-gradient-to-r from-teal-400 to-indigo-700 text-xs leading-none py-1 text-center text-white rounded-full"
              style={{ width: "96%" }}
            >
              96%
            </div> */}
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-lg my-2 p-2 lg:p-0 lg:my-0  border border-[#705fff] sm:border-[#705fff] md:border-[#ccc] lg:border-[#FAFAFC]   ">
      <div className="block sm:block md:block lg:flex lg:gap-5 text-justify mb-4">
        <img src="/Assets/digital-marketing.webp" className="w-12 h-12 mr-4 mt-[1rem]"  alt="" />
        <div>
          <h4 className="text-2xl font-bold mt-2 sm:mt-2 md:mt-2 lg:mt-0 mb-2 bg-[#705fff] text-transparent bg-clip-text text-gray-900">
          Search Engine Marketing or Paid Ads
          </h4>
          <p className="text-gray-700 ">

          Drive targeted traffic and enhance your online presence with our specialized Search Engine Marketing and Paid Ads services, crafted to optimize your ROI and achieve measurable success.
          </p>
          <div className="w-full bg-gray-300 rounded-full">
            {/* <div
              className="bg-[#705fff] hover:bg-gradient-to-r from-teal-400 to-indigo-700 text-xs leading-none py-1 text-center text-white rounded-full"
              style={{ width: "89%" }}
            >
              89%
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="p-4 md:col-span-6 ">
    <div className="hero-images-three  p-4 mr-5 relative w-full pulse max-w-600 mt-[222px] h-490">
      <img className="image-three object-cover" src="/Assets/connect_img.png" alt="" />
    </div>
   
  </div>
</div>
    </>
  )
}
