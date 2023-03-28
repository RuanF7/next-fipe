import React from "react";
import type { AppProps } from "next/app";
import GlobalStyles from "@/theme/GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
