import React from 'react'
import NavigatorButton from './NavigatorButton'

const AutonPageBase = ({image}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1%",
          right: "1%",
          width: "20%",
        }}
      >
        <NavigatorButton
          text={"Back"}
          width={"100%"}
          height={"100%"}
          pageToGo="/auton"
        />
      </div>
      <img src={image} style={{height: "90%"}} />
    </div>
  )
}

export default AutonPageBase
