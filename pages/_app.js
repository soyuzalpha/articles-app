import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, session }) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        {router.pathname === "/auth" ? null : <Navbar />}
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}
