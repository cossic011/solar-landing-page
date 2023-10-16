import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { BsCheck } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { ParallaxBanner } from "react-scroll-parallax";
import { FaSolarPanel, FaToolbox, FaUsers } from "react-icons/fa";

const features = [
  "Clean Energy.",
  "Low installation Cost.",
  "Easy installation.",
  "Renewable Resources.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mt-8 mb-6 sm:mt-14 sm:mb-14 w-full" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="text-center flex flex-col justify-center items-center"
        >
          <h3 className="text-3xl lg:text-4xl text-blue-500">About Us</h3>
          <p className="font-mono uppercase font-semibold leading-loose">
            Know about us
          </p>
          <div className="w-full flex justify-center">
            <div className="bg-orange-500 w-14 h-[3px]" />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-8 lg:px-16 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/features.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={508}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-center sm:items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed w-full text-black-600 text-center sm:text-left">
              Energize Your Life With Solar.
            </h3>
            <p className="my-2 text-black-500 text-center sm:text-left">
              Solar Energy Helps To Protect Your Environment And Protect The
              Earth From Pollution. So Say No To Air Pollution And Water
              Pollution.
            </p>
            <ul className="text-black-500 self-start list-inside w-full sm:w-auto">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list flex flex-row justify-center sm:justify-start"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <BsCheck className="h-6 w-6" color="green" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <ParallaxBanner
        layers={[{ image: "/assets/about_4.jpg", speed: -20 }]}
        className="w-full py-20"
      >
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <div className="absolute inset-0 bg-black-600 opacity-40 z-10" />
          <motion.div
            className="relative z-[9999] h-full w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 p-4 lg:flex lg:gap-0 flex-row items-center justify-between px-32"
            variants={scrollAnimation}
          >
            <div className="flex flex-col items-center gap-y-2 justify-center text-center">
              <BiTask className="h-14 w-14" color="orange" />
              <span className="text-white-500 text-4xl font-semibold">50+</span>
              <span className="text-white-500 text-2xl">Projects</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-y-2 ">
              <FaUsers className="h-14 w-14" color="orange" />
              <span className="text-white-500 text-4xl font-semibold">
                100+
              </span>
              <span className="text-white-500 text-2xl ">
                Satisfied Customers
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-y-2 ">
              <FaSolarPanel className="h-14 w-14" color="orange" />
              <span className="text-white-500 text-4xl font-semibold">
                300+
              </span>
              <span className="text-white-500 text-2xl">
                Solar Installations
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-y-2 ">
              <FaToolbox className="h-14 w-14" color="orange" />
              <span className="text-white-500 text-4xl font-semibold">40+</span>
              <span className="text-white-500 text-2xl">Tehnicians</span>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </ParallaxBanner>
    </div>
  );
};

export default Feature;