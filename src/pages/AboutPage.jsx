import React from "react";
import RobotImage from "../assets/RobotImage.png";
import NavigatorButton from "../components/NavigatorButton";

const AboutPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5%",
        position: "relative", // Added for positioning the top-right div
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1%",
          right: "1%",
          width: "20%"
        }}
      >
        <NavigatorButton text={"Back"} width={"100%"} height={"100%"} pageToGo="/" selectorNum={0} />
      </div>
      <div
        style={{
          width: "50%",
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "white",
            margin: 0,
            padding: 0,
            fontFamily: "PressStart2P-Regular, sans-serif",
          }}
        >
          Meet Frogger!
        </h1>
        <img
          src={RobotImage}
          style={{
            height: "75%",
            margin: 0,
            padding: 0,
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          width: "60%",
          color: "white",
          fontFamily: "PressStart2P-Regular, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "20px", lineHeight: "10px" }}>
          Team Information
        </h1>
        <ul style={{ fontSize: "15px", lineHeight: "20px" }}>
          <li>Team Number: 7414</li>
          <li>Team Name: RetroRobotics</li>
          <li>Location: Collegeville, Pennsylvania</li>
          <li>Years Competing: 7</li>
        </ul>
        <h1 style={{ fontSize: "20px" }}>Robot Specifications</h1>
        <ul style={{ fontSize: "15px", lineHeight: "20px" }}>
          <li>Robot Name: Frogger</li>
          <li>Weight: 115 lbs</li>
          <li>Drivetrain: Swerve</li>
          <li>Coral Pick Up From Source</li>
          <li>Coral Place On L2 & L3</li>
          <li>Algae Removal From Reef</li>
          <li>Deep Climb</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
