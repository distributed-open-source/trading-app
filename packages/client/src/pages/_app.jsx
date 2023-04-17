import {SessionProvider} from 'next-auth/react';
import QueryWrapper from './QueryWrapper';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/globals.css';
import ThemeContextProvider from "@/context/themeContextProvider";

export default function App({Component, pageProps: {session, ...pageProps}}) {
  return (
    <QueryWrapper>
      <SessionProvider session={session}>
        <ThemeContextProvider>
          <Nav />
          <Component {...pageProps} />
        </ThemeContextProvider>
      </SessionProvider>
    </QueryWrapper>
  );
}
