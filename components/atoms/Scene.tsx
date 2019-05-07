import React, { useContext, forwardRef } from "react"
import styled from 'styled-components'
import { SceneContext } from '../../context/SceneContext'

const Scene = (props: any, ref: any) => {
  const sceneContext = useContext(SceneContext)

  return (
    <Canvas
      width={sceneContext.width || 100}
      height={sceneContext.height || 100}
      ref={ref}
    />
  )
}

const Canvas = styled.canvas`
  border-style: none;
  outline: none;
`

export default forwardRef(Scene)
