import * as React from "react";
import { animate, motion, transform } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';
import './index.scss';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const bouncing = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.5
    }
  }
}

export const MenuItemLite = ({ name, link, details, icon, onClick }) => {
  return (
    <motion.li
      className="text-center mb-3 relative"
      
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink to={link} onClick={onClick} 
      className={'text-teal-700 hover:text-white hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-800 transition-all duration-500 flex-wrap ease-in-out rounded-full text-md mx-5 font-bold flex items-center justify-between py-2 px-8 group bouncing'}>
        {onmouseover? details : name}
         <motion.span className=" text-teal-700  group-hover:text-white" 
          
        >
          <FontAwesomeIcon className="size-4" icon={icon} />
        </motion.span> 
        <span className="opacity-0 group-hover:opacity-100 font-normal w-full noAnim  text-xs">{details}</span>
      </NavLink>
    </motion.li>
  );
};
