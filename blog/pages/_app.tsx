import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="m-4">
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
