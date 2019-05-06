import * as React from "react"
import Link from 'next/link'
import styled from 'styled-components'

const MainHeader: React.FunctionComponent = () => (
  <Header>
    <nav>
      <Link href='/'><a>Home</a></Link> | {' '}
      <Link href='/about'><a>About</a></Link> | {' '}
    </nav>
  </Header>
)

const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #ccc;
`

export default MainHeader
