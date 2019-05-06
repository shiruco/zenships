import React from "react"
import { SceneContextConsumer } from '../../context/SceneContext'
// type Props = {
//   width?: number
//   height?: number
//   getSceneRef?: (canvas: HTMLCanvasElement) => void
// }

const Scene = () => (
  <SceneContextConsumer>
    {sceneContext => sceneContext && (
      <canvas
        width={sceneContext.width || 100}
        height={sceneContext.height || 100}
        ref={(canvas) => {
          if (sceneContext.getSceneRef) {
            sceneContext.getSceneRef(canvas)
          }
        }}
      />
    )}
  </SceneContextConsumer>
)

export default Scene
