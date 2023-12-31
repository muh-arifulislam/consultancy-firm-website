import React from "react";
import { Link } from "react-router-dom";

const TextLink = () => {
  return (
    <Link
      to="/"
      className="text-[#3C4BA6] hover:text-blue-500 transition-all font-bold flex items-center group"
    >
      Learn More
      <span className="ml-2 group-hover:translate-x-[10px] transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </Link>
  );
};

export default TextLink;
