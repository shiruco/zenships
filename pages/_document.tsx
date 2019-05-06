import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: { renderPage: any }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App: any) => (props: any) => sheet.collectStyles(
      <App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="Zenships | Ethereum-based Crypto Collectibles Marketplace for XR Dapps | maroton"></meta>
          <link rel="icon" href="/static/favicon.ico"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
