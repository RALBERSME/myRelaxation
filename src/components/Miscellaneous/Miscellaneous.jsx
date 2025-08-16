import React from "react";
import "./Miscellaneous.css";
import SlickSlider from "./SlickSlider";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animations";
const Miscellaneous = () => {
  return (
    <div className="mis-wrapper">
      <div className="container">
        <div className="mis-container">
          <div className="mis-head">
            <span className="tag">Miscellaneous</span>
            <span className="title">
              There are countless other ways to relax.
            </span>
            <span className="des">
              You might be interested in this
              <br />
            </span>
            <span className="des">
              <small className="mis-small mis-show1">
                click on the dots under the cards to scroll through the tips
              </small>
              <small className="mis-small mis-show2">
                just push the cards with your finger
              </small>
            </span>
          </div>
        </div>
        <SlickSlider />
        <div>
          <div className="mis-final">
            <h2>One last thought: Scientific findings on stress</h2>
            <br />
            <div className="mis-videos">
              <motion.iframe
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="mis-iframe"
                src="https://www.youtube.com/embed/ahU2FP_b9OQ"
                title="Stressed - A Documentary Film | 4K OFFICIAL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></motion.iframe>{" "}
              <motion.iframe
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="mis-iframe"
                src="https://www.youtube.com/embed/pL02HRFk2vo"
                title="Non-Sleep Deep Rest (NSDR): A Science Supported Tool for De-Stress and Relaxation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></motion.iframe>
            </div>
            <br />
            <div className="mis-videos">
              <motion.iframe
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="mis-iframe"
                src="https://www.youtube.com/embed/ajo3xkhTbfo"
                title="Dr. Gabor Maté on The Connection Between Stress and Disease"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></motion.iframe>{" "}
              <motion.iframe
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="mis-iframe"
                src="https://www.youtube.com/embed/RKECKQWVlO4"
                title="NEUROSCIENTIST: You Will NEVER Be Stressed Again | Andrew Huberman"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></motion.iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
