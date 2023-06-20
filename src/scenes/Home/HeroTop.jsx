import React from "react";
import image from "../../assets/images/person.png";
import shapeSmall from "../../assets/icons/shape_small.svg";
import shapeBig from "../../assets/icons/shape.svg";
import InputEmail from "../../components/InputEmail";
import {
  AttentionSeeker,
  Bounce,
  Fade,
  Hinge,
  JackInTheBox,
  Roll,
  Slide,
} from "react-awesome-reveal";
const HeroTop = () => {
  return (
    <section className="mb-[50px] lg:mt-[50px] md:mt-[50px] mt-0 container-inner">
      <div className="flex lg:flex-row flex-col justify-between gap-[50px]">
        <div className="w-full">
          <div className="mb-[20px]">
            <Slide
              cascade
              direction="left"
              duration="1000"
              damping={0.1}
              triggerOnce
            >
              <p className="lg:text-[72px] md:text-[60px] text-5xl leading-[120%] font-bold">
                Your strategy is
              </p>
              <p className="lg:text-[72px] md:text-[60px] text-5xl leading-[120%] font-bold">
                only as good as
              </p>
              <p className="lg:text-[72px] md:text-[60px] text-5xl leading-[120%] font-bold">
                you execute it
              </p>
            </Slide>
          </div>
          <p className="mb-[30px] text-[20px] leading-[37px]">
            Our simple but powerful OKR+ platform turns great strategies into
            amazing results. And it's{" "}
            <AttentionSeeker className="inline-block z-50" effect="jello" delay="100">
              <span className="font-semibold">free</span>
            </AttentionSeeker>
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
