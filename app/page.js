"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/components/Hero/Hero";
import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Eyes from "@/components/Eyes/Eyes";
import Curtains from "@/components/Curtains/Curtains";
import More from "@/components/More/More";
import RelaxVideo from "@/components/RelaxVideo/RelaxVideo";
import MuscleRelaxation from "@/components/MuscleRelaxation/MuscleRelaxation";
import Muscle from "@/components/Muscle/Muscle";
import Miscellaneous from "@/components/Miscellaneous/Miscellaneous";
import Meditation from "@/components/Meditation/Meditation";
import Breathing from "@/components/Breathing/Breathing";
export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <RelaxVideo />
      <Breathing />
      <Eyes />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <Muscle />
      </motion.div>{" "}
      <Curtains />
      <MuscleRelaxation />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        {" "}
        <Meditation />
      </motion.div>{" "}
      <More />
      <Miscellaneous />
      <Footer />
    </motion.div>
  );
}
