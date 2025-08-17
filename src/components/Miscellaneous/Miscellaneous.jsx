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
                src="https://www.youtube.com/embed/ZntU_1TL8sc"
                title="Silva Mind Methode - deutsche Kurzerklärung"
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
                src="https://www.youtube.com/embed/h_4GDXWBPCk"
                title="20-minütige Silva-Zentrierungsübung mit Vishen Lakhiani"
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
                src="https://www.youtube.com/embed/P5sjAlnUMJs?list=PLZg-VN0x6BOw4vE_m4loT4Qs-VFPP2KHm"
                title="REDUCING STRESS AND PHYSICAL ILLNESS, The Book of Letting Go David R. Hawkins"
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
                src="https://www.youtube.com/embed/-kb9SdMQmwA"
                title="Loslassen Technik David R. Hawkins Meditation | Übung 1"
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
            <br />
            <div className="mis-videos">
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="mis-iframe"
              >
                <h2>Book tip</h2>
                <h3>
                  When the Body Says No <br /> The Cost of Hidden Stress <br />
                  by Gabor Maté{" "}
                </h3>
                <p className="mis-book">
                  With compassion, warmth and empathy, Dr Gabor Maté draws on
                  deep scientific research and his acclaimed clinical work to
                  provide the answers to critical questions about the mind-body
                  link - and illuminates the role that stress and our emotional
                  makeup play in an array of common diseases. When the Body Says
                  No: - Explores the role of the mind-body link in conditions
                  and diseases such as arthritis, cancer, diabetes, heart
                  disease, irritable bowel syndrome and multiple sclerosis. -
                  Shares dozens of enlightening case studies and personal and
                  moving stories, including those of people such as Lou Gehrig
                  (ALS), Betty Ford (breast cancer), Ronald Reagan
                  (Alzheimer's), Gilda Radner (ovarian cancer) and Lance
                  Armstrong (testicular cancer) - Reveals 'The Seven A's of
                  Healing': principles in healing and the prevention of illness
                  from hidden stress.
                  <br /> <br />{" "}
                </p>
                <p>ISBN:9781785042225</p>
              </motion.div>{" "}
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="mis-iframe"
              >
                <h2>Buchtipp</h2>
                <h3>
                  Wenn der Körper nein sagt <br /> Wie verborgener Stress krank
                  macht <br />
                  von Gabor Maté{" "}
                </h3>
                <p className="mis-book">
                  Gibt es einen Zusammenhang zwischen der Fähigkeit, Gefühle
                  auszudrücken, und Alzheimer? Gibt es so etwas wie eine
                  Krebspersönlichkeit? Das Buch stützt sich auf
                  wissenschaftliche Forschungsergebnisse. Es gibt Antworten auf
                  diese und andere wichtige Fragen zur Bedeutung der
                  Leib-Seele-Einheit in Bezug auf Krankheit und Gesundheit sowie
                  auf die Rolle, die Stress, Stressbewältigung und die
                  individuelle emotionale Verfassung bei vielen häufig
                  vorkommenden Krankheiten spielen (wie Arthritis, Krebs,
                  Diabetes, Herzerkrankungen, Alzheimer, Reizdarmsyndrom und
                  Multipler Sklerose). Mit zahlreichen Fallstudien und
                  Geschichten von bekannten Persönlichkeiten wie Betty Ford
                  (Brustkrebs), Ronald Reagan (Alzheimer) und Lance Armstrong
                  (Hodenkrebs). Mit 7 Prinzipien zu Prävention und Heilung von
                  Krankheitsbildern.
                  <br /> <br />
                </p>
                <p>ISBN:9783962571740</p>{" "}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
