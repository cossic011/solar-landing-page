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
              <div className="flex flex-col">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal text-center">
                  TOFIP Consult
                </h1>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </ParallaxBanner>
      <div className="flex flex-col mt-16 sm:mt-20 gap-6 text-black-500 text-lg px-10 lg:px-20 text-center">
        <p>
          This Company is dedicated to green energy sustainable projects and
          power grid integration of renewables. Our full commitment to the green
          transition put us in a position to collaborate with various energy
          technologies and experts also.
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
              The global worldwide threat of environment pollution and warming
              has tackled us to change life attitude and habits to the natural
              resources. The are many ways to decrease energy consumption and CO
              2 emission, not only switching to renewable generation but also in
              production processes and in everyday routine.
            </p>

            <p>
              Our Company is committed to boost green energy transition; either
              recognizing innovative ideas or supporting already started jobs.
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
              With over 20 years of experience in power grid integration of
              renewables our expertise and experience provide you the final
              decision from your initial ideas. Professional analyses and
              detailed approach guarantee the most effective solutions for
              prospective investors.
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
              Your ideas and technology improvements proposals need to be
              recognized by the cooperators or from the potential investors. We
              are capable to recognize your bright idea and present it to the
              relevant and prominent investors.
            </p>

            <p>
              Special attention is paid to the Western Balkan Countries where
              renewable penetration and energy transition is expected to impact
              on economy significantly in the next years.
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
              Young researchers, innovators, start ups or experts dealing with
              green energy or related to who need any kind of support or
              information can find it in OURComp.
            </p>

            <p>
              If you have already established technology and have ideas to
              improve it or need funds to make it more energy efficient OURCOmp
              is the right address.
            </p>

            <p>
              We can guide your proposals and unique ideas to the Investors
              willing to support brilliant ideas and green energy projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
