import React from "react";
import { FaLeaf, FaLinkedinIn } from "react-icons/fa";
import { LuContact2 } from "react-icons/lu";
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="col-start-1 col-end-2 flex gap-2 items-center">
            <FaLeaf className="h-4 w-4 text-green-400" />
            <div className="text-2xl font-semibold">
              <span>Solar</span>
              <span className="text-green-400">Pan</span>
            </div>
          </div>
          <p className="mb-4">
            <strong className="font-medium">SolarPan</strong> is a Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <FaLinkedinIn className="h-6 w-6" color="rgba(2, 8, 135, 1)" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <LuContact2 className="h-6 w-6" color="rgba(2, 8, 135, 1)" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <SiMinutemailer className="h-6 w-6" color="rgba(2, 8, 135, 1)" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - SolarPan All Rights Reserved.
          </p>
          <p className="text-gray-400">
            Designed and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/mirko-cosic-49a083198/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-500 hover:text-blue-500"
            >
              DevMirko
            </a>
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Navigation</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              What we offer?{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Projects{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Testimonials{" "}
            </li>
          </ul>
        </div>

        <div className="row-span-2 col-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Contact Info
          </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all flex items-center gap-2">
              <BsFillTelephoneFill
                className="h-4 w-4"
                color="rgba(2, 8, 135, 1)"
              />
              <span>+387 61 123 456</span>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all flex items-center gap-2">
              <BsFillTelephoneFill
                className="h-4 w-4"
                color="rgba(2, 8, 135, 1)"
              />
              <span>+387 61 123 456</span>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all flex items-center gap-2">
              <MdEmail className="h-4 w-4" color="rgba(2, 8, 135, 1)" />
              <span>info@email.com</span>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all flex items-center gap-2">
              <MdEmail className="h-4 w-4" color="rgba(2, 8, 135, 1)" />
              <span>info@email.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
