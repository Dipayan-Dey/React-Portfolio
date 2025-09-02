import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorX = useSpring(0, { stiffness: 200, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 200, damping: 25 });
  const tailX = useSpring(0, { stiffness: 100, damping: 20 });
  const tailY = useSpring(0, { stiffness: 100, damping: 20 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveMouse);

    const hoverTargets = document.querySelectorAll("button, a");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  useEffect(() => {
    cursorX.set(mousePos.x);
    cursorY.set(mousePos.y);
    tailX.set(mousePos.x);
    tailY.set(mousePos.y);
  }, [mousePos, cursorX, cursorY, tailX, tailY]);

  return (
    <>
      {/* Main cursor */}
     <motion.div
  style={{
    translateX: cursorX,
    translateY: cursorY,
  }}
  className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border-2 border-orange-600 shadow-lg"
  animate={{
    width: hovered ? 40 : 30,  // smaller
    height: hovered ? 40 : 30, // smaller
    opacity: hovered ? 0.9 : 0.8,
  }}
  transition={{ type: "spring", stiffness: 500, damping: 30 }}
/>


      {/* Tail cursor */}
      <motion.div
        style={{
          translateX: tailX,
          translateY: tailY,
        }}
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full bg-orange-400/40"
        animate={{
          width: hovered ? 60 : 30,  // larger
          height: hovered ? 60 : 30, // larger
          opacity: hovered ? 0.5 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      />
    </>
  );
}
