"use client";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Location() {
  return (
    <>
      {/* Heading */}
      <div className="bg-[#ffecec] shadow-location mx-4 md:mx-20 lg:mx-44 mt-10 py-6 text-center rounded-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#050748]">
          Our Office Locations
        </h2>
      </div>

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20 my-10">
        
        {/* Chandigarh */}
        <div className="p-5 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location">
          <div className="bg-[#fbfbfb] text-center">
            <img
              src="/chandigarh.webp"
              alt="Chandigarh Office"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-[#050748]">India</h4>
            <h6 className="mt-1 text-base font-semibold text-[#050748]">
              Chandigarh Head Office
            </h6>
            <p className="text-sm text-[#6a6a8e] mt-3">
              SCO 54-56, 2nd Floor, Near Mukat Hospital, 34A Sector, Chandigarh, 1600022
            </p>
            <ul className="text-sm text-[#6a6a8e] mt-4 space-y-2">
              <li>
                <Link href="mailto:info@futuretouch.com" className="flex items-center gap-2">
                  <FaEnvelope /> info@futuretouch.in
                </Link>
              </li>
              <li>
                <Link href="tel:‪+91-7056937000‬" className="flex items-center gap-2">
                  <FaPhoneAlt /> ‪+91-7056937000‬
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bangalore */}
        <div className="p-5 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location">
          <div className="bg-[#fbfbfb] text-center">
            <img
              src="/banglore.jpg"
              alt="Bangalore Office"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-[#050748]">India</h4>
            <h6 className="mt-1 text-base font-semibold text-[#050748]">
              Bangalore Branch Office
            </h6>
            <p className="text-sm text-[#6a6a8e] mt-3">
              59, 2nd Floor, Paramahansa Yogananda Rd, Indiranagar, Bengaluru, Karnataka 560038
            </p>
            <ul className="text-sm text-[#6a6a8e] mt-4 space-y-2">
              <li>
                <Link href="mailto:info@futuretouch.com" className="flex items-center gap-2">
                  <FaEnvelope /> info@futuretouch.in
                </Link>
              </li>
              <li>
                <Link href="tel:‪+91-8050080035‬" className="flex items-center gap-2">
                  <FaPhoneAlt /> ‪+91-8050080035‬
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Texas */}
        <div className="p-5 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location">
          <div className="bg-[#fbfbfb] text-center">
            <img
              src="/texas.webp"
              alt="Texas Office"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-[#050748]">United States</h4>
            <h6 className="mt-1 text-base font-semibold text-[#050748]">
              Texas Branch Office
            </h6>
            <p className="text-sm text-[#6a6a8e] mt-3">
              1400 Avery Ranch Blvd, Ste C200 Austin, Texas-78717
            </p>
            <ul className="text-sm text-[#6a6a8e] mt-4 space-y-2">
              <li>
                <Link href="mailto:info@futuretouch.com" className="flex items-center gap-2">
                  <FaEnvelope /> info@futuretouch.in
                </Link>
              </li>
              <li>
                <Link href="tel:+1-5126406568" className="flex items-center gap-2">
                  <FaPhoneAlt /> +1-5126406568
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Dubai */}
        <div className="p-5 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location">
          <div className="bg-[#fbfbfb] text-center">
            <img
              src="/dubai.jpeg"
              alt="Dubai Office"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-[#050748]">United Arab Emirates</h4>
            <h6 className="mt-1 text-base font-semibold text-[#050748]">
              Dubai Branch Office
            </h6>
            <p className="text-sm text-[#6a6a8e] mt-3">
              RAKEZ Compass Al Shohada Road Al Hamra Industrial Zone - FZ - Ras Al Khaimah
            </p>
            <ul className="text-sm text-[#6a6a8e] mt-4 space-y-2">
              <li>
                <Link href="mailto:info@futuretouch.com" className="flex items-center gap-2">
                  <FaEnvelope /> info@futuretouch.in
                </Link>
              </li>
              <li>
                <Link href="tel:+97158559552" className="flex items-center gap-2">
                  <FaPhoneAlt /> +971-58559552
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default Location;