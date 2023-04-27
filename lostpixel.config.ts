import type { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [
      { path: "/", name: "landing" },
      {
        path: "/pricing",
        name: "pricing",
      },
    ],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "-----",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
