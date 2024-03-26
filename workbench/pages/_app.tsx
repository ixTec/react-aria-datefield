import "sanitize.css";

import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";

import Main from "../components/main";

function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </SSRProvider>
  );
}
export default App;
