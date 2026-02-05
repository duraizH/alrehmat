import React from 'react'
import g1 from "../../assets/g1.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[220px] sm:h-[500px]"
        style={{ backgroundImage: `url(${g1})` }}
        role="img"
        aria-label="Al-Rehmat Developers"
      ></div>
      <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
        <div className="text-center">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-4 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20 sm:px-6 sm:py-12 md:py-16 md:px-12 mt-[-120px] sm:mt-[-170px] backdrop-blur-[30px]">
            <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-7xl  text-gray-700">
              Welcome to Al-Rehmat <br />
              <span className=" text-[#CBA664] ">Creating opportunities.</span>
            </h1>
            <Link
              className="mb-2 inline-block rounded bg-[#CBA664] px-8 pt-3 pb-3 sm:px-12 sm:pt-4 sm:pb-3.5 text-base sm:text-xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init=""
              data-te-ripple-color="light"
              role="button"
              to="/about"
              title='Learn more about Al-Rehmat Developers'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
