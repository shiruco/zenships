import React, { useEffect, useContext } from "react"
import * as BABYLON from 'babylonjs'
import Scene from '../atoms/Scene'
import {
  SceneContext,
  BabylonSceneContext,
  ISceneContext
} from '../../context/SceneContext'

const BabylonScene =  () => {
  let canvasRef: HTMLCanvasElement
  let scene: BABYLON.Scene
  let engine: BABYLON.Engine

  const babylonSceneCtx = useContext(BabylonSceneContext)
  let createScene = babylonSceneCtx.createScene

  const ctx: ISceneContext = {
    width: 500,
    height: 500,
    getSceneRef: (canvas: HTMLCanvasElement) => {
      canvasRef = canvas
    }
  }

  useEffect(() => {
    engine = new BABYLON.Engine(canvasRef, true, {
      preserveDrawingBuffer: true,
      stencil: true
    })

    scene = createScene(canvasRef, engine)

    engine.runRenderLoop(function() {
      if (scene) {
        scene.render()
      }
    })
  })

  return (
    <SceneContext.Provider value={ctx}>
      <Scene />
    </SceneContext.Provider>
  )
}

export default BabylonScene
