"use client";

import React, { useState } from "react";
import Image from "next/image";
import breadcrumb7 from "../Assets/breadcrumb-shape-7.webp";
import breadcrumb1 from "../Assets/breadcrumb-shape-1.webp";
import breadcrumb2 from "../Assets/breadcrumb-shape-2.webp";
import breadcrumb6 from "../Assets/breadcrumb-shape-6.webp";
import breadcrumb5 from "../Assets/breadcrumb-shape-5.webp";
import image1 from "../Assets/website1.webp";
import image2 from "../Assets/website2.webp";
import image3 from "../Assets/website3.webp";
import image4 from "../Assets/website6.webp";
import image5 from "../Assets/website8.webp";
import image6 from "../Assets/website10.webp";
import image7 from "../Assets/website11.webp";
import image8 from "../Assets/website18.webp";
import image9 from "../Assets/website14.webp";
import image10 from "../Assets/website15.webp";
import image11 from "../Assets/website17.webp";
import image12 from "../Assets/website7.webp";
import image13 from "../Assets/website21.webp";
import image14 from "../Assets/website1 (1).webp";
import image15 from "../Assets/website22.webp";
import image16 from "../Assets/website23.webp";
import image17 from "../Assets/website24.webp";
import image18 from "../Assets/website25.webp";
import image19 from "../Assets/website26.webp";
import image20 from "../Assets/website27.webp";
import image21 from "../Assets/website28.webp";
import image22 from "../Assets/website29.webp";
import image23 from "../Assets/website30.webp";
import image24 from "../Assets/website31.webp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import CommonBanner from "../components/CommonBanner";
const OurPortfolio = () => {
  const data = [
    {
      link: "https://vaidicyoga.com/",
      image: image1,
      title: "E-commerce Website",
      subtitle: "Product Services",
      category: ["Website"],
    },
    {
      link: "https://www.appyplanetservices.com/",
      image: image2,
      title: "Business Website",
      subtitle: "Apple Repair Store",
      category: ["Website"],
    },
    {
      link: "https://www.expertdelivery.in/",
      image: image3,
      title: "Transport Website",
      subtitle: "Moving Company",
      category: ["Website"],
    },
    {
      link: "https://horizonestatesandfinance.com/",
      image: image4,
      title: "Real Estate Finance",
      subtitle: "Finance Company",
      category: ["Website"],
    },
    {
      link: "https://nextlegal.in/",
      image: image5,
      title: "Advocates & Solicitors",
      subtitle: "Lawyer",
      category: ["Website"],
    },
    {
      link: "https://shinecargas.in/",
      image: image6,
      title: "Shine Car Gas",
      subtitle: "Auto Repair Company",
      category: ["Website"],
    },
    {
      link: "https://sjseventsandcatering.com/",
      image: image7,
      title: "Catering Company",
      subtitle: "Catering Services Provider",
      category: ["Website"],
    },
    {
      link: "https://thespringclothing.com/",
      image: image8,
      title: "E-commerce Website",
      subtitle: "Summer Collection",
      category: ["Website"],
    },
    {
      link: "https://shashijewellers.com/",
      image: image9,
      title: "E-commerce Website",
      subtitle: "Artificial Jewellery",
      category: ["Website"],
    },
    {
      link: "https://gaurihub.com/",
      image: image10,
      title: "E-commerce Website",
      subtitle: "Product Services",
      category: ["Website"],
    },
    {
      link: "https://hashthatbrand.com/",
      image: image11,
      title: "Digital Company",
      subtitle: "Digital Marketing Services",
      category: ["Website"],
    },
    {
      link: "https://indosunriseinternationalschool.com/",
      image: image12,
      title: "ISRI School",
      subtitle: "Bangalore School",
      category: ["Website"],
    },
    {
      link: "https://theabsconsultants.com/",
      image: image13,
      title: "The Abs Consultants",
      subtitle: "Abroad Visa Services",
      category: ["Website"],
    },
    {
      link: "https://theabsconsultants.com/",
      image: image14,
      title: "E-commerce website ",
      subtitle: "Product ",
      category: ["Website"],
    },
    {
      link: "https://www.hybridracingindia.com/",
      image: image15,
      title: "HYBRID RACING INDIA",
      subtitle: "Ecommerce Website",
      category: ["Mobile App", "Graphic"],
    },
    {
      link: "https://sanjanamanpowerelite.com/",
      image: image16,
      title: "Sanjana Manpower Elite",
      subtitle: "Man Power Provider",
      category: ["Mobile App"],
    },
    {
      link: "https://workaddacoworking.com/",
      image: image17,
      title: "Work Adda Co-working",
      subtitle: "Co-working Space",
      category: ["Website"],
    },
    {
      link: "https://idealpharmacycollege.in/",
      image: image18,
      title: "Pharmacy College",
      subtitle: "Education",
      category: ["Website"],
    },
    {
      link: "https://bhishmagold.com/",
      image: image19,
      title: "Bhishma Gold",
      subtitle: "Informational Website",
      category: ["Mobile App", "Graphic"],
    },
    {
      link: "https://advaitacademy.com/",
      image: image20,
      title: "Adavit Academy",
      subtitle: "IELTS & PTE Training",
      category: ["Mobile App"],
    },
    {
      link: "https://equipbpo.com/",
      image: image21,
      title: "Eqip BPO",
      subtitle: "Finance Company",
      category: ["Website"],
    },
    {
      link: "https://insidespace.co.in/",
      image: image22,
      title: "Inside Space",
      subtitle: "Thermal Expansion",
      category: ["Website"],
    },
    {
      link: "https://feelorganic.org/",
      image: image23,
      title: "Feel Organic",
      subtitle: "Chemical company",
      category: ["Mobile App", "Graphic"],
    },
    {
      link: "https://psychicreadermaninjamaica.com/",
      image: image24,
      title: "Astrology Prediction Expert",
      subtitle: "Astrologer Priest Rishi",
      category: ["Mobile App"],
    },
  ];

  const [filter, setFilter] = useState("All");
  const [filteredData, setFilteredData] = useState(data);
  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => {
        // Check if the selected category matches any of the categories for the item
        return Array.isArray(item.category)
          ? item.category.includes(category)
          : item.category === category;
      });

      setFilteredData(filtered);
    }
    setFilter(category);
  };

  return (
    <>
      <CommonBanner title="Our Projects" breadcrumb="Our Projects" />

      <section className="portfolio-page px-28 max-sm:px-0 max-lg:px-10 pt-20">
        <div className="flex max-sm:block  max-md:block justify-between items-center px-10">
          <div className="row justify-content-left max-sm:text-center">
            <span className="text-lg text-[#e60072]  font-medium">
              Our Work
            </span>
            <h1 className="text-4xl max-sm:text-2xl max-md:text-2xl font-bold mt-4 mb-8">
              Portfolio
            </h1>
          </div>
          <div className="filters">
            <ul className="flex gap-5 cursor-pointer text-lg font-semibold">
              <li
                onClick={() => handleFilter("All")}
                className={filter === "All" ? "active" : ""}
              >
                All
              </li>
              <li
                onClick={() => handleFilter("Website")}
                className={filter === "Website" ? "active" : ""}
              >
                Website
              </li>
              <li
                onClick={() => handleFilter("Mobile App")}
                className={filter === "Mobile App" ? "active" : ""}
              >
                Mobile App
              </li>
              <li
                onClick={() => handleFilter("Graphic")}
                className={filter === "Graphic" ? "active" : ""}
              >
                Graphic
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {filteredData.map((item, index) => (
            <div key={index} className="text-center opacity-main">
              <div className="image-shadow">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.image}
                    alt={item.title + " screenshot"}
                    className="mx-auto max-w-64"
                    width={256}
                    height={180}
                  />
                </Link>
              </div>
              <div className="border-2 border-[#f95b94] w-4/5 mx-auto relative -top-10 inner-div opacity-0 bg-white py-3">
                <h6 className="text-[#2b0165] text-lg font-semibold">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </Link>
                </h6>

                <p className="text-[#6a6a8e]  text-lg ">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default OurPortfolio;
