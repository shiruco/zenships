import * as React from 'react'
import Link from 'next/link'
import BaseLayout from '../components/templates/BaseLayout'
import MainHeader from '../components/organisms/MainHeader'

const IndexPage: React.FunctionComponent = () => {
  return (
    <BaseLayout title="Top | Zenships">
      <MainHeader />
      <h1>Hello Next.js!!</h1>
    </BaseLayout>
  )
}

export default IndexPage;
