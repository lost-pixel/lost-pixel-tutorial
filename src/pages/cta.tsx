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
          CTA
        </h1>
        <div className="container flex flex-col items-center justify-center py-16">
          <Button
            style={{
              background: "salmon",
            }}
            label={"Get Started"}
            onClick={() => void router.push("/pricing")}
          />
        </div>
      </main>
    </Shell>
  );
};

export default Home;
