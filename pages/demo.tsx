import { useEffect } from 'react'
import MainHeader from '../components/organisms/MainHeader'
import MarketPlaceScene from '../components/pages/MarketPlaceScene'
import styled from 'styled-components'

const DemoPage = () => {

  useEffect(() => {})

  return (
    <Content>
      <MainHeader />
      <MarketPlaceScene />
    </Content>
  )
}

const Content = styled.div`
  margin: 0 auto;
`

export default DemoPage;
