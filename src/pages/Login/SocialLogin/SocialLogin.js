import React from "react";
import google from "../../../images/google.png";
import facebook from "../../../images/facebook.png";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, error1] = useSignInWithFacebook(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-red-600">
          Error: {error?.message} {error?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/about");
  }

  return (
    <div>
      <div className="flex flex-col justify-center my-4">
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="flex items-center font-semibold border-2 border-neutral-300 bg-slate-50 hover:bg-slate-300 py-1 px-4 mt-3  w-full rounded-full text-semibold"
        >
          <img className="h-10" src={google} alt="" />
          Continue With Google
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="py-1 px-4 mt-3 flex items-center font-semibold border-2 border-neutral-300  w-full text-semibold bg-green-50 hover:bg-green-100  rounded-full text-black"
        >
          <img className="h-10" src={facebook} alt="" />
          Continue With Facebook
        </button>
      </div>
      <div className="flex justify-center items-center my-4">
        <div className="border-t border-gray-400 w-24"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="border-t border-gray-400 w-24"></div>
      </div>
    </div>
  );
};

export default SocialLogin;
