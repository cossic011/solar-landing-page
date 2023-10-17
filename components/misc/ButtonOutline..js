import React from "react";
import { Link as LinkScroll } from "react-scroll";

const ButtonOutline = ({ children }) => {
  return (
    <LinkScroll
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      duration={1000}
      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-400 text-blue-400 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-400 hover:text-white-500 transition-all hover:shadow-blue cursor-pointer"
    >
      {children}
    </LinkScroll>
  );
};

export default ButtonOutline;
