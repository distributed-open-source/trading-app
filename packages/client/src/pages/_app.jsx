'use client';

import {SessionProvider} from 'next-auth/react';
import QueryWrapper from './QueryWrapper';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import ScrollToTop from '../components/ScrollToTopButton';

export default function App({Component, pageProps: {session, ...pageProps}}) {
  return (
    <QueryWrapper>
      <SessionProvider session={session}>
          <Nav />
          <Component {...pageProps} />
          <ScrollToTop />
          <Footer />
      </SessionProvider>
    </QueryWrapper>
  );
}
