import { useState, useEffect, useRef, useCallback } from "react";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../MenuToggle";
import { Navigation } from "../Navigation";
import { NavigationLite } from "../NavigationLite";
import { useDimensions } from "../useDimension";
import './index.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 240px 240px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }

  }

};
const darkOverlay = {
  open: {
    opacity: 0.5,
    pointerEvents: "auto",
    transition: {
      duration: 0.5,
    }
  },
  closed: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      duration: 0.5,
      delay: 0.5, // Ensures that the overlay fades out after the sidebar starts closing
    }
  }
};

const Navbar = ({ navItems }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <>
      <motion.div
        onClick={() => toggleOpen()}
        className="fixed top-0 left-0 w-full h-full z-10 bg-black"
        
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={darkOverlay}
      />
      <motion.nav
        style={{

          width: isOpen ? "300px" : "80px",
          height: isOpen ? "100%" : "80px",
          overflowY: isOpen ? "auto" : "hidden",
          transition: isOpen ? "0s " : "0s 1.2s", 
        }}
        initial={false} 
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation toggleOpen={toggleOpen} />
{/*         <NavigationLite toggleOpen={toggleOpen}  />
 */}        <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
      </motion.nav>
    </>
  );
}


export default Navbar;
