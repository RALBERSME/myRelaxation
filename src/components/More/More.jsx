import React from "react";
import "./More.css";
import { motion } from "framer-motion";
import { moreVariants1, moreVariants2 } from "@/utils/animations";
import { moreIdeas1, moreIdeas2 } from "@/utils/data";
const More = () => {
  return (
    <div className="mo-wrapper">
      <div className="container">
        <h1>More Ideas:</h1>
        <div className="mo-container">
          <img className="mo-img" src="/mountains.jpg" alt="more" />
          <img className="mo-img2" src="/mountains.jpg" alt="more" />
          <div className="mo-topics">
            <div className="mo-left">
              {moreIdeas1.map((idea, i) => (
                <motion.div
                  variants={moreVariants1(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView="onscreen"
                  key={i}
                >
                  <p>{idea.idea}</p>
                </motion.div>
              ))}
            </div>
            <div className="mo-middle"></div>
            <div className="mo-right">
              {moreIdeas2.map((idea, i) => (
                <motion.div
                  variants={moreVariants2(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView="onscreen"
                  key={i}
                >
                  <p>{idea.idea}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
