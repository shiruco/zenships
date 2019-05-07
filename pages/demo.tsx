import { useState, useEffect } from 'react'
import Link from 'next/link'
import MainHeader from '../components/organisms/MainHeader'
import MarketPlaceScene from '../components/pages/MarketPlaceScene'
import styled from 'styled-components'

const DemoPage = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {})

  return (
    <Content>
      <MainHeader />
      <MarketPlaceScene />
      <p><Link href='/'><a>Go home</a></Link></p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Content>
  )
}

const Content = styled.div`
  margin: 0 auto;
`

export default DemoPage;
