import Head from "next/head";

import Workbench from "../workbench";

export default function Home() {
  return (
    <>
      <Head>
        <title>Workbench</title>
        <meta
          content="Interactive playground to develop and polish components."
          name="description"
        />
      </Head>
      <Workbench />
    </>
  );
}
