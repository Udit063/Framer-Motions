import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  // visible: {
  //   // these are keyframes that are use to move element from 1-2-3-4 or else
  //   x: [0, -20, 20, -20, 0],
  //   transition: { delay: 2 },
  // },
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255",
    boxShadow: "0px 0px 8px rgb(255,255,255",
    transition: {
      // yoyo helps to keep an object move over and over again, yoyo: 10 means 10 keyframes and 5 times in totol
      // yoyo: 10,
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
