import React from 'react';
import logo from "../../assets/logos.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-white z-50">
      <div className="animate-pulse flex flex-col items-center justify-center gap-6">
        <img 
          src={logo} 
          alt="Loading Al-Rehmat..." 
          className="w-48 sm:w-64 animate-fade-down animate-once animate-duration-1000"
          loading="eager"
        />
        <span className="loading loading-dots loading-lg text-[#CBA664]"></span>
      </div>
    </div>
  );
};

export default Loader;
