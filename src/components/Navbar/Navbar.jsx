"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      <div className="container">
        <div className="n-container">
          <div className="n-logo">
            <span>myRelaxation</span>
          </div>
          <div className="n-right">
            <div className="n-menu">
              <Link to="bre-wrapper" spy={true} smooth={true}>
                <span>Breathing</span>
              </Link>
              <Link to="musc-wrapper" spy={true} smooth={true} offset={100}>
                <span>Muscle relaxation</span>
              </Link>
              <Link to="med-wrapper" spy={true} smooth={true}>
                <span>Meditation</span>
              </Link>
              <Link to="mis-wrapper" spy={true} smooth={true} offset={100}>
                <span>Miscellaneous</span>
              </Link>
            </div>
            <div className="fund-button">
              <a
                className="n-a"
                href="https://tigertabby.github.io/BeautifulWorld/"
                target="_blank"
              >
                Relaxation Trip
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* mobile Version */}
      <div className="nm-container">
        <span>myRelaxation</span>
        {!mobileMenuOpen ? (
          <BiMenuAltRight onClick={() => setMobileMenuOpen(true)} size={30} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpen(false)} />
        )}

        {/* mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpen && "translateX(0%)" }}
        >
          <Link
            className="n-cursor"
            onClick={() => setMobileMenuOpen(false)}
            to="bre-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Breathing</span>
          </Link>

          <Link
            className="n-cursor"
            onClick={() => setMobileMenuOpen(false)}
            to="musc-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Muscle relaxation</span>
          </Link>
          <Link
            className="n-cursor"
            onClick={() => setMobileMenuOpen(false)}
            to="med-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Meditation</span>
          </Link>
          <Link
            className="n-cursor"
            onClick={() => setMobileMenuOpen(false)}
            to="mis-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Miscellaneous</span>
          </Link>

          {/* <a
            className="n-a2"
            href="https://tigertabby.github.io/BeautifulWorld/"
            target="_blank"
          >
            Relaxation Trip
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
