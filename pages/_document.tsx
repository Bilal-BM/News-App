import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="icon" type="image/ico"  href="/favicon.ico"></link>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
