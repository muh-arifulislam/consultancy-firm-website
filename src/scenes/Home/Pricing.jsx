import React, { useState } from "react";
import PriceCard from "../../components/PriceCard";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  return (
    <section className="container-inner mb-[100px]">
      <div>
        <div className="">
          <h1 className="text-center lg:text-[60px] md:text-[60px] text-5xl font-semibold mb-[20px]">
            Pricing
          </h1>
          <p className="text-xl lg:px-[100px] md:px-[50px] mb-[30px] lg:text-center md:text-center text-start">
            hoose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
        <div className="flex justify-center mb-[40px]">
          <div className="inline-block p-1 border rounded-[30px]">
            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`px-3 py-1 rounded-[30px] text-[14px] font-semibold select-none ${
                selectedPlan === "monthly"
                  ? "bg-blue-800 text-white"
                  : "bg-none text-gray-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedPlan("annualy")}
              className={`px-3 py-1 rounded-[30px] text-[14px] font-semibold ${
                selectedPlan === "annualy"
                  ? "bg-blue-800 text-white"
                  : "bg-none text-gray-500"
              }`}
            >
              Annualy
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[30px]">
          <PriceCard
            selectedPlan={selectedPlan}
            plan="Freelancer"
            title="The essentials to provide your best work for clients."
            billMonthly="15"
            billAnnualy="144"
            offers={[
              "5 products",
              "Up to 1,000 subscribers",
              "Basic analytics",
              "48-hour support response time",
            ]}
          ></PriceCard>
          <PriceCard
            selectedPlan={selectedPlan}
            isPopular={true}
            plan="Startup"
            title="A plan that scales with your rapidly growing business."
            billMonthly="30"
            billAnnualy="288"
            offers={[
              "25 products",
              "Up to 10,000 subscribers",
              "Advanced analytics",
              "24-hour support response time",
              "Marketing automations",
            ]}
          ></PriceCard>
          <PriceCard
            selectedPlan={selectedPlan}
            plan="Enterprise"
            title="Dedicated support and infrastructure for your company."
            billMonthly="60"
            billAnnualy="576"
            offers={[
              "Unlimited products",
              "Unlimited subscribers",
              "Advanced analytics",
              "1-hour, dedicated support response time",
              "Marketing automations",
              "Custom reporting tools",
            ]}
          ></PriceCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
