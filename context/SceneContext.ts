import { createContext } from 'react'

export interface ISceneContext {
  width?: number,
  height?: number,
  getSceneRef?: Function,
  createScene?: Function
}

export interface IBabylonSceneContext {
  createScene: Function
}

const sceneContextInitialValue = {
  width: 0,
  height: 0,
  getSceneRef: () => {},
  createScene: () => {}
}
export const SceneContext = createContext<ISceneContext>(sceneContextInitialValue)

const babylonSceneContextInitialValue = {
  createScene: () => {}
}
export const BabylonSceneContext = createContext<IBabylonSceneContext>(babylonSceneContextInitialValue)
