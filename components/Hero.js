import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ParallaxBanner
      className="relative"
      layers={[{ image: "/assets/hero_bg.jpg", speed: -20 }]}
    >
      <div
        className="flex justify-center items-center max-w-screen h-screen relative z-40"
        id="hero"
      >
        <div className="absolute inset-0 bg-black-600 opacity-40" />
        <ScrollAnimationWrapper>
          <motion.div
            className="relative grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-1 gap-8 py-6 sm:py-44"
            variants={scrollAnimation}
          >
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal">
                Wanna go solar?
              </h1>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal text-center">
                We are here for you,{" "}
                <strong>
                  Solar<span className="text-green-400">Pan</span>
                </strong>
                .
              </h1>
              <p className="text-white-300 mt-4 mb-6 text-center px-10 sm:px-0">
                Some short description... Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
              <ButtonPrimary>Contact Us</ButtonPrimary>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        {/* <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div> */}
      </div>
    </ParallaxBanner>
  );
};

export default Hero;
