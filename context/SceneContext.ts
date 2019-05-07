import { createContext } from 'react'

export interface ISceneContext {
  width?: number,
  height?: number,
  createScene?: Function
}

export interface IBabylonSceneContext {
  createScene: Function
}

const sceneContextInitialValue = {
  width: 0,
  height: 0,
  createScene: () => {}
}
export const SceneContext = createContext<ISceneContext>(sceneContextInitialValue)

const babylonSceneContextInitialValue = {
  createScene: () => {}
}
export const BabylonSceneContext = createContext<IBabylonSceneContext>(babylonSceneContextInitialValue)
