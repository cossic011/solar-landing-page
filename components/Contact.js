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

const Contact = () => {
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
  const [sliderRef, setSliderRef] = useState(null);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="mb-6 mt-14 sm:mb-14 w-full flex flex-col" id="testimoni">
        <div>
          <h3 className="text-3xl lg:text-4xl text-blue-500 text-center">
            Contact Us
          </h3>
          <p className="font-mono uppercase font-semibold leading-loose text-center">
            Get in touch
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="bg-orange-500 w-14 h-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
