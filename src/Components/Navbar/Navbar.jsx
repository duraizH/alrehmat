import React from 'react'
import { useState,useEffect } from 'react';
import logo from "../../assets/logos.png"
import { Link } from 'react-router-dom';
const Navbar = () => {

   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       const scrollPosition =
         window.pageYOffset ||
         window.scrollY ||
         document.documentElement.scrollTop ||
         0;
       setIsScrolled(scrollPosition > 0);
       setIsScrolled(scrollPosition > 0);
     };

     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0  navbar bg-white  z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className=" w-11/12 navbar-start md:w-3/6 ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-bold" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/about">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link className="font-bold" to="/registration">
                DEALERS REGISTRATION
              </Link>
            </li>

            <li>
              <Link className="font-bold" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img
            className=" lg:w-96 md:w-56"
            src={logo}
            alt="Al-Rehmat Developers"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className=" text-black  ">
            <Link className="font-bold" to="/">
              HOME
            </Link>
          </li>
          <li className="text-black ">
            <Link className="font-bold" to="/about">
              ABOUT US
            </Link>
          </li>
          <li className="text-black ">
            <Link className="font-bold" to="/projects">
              PROJECTS
            </Link>
          </li>
          <li className="text-black ">
            <Link className="font-bold" to="/registration">
              DEALERS REGISTRATION
            </Link>
          </li>
          <li className="text-black ">
            <Link className="font-bold" to="/contact">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end sm:btn-sm">
        <Link
          to="/contact"
          className="font-bold btn lg:btn-lg md:btn-sm btn-xs text-white outline-none border-[0]   bg-[#CBA664]"
        >
          MEET US
        </Link>
      </div>
    </div>
  );
}
export default Navbar;