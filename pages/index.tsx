import * as React from 'react'
import BaseLayout from '../components/templates/BaseLayout'
import MainHeader from '../components/organisms/MainHeader'

const IndexPage: React.FunctionComponent = () => {
  return (
    <BaseLayout title="Top | Zenships">
      <MainHeader />
      <h1>Hi, This is Zenships Project.</h1>
    </BaseLayout>
  )
}

export default IndexPage;
