import * as React from 'react'
import Head from 'next/head'

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Zenships' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name="description" content="Zenships | Ethereum-based Crypto Collectibles Marketplace for XR Dapps | maroton"></meta>
      <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      <link rel="icon" href="/static/favicon.ico"></link>
    </Head>
    {children}
  </>
)

export default Layout
