import React from "react";
import { useNavigate } from "react-router-dom";

const NavigatorButton = ({ text, width, height, pageToGo = "/" }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: `calc(${width} - 1.5vw)`,
        height: `calc(${height} - 1.5vw)`,
        backgroundColor: "#FF7700",
        border: "0.75vw solid #D35400",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "pre-wrap",
      }}
      onClick={() => navigate(pageToGo)}
    >
      <h1
        style={{
          fontFamily: "PressStart2P-Regular, sans-serif",
          fontSize: "35px",
          textAlign: "center",
          color: "black",
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default NavigatorButton;
