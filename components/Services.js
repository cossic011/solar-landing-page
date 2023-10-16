import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { FaSolarPanel } from "react-icons/fa";
import { GiGreenPower, GiSolarPower, GiWindTurbine } from "react-icons/gi";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mt-8 mb-6 sm:mt-14 sm:mb-14 w-full px-16 lg:px-20"
      id="services"
    >
      <div
        className="text-center flex flex-col justify-center items-center"
        variants={scrollAnimation}
      >
        <div>
          <h3 className="text-3xl lg:text-4xl text-blue-500">Our Services</h3>
          <p className="font-mono uppercase font-semibold leading-loose">
            What we offer
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="bg-orange-500 w-14 h-[3px]" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 py-20">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <FaSolarPanel className="h-12 w-12" color="#ff7400" />
            <span className="text-blue-500 text-lg font-semibold">
              Solar Panel Installation
            </span>
            <span className="text-black-500">
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam
              Possimus Modi.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <GiWindTurbine className="h-12 w-12" color="#ff7400" />
            <span className="text-blue-500 text-lg font-semibold">
              Wind Energy Installation
            </span>
            <span className="text-black-500">
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam
              Possimus Modi.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <GiGreenPower className="h-12 w-12" color="#ff7400" />
            <span className="text-blue-500 text-lg font-semibold">
              Water Turbines
            </span>
            <span className="text-black-500">
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam
              Possimus Modi.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <MdOutlineEnergySavingsLeaf className="h-12 w-12" color="#ff7400" />
            <span className="text-blue-500 text-lg font-semibold">
              Hybrid Energy
            </span>
            <span className="text-black-500">
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam
              Possimus Modi.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <GiSolarPower className="h-12 w-12" color="#ff7400" />
            <span className="text-blue-500 text-lg font-semibold">
              Quality Components Selection
            </span>
            <span className="text-black-500">
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam
              Possimus Modi.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <BsTools className="h-12 w-12" color="#ff7400" />
            <span className="text-blue-500 text-lg font-semibold">
              Maintenance Services
            </span>
            <span className="text-black-500">
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Nam
              Possimus Modi.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
