import React from "react";
import ServiceCard from "../../components/ServiceCard";
import shape from "../../assets/icons/shape.svg";
const Services = () => {
  return (
    <section className=" bg-[#F6F9FF] py-[100px] relative overflow-hidden">
      <div className="container-inner">
        <h4 className="text-5xl text-center font-semibold mb-[80px]">One product, three solutions</h4>
        <div className="flex lg:flex-row md:flex-row flex-col gap-[30px]">
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
        </div>
      </div>
      <img className="absolute left-0 bottom-0 translate-x-[-10px] translate-y-[20px]" src={shape} alt="" />
    </section>
  );
};

export default Services;
