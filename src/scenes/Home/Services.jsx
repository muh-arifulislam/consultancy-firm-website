import React from "react";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  return (
    <section className=" bg-[#F6F9FF] py-[100px]">
      <div className="container-inner">
        <h4 className="text-5xl text-center font-semibold mb-[80px]">One product, three solutions</h4>
        <div className="flex lg:flex-row md:flex-row flex-col gap-[30px]">
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
