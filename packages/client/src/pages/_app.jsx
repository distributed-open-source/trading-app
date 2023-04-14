import {SessionProvider} from 'next-auth/react';
import QueryWrapper from './QueryWrapper';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({Component, pageProps: {session, ...pageProps}}) {
  return (
    <QueryWrapper>
      <SessionProvider session={session}>
        <Nav />
        <Component {...pageProps} />
       
      </SessionProvider>
    </QueryWrapper>
  );
}
