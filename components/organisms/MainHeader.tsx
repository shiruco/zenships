import * as React from "react"
import Link from 'next/link'
import styled from 'styled-components'

const MainHeader = () => (
  <Header>
    <Logo>
      <img src="/static/logo_wide.png" width="150" />
    </Logo>
    <nav>
      <Link href='/'><a>Home</a></Link> | {' '}
      <Link href='/demo'><a>Demo</a></Link> | {' '}
    </nav>
  </Header>
)

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #5c5470;
`

const Logo = styled.div`
  margin: 0 50px 0 20px;
`

export default MainHeader
