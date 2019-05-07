import React, { useContext } from "react"
import { SceneContext } from '../../context/SceneContext'

const Scene = () => {
  const sceneContext = useContext(SceneContext)

  return (
    <canvas
      width={sceneContext.width || 100}
      height={sceneContext.height || 100}
      ref={(canvas) => {
        if (sceneContext.getSceneRef) {
          sceneContext.getSceneRef(canvas)
        }
      }}
    />
  )
}

export default Scene
