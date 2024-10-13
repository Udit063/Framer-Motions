"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      {/* layout automatically moves it from wherever it is at first point to another location */}
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Show/Hide
      </motion.button>
      {/* wrap under animate presence to use the exit part to unmount component */}
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              //   where where you want to move it
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              //   times should be of same width of key frame and shows at what time interval my position should be
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{ width: 150, height: 150, background: "black" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
