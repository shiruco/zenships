import * as React from 'react'
import Link from 'next/link'
import BaseLayout from '../components/templates/BaseLayout'

const AboutPage: React.FunctionComponent = () => (
  <BaseLayout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p><Link href='/'><a>Go home</a></Link></p>
  </BaseLayout>
)

export default AboutPage;
