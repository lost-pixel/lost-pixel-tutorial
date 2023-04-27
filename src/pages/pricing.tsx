import { type NextPage } from "next";

import { PricingList } from "../components/pricing-list";
import Shell from "../components/shell";

const Pricing: NextPage = () => {
  return (
    <Shell title="Pricing">
      <main className="flex min-h-screen flex-col items-center bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-2 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Pricing
          </h1>
          <div className="container">
            <PricingList />
          </div>
        </div>
      </main>
    </Shell>
  );
};

export default Pricing;
