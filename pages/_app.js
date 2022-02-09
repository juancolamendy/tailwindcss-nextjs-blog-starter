import '../styles/tailwind.css';

import Head from 'next/head';

import Analytics from '../components/Analytics';
import { MainLayout } from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Analytics />
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
  );
}

export default MyApp
