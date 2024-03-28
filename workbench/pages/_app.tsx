import "sanitize.css";

import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";

import Main from "../components/main";
import { I18nProvider } from "@react-aria/i18n";

function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <I18nProvider locale="en-US">
        <Main>
          <Component {...pageProps} />
        </Main>
      </I18nProvider>
    </SSRProvider>
  );
}
export default App;
