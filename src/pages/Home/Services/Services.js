import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-3xl text-center text-black font-black my-12 ">
        Our Services
      </h2>
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-10">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
