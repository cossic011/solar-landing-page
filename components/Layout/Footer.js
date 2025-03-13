import React from "react";
import { FaLeaf, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="col-start-1 col-end-2 flex gap-2 items-center">
            <FaLeaf className="h-4 w-4 text-green-400" />
            <div className="text-2xl flex gap-1 font-semibold">
              <span>TOFIP</span>
              <span className="text-green-400">Consult</span>
            </div>
          </div>
          <p className="mb-4">
            <strong className="font-medium">TOFIP Consult</strong> provides
            solutions for your ideas, makes your investments and innovations
            feasible and profitable.
          </p>

          <p className="text-gray-400">
            ©{new Date().getFullYear()} - TOFIP Consult All Rights Reserved.
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
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <Link
                activeClass="active"
                to="career"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Career
              </Link>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <Link
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div className="row-span-2 col-span-2 sm:col-span-2 sm:col-start-10 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Contact Info
          </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all flex items-center gap-2">
              <BsFillTelephoneFill
                className="h-4 w-4"
                color="rgba(2, 8, 135, 1)"
              />
              <span>+387 65 934 752</span>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all flex items-center gap-2">
              <MdEmail className="h-4 w-4" color="rgba(2, 8, 135, 1)" />
              <span>info@tofipconsult.com</span>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all flex items-center gap-2">
              <FaLocationDot className="h-4 w-4" color="rgba(2, 8, 135, 1)" />
              <span>
                Mise Stupara 4, 78 000 Banja Luka, Bosnia and Herzegovina
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
