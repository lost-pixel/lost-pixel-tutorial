import { useState } from "react";
import { api } from "~/utils/api";
import { PricingRow } from "./pricing-row";
import { Toggle } from "./toggle";
import { Button } from "./button";

export const PricingList = () => {
  const [yearly, setYearly] = useState(false);
  const plans = api.example.plans.useQuery({ yearly });
  const [selectedPlan, setSelectedPlan] = useState("pro");

  return (
    <div className=" bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <p className="text-center text-xl  text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h2 className="mt-4 text-center text-3xl font-semibold capitalize  text-white lg:text-4xl">
          Pricing Plans
        </h2>

        <div className="mt-6 space-y-8 xl:mt-12">
          <div className="flex justify-center">
            <Toggle
              label="Yearly"
              checked={yearly}
              onClick={() => setYearly(!yearly)}
            />
          </div>

          {plans.isLoading && <div>Loading...</div>}

          {plans.data?.map((plan) => (
            <PricingRow
              key={plan.id}
              price={plan.price}
              title={plan.title}
              selected={selectedPlan === plan.id}
              yearly={yearly}
              onClick={() => setSelectedPlan(plan.id)}
            ></PricingRow>
          ))}

          <div className="flex justify-center">
            <Button label="Choose Plan"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
