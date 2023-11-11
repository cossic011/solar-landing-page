import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Luminous Energy",
      city: "Corsham",
      country: "UK",
      testimoni:
        "TOFIP Consult team met the brief extremely well, and they provided us with just the work we wanted. In addition they were very easy and helpful to work with. Would definitely recommend......",
    },
    {
      name: "Subsolar",
      city: "The Hague",
      country: "Netherlands",
      testimoni:
        "TOFIP Consult team have expert knowledge on the topics at hand. They are good communicators and think with the client.....",
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
    slidesToShow: 2,
    slidesToScroll: 1,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <div className="mb-6 mt-14 sm:mb-14 w-full flex flex-col" id="testimoni">
        <div>
          <h3 className="text-3xl lg:text-4xl text-blue-500 text-center">
            Testimonials
          </h3>
          <p className="font-mono uppercase font-semibold leading-loose text-center">
            WHAT OUR CLIENTS SAY
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
              <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col h-64 sm:h-96 lg:h-56">
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
                </div>
                <p className="mt-5 text-left">“{listTestimonis.testimoni}”</p>
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
      </div>
    </>
  );
};

export default Testimoni;
