import { useState, useEffect, useCallback } from 'react';
import logo from "../../assets/logos.png"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        0;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT US" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/registration", label: "DEALERS REGISTRATION" },
    { to: "/contact", label: "CONTACT US" },
  ];

  const isActiveRoute = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 navbar bg-white z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="navbar-start w-full md:w-3/6 px-2">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          </label>
          {isMobileMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    className={`font-bold transition-colors duration-200 ${
                      isActiveRoute(link.to)
                        ? "text-[#CBA664]"
                        : "text-black hover:text-[#CBA664]"
                    }`}
                    to={link.to}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link to="/" className="">
          <img
            className="w-32 sm:w-40 md:w-48 lg:w-72"
            src={logo}
            alt="Al-Rehmat Developers"
            loading="eager"
            decoding="async"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.to} className="text-black">
              <Link
                className={`font-bold relative transition-colors duration-200 nav-link-hover ${
                  isActiveRoute(link.to)
                    ? "text-[#CBA664] nav-link-active"
                    : "text-black hover:text-[#CBA664]"
                }`}
                to={link.to}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/contact"
          className="font-bold btn lg:btn-md md:btn-sm btn-xs text-white outline-none border-[0] bg-[#CBA664] hover:bg-[#b08d55] transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          MEET US
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
