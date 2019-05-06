import * as React from 'react'
import Link from 'next/link'
import BaseLayout from '../components/templates/BaseLayout'

const IndexPage: React.FunctionComponent = () => {
  return (
    <BaseLayout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js!!</h1>
      <p><Link href='/about'><a>About</a></Link></p>
      <img src="/static/logo.png" />
    </BaseLayout>
  )
}

export default IndexPage;
