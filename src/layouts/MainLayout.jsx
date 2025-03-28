import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const [pageKey, setPageKey] = useState(location.pathname);

  useEffect(() => {
    setPageKey(location.pathname);
    setCounter(0);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const allSelectors = document.querySelectorAll('[class^="selector"]');
      const maxIndex = allSelectors.length - 1;

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        setCounter(
          (prev) => (prev - 1 + allSelectors.length) % allSelectors.length
        );
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        setCounter((prev) => (prev + 1) % allSelectors.length);
      } else {
        const currentElement = document.querySelector(`.selector${counter}`);
        if (currentElement) {
          currentElement.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [counter]);

  useEffect(() => {
    const allSelectors = document.querySelectorAll('[class^="selector"]');
    allSelectors.forEach((el) => {
      el.classList.remove("blinking");
    });
    const currentElement = document.querySelector(`.selector${counter}`);
    if (currentElement) {
      currentElement.classList.add("blinking");
    }
  }, [counter]);

  return (
    <div key={pageKey} style={{ width: "100%", height: "100%" }} class={"scanlines"}>
      <style>
        {`
          @keyframes blink {
            0% { border-color: blue; }
            50% { border-color: transparent; }
            100% { border-color: blue; }
          }
          .blinking {
            animation: blink 1.5s infinite;
          }
        `}
      </style>
      <Outlet />
    </div>
  );
};

export default MainLayout;
