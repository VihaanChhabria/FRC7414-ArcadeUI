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
      <img
        src={TeamLogo}
        style={{
          width: "30%",
          filter: "drop-shadow(0px 2vw 2vw rgba(255, 255, 255, 0.35))",
        }}
      />
      <div
        style={{
          width: "50%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          gap: "5%",
        }}
      >
        <NavigatorButton text={"About Our Team!"} width={"100%"} height={"33.3%"} pageToGo="/about" selectorNum={0} />
        <NavigatorButton text={"View Our Autons!"} width={"100%"} height={"33.3%"} pageToGo="/auton" selectorNum={1} />
        <NavigatorButton text={"Watch Our Video!"} width={"100%"} height={"33.3%"} pageToGo="/video" selectorNum={2} />
      </div>
    </div>
  );
};

export default HomePage;
