import { createContext } from 'react'

export interface ISceneContext {
  width?: number,
  height?: number,
  getSceneRef?: Function
}

const ctxt = createContext<ISceneContext | null>(null)
export const SceneContextProvider = ctxt.Provider;
export const SceneContextConsumer = ctxt.Consumer;
