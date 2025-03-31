import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import SelectSound from "../assets/SelectSound.mp3";
import EnterSound from "../assets/EnterSound.mp3";

const MainLayout = () => {
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const [pageKey, setPageKey] = useState(location.pathname);

  const audioSelectRef = useRef(null);
  const audioEnterRef = useRef(null);
  const counterRef = useRef(counter);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      const allSelectors = document.querySelectorAll('[class^="selector"]');
      if (!allSelectors.length) return;
  
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        setCounter((prev) => (prev - 1 + allSelectors.length) % allSelectors.length);
        audioSelectRef.current.play();
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        setCounter((prev) => (prev + 1) % allSelectors.length);
        audioSelectRef.current.play();
      } else if (event.key === "Enter") {
        const currentElement = allSelectors[counterRef.current];
        if (currentElement) {
          currentElement.click();
          setTimeout(() => {
            audioEnterRef.current.play();
          }, 10);
        }
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  

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
    <div
      key={pageKey}
      style={{ width: "100%", height: "100%" }}
      className={"scanlines"}
    >
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
      <audio ref={audioSelectRef} src={SelectSound} />
      <audio ref={audioEnterRef} src={EnterSound} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
