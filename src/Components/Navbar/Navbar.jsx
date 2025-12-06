import React from 'react'
import { useState,useEffect } from 'react';
import logo from "../../assets/logos.png"
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {

   const [isScrolled, setIsScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
   const location = useLocation();

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

   const toggleMenu = () => setMenuOpen(!menuOpen);
   const closeMenu = () => setMenuOpen(false);

   const isActive = (path) => location.pathname === path;
   const getLinkClass = (path) => {
     return `font-bold ${
       isActive(path) 
         ? 'text-white bg-[#CBA664]' 
         : 'text-black hover:bg-[#CBA664] hover:text-white'
     }`;
   };

  return (
    <div
      className={`fixed top-0 right-0 left-0  navbar bg-white  z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="flex-1 navbar-start">
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost text-[#CBA664]"
            aria-label="toggle navigation menu"
          >
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
          </button>
          {menuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 absolute top-12 left-0">
              <li>
                <Link className={getLinkClass('/')} to="/" onClick={closeMenu}>
                  HOME
                </Link>
              </li>
              <li>
                <Link className={getLinkClass('/about')} to="/about" onClick={closeMenu}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className={getLinkClass('/projects')} to="/projects" onClick={closeMenu}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link className={getLinkClass('/registration')} to="/registration" onClick={closeMenu}>
                  DEALERS REGISTRATION
                </Link>
              </li>

              <li>
                <Link className={getLinkClass('/contact')} to="/contact" onClick={closeMenu}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/" className="ml-2 md:ml-4">
          <img
            className="max-w-xs md:max-w-sm lg:max-w-lg h-auto"
            src={logo}
            alt="Al-Rehmat Developers"
          />
        </Link>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className={getLinkClass('/')} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={getLinkClass('/about')} to="/about">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link className={getLinkClass('/projects')} to="/projects">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link className={getLinkClass('/registration')} to="/registration">
              DEALERS REGISTRATION
            </Link>
          </li>
          <li>
            <Link className={getLinkClass('/contact')} to="/contact">
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