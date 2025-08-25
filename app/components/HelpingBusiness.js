import React from 'react'

export default function  () {
      const cardsData = [
    {
      id: 1,
      src: "/Assets/icon-1.webp",
      alt: "Industries",
      text: "Social Networking",
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      src: "/Assets/icon-2.webp",
      alt: "Industries",
      text: "Digital Marketing",
      bgColor: "bg-green-200",
    },
    {
      id: 3,
      src: "/Assets/icon-3.webp",
      alt: "Industries",
      text: "Ecommerce Development",
      bgColor: "bg-purple-200",
    },
    {
      id: 4,
      src: "/Assets/icon-4.webp",
      alt: "Industries",
      text: "Video Service",
      bgColor: "bg-yellow-200",
    },
    {
      id: 5,
      src: "/Assets/icon-5.webp",
      alt: "Industries",
      text: "Banking Service",
      bgColor: "bg-red-200",
    },
    {
      id: 6,
      src: "/Assets/icon-6.webp",
      alt: "Industries",
      text: "Enterprise Service",
      bgColor: "bg-pink-200",
    },
    {
      id: 7,
      src: "/Assets/icon-7.webp",
      alt: "Industries",
      text: "Education Service",
      bgColor: "bg-indigo-200",
    },
    {
      id: 8,
      src: "/Assets/icon-8.webp",
      alt: "Industries",
      text: "Tour and Travels",
      bgColor: "bg-yellow-200",
    },
    {
      id: 9,
      src: "/Assets/icon-9.webp",
      alt: "Industries",
      text: "Health Service",
      bgColor: "bg-blue-200",
    },
    {
      id: 10,
      src: "/Assets/icon-10.webp",
      alt: "Industries",
      text: "Event & Ticket",
      bgColor: "bg-green-200",
    },
    {
      id: 11,
      src: "/Assets/icon-11.webp",
      alt: "Industries",
      text: "Restaurant Service",
      bgColor: "bg-purple-200",
    },
    {
      id: 12,
      src: "/Assets/icon-12.webp",
      alt: "Industries",
      text: "Business Consultant",
      bgColor: "bg-red-200",
    },
  ];
  return (
    <div>
       <div className=" Business-domain  mt-5 sm:mt-5 md:mt-7 lg:mt-8   px-0 sm:px-0 md:px-5 lg:px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="col-lg-5 text-white v-center px-5 sm:px-5 md:px-0 lg:px-20 mt-20 ">
            <div className="common-heading text-lg">
              <span
                className=" text-4xl mb-8  tracking-widest"
                style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
              >
                Industries we work for
              </span>
              <h3 className="text-4xl  mt-5 mb-5 font-bold">
                Helping Businesses in All Domains{" "}
              </h3>
              <p className="text-justify text-lg mt-5">
                We develop websites that build businesses! We believe, there is
                no room for a one-size-fits-all approach in web development
                services. Each website is unique and it needs a personal touch
                to meet specific business needs. Our experienced UI/UX designers
                and full stack web development team can effectively transform
                your idea into reality.
              </p>
              <p className="text-justify text-lg  mt-5">
                As a reputable website development company in India, we've
                assisted hundreds of companies worldwide to achieve their goals,
                drive businesses growth, and create happy customers. From LAMP
                to MEAN, business websites for startups to custom web
                applications for corporate - we do it all! Engage our custom web
                design services to build a stunning website for your business.
              </p>
            </div>
          </div>
          <div className="md:grid-cols-2 ">
            <div className="mx-5 mt-5 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4 ">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className={`work-card cd${card.id} ${card.bgColor} h-44 w-36 relative  inline-block p-8 shadow-lg`}
                >
                  <div className="ml-2">
                    <img src={card.src} alt={card.alt} />
                  </div>
                  <p className="text-center mt-2 font-semibold">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
