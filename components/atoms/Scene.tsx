import React, { useContext, forwardRef } from "react"
import { SceneContext } from '../../context/SceneContext'

const Scene = (props: any, ref: any) => {
  const sceneContext = useContext(SceneContext)

  return (
    <canvas
      width={sceneContext.width || 100}
      height={sceneContext.height || 100}
      ref={ref}
    />
  )
}

export default forwardRef(Scene)
