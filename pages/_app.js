import '../styles/tailwind.css';

import Analytics from '../components/Analytics';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Analytics />
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
