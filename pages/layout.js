import Navbar from '../components/Navbar';
import { Rubik } from '@next/font/google';
import { useRouter } from 'next/router';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === '/auth' ? null : <Navbar />}
      <main className={rubik.className}>{children}</main>
    </>
  );
}
