import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import booking from "../../images/booking.jpeg";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  const handelNameBlur = (e) => {
    setName(e.target.value);
  };

  const handelEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handelAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  const handelPhoneBlur = (e) => {
    setPhone(e.target.value);
  };

  const handelCheckoutSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto grid grid-cols-2 mt-10 min-h-screen ">
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
              onBlur={handelNameBlur}
              className="py-2 px-2 outline-none rounded-md border-grey-400 border  w-full"
              type="text"
              name="Name"
              id=""
              placeholder="Your Name"
              required
            />
          </div>
          <div className="my-3 mx-6">
            <input
              onBlur={handelEmailBlur}
              className="py-2 px-2 outline-none rounded-md border-grey-400 border  w-full"
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />
          </div>
          <div className="my-3 mx-6">
            <input
              onBlur={handelAddressBlur}
              className="py-2 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
              type="text"
              name="text"
              id=""
              placeholder="Address"
              required
            />
          </div>
          <div className="my-3 mx-6">
            <input
              onBlur={handelPhoneBlur}
              className="py-2 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
              type="text"
              name="text"
              id=""
              placeholder="Phone number"
              required
            />
          </div>

          <div className=" flex justify-center mt-4 mb-5">
            <input
              className="bg-cyan-500 hover:bg-black hover:text-white rounded-full text-black px-8 py-2 font-semibold cursor-pointer"
              type="submit"
              value="Check Out"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
