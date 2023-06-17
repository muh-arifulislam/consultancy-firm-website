import React from "react";
import image from "../../assets/images/person.png";
import shapeSmall from "../../assets/icons/shape_small.svg";
import shapeBig from "../../assets/icons/shape.svg";
import InputEmail from "../../components/InputEmail";
const HeroTop = () => {
  return (
    <section className="my-[50px] container-inner">
      <div className="flex lg:flex-row flex-col justify-between gap-[50px]">
        <div className="w-full">
          <h4 className="lg:text-[72px] md:text-[60px] text-5xl leading-[120%] font-bold mb-[20px]">
            Your strategy is only as good as you execute it
          </h4>
          <p className="mb-[30px] text-[20px] leading-[37px]">
            Our simple but powerful OKR+ platform turns great strategies into
            amazing results. And it's free.
          </p>
          <InputEmail></InputEmail>
        </div>
        <div className="w-full flex lg:justify-end justify-center">
          <div className="relative h-full overflow-hidden">
            <img src={image} className="rounded-tl-[50px]" alt="" />
            <img
              className="absolute top-0 right-0 scale-[0.5] translate-x-[30%] translate-y-[-30%]"
              src={shapeSmall}
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 translate-x-[-10px] translate-y-[20%]"
              src={shapeBig}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTop;
