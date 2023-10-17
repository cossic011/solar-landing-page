import React, { useMemo, useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import { ParallaxBanner } from "react-scroll-parallax";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";

const Career = () => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="mb-6 mt-14 sm:mb-14 w-full flex flex-col" id="career">
        <div className="flex flex-col gap-16 lg:gap-32">
          <ParallaxBanner
            layers={[{ image: "/assets/career.jpg", speed: -20 }]}
            className="w-full py-16 mt-20 lg:h-96"
          >
            <ScrollAnimationWrapper className="flex w-full h-full justify-end">
              <div className="absolute inset-0 bg-black-600 opacity-40" />
              <motion.div
                className="relative h-full w-full flex flex-col gap-y-6 justify-center items-center"
                variants={scrollAnimation}
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-white-500 font-semibold text-4xl sm:text-5xl font-mono text-center px-10">
                    Join Our Team
                  </h1>
                  <div className="flex justify-center items-center">
                    <div
                      style={{ height: "2px" }}
                      className="bg-orange-500 w-32"
                    />
                    <div
                      style={{ height: "5px" }}
                      className="absolute bg-orange-500 w-12"
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </ParallaxBanner>
          <div className="flex flex-col gap-6 text-black-500 text-lg px-10 lg:px-20 text-center">
            <p>
              If you have an idea related to green energy transition or as an
              investor willing to invest in sustainable energy projects in
              Eastern Europe and Western Balkans Countries, WE can be your first
              important step.
            </p>

            <p>
              If you have relevant background, send us your CV and motivation
              letter to the e mail below.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
