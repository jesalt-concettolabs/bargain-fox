import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../BreadsScrumb/Breadcrumb";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
