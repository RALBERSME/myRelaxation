"use client";
import React from "react";
import "./Muscle.css";
import { muscFeatures } from "@/utils/data";
import { motion } from "framer-motion";
import {
  tagVariants,
  titleVariants,
  desVariants,
  containerVariants,
} from "@/utils/animations";
const Muscle = () => {
  return (
    <div className="musc-wrapper">
      <div className="container">
        <div className="musc-container">
          <div className="musc-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="tag"
            >
              Muscle relaxation
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="title"
            >
              is important for relaxation because it releases tension,
            </motion.span>
            <motion.span
              variants={desVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="text"
            >
              reduces stress reactions, and puts the body and mind into a
              restful state. Click on the links under the cards to get active.
            </motion.span>
          </div>
          <div className="musc-features">
            {muscFeatures.map((feature, i) => (
              <motion.div
                variants={containerVariants((i + 1) * 0.1)}
                initial="offscreen"
                whileInView="onscreen"
                key={i}
                className="musc-feature"
              >
                <img
                  width={128}
                  height={128}
                  src={feature.icon}
                  alt="feature"
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
                <br />
              </motion.div>
            ))}{" "}
          </div>{" "}
          <div className="musc-links">
            <a
              href="https://www.youtube.com/watch?v=ihO02wUzgkc"
              target="_blank"
              className="musc-link"
            >
              click here to practice Progressive Muscle Relaxation
            </a>{" "}
            <a
              href="https://www.youtube.com/watch?v=t3uK039WdaM"
              target="_blank"
              className="musc-link"
            >
              click here for Jacobson Relaxing
            </a>{" "}
            <a
              href="https://www.youtube.com/watch?v=CyKhfUdOEgs"
              target="_blank"
              className="musc-link"
            >
              click here for Mindfulness Meditation Body Scan
            </a>
            <a
              href="https://www.youtube.com/watch?v=m3-O7gPsQK0"
              target="_blank"
              className="musc-link"
            >
              click here for A JAPANESE METHOD TO RELAX IN 5 MINUTES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muscle;
