import React, { useEffect } from "react"
import * as BABYLON from 'babylonjs'
import Scene from '../atoms/Scene'
import { SceneContextProvider, ISceneContext } from '../../context/SceneContext'

type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement
}

export type SceneProps = {
  engineOptions?: BABYLON.EngineOptions,
  adaptToDeviceRatio?: boolean,
  onSceneMount?: (args: SceneEventArgs) => void,
  width?: number,
  height?: number
}

export default () => {
  const ctx: ISceneContext = {
    width: 500,
    height: 500,
    getSceneRef: (canvas: HTMLCanvasElement) => {
      canvasRef = canvas;
    }
  }

  let canvasRef: HTMLCanvasElement

  useEffect(() => {
    console.log(canvasRef)
  })

  return (
    <SceneContextProvider value={ctx}>
      <Scene />
    </SceneContextProvider>
  )
}
