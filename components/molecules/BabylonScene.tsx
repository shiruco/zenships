import React, { useEffect, useContext, useRef } from "react"
import * as BABYLON from 'babylonjs'
import Scene from '../atoms/Scene'
import {
  SceneContext,
  BabylonSceneContext,
  ISceneContext
} from '../../context/SceneContext'

const BabylonScene =  () => {
  let scene: BABYLON.Scene
  let engine: BABYLON.Engine

  const babylonSceneCtx = useContext(BabylonSceneContext)
  let createScene = babylonSceneCtx.createScene

  const canvasRef = useRef(null)

  const ctx: ISceneContext = {
    width: 800,
    height: 500
  }

  useEffect(() => {
    const canvas = canvasRef.current
    engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    })

    scene = createScene(canvas, engine)

    engine.runRenderLoop(function() {
      if (scene) {
        scene.render()
      }
    })
  })

  return (
    <SceneContext.Provider value={ctx}>
      <Scene ref={canvasRef} />
    </SceneContext.Provider>
  )
}

export default BabylonScene
