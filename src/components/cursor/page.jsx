"use client";
import React, { useState, useEffect } from "react";
import "./page.css";

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
     const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
     if (elementUnderCursor) {
       elementUnderCursor.style.color = isPointer ? "green" : "red";
     }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 0 : 3;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}vw`,
        height: `${flareSize}vw`,
      }}
    ></div>
  );
}

export default FlareCursor;
