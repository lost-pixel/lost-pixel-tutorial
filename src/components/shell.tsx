import { type NextPage } from "next";
import Head from "next/head";
import { Navigation } from "./navigation";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Shell: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Lost Pixel Tutorial - {title}</title>
      </Head>

      <Navigation />

      {children}
    </>
  );
};

export default Shell;
