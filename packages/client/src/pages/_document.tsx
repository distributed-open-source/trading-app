import {Html, Head, Main, NextScript} from 'next/document';

export default function Document({children}: {children: React.ReactNode}) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <body className={`  font-sans bg-gray-200`}>
        <Main />

        {children}
        <NextScript />
      </body>
    </Html>
  );
}
