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
        <div className="relative z-40 mt-8 w-full" id="about">
          <ScrollAnimationWrapper>
            <motion.div
              variants={scrollAnimation}
              className="text-center flex flex-col justify-center items-center"
            >
              <h3 className="text-3xl lg:text-4xl text-blue-500">Career</h3>
              <p className="font-mono uppercase font-semibold leading-loose">
                Join our team
              </p>
              <div className="w-full flex justify-center">
                <div className="bg-orange-500 w-14 h-1" />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-8 lg:px-16 pt-8">
            <ScrollAnimationWrapper className="flex w-full justify-end">
              <motion.div
                className="h-full w-full p-4"
                variants={scrollAnimation}
              >
                <Image
                  src="/assets/career.jpg"
                  alt="VPN Illustrasi"
                  objectFit="cover"
                  quality={100}
                  height={508}
                  width={508}
                  className="rounded-2xl"
                />
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div
                className="flex flex-col items-center sm:items-end justify-center ml-auto w-full"
                variants={scrollAnimation}
              >
                <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed w-full text-black-600 text-center sm:text-left">
                  Wanna join our team?
                </h3>
                <p className="my-2 text-black-500 text-center sm:text-left">
                  If you have an idea related to green energy transition or as
                  an investor willing to invest in sustainable energy projects
                  in Eastern Europe and Western Balkans Countries, WE can be
                  your first important step.
                </p>
                <p className="my-2 text-black-500 text-center sm:text-left w-full">
                  If you have relevant background, send us your CV and
                  motivation letter to the e mail below.
                </p>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
