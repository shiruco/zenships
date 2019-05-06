import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

// theme style
const theme = {}

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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
