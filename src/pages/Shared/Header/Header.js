import React from "react";
import Customlink from "../../Customlink/Customlink";
import logo from "../../../images/logo.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex bg-slate-100 py-3 px-14 items-center justify-between sticky top-0">
      <div>
        <img className="h-12" src={logo} alt="" />
      </div>
      <div className="flex">
        <Customlink to="/">Home</Customlink>
        <Customlink to="/about">About</Customlink>
        <Customlink to="/blogs">Blogs</Customlink>
        {user ? (
          <button
            className="bg-cyan-400 py-2 px-5 rounded-full "
            onClick={handelSignOut}
          >
            Sign Out
          </button>
        ) : (
          <Customlink to="/login">Login</Customlink>
        )}
      </div>
    </div>
  );
};

export default Header;
