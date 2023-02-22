import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/footer";
// import StyledNavbar from "./styledNavbar.js";
import Navbar from "../components/Navbar";
const SharedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
        <Outlet />
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default SharedLayout;
