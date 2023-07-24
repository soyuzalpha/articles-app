import { useRouter } from 'next/router';
import { Poppins } from '@next/font/google';
import Navbar from '../components/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <body className={poppins.className}>
      {router.pathname === '/auth' ? null : <Navbar />}
      {children}
    </body>
  );
}
