import React from "react";
import { FaDirections, FaPhoneAlt, FaTabletAlt } from "react-icons/fa";

const TimeShedule = () => {
  return (
    <div className="mt-24 bg-slate-100 py-6">
      <h1 className="text-cyan-500 text-4xl font-black text-center mt-10">
        Time Shedule
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 px-12 mt-12 mb-14">
        <div className="px-10">
          <h2 className="text-3xl font-black text-cyan-500">
            Our Mirpur office
          </h2>

          <h4 className="text-2xl text-cyan-500 py-1">26 S Swish dental Dr.</h4>
          <h4 className="text-2xl text-cyan-500 py-1">Mirpur, MO 64068</h4>
          <p className="text-base text-cyan-600 py-3">
            Swish Dental is conveniently located right off of Route 291. Enjoy
            our spa-like atmosphere and family-friendly approach. We look
            forward to seeing you!
          </p>
          <h2 className="flex items-center text-xl text-cyan-500 font-semibold">
            {" "}
            <FaDirections className="mr-2 text-cyan-500 text-xl"></FaDirections>{" "}
            Get Directions
          </h2>
          <h2 className="flex items-center py-1 text-xl text-cyan-500 font-semibold">
            {" "}
            <FaPhoneAlt className="mr-2 text-cyan-500 text-xl"></FaPhoneAlt>{" "}
            Call (816) 429-5799
          </h2>
          <h2 className="flex items-center py-1 text-xl text-cyan-500 font-semibold">
            {" "}
            <FaTabletAlt className="mr-2 text-cyan-500 text-xl"></FaTabletAlt>
            Text (816) 340-6288
          </h2>
        </div>
        <div className="ml-10">
          <h2 className="text-3xl font-black text-cyan-500">Hours</h2>
          <div className="py-4">
            <h4 className="flex justify-between text-2xl font-semibold text-cyan-500">
              Monday <span className="lg:mr-20 md:mr-20">7AM - 6PM</span>{" "}
            </h4>
            <h4 className="flex justify-between text-2xl font-semibold text-cyan-500">
              Tuesday <span className="lg:mr-20 md:mr-20">7AM - 6PM</span>
            </h4>
            <h4 className="flex justify-between text-2xl font-semibold text-cyan-500">
              Wednesday <span className="lg:mr-20 md:mr-20">7AM - 6PM</span>
            </h4>
            <h4 className="flex justify-between text-2xl font-semibold text-cyan-500">
              Thursday <span className="lg:mr-20 md:mr-20">7AM - 6PM</span>
            </h4>
            <h4 className="flex justify-between text-2xl font-semibold text-cyan-500">
              Friday <span className="lg:mr-20 md:mr-20">8AM - 3PM</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeShedule;
