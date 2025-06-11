import WithHeaderFooter from '../hoc/WithHeaderFooter/WithHeaderFooter'
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithHeaderFooter headerData={[]}>
      <Component {...pageProps} />
    </WithHeaderFooter>
  );
}
