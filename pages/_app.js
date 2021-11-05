import ThemeConfig from "../theme";
import GlobalStyles from "../theme/globalStyles";
import { BaseOptionChartStyle } from "../components/charts/BaseOptionChart";
import Layout from "../layouts/dashboard";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import "simplebar/src/simplebar.css";

const clientSideEmotionCache = createEmotionCache();

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <CacheProvider value={emotionCache}>
      <SafeHydrate>
        <ThemeConfig>
          <GlobalStyles />
          <BaseOptionChartStyle />
          {getLayout(<Component {...pageProps} />)}
        </ThemeConfig>
      </SafeHydrate>
    </CacheProvider>
  );
}

export default MyApp;
