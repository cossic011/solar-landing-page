import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import { FaSolarPanel } from "react-icons/fa";
import { GiGreenPower, GiSolarPower, GiWindTurbine } from "react-icons/gi";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { ParallaxBanner } from "react-scroll-parallax";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mt-8 mb-6 sm:mt-14 sm:mb-14 w-full " id="services">
      <ParallaxBanner
        layers={[{ image: "/assets/renewable_energy.jpg", speed: -20 }]}
        className="w-full py-16 mt-14 lg:h-72"
      >
        <ScrollAnimationWrapper className="flex w-full h-full justify-end">
          <div className="absolute inset-0 bg-black-600 opacity-40" />
          <motion.div
            className="relative h-full w-full flex flex-col gap-y-6 justify-center items-center"
            variants={scrollAnimation}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-white-500 font-semibold text-4xl sm:text-5xl font-mono text-center">
                Renewable generation
              </h1>
              <div className="flex justify-center items-center">
                <div style={{ height: "2px" }} className="bg-orange-500 w-32" />
                <div
                  style={{ height: "5px" }}
                  className="absolute bg-orange-500 w-12"
                />
              </div>
            </div>

            <p className="text-white-300 text-lg text-center px-10">
              With over 20 years of experience in power grid integration of
              renewables our expertise and experience provide you the final
              decision from your initial ideas. Professional analyses and
              detailed approach guarantee the most effective solutions for
              prospective investors.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </ParallaxBanner>
    </div>
  );
};

export default Services;
