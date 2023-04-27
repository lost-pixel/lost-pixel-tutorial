import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { monthlyPlans, yearlyPlans } from "../../../data/plans";

export const exampleRouter = createTRPCRouter({
  plans: publicProcedure
    .input(
      z.object({
        yearly: z.boolean(),
      })
    )
    .query(({ input }) => {
      return input.yearly ? yearlyPlans : monthlyPlans;
    }),
});
