import { useRouter } from "next/router";
import { Button } from "../components/button";
import Shell from "../components/shell";

export const Home = () => {
  const router = useRouter();

  return (
    <Shell title="Home">
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-2 px-4 py-16 "></div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
            Lost Pixel
          </span>{" "}
          Tutorial
        </h1>
        <div className="container flex flex-col items-center justify-center py-16">
          <Button
            label={"Get Started"}
            onClick={() => void router.push("/pricing")}
          />
        </div>
      </main>
    </Shell>
  );
};

export default Home;
