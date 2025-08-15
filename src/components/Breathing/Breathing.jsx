"use client";
import React from "react";
import "./Breathing.css";
import { features } from "@/utils/data";
import { motion } from "framer-motion";
import {
  tagVariants,
  titleVariants,
  desVariants,
  containerVariants,
} from "@/utils/animations";
const Breathing = () => {
  return (
    <div className="bre-wrapper">
      <div className="container">
        <div className="bre-container">
          <div className="bre-head">
            <motion.span
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Breathing techniques
            </motion.span>
            <motion.span
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              calm the nervous system through controlled breathing, leading to
              deeper relaxation.
            </motion.span>
            <motion.span
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              Here is how you can inhale and exhale
            </motion.span>
          </div>
          <div className="bre-blocks">
            <div className="bre-block">
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Breathing Techniques
              </motion.span>
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                to Calm the Nervous System
              </motion.span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <img
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                      className="bre-icon"
                    />
                    <span>{feature.title}</span>
                    <br /> *** <br />
                    <span>{feature.des}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bre-block">
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Breathing Techniques
              </motion.span>
              <motion.span
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                for Focus and Stress Reduction
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <img
                      className="bre-icon"
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span> <br /> *** <br />
                    <span>{feature.des}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerVariants(0.3)}
            className="bre-support"
          >
            <div>
              <span className="sec-title">Get active</span>
              <span className="des">and start an exercise:</span>
              <br />
            </div>
            <div>
              <span className="text">
                <a
                  className="bre-a"
                  href="https://www.youtube.com/watch?v=LiUnFJ8P4gM"
                  target="_blank"
                >
                  4-7-8 Calm Breathing Exercise | 10 Minutes
                </a>
              </span>
              <span className="text">
                <a
                  className="bre-a"
                  href="https://www.youtube.com/watch?v=FJJazKtH_9I"
                  target="_blank"
                >
                  Box Breathing Exercise | TAKE A DEEP BREATH
                </a>
              </span>
              <span className="text">
                <a
                  className="bre-a"
                  href="https://www.youtube.com/watch?v=395ZloN4Rr8"
                  target="_blank"
                >
                  3 most effective Pranayamas – deep breathing exercises
                </a>
              </span>
              <span className="text">
                <a
                  className="bre-a"
                  href="https://www.youtube.com/watch?v=mVchZ8D15Ec"
                  target="_blank"
                >
                  Complete Breathwork/Pranayama session - Michaël Bijker
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Breathing;
