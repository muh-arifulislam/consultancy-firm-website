import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white py-[60px]">
      <div className="container-inner grid lg:grid-cols-3 grid-cols-1 lg:gap-x-[30px] gap-x-0 lg:gap-y-0 gap-y-[30px]">
        <div className="">
          <h1 className="text-2xl font-semibold mb-[20px]">Peboo</h1>
          <p className="mb-2">
            Our simple but powerful OKR+ platform turns great strategies into
            amazing results. And it's free.
          </p>
          <div></div>
        </div>
        <div className=" col-span-2 grid grid-cols-3">
          <div className="flex lg:justify-end justify-center">
            <div>
              <h4 className="mb-[20px] font-semibold text-lg">Pages</h4>
              <ul>
                <li className="mb-3">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Solution</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Pricing</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Resources</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-end justify-center">
            <div>
              <h4 className="mb-[20px] font-semibold text-lg">Legal</h4>
              <ul>
                <li className="mb-3">
                  <Link to="/">Terms of Use</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Privace Policy</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Legal Notice</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:justify-end justify-center">
            <div>
              <h4 className="mb-[20px] font-semibold text-lg">Links</h4>
              <ul>
                <li className="mb-3">
                  <Link to="/">About</Link>
                </li>
                <li className="mb-3">
                  <Link to="/">Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
