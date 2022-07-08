import type { AppProps } from "next/app";
import BlogNavbar from "../../components/BlogNavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BlogNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
