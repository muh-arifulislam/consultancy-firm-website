import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap  py-6 lg:px-[100px] md:px-[100px] px-[20px]">
      <div className="flex items-center flex-shrink-0 text-slate-600 mr-6">
        <span className="font-semibold text-xl tracking-tight">Peboo</span>
      </div>
      {/* mobile view  */}
      <div className="block lg:hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 hover:text-blue-400 hover:border-blue-400"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* desktop view  */}
      <div
        className={`w-full block flex-grow lg:flex justify-end lg:w-auto overflow-hidden lg:h-full ${
          expanded
            ? "h-[160px] transition-all duration-300 ease-in-out"
            : "h-0 transition-all duration-300 ease-in-out"
        }`}
      >
        <div className="text-[16px]">
          <Link
            to="/solutions"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 font-semibold hover:text-blue-400 lg:ml-[30px] md:ml-[30px] ml-0"
          >
            Solutions
          </Link>
          <Link
            to="/pricing"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 font-semibold hover:text-blue-400 lg:ml-[30px] md:ml-[30px] ml-0"
          >
            Pricing
          </Link>
          <Link
            to="/resources"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 font-semibold hover:text-blue-400 lg:ml-[30px] md:ml-[30px] ml-0"
          >
            Resources
          </Link>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 font-semibold hover:text-blue-400 lg:ml-[30px] md:ml-[30px] ml-0"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
