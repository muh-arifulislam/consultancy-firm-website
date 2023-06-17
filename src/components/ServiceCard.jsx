import React from "react";
import logo from "../assets/icons/goal.svg";
const ServiceCard = () => {
  return (
    <div className="bg-white px-[20px] py-[40px]">
      <div className="mb-[50px]">
        <img className="shadow-xl" src={logo} alt="" />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">Roadmap to success</h4>
        <p className="mb-2">
          Design your future. Share your strategy with the people responsible
          for delivering it. Create clarity and buy-in.
        </p>
        <a href="#" className="text-[#3C4BA6] font-semibold">Learn More</a>
      </div>
    </div>
  );
};

export default ServiceCard;
