import React from "react";
import TeamLogo from "../assets/TeamLogo.png";
import NavigatorButton from "../components/NavigatorButton";

const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5%",
      }}
    >
      <img src={TeamLogo} style={{width: "30%"}} />
      <div
        style={{
          width: "50%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          gap: "5%"
        }}
      >
        <NavigatorButton text={"About Our Team!"} width={"100%"} height={"33.3%"} pageToGo="/about" />
        <NavigatorButton text={"View Our Autons!"} width={"100%"} height={"33.3%"} pageToGo="/auton" />
        <NavigatorButton text={"Watch Our Video!"} width={"100%"} height={"33.3%"} pageToGo="/video" />
      </div>
    </div>
  );
};

export default HomePage;
