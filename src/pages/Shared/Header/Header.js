import React from "react";
import Customlink from "../../Customlink/Customlink";
import logo from "../../../images/logo.svg";

const Header = () => {
  return (
    <div className="flex bg-slate-100 py-3 px-14 items-center justify-between sticky top-0">
      <div>
        <img className="h-12" src={logo} alt="" />
      </div>
      <div className="flex">
        <Customlink to="/">Home</Customlink>
        <Customlink to="/about">About</Customlink>
        <Customlink to="/blogs">Blogs</Customlink>
        <Customlink to="/login">Login</Customlink>
      </div>
    </div>
  );
};

export default Header;
