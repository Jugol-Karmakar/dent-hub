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
    <nav className=" bg-slate-100 py-3 px-14 flex items-center justify-between sticky  top-0">
      <div>
        <img className="h-12" src={logo} alt="" />
      </div>
      <div className="md:flex md:items-center">
        <Customlink to="/">Home</Customlink>
        <Customlink to="/checkout">Checkout</Customlink>
        <Customlink to="/about">About</Customlink>
        <Customlink to="/blogs">Blogs</Customlink>
        {user ? (
          <button
            className="sm:block border-2  px-3 rounded-full font-semibold bg-cyan-400"
            onClick={handelSignOut}
          >
            Sign Out
          </button>
        ) : (
          <Customlink to="/login">Login</Customlink>
        )}
      </div>
    </nav>
  );
};

export default Header;
