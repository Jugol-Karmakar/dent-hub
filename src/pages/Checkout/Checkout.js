import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

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
  const handelTimeBlur = (e) => {
    setTime(e.target.value);
  };

  const handelCheckoutSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-96 mx-auto border-2 rounded-lg mt-10 h-screen shadow-lg">
      <h2 className="text-center pt-3 font-semibold text-xl">
        Booking Information
      </h2>
      <form onSubmit={handelCheckoutSubmit}>
        <div className="my-3 mx-6">
          <input
            onBlur={handelNameBlur}
            className="py-1 px-2 outline-none rounded-md border-grey-400 border  w-full"
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
            className="py-1 px-2 outline-none rounded-md border-grey-400 border  w-full"
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
            className="py-1 px-2 outline-none rounded-md border-grey-400 
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
            className="py-1 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
            type="text"
            name="text"
            id=""
            placeholder="Phone number"
            required
          />
        </div>
        <div className="my-3 mx-6">
          <input
            onBlur={handelTimeBlur}
            className="py-1 px-2 outline-none rounded-md border-grey-400 
            border 
             w-full"
            type="text"
            name="text"
            id=""
            placeholder="Time Shedule"
            required
          />
        </div>

        <div className=" flex justify-center mt-9 px-6 mb-5">
          <input
            className="bg-cyan-500 text-white w-full py-2 font-semibold cursor-pointer"
            type="submit"
            value="Check Out"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
