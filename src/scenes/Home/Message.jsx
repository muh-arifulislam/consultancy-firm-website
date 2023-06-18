import React from "react";
import image from "../../assets/images/person_01.png";
import shape from "../../assets/icons/shape.svg";
import shapeSmall from "../../assets/icons/shape_small.svg";
const Message = () => {
  return (
    <section className="container-inner">
      <div className="">
        <div className="text-center">
          <h4 className="lg:text-[60px] text-5xl font-semibold mb-[30px]">
            Join hundreds of successful organizations
          </h4>
          <p className="">
            Companies of every size, and in 62 different countries, are using
            Perdoo to beat their competitors.
          </p>
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col relative overflow-hidden">
          <img src={image} alt="" />
          <div className="px-[30px] py-[60px] flex items-center bg-[#191919] text-white">
            <div className="lg:w-[70%] w-full">
              <h2 className="text-2xl font-semibold mb-6">
                “Peboo enabled everyone in our organization to focus on results
                that matter, and got everyone pointed in the same direction.”
              </h2>
              <div>
                <h1 className="text-semibold">Shannon Lincoln</h1>
                <h4 className="text-sm text-slate-400">VP Finance, Shippo</h4>
              </div>
            </div>
          </div>

          <img
            className="rotate-90 absolute top-0 left-0 translate-x-[-20%] translate-y-[10px]"
            src={shapeSmall}
            alt=""
          />
          <img
            className="lg:block hidden rotate-180 absolute top-0 right-0 translate-x-[10px] translate-y-[-20px]"
            src={shape}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Message;
