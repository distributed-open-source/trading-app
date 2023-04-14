import {Html, Head, Main, NextScript} from 'next/document';

export default function Document({children}: {children: React.ReactNode}) {
  return (
    <Html lang="en">
      <Head />
      <body className={`mx-4 md:mx-48 xl:mx-96  font-sans bg-gray-200`}>
        <Main />
        {children}
        <NextScript />
      </body>
    </Html>
  );
}
