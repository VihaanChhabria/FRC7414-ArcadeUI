import React from "react";
import NavigatorButton from "../components/NavigatorButton";

const AutonPage = () => {
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
          selectorNum={0}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          gap: "1%",
          margin: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavigatorButton
          text={"Processor Side"}
          width={"100%"}
          height={"33.3%"}
          pageToGo="/auton/processor"
          selectorNum={1}
        />
        <NavigatorButton
          text={"Non-Processor Side"}
          width={"100%"}
          height={"33.3%"}
          pageToGo="/auton/nonprocessor"
          selectorNum={2}
        />
        <NavigatorButton
          text={"Center"}
          width={"100%"}
          height={"33.3%"}
          pageToGo="/auton/center"
          selectorNum={3}
        />
      </div>
    </div>
  );
};

export default AutonPage;
