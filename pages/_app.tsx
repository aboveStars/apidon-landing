import type { AppProps } from "next/app";

import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY || ""}
      />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || ""} />

      <SaasProvider theme={theme}>
        <Layout
          announcementProps={announcement}
          headerProps={header}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
      </SaasProvider>
    </>
  );
}

export default MyApp;
