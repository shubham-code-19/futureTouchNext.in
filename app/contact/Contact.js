"use client"
import React, { useState, useEffect } from "react";
import breadcrumb7 from "../Assets/breadcrumb-shape-7.webp";
import breadcrumb1 from "../Assets/breadcrumb-shape-1.webp";
import breadcrumb2 from "../Assets/breadcrumb-shape-2.webp";
import breadcrumb6 from "../Assets/breadcrumb-shape-6.webp";
import breadcrumb5 from "../Assets/breadcrumb-shape-5.webp";import Link from 'next/link'
export default function Contact() {
  return (
    <>
         <div className="breadcrumb-wrapper relative -z-10 overflow-hidden bg-no-repeat h-60 sm:h-60 md:h-72 lg:h-96">
        <div className="">
          <div id="recaptcha-container"></div>
          <div className="absolute z-10 top-28 sm:top-28 md:top-28 lg:top-48 left-10 sm:left-10 md:left-28 lg:left-40">
            <div className="">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl">Contact Us</h1>
            </div>
            <div className="text-white font-bold ml-2 mt-2 max-sm:ml-1 sm:mt-2 md:mt-4 lg:mt-6 text-base">
              <span className="mr-1">
                <Link href="https://webency.themejunction.net">Home</Link>
              </span>
              <span className="mr-1"> &gt;</span>
              <span className=""> Contact</span>
            </div>
          </div>
        </div>

        <div className="relative px-20">
          <div className="breadcrumb-shape-3 opacity-30 top-20 absolute">
            <img src={breadcrumb1} alt="" />
          </div>
          <div className="breadcrumb-shape-2 shake-y absolute top-10 opacity-40 left-20">
            <img src={breadcrumb2} alt="" />
          </div>
          <div className="breadcrumb-shape-5 pulse absolute opacity-40 right-1/4">
            <img src={breadcrumb5} alt="" />
          </div>
          <div className="breadcrumb-shape-4 shake-y absolute opacity-40 top-52 left-2/4">
            <img src={breadcrumb2} alt="" />
          </div>
          <div className="breadcrumb-shape-1 pulse absolute opacity-40 top-52 left-2/4">
            <img src={breadcrumb1} alt="" />
          </div>
          <div className="breadcrumb-shape-6 pulse absolute opacity-40 top-52 right-40">
            <img src={breadcrumb6} alt="" />
          </div>
          <div className="breadcrumb-shape-7 shake-y absolute opacity-40 top-0 right-20">
            <img src={breadcrumb7} alt="" />
          </div>
          <div className="breadcrumb-shape-8 pulse absolute opacity-40 top-0 right-20">
            <img src={breadcrumb1} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
