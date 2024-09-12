import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="absolute right-0 top-[4px] p-[27px]">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        className="stroke-teal-700"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <Path
        className="stroke-teal-700"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.1 }}
      />
      <Path
        className="stroke-teal-700"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);
