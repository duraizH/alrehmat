import React from 'react'
import logo from "../../assets/logos.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
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
        <a className="">
          <img
            width={96}
            className="  md:w-96 sm:w-64"
            src={logo}
            alt="Al-Rehmat Developers"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-black ">
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
      <div className="navbar-end">
        <Link to="/contact" className="btn font-bold">
          MEET US
        </Link>
      </div>
    </div>
  );
}
export default Navbar;