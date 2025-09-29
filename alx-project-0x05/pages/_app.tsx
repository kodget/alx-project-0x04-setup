import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </CountProvider>
  );
}
