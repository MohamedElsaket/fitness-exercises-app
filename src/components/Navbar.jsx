import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

import React from "react";

const Navbar = () => {
  return (
    <div className="py-2 px-8 flex items-center justify-between bg-[#dadada] m-6 rounded-[40px]">
      <div className="logo">
        <img src={Logo} alt="Logo" className="w-10" />
      </div>
      <ul className="list-none flex gap-8">
        <li>
          <Link to="/fitness-exercises-app" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/fitness-exercises-app/exercises/:id" className="">
            Details
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
