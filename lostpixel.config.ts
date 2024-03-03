import type { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [
      { path: "/", name: "landing" },
      {
        path: "/pricing",
        name: "pricing",
      },
      { path: "/cta", name: "cta" },
    ],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "clgzaxi3701vdju0e5ivbpcd8",
  apiKey: "234bec13-6164-4f33-8d82-35cb5f6568a6",
};
