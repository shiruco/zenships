import React, { forwardRef } from "react"

const VRButton = (props: any, ref: any) => (
  <button ref={ref}>VR mode</button>
)

export default forwardRef(VRButton)
