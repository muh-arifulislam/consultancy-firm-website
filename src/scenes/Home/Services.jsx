import React from "react";
import ServiceCard from "../../components/ServiceCard";
import shape from "../../assets/icons/shape.svg";
import image01 from "../../assets/icons/paths.svg";
import image02 from "../../assets/icons/mark.svg";
import image03 from "../../assets/icons/goal.svg";
import { JackInTheBox } from "react-awesome-reveal";
const Services = () => {
  return (
    <section className=" bg-[#F6F9FF] py-[100px] relative overflow-hidden">
      <div className="container-inner">
        <h4 className="text-5xl text-center font-semibold mb-[80px]">
          One product, three solutions
        </h4>
        <div className="flex lg:flex-row md:flex-row flex-col gap-[30px]">
          <JackInTheBox cascade triggerOnce damping="0.3">
            <ServiceCard img={image01} title="Roadmap to success">
              Design your future. Share your strategy with the people
              responsible for delivering it. Create clarity and buy-in.{" "}
            </ServiceCard>
            <ServiceCard img={image02} title="Goals that matter">
              Design your future. Share your strategy with the people
              responsible for delivering it. Create clarity and buy-in.
            </ServiceCard>
            <ServiceCard img={image03} title="Visible achievements">
              Design your future. Share your strategy with the people
              responsible for delivering it. Create clarity and buy-in.
            </ServiceCard>
          </JackInTheBox>
        </div>
      </div>
      <img
        className="absolute left-0 bottom-0 translate-x-[-10px] translate-y-[20px]"
        src={shape}
        alt=""
      />
    </section>
  );
};

export default Services;
