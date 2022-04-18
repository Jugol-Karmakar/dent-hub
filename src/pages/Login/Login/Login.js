import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/about";

  const handelEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handelSubmitForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container h-screen m-auto w-1/3 border-2 px-8 mt-5 shadow-lg">
      <h2 className="text-3xl text-center text-cyan-500 font-semibold my-4">
        Login PLease!!
      </h2>
      <SocialLogin></SocialLogin>
      <form onSubmit={handelSubmitForm}>
        <div className="mb-3">
          <label
            className="text-base text-black font-medium block pb-2"
            htmlFor="Your Email"
          >
            Your Email
          </label>
          <input
            onBlur={handelEmailBlur}
            className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-orange-400"
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div>
          <label
            className="text-base text-black font-medium block pb-2"
            htmlFor="Your Password"
          >
            Your Password
          </label>
          <input
            onBlur={handelPasswordBlur}
            className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-orange-400"
            type="password"
            name="password"
            id=""
            required
          />
        </div>

        <div className="text-center">
          <input
            onClick={() => signInWithEmailAndPassword()}
            className="bg-cyan-500 text-white font-semibold px-12 py-2 rounded-full mt-4 cursor-pointer"
            type="submit"
            value="Login"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base text-center mt-3 ">Don't have an Account? </p>
          <Link
            className="border-2 border-neutral-400 text-center bg-slate-50 p-3 mt-3  w-full rounded-full text-semibold  font-bold hover:bg-cyan-400"
            to="/register"
          >
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
