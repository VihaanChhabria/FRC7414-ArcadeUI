import React from 'react'
import NavigatorButton from '../components/NavigatorButton'
import Video from "../assets/Video.mp4"

const VideoPage = () => {
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
          pageToGo="/"
        />
      </div>
      <video
        src={Video}
        height="90%"
        width="80%"
        controls
        loop
      />
    </div>
  )
}

export default VideoPage
