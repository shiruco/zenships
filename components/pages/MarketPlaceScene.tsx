import React, { useEffect, useRef } from "react"
import * as BABYLON from 'babylonjs'
import VRButton from '../atoms/VRButton'
import BabylonScene from '../molecules/BabylonScene'
import { BabylonSceneContext, IBabylonSceneContext } from '../../context/SceneContext'

const MarketPlaceScene = () => {
  const vrBtnRef = useRef(null)

  const create: Function = (canvas: HTMLCanvasElement, engine: BABYLON.Engine) => {
    let vrHelper: BABYLON.VRExperienceHelper
    const scene = new BABYLON.Scene(engine)
    const light = new BABYLON.DirectionalLight(
      "light",
      new BABYLON.Vector3(0, -0.5, 1.0),
      scene
    )
    light.position = new BABYLON.Vector3(0, 5, -2)
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2,
      5,
      BABYLON.Vector3.Zero(),
      scene
    )
    camera.attachControl(canvas, true)
    camera.inputs.attached.mousewheel.detachControl(canvas)
    const dome = new BABYLON.PhotoDome(
      "dome",
      require("../../static/sample2.jpg"),
      {
        resolution: 32,
        size: 1000
      },
      scene
    )
    dome.rotation.y = 1.4
    const anchor = new BABYLON.TransformNode("")
    // GUI
    const GUI = require("babylonjs-gui")
    // Create the 3D UI manager
    const manager = new GUI.GUI3DManager(scene)
    const panel = new GUI.SpherePanel()
    panel.margin = 0.1
    manager.addControl(panel)
    panel.linkToTransformNode(anchor)
    panel.position.z = -6.5
    const addButton = function() {
      var button = new GUI.HolographicButton("orientation")
      panel.addControl(button)
      button.text = "Image #" + panel.children.length
    }
    panel.blockLayout = true
    for (let index = 0; index < 10; index++) {
      addButton()
    }
    panel.blockLayout = false
    scene.executeOnceBeforeRender(() => {
      engine.displayLoadingUI()
    })
    scene.executeWhenReady(() => {
      engine.hideLoadingUI()
      vrHelper = scene.createDefaultVRExperience({
        useCustomVRButton: true
      })
      vrHelper.enableInteractions()
      vrHelper.webVROptions.customVRButton = vrBtnRef.current!
    })
    // listeners
    const vrBtnElm = vrBtnRef.current! as HTMLButtonElement
    vrBtnElm.addEventListener("click", () => {
      vrHelper.enterVR()
    })
    return scene
  }

  const ctx: IBabylonSceneContext = {
    createScene: create
  }

  useEffect(() => {

  })

  return (
    <>
      <BabylonSceneContext.Provider value={ctx}>
        <BabylonScene />
      </BabylonSceneContext.Provider>
      <VRButton ref={vrBtnRef}/>
    </>
  )
}

export default React.memo(MarketPlaceScene)
