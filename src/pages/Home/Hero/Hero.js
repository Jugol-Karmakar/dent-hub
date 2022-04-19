import React from "react";
import hero from "../../../images/hero-img.png";

import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-10 lg:h-screen">
      <div className="sm:py-4">
        <h2 className="text-3xl font-black">Whare Your Smile Means More</h2>
        <p className="text-lg font-medium">
          treat your smile , treat your soul
        </p>

        <button className="text-base font-medium flex items-center   text-white bg-cyan-500  rounded-3xl hover:bg-cyan-400  py-2 px-5 mt-4">
          <FaCalendarAlt className="text-zinc-800 text-xl mr-2" /> BOOK AN
          APPOINTMENT
        </button>
        <p className="mt-4 flex items-center">
          <FaPhoneAlt className="text-cyan-500 text-xl mr-2" /> Call Now :
          2992746829
        </p>
      </div>
      <div className="">
        <img className="w-full  object-cover" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
