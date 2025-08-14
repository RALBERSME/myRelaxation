"use client";
import React, { useRef } from "react";
import "./RelaxVideo.css";
import { motion, useScroll, useTransform } from "framer-motion";

const RelaxVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="relv-container">
      <div className="container">
        <motion.video
          ref={ref}
          className="relv-video"
          loop
          muted
          autoPlay
          controls=""
          style={{ scale }}
        >
          <source src="/cat.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default RelaxVideo;
