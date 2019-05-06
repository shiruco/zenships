import App, { Container } from 'next/app'
import React from 'react'
import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// theme style
const theme = {}

const GlobalStyle = createGlobalStyle`
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
  }
`

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }: {Component: any, ctx: any}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Zenships</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
