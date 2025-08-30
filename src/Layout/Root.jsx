import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";

const Root = () => {
  return (
    <div className="flex flex-col h-screen max-w-4/5 mx-auto">
      <Navbar></Navbar>
      <div className=" grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
