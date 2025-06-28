import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalitycs/GoogleAnalytics";
import Head from "next/head";
export default function App({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Shiva Camiones</title>
      </Head>

      <Component {...pageProps} />
      <GoogleAnalytics />
    </div>
  );
}
