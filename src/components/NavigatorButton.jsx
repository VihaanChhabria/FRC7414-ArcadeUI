import React from "react";
import { useNavigate } from "react-router-dom";

const NavigatorButton = ({
  text,
  width,
  height,
  pageToGo = "/",
  selectorNum,
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: `calc(${width} - 1.5vw)`,
        height: `calc(${height} - 1.5vw)`,
        backgroundColor: "#FF7700",
        border: "1.25vw solid #D35400",
        boxShadow: `
          inset 0 0.25vw 1vw rgba(0, 0, 0, 0.5), 
          0 0.5vw 1vw rgba(0, 0, 0, 0.5),
          0 0 1vw 0.5vw rgba(255, 119, 0, 0.4)` /* Glowing effect */,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "pre-wrap",
      }}
      onClick={() => navigate(pageToGo)}
      // className="pixel-corners"
      className={"selector" + selectorNum}
    >
      <h1
        style={{
          fontFamily: "PressStart2P-Regular, sans-serif",
          fontSize: "35px",
          textAlign: "center",
          color: "white",
          textShadow: "0.2vw 0.2vw 0 rgba(0, 0, 0, 0.7)",
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default NavigatorButton;
