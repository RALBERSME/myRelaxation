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
            <h2>Time for practice:</h2>

            <motion.iframe
              variants={containerVariants(0.3)}
              initial="offscreen"
              whileInView="onscreen"
              className="musc-iframe"
              src="https://www.youtube.com/embed/ihO02wUzgkc"
              title="Progressive Muscle Relaxation Training"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
            <motion.iframe
              variants={containerVariants(0.3)}
              initial="offscreen"
              whileInView="onscreen"
              className="musc-iframe"
              src="https://www.youtube.com/embed/t3uK039WdaM"
              title="Jacobson Relaxing - English version"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
            <motion.iframe
              variants={containerVariants(0.3)}
              initial="offscreen"
              whileInView="onscreen"
              className="musc-iframe"
              src="https://www.youtube.com/embed/CyKhfUdOEgs"
              title="Mindfulness Meditation   Body Scan"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
          </div>
          <br />
          <div className="musc-links">
            <motion.iframe
              variants={containerVariants(0.3)}
              initial="offscreen"
              whileInView="onscreen"
              className="musc-iframe musc-lgOnly"
              src="https://www.youtube.com/embed/m3-O7gPsQK0"
              title="A JAPANESE METHOD TO RELAX IN 5 MINUTES"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
            <motion.iframe
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={containerVariants(0.3)}
              className="musc-iframe musc-lgOnly"
              src="https://www.youtube.com/embed/rEHEkLXuCIo"
              title="Guided Hypnosis Meditation for Deep Relaxation with Joseph Drumheller"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
            <motion.iframe
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={containerVariants(0.3)}
              className="musc-iframe musc-lgOnly"
              src="https://www.youtube.com/embed/pAv9E6bYV0k?list=PLE8s07Mvg50v7VbgHBU2J4T8ppB4ra2dK"
              title="Paul Mckenna Official | Deep Relaxation Technique"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
          </div>
          <br />
          <div className="musc-links">
            <motion.iframe
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={containerVariants(0.3)}
              className="musc-iframe musc-lgOnly"
              src="https://www.youtube.com/embed/CJmL99eNzPM"
              title="Yoga zum Stressabbau: 20-minütige Übung zum Zurücksetzen"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
            <motion.iframe
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={containerVariants(0.3)}
              className="musc-iframe musc-lgOnly"
              src="https://www.youtube.com/embed/75PUjUsGsQQ"
              title="A meditation expert shows her stress relief &#39;tapping&#39; exercise which you can do in 2 minutes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
            <motion.iframe
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={containerVariants(0.3)}
              className="musc-iframe musc-lgOnly"
              src="https://www.youtube.com/embed/_QCtzOb8_XA"
              title="Deep Relaxation Hypnosis for Stress Relief, Anxiety Relief, and Instant Calm (Science-Based)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muscle;
