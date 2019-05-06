import { useState, useEffect } from 'react'
import Link from 'next/link'
import BabylonScene from '../components/molecules/BabylonScene'

const DemoPage = () => {

  const [count, setCount] = useState(0);

  console.log(count, setCount)

  useEffect(() => {
    console.log("mounted")
  })

  return (
    <>
      <h1>Demo</h1>
      <BabylonScene />
      <p><Link href='/'><a>Go home</a></Link></p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default DemoPage;
