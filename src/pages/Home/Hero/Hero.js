import React from "react";
import hero from "../../../images/hero-img.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center px-10">
      <div className="">
        <h2 className="text-3xl font-black">Whare Your Smile Means More</h2>
        <p className="text-lg font-medium">
          treat your smile , treat your soul
        </p>

        <button className="text-base font-medium  text-white bg-cyan-500  rounded-3xl hover:bg-cyan-400  py-2 px-5 mt-4">
          BOOK AN APPOINTMENT
        </button>
        <p className="mt-4">Call Now : 2992746829</p>
      </div>
      <div className="w-3/5">
        <img className="w-full object-cover" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
