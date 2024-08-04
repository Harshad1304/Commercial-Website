import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenu = ()=>{
      setMenuOpen(prev => !prev)
  }

  return (
    <nav className=" py-5 px-3 md:px-32 w-full flex justify-between items-center bg-transparent fixed top-0 left-0 z-[999]">
      {/* Leftside logo-txt */}
      <div className="text-3xl font-semibold text-gray-900">Company-Name</div>

      {/* Rightside */}
      {/* Desktop-Nav */}
      <div className="hidden xl:flex gap-10 text-white items-center">
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
        <NavLink to="/projects" className="text-xl">
          Projects
        </NavLink>
        <NavLink to="about-us" className="text-xl">
          About US
        </NavLink>
        <NavLink
          to="contact-us"
          className="text-xl bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in-out duration-300"
        >
          Contact Us
        </NavLink>
      </div>
      {/* Mobile-Nav */}
      <div className="mobile-nav md:hidden ">
        {/* Mobile-nav button */}
        <div onClick={handleMenu} className="h-10 cursor-pointer w-full flex items-center mr-1 relative z-[9]">
          {isMenuOpen ? <IoCloseOutline className="text-5xl" /> : <FiMenu className="text-5xl" />}
        </div>
        <div className={`bg-white h-screen w-full flex flex-col items-center  absolute top-0 ${isMenuOpen?'-left-0':'-left-full'} transition-all duration-500`}>
          {/* Mobile logo */}
          <div className="text-4xl mt-10 relative  -left-12 -top-5 pl-2">Company-Name</div>
          {/* Links */}
          <div onClick={handleMenu} className="flex flex-col justify-center w-full px-10 gap-5 mt-32">
            <div>
              <NavLink
                to="/"
                className="flex justify-between  border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2"
              >
               
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
              to='/projects'
                className="flex justify-between  border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2"
              >
               
                Projects
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/about-us"
                className="flex justify-between  border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2"
              >
               
                About Us
              </NavLink>
            </div>
            <div className="mx-auto mt-20">
              <NavLink
                to="/contact-us"
                className=" flex justify-between  border-b border-slate-400  mb-7 text-3xl bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in-out duration-300"
              >
               
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
