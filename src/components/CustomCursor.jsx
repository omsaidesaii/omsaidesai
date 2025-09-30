// CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [borderColor, setBorderColor] = useState("white");

  // Track mouse position
  useEffect(() => {
    const moveCursor = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  // Animate cursor with delay
  useEffect(() => {
    const animate = () => {
      setCursorPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15, // controls delay speed
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  // Detect background brightness for color
  useEffect(() => {
    const updateColor = () => {
      const bgColor = window.getComputedStyle(document.body).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      if (!rgb) return;
      const brightness = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      setBorderColor(brightness > 128 ? "black" : "white");
    };

    updateColor(); // initial check

    const observer = new MutationObserver(updateColor);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: cursorPos.y,
        left: cursorPos.x,
        width: "20px",
        height: "20px",
        border: `2px solid ${borderColor}`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "border-color 0.3s",
      }}
    />
  );
};

export default CustomCursor;
