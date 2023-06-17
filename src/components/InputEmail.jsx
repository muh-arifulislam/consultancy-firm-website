import React from "react";

const InputEmail = () => {
  return (
    <div className="flex lg:justify-start md:justify-start justify-center">
      <form action="" className="shadow-lg">
        <input
          className="border-y-2 border-l-2 border-gray-800 rounded-l lg:px-[30px] md:px-[30px] px-[10px] py-[15px] outline-0"
          type="text"
          placeholder="Enter Your Email"
        />
        <input
          className="bg-[#3C4BA6] rounded-r lg:px-[30px] md:px-[30px] px-[10px] py-[17px] font-semibold text-white cursor-pointer"
          type="submit"
          value="Get Started"
        />
      </form>
    </div>
  );
};

export default InputEmail;
