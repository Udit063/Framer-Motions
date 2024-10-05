"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBaseAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        style={{
          height: "150vh",
        }}
      />
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      />
    </>
  );
};

export default ViewBaseAnimations;
