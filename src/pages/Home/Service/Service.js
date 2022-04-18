import React from "react";
import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const { name, img, description, price } = props.service;

  const navigate = useNavigate();

  return (
    <div className="shadow-lg bg-white rounded overflow-hidden">
      <div className="">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="py-3 text-sm text-zinc-500">{description}</p>
        <p>price : ${price}</p>
      </div>
      <div>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-cyan-500 px-8 py-4 text-black font-bold"
        >
          Book Appoinment
        </button>
      </div>
    </div>
  );
};

export default Service;
