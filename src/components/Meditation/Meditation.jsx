"use client";
import React from "react";
import "./Meditation.css";
import { meditationData } from "@/utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/utils/animations";
const Meditation = () => {
  return (
    <div className="med-wrapper">
      <div className="container">
        <div className="med-container">
          <div className="med-left">
            <div className="head">
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="tag"
              >
                The Power of Meditation
              </motion.span>
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="title"
              >
                Promotes calmness, centering, and a clear,
                <br /> focused awareness of body and mind.
              </motion.span>
            </div>
            <div className="med-features">
              {meditationData.map((feature, i) => (
                <motion.div
                  variants={containerVariants(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView="onscreen"
                  className="med-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="med-right">
            <motion.img
              variants={containerVariants(0.5)}
              initial="offscreen"
              whileInView="onscreen"
              src="/mom.png"
              alt="persons"
            />
          </div>
          <div className="med-links">
            <p>Ready for exercises? Here we go:</p>
            <a
              href="https://www.youtube.com/watch?v=n_ce66a9MV0"
              target="_blank"
              className="med-link"
            >
              click here for Yoga Nidra | Guided Meditation to Relax, Rejuvenate
              & Reform
            </a>{" "}
            <a
              href="https://www.youtube.com/watch?v=8vWfPVC-Y4s"
              target="_blank"
              className="med-link"
            >
              click here for 20 Minute Guided Meditation to Release Toxic Energy
            </a>{" "}
            <a
              href="https://www.youtube.com/watch?v=uTN29kj7e-w"
              target="_blank"
              className="med-link"
            >
              click here for 10 MIN Guided Meditation To Clear Your Mind & Start
              New Positive Habits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
