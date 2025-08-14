import React from "react";
import "./Eyes.css";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animations";
const Eyes = () => {
  return (
    <div className="e-wrapper">
      <div className="container">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={containerVariants(0.3)}
          className="e-container"
        >
          <h1>Look into my eye, honey!</h1>
          <h2>Simple meditation and breathing exercise.</h2>
          <h3>
            {" "}
            Choose one of the eyes by moving the mouse on the video. There you
            will find the buttons to enlarge the video and to set the speed. Now
            look into the eye and breathe in the rhythm of the eye movements.
          </h3>
          <div className="e-videos">
            <motion.video
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={containerVariants(0.3)}
              className="e-video"
              loop
              muted
              autoPlay
              controls
            >
              <source src="/eye_left.mp4" type="video/mp4" />
            </motion.video>

            <motion.video
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={containerVariants(0.3)}
              className="e-video e-video-right"
              loop
              muted
              autoPlay
              controls
            >
              <source src="/eye_right.mp4" type="video/mp4" />
            </motion.video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Eyes;
