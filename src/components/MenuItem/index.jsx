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

export const MenuItem = ({ name, link, icon, onClick }) => {
  return (
    <motion.li
      className=" mb-5 relative"
      
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink to={link} onClick={onClick} 
      className={({ isActive }) => 
        isActive 
          ? ' text-white bg-gradient-to-br from-teal-600 to-teal-800 transition-all duration-500 ease-in-out rounded-full text-lg font-bold  py-3 px-8 flex mx-5 justify-between group bouncing'  // Classes when active
          : ' text-teal-700 hover:text-white hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-800 transition-all duration-500 ease-in-out rounded-full text-lg mx-5 font-bold flex items-center justify-between py-3 px-8 group bouncing'  // Classes when inactive
      }>
        {name} 
         <motion.span className={({ isActive }) => 
        isActive 
          ? 'text-white tada'  // Classes when active
          : 'group-hover:text-white tada '  // Classes when inactive
      }
          
        >
          <FontAwesomeIcon className="size-5" icon={icon} />
        </motion.span> 
      </NavLink>
    </motion.li>
  );
};
