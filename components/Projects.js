import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Projects = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mb-6 mt-14 sm:mb-14 w-full " id="projects">
      <ScrollAnimationWrapper>
        <motion.div
          className="text-center flex flex-col justify-center items-center px-0 sm:px-16 lg:px-20"
          variants={scrollAnimation}
        >
          <div>
            <h3 className="text-3xl lg:text-4xl text-blue-500">Our Projects</h3>
            <p className="font-mono uppercase font-semibold leading-loose">
              Some of our works
            </p>
            <div className="w-full flex justify-center items-center">
              <div className="bg-orange-500 w-14 h-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 pt-10 gap-y-10 gap-x-6 px-0 w-full">
            <div style={{ width: "100%" }} className="relative h-72">
              <Image
                src="/assets/project_1.jpg"
                alt="VPN Illustrasi"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-none sm:rounded-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-30 rounded-none sm:rounded-2xl" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-10">
                <h2 className="text-white text-2xl font-mono font-semibold text-white-500">
                  Assessment of Serbia power grid for renewable integration
                </h2>
              </div>
            </div>
            <div style={{ width: "100%" }} className="relative h-72">
              <Image
                src="/assets/project_2.jpg"
                alt="VPN Illustrasi"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-none sm:rounded-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-30 rounded-none sm:rounded-2xl" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-10">
                <h2 className="text-white text-2xl font-mono font-semibold text-white-500">
                  Business viability research of renewable energy projects in
                  Bosnia and Herzegovina
                </h2>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="relative h-72 lg:col-span-2 2xl:col-auto"
            >
              <Image
                src="/assets/project_3.jpg"
                alt="VPN Illustrasi"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-none sm:rounded-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-30 rounded-none sm:rounded-2xl" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-10">
                <h2 className="text-white text-2xl font-mono font-semibold text-white-500">
                  Losses Evaluation of HVAC Connection of Large Offshore Wind
                  Farms
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Projects;
