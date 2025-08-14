"use client";
import React from "react";
import "./MuscleRelaxation.css";
import { muscleRelFeatures } from "@/utils/data";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/utils/animations";
const MuscleRelaxation = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div className="musrel-wrapper">
      <div className="container">
        <div className="musrel-container">
          <div className="musrel-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="tag"
            >
              Further muscle relaxation
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="title"
            >
              Here are three more methods of muscle relaxation
            </motion.span>
          </div>
          <div className="musrel-features">
            {muscleRelFeatures.map((feature, i) => (
              <motion.div
                variants={featureVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="musrel-feature"
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="detail"
                >
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                <div className="icon">
                  <img
                    className="musrel-icon"
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt="feature"
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>{" "}
          <div className="musrel-links">
            <p>Ready for exercises? Here we go:</p>
            <a
              href="https://www.youtube.com/watch?v=wTT_xcLPCXc"
              target="_blank"
              className="musrel-link"
            >
              click here for Full Self Massage for Better Sleep and Pain Relief
            </a>{" "}
            <a
              href="https://www.youtube.com/watch?v=ViykneTyMvI"
              target="_blank"
              className="musrel-link"
            >
              click here for Self-healing and cleansing lymphatic drainage
              massage – Dr. Alan Mandell, D.C.
            </a>{" "}
            <a
              href="https://www.youtube.com/watch?v=fUTvtP0Uho4"
              target="_blank"
              className="musrel-link"
            >
              click here for The Benefits of a Hot Bath
            </a>
            <a
              href="https://www.youtube.com/watch?v=NJAaQyTBXyM&t=393s"
              target="_blank"
              className="musrel-link"
            >
              click here for Guided Meditation in the Bath - 18 minutes -
              Mindfulness Practice
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuscleRelaxation;
