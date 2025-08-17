"use client";
import React from "react";
import "./Hero.css";
import { HeroData } from "@/utils/data";
import { motion } from "framer-motion";
const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "4rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });
  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div className="h-start">
      <div className="h-wrapper">
        <div className="container">
          <div className="h-container">
            <div className="h-left">
              <div className="image-row">
                {HeroData.slice(0, 3).map((person, i) => (
                  <div className="h-flower" key={i}>
                    <motion.div
                      initial={"initial"}
                      animate={"animate"}
                      variants={variants(person.delay)}
                      style={{ background: person.bg }}
                      className="h-flower-bg"
                    >
                      <motion.img
                        initial={"initial"}
                        animate={"animate"}
                        variants={imgVariants()}
                        src={person.src}
                        alt={person.src}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="h-right">
                <div className="h-title">
                  <span>myRelaxation</span>
                </div>
                <div className="h-des">
                  50 ways to reduce stress and relax deeply
                  <br />
                  <small>scroll down</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
