import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalitycs/GoogleAnalytics";
import Head from "next/head";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '@/config/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url); // esta función la explico abajo
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
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
