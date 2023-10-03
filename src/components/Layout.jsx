// Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
      {/* You can add a footer or other common elements here */}
    </div>
  );
};

export default Layout;
