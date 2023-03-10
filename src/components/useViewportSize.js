import { useState, useEffect } from "react";

function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateViewportSize() {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", updateViewportSize);
    updateViewportSize();

    return () => window.removeEventListener("resize", updateViewportSize);
  }, []);

  return viewportSize;
}

function ViewportSizeDisplay() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { width, height } = useViewportSize();

  function handleMouseMove(event) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <p>
        Viewport size: {width} x {height}
      </p>
      <p>
        Mouse position: {mousePosition.x} x {mousePosition.y}
      </p>
    </div>
  );
}
