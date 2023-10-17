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

const Testimoni = ({
  listTestimoni = [
    {
      name: "Test test",
      image: "/assets/people-3.png",
      city: "City",
      country: "Country",
      rating: "5.0",
      testimoni:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Test test",
      image: "/assets/people-3.png",
      city: "City",
      country: "Country",
      rating: "5.0",
      testimoni:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Test test",
      image: "/assets/people-3.png",
      city: "City",
      country: "Country",
      rating: "5.0",
      testimoni:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],
}) => {
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
            Testimonials
          </h3>
          <p className="font-mono uppercase font-semibold leading-loose text-center">
            Some of our works
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="bg-orange-500 w-14 h-1" />
          </div>
        </div>
        <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef}
          className="flex items-stretch justify-items-stretch mt-20 sm:px-20"
        >
          {listTestimoni.map((listTestimonis, index) => (
            <div className="px-3 flex items-stretch" key={index}>
              <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <div className="flex flex-col text-left">
                      <p className="text-lg text-black-600 capitalize">
                        {listTestimonis.name}
                      </p>
                      <p className="text-sm text-black-500 capitalize">
                        {listTestimonis.city},{listTestimonis.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                    <p className="text-sm">{listTestimonis.rating}</p>
                    <span className="flex ml-4">
                      <Stars className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex w-full items-center justify-end sm:pr-20">
          <div className="flex flex-none justify-between w-auto mt-14">
            <div
              className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
              onClick={sliderRef?.slickPrev}
            >
              <ArrowBack className="h-6 w-6 " />
            </div>
            <div
              className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
              onClick={sliderRef?.slickNext}
            >
              <ArrowNext className="h-6 w-6" />
            </div>
          </div>
        </div>
        <ParallaxBanner
          layers={[{ image: "/assets/wind_turbine.jpg", speed: -20 }]}
          className="w-full py-16 mt-20 lg:h-[300px]"
        >
          <ScrollAnimationWrapper className="flex w-full h-full justify-end">
            <div className="absolute inset-0 bg-black-600 opacity-40" />
            <motion.div
              className="relative h-full w-full flex flex-col gap-y-6 justify-center items-center"
              variants={scrollAnimation}
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-white-500 font-semibold text-5xl font-mono text-center">
                  Who does need to contact us?
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

              <p className="text-white-300 text-lg text-center px-10">
                Young researchers, innovators, start ups or experts dealing with
                green energy or related to who need any kind of support or
                information can find it in OURComp.
                <br />
                If you have already established technology and have ideas to
                improve it or need funds to make it more energy efficient
                OURCOmp is the right address.
                <br />
                We can guide your proposals and unique ideas to the Investors
                willing to support brilliant ideas and green energy projects.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </ParallaxBanner>
      </div>
    </>
  );
};

export default Testimoni;
