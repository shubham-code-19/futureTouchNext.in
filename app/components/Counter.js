"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import customer from "../Assets/deal.webp";
import computer from "../Assets/computers.webp";
import worker from "../Assets/worker.svg";
import service from "../Assets/customer-service.svg";
import Image from "next/image";

const Counter = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);

  // Simulating data loading or real-time updates
  useEffect(() => {
    // Simulating data loading or real-time updates
    // This is just a simulation, you would fetch actual data here
    const fetchData = () => {
      // Simulating asynchronous data fetching
      setTimeout(() => {
        setHappyClients(450);
        setProjectsDone(48000);
        setHoursWorked(95000);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" bg-gradient-to-b from-[#fff6f3] to-[ #fffefb] p-8 ">
        <div className="flex max-sm:block max-md:flex  max-lg:flex-wrap  max-lg:gap-10 justify-evenly">
          <div className="flex  gap-5  items-center">
            <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <Image src={customer} alt="happy" className="img-fluid" />
             <img src={customer} alt="happy" className="img-fluid" />

            </div>
            <div className="statnumb">
              <CountUp
                end={happyClients}
                className="text-4xl text-[#050748] font-extrabold"
              />
              <p className="text-xl text-[#6a6a8e]">Happy Clients</p>
            </div>
          </div>
          <div className="flex gap-5  items-center">
            <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <img src={computer} alt="project" className="img-fluid" />
            </div>
            <div className="statnumb counter-number">
              <CountUp
                end={projectsDone / 1000}
                suffix="k"
                className="text-4xl text-[#050748] font-extrabold"
              />
              <p className="text-xl text-[#6a6a8e]">Projects Done</p>
            </div>
          </div>
          <div className="flex gap-5  items-center">
            <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <img src={worker} alt="work" className="img-fluid" />
            </div>
            <div className="statnumb">
              <CountUp
                end={hoursWorked / 1000}
                suffix="k"
                className="text-4xl text-[#050748] font-extrabold"
              />
              <p className="text-xl text-[#6a6a8e]">Hours Worked</p>
            </div>
          </div>
          <div className="flex gap-5  items-center">
            <div className="w-20 h-20 p-4 mt-0 max-sm:mt-5 max-md:mt-5 bg-white border-custom">
              <img src={service} alt="support" className="img-fluid" />
            </div>
            <div className="statnumb">
              <span className="text-4xl text-[#050748] font-extrabold">24</span>
              <span className="text-4xl text-[#050748] font-extrabold">/</span>
              <span className="text-4xl text-[#050748] font-extrabold">7</span>
              <p className="text-xl text-[#6a6a8e]">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
