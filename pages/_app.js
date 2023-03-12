import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

import { Rubik } from '@next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps, session }) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        {router.pathname === '/auth' ? null : <Navbar />}

        <main className={rubik.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </ChakraProvider>
  );
}
