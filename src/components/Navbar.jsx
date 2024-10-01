import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisble] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className=" flex items-center justify-between py-2 font-medium m-0 px-5">
      <Link to={"/"}>
        {" "}
        <img src={assets.logo} alt="" />
      </Link>
      <ul id="li" className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className=" relative li flex no-underline flex-col items-center gap-1"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className=" relative li flex no-underline flex-col items-center gap-1"
        >
          About
        </NavLink>
        <NavLink
          to="/collection"
          className=" relative li flex no-underline flex-col items-center gap-1"
        >
          Collection
        </NavLink>

        <NavLink
          to="/contact"
          className=" relative li flex no-underline flex-col items-center gap-1"
        >
          Contact
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer "
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 px-4">
            <div className="flex flex-col gap-2 w-36 py3 px5 bg-slate-100 text-gray-700">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative w-5 min-w-5">
          <img src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black aspect-square text-white text-[8px] rounded-full ">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisble(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* side bar menu */}
      <div
        className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full " : "w-0"
        }`}
      >
        <div className=" flex flex-col text-gray-600 cursor-pointer">
          <div
            onClick={() => setVisble(false)}
            className="flex item-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisble(false)}
            to="/"
            className=" relative li  text-2xl justify-evenly gap-5 font-bold no-underline flex-col items-center "
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setVisble(false)}
            to="/about"
            className=" relative li  text-2xl justify-evenly gap-5 font-bold no-underline flex-col items-center "
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisble(false)}
            to="/collection"
            className=" relative li  text-2xl justify-evenly gap-5 font-bold no-underline flex-col items-center "
          >
            Collection
          </NavLink>

          <NavLink
            onClick={() => setVisble(false)}
            to="/contact"
            className=" relative li flex text-2xl justify-evenly gap-5 font-bold no-underline flex-col r gap-1"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
