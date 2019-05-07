import { createContext } from 'react'

export interface ISceneContext {
  width?: number,
  height?: number,
  getSceneRef?: Function
}

const ctx = createContext<ISceneContext | null>(null)
export const SceneContextProvider = ctx.Provider;
export const SceneContextConsumer = ctx.Consumer;
