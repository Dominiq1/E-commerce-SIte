// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
     
        <meta name="description" content="Bridging the past with the future." />
        <link rel="icon" href="/vicircle.PNG" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@100&family=Montserrat:wght@100;300&display=swap" rel="stylesheet"/></Head>
     
     
     
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}