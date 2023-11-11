import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
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
              className="relative flex justify-center items-center gap-8 py-6 sm:py-44"
              variants={scrollAnimation}
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-white-500 leading-normal text-center">
                  TOFIP <span className="text-green-400">Consult</span>
                </h1>
                <p className="text-lg xl:text-2xl font-medium text-white-500 leading-normal text-center">
                  Solutions for your ideas
                </p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </ParallaxBanner>
      <div className="flex flex-col mt-16 sm:mt-20 gap-6 text-black-500 text-lg px-10 lg:px-20 text-center">
        <p>
          TOFIPConsult is entirely focused on the development of sustainable
          green energy projects and the effective integration of renewable
          energy sources into power grids. Our strong commitment to the green
          energy transition positions us to engage in partnerships with various
          energy technologies and experts as well.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-16 lg:gap-20">
          <ParallaxBanner
            layers={[{ image: "/assets/nature-5.jpg", speed: -20 }]}
            className="w-full py-16 mt-20 h-56 lg:h-96"
          >
            <ScrollAnimationWrapper className="flex w-full h-full justify-end">
              <div className="absolute inset-0 bg-black-600 opacity-40" />
              <motion.div
                className="relative h-full w-full flex flex-col gap-y-6 justify-center items-center"
                variants={scrollAnimation}
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-white-500 font-semibold text-4xl sm:text-5xl font-mono text-center">
                    Our Mission
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
              The pressing worldwide issue of environmental pollution and global
              warming has prompted us to reassess our attitudes and behaviors
              toward natural resources. There are various approaches to reduce
              energy consumption and CO2 emissions, not limited to shifting to
              renewable energy sources but also encompassing improvements in
              production processes and everyday routines.
            </p>

            <p>
              Our company is wholeheartedly devoted to promoting the transition
              to green energy, whether by recognizing groundbreaking ideas or
              supporting projects already in progress.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-16 lg:gap-20">
          <ParallaxBanner
            layers={[{ image: "/assets/renewable_energy.jpg", speed: -20 }]}
            className="w-full py-16 mt-20 h-56 lg:h-96"
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
          <div className=" text-black-500 text-lg px-10 lg:px-20 text-center">
            <p>
              With over 20 years of experience in the field of power grid
              integration for renewable energy sources, our wealth of expertise
              and extensive background allows us to guide you from your initial
              ideas to the ultimate decision-making process. Our professional
              analysis and meticulous approach are dedicated to ensuring the
              most effective solutions for prospective investors.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-16 lg:gap-20">
          <ParallaxBanner
            layers={[{ image: "/assets/projects.jpg", speed: -20 }]}
            className="w-full py-16 mt-20 h-56 lg:h-96"
          >
            <ScrollAnimationWrapper className="flex w-full h-full justify-end">
              <div className="absolute inset-0 bg-black-600 opacity-40" />
              <motion.div
                className="relative h-full w-full flex flex-col gap-y-6 justify-center items-center"
                variants={scrollAnimation}
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-white-500 font-semibold text-4xl sm:text-5xl font-mono text-center">
                    Innovations
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
              Your innovative ideas and proposals for technological enhancements
              deserve recognition from collaborators and potential investors. We
              possess the capability to identify your brilliant concepts,
              enhance them with added value, and then present them to the
              relevant and influential investors.
            </p>

            <p>
              We also place particular emphasis on the Western Balkan Countries,
              where the penetration of renewable energy and the transition in
              the energy sector are anticipated to have a significant impact on
              the economy in the coming years.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-16 lg:gap-20">
          <ParallaxBanner
            layers={[{ image: "/assets/team-work-1.jpg", speed: -20 }]}
            className="w-full py-16 mt-20 h-56 lg:h-96"
          >
            <ScrollAnimationWrapper className="flex w-full h-full justify-end">
              <div className="absolute inset-0 bg-black-600 opacity-40" />
              <motion.div
                className="relative h-full w-full flex flex-col gap-y-6 justify-center items-center"
                variants={scrollAnimation}
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-white-500 font-semibold text-4xl sm:text-5xl font-mono text-center px-10">
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
              </motion.div>
            </ScrollAnimationWrapper>
          </ParallaxBanner>
          <div className="flex flex-col gap-6 text-black-500 text-lg px-10 lg:px-20 text-center">
            <p>
              Young researchers, innovators, startups, or experts working in the
              field of green energy or related areas, in need of support or
              information, can find valuable assistance at TOFIP Consult.
            </p>

            <p>
              If you already have a technology in place and seek ways to enhance
              it or require funding to make it more energy-efficient, TOFIP
              Consult is the go-to place.
            </p>

            <p>
              We can facilitate the presentation of your proposals and unique
              ideas to investors who are enthusiastic about supporting brilliant
              ideas and green energy projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
