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
  moreVariants1,
  moreVariants2,
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
              Here is how you can in/exhale
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
          </motion.div>{" "}
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={containerVariants(0.3)}
            className="bre-support2"
          >
            <div>
              <span></span>
              <span className="des b-align b-bg">
                <span className="b-des2">
                  Goodbye Stress 6 - Quick Exercises You Can Do Right Away
                </span>
                <br /> <br />
                How to do it: <br /> Choose a quiet minute in the morning or
                evening—or integrate a mini-session into your workday. Start
                with two exercises, increasing to three or four over the course
                of the week. Jot down a short reflection: Which exercise helped
                the most? What was the ideal time? <br />
                <br />
                Why it works: <br /> Your body responds immediately to calming
                breathing patterns and gentle movements. Short, regular breaks
                prevent the nervous system from overheating. Participation
                creates a sense of control – important when stress dominates
                previous routines.
              </span>
              <br />
            </div>
            <div>
              <motion.span
                className="text b-align b-bg1"
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moreVariants1(0.3)}
              >
                <strong>
                  Breathing: 4-4-6 Breathing <br />
                  (Duration: 2-3 minutes)
                </strong>
                <br />
                <br /> <strong>Why it's helpful: </strong> <br /> One of the
                most effective techniques for calming the nervous system. <br />
                <br />
                <strong>How to do it:</strong>
                <br />
                Place one hand on your stomach and the other on your chest.
                Inhale through your nose, allowing your stomach to rise (4
                seconds). Exhale through your nose, more slowly (6 seconds).
                Then continue breathing in a relaxed manner (4 seconds in, 6
                seconds out, repeat until you feel calm). Tip: Imagine breathing
                through a bubble of calm. When thoughts arise, gently return to
                your breath.
              </motion.span>
            </div>
            <hr className="b-dots" />
            <div>
              <motion.span
                className="text b-align b-bg"
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moreVariants2(0.3)}
              >
                <strong>
                  60-Second Focus <br /> (Duration: 1 minute)
                </strong>
                <br />
                <br /> <strong>Why it's helpful:</strong>
                <br /> Trains counter-control against the carousel of thoughts.
                <br />
                <br />
                <strong>How to do it:</strong>
                <br /> Choose an object in the room (e.g., a pen). Observe it
                attentively for 60 seconds – all the details, colors, and
                textures. If your mind wanders, gently bring your attention
                back. Tip: Afterwards, write down something positive that caught
                your eye.
              </motion.span>
            </div>
            <hr className="b-dots" />
            <div>
              <motion.span
                className="text b-align b-bg1"
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moreVariants1(0.3)}
              >
                <strong>
                  Shoulder and Neck Relaxation <br />
                  (Duration: 2 minutes){" "}
                </strong>
                <br />
                <br />
                <strong> Why it's helpful:</strong>
                <br /> Tense muscles send stress signals to the brain. <br />
                <br />
                <strong>How to do it:</strong>
                <br />
                Pull your shoulders toward your ears, hold for 3 seconds, and
                slowly release. Repeat 5-6 times. Circle your shoulders backward
                10 times, then forward 10 times. Gently roll your head from side
                to side, 5-6 times per side. Tip: Breathe deeply during the
                exercises and feel the relaxation in areas of tension.
              </motion.span>
            </div>
            <hr className="b-dots" />
            <div>
              <motion.span
                className="text b-align b-bg"
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moreVariants2(0.3)}
              >
                <strong>
                  {" "}
                  4-Minute Meditation for Everyday Life <br /> (Duration: 4
                  minutes)
                </strong>{" "}
                <br /> <br />
                <strong>Why it's helpful:</strong>
                <br /> Reduces stress reactions and increases mindfulness.{" "}
                <br /> <br />
                <strong>How to do it:</strong> <br />
                Sit comfortably, keep your back straight. Close your eyes, focus
                on your breathing. When thoughts arise, briefly acknowledge them
                and let them pass. After 4 minutes, slowly open your eyes. Note:
                If you're a beginner, start with 2 minutes and work your way up.
              </motion.span>
            </div>
            <hr className="b-dots" />
            <div>
              <motion.span
                className="text b-align b-bg1"
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moreVariants1(0.3)}
              >
                <strong>
                  Mini Body Scan <br />
                  (Duration: 3–4 minutes)
                </strong>
                <br /> <br />
                <strong>Why it's helpful:</strong> <br />
                Provides immediate feedback to your nervous system. <br />{" "}
                <br />
                <strong>How to do it: </strong>
                <br />
                Lie down comfortably or sit in a relaxed position. Focus your
                attention on areas of tension, one at a time, from your toes to
                your head. Feel each area relax as you exhale with your breath.
                Tip: Afterward, make a quick note of which areas relaxed first.
              </motion.span>
            </div>
            <hr className="b-dots" />
            <div>
              <motion.span
                className="text b-align b-bg"
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={moreVariants2(0.3)}
              >
                <strong>
                  Movement in Space <br /> (Duration: 2–3 minutes){" "}
                </strong>
                <br /> <br /> <strong>Why it's helpful:</strong> <br />
                Movement releases endorphins and breaks stress cycles. <br />
                <strong>
                  <br />
                  How to do it:
                </strong>
                <br /> Stand up, lightly hop on the spot twice, or do 10 jumping
                jacks. Then do 20 seconds of slow hamstring stretches. Finally,
                take 10 deep breaths while mobilizing. Note: If you feel unsure,
                adjust the intensity.
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Breathing;
