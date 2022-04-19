import React, { useState } from "react";
import booking from "../../images/booking.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const initialValues = { name: "", email: "", address: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handelCheckoutSubmit = (e) => {
    e.preventDefault();
    toast("Thank You For Your Booking !!");
  };

  return (
    <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-1 md:w-full  mt-10 min-h-screen ">
      <div className="">
        <img className="w-full h-96 object-cover" src={booking} alt="" />
      </div>
      <div>
        <h2 className="text-center pt-3 font-black text-3xl">Book Now</h2>
        <p className="px-8 text-lg text-black font-semibold">
          Click start booking after you've filled out the form to schedule your
          next visit.
        </p>
        <form onSubmit={handelCheckoutSubmit}>
          <div className="my-3 mx-6">
            <input
              onChange={handelChange}
              className="py-2 px-2 outline-none rounded-md border-grey-400 border  w-full"
              type="text"
              name="name"
              id=""
              value={formValues.name}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="my-3 mx-6">
            <input
              onChange={handelChange}
              className="py-2 px-2 outline-none rounded-md border-grey-400 border  w-full"
              type="email"
              name="email"
              id=""
              value={formValues.email}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="my-3 mx-6">
            <input
              onChange={handelChange}
              className="py-2 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
              type="text"
              name="address"
              id=""
              value={formValues.address}
              placeholder="Address"
              required
            />
          </div>
          <div className="my-3 mx-6">
            <input
              onChange={handelChange}
              className="py-2 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
              type="text"
              name="phone"
              id=""
              value={formValues.phone}
              placeholder="Phone number"
              required
            />
          </div>
          <ToastContainer />
          <div className=" flex justify-center mt-4 mb-5">
            <button className="px-8 py-2 bg-cyan-500 text-lg rounded-full text-black font-bold hover:bg-black hover:text-white">
              Start Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
