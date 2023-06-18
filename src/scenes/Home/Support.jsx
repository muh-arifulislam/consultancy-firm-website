import React from "react";
import TextLink from "../../components/TextLink";

const Support = () => {
  return (
    <section className="container-inner">
      <div className="my-[50px]">
        <h2 className="text-[60px] font-semibold text-center mb-[30px]">
          How we are different
        </h2>
        <div className="flex lg:flex-row flex-col gap-[30px]">
          <div className="px-[40px] py-[60px] bg-[#E0EBFF] lg:w-[80%] w-full rounded">
            <h4 className="text-5xl font-semibold mb-4">
              Best resources & support
            </h4>
            <p className="mb-5">
              We are widely known for offering the best resources and support.
            </p>
            <TextLink></TextLink>
          </div>
          <div className="px-[40px] py-[60px] bg-[#E0EBFF] lg:w-[80%] w-full rounded">
            <h4 className="text-5xl font-semibold mb-4">
              Best resources & support
            </h4>
            <p className="mb-5">
              We are widely known for offering the best resources and support.
            </p>
            <TextLink></TextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
