import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Nyari Vet Services</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
