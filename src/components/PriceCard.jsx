import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriceCard = ({
  isPopular,
  selectedPlan,
  plan,
  title,
  billMonthly,
  billAnnualy,
  offers,
}) => {
  return (
    <div
      className={`p-[40px] rounded-[20px] ${
        isPopular ? "border-2 border-blue-600" : "border"
      }`}
    >
      <div className="mb-[20px] flex justify-between items-center">
        <h2 className={`text-lg font-semibold ${isPopular && "text-blue-600"}`}>
          {plan}
        </h2>
        <span
          className={`text-[12px] font-semibold text-blue-600 px-2 py-1 border rounded-[15px] bg-slate-200 ${
            isPopular ? "inline" : "hidden"
          }`}
        >
          Most Popular
        </span>
      </div>
      <p className="mb-[20px]">{title}</p>
      <h4 className="mb-[20px]">
        <span className="text-4xl font-bold">
          ${selectedPlan === "monthly" ? billMonthly : billAnnualy}
        </span>
        /{selectedPlan === "monthly" ? "month" : "year"}
      </h4>
      <div className="text-center mb-[30px]">
        <button
          className={`w-full border border-gray-300 py-2 rounded font-semibold text-[14px] ${
            isPopular
              ? "bg-blue-600 text-white hover:bg-blue-500 transition-all"
              : "text-blue-600 hover:border-gray-400 transition-all"
          }`}
        >
          Buy Plan
        </button>
      </div>
      <div>
        <ul>
          {offers.map((offer, idx) => (
            <li key={idx} className="flex">
              <span className="text-blue-600 text-[20px] mr-4">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </span>
              <span className="text-gray-500 text-[15px]">{offer}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
