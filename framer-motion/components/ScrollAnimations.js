"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  // it takes 3 arguments - the scroll bar, then at what position to go to what position and corresponding colors on that positions
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245", "rgb(1,245, 13"]
    // only rgba colors will work not normal red blue
  );
  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          // background: "blue",
          background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      />
      <div style={{ maxWidth: "700px", margin: "auto", padding: "1.2rem" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          sequi, ipsum inventore laboriosam praesentium laborum autem vitae
          optio neque tenetur dolorum nisi est saepe odit assumenda magni
          molestiae aliquid laudantium voluptatibus! Vitae, illum quidem?
          Consectetur repudiandae laudantium nam, sapiente molestias accusantium
          harum aliquid officia eaque nostrum quidem quasi dolorem libero.
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimations;
