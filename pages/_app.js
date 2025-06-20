import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalitycs/GoogleAnalytics";

export default function App({ Component, pageProps }) {

  return (
<div>

  <Component {...pageProps} />
  <GoogleAnalytics />
  </div>
  );
}
