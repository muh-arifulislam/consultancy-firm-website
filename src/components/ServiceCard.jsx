import React from "react";
import TextLink from "./TextLink";
const ServiceCard = ({ img, title, children }) => {
  return (
    <div className="bg-white px-[20px] py-[40px]">
      <div className="mb-[50px]">
        <img className="shadow-xl" src={img} alt="" />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="mb-2">{children}</p>
        <TextLink></TextLink>
      </div>
    </div>
  );
};

export default ServiceCard;
