import React from "react";
import logo from "../../../images/logo2.svg";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="flex justify-around bg-blue-200 py-6 mt-10">
      <div>
        <img className="h-6" src={logo} alt="" />
      </div>
      <h2 className="text-black font-medium">
        Copyright © {year} Swish Dental
      </h2>
    </div>
  );
};

export default Footer;
