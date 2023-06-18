import React from "react";
import image from "../../assets/images/members.png";
const AboutBanner = () => {
  return (
    <section className="container-inner">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[50px] py-[100px] items-center">
        <div className="">
          <h2 className="lg:text-[60px] text-5xl font-semibold mb-5 leading-[120%]">
            Finally a place where it all comes together
          </h2>
          <p className="mb-5 lg:w-[80%] w-full">
            Bring together your strategy with the goals that need to deliver
            your strategy, and the people that need to deliver those goals.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
