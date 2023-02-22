import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Vialto Partners" />
      </Head>

      <body className="h-full selection:bg-teal-light selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
