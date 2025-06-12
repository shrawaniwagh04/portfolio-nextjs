import WithHeaderFooter from "../hoc/WithHeaderFooter/WithHeaderFooter";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithHeaderFooter headerData={[]}>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={3000} />
    </WithHeaderFooter>
  );
}
