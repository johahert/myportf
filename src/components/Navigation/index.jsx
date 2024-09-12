import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { MenuItemLite } from "../MenuItemLite";
import { faHome, faUser, faBoxOpen, faPhone} from "@fortawesome/free-solid-svg-icons";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 }
  }
};

const navItems = [
  { link: '/', name: 'Home', icon: faHome },
  { link: '/contact', name: 'Contact', icon: faPhone },
  { link: '/about', name: 'About', icon: faUser },
  { link: '/projects', name: 'Projects', icon: faBoxOpen }
];

export const Navigation = ({toggleOpen}) => (
  <motion.ul className="list-none mt-24" variants={variants}>
    {navItems.map(item => (
      <MenuItem name={item.name} link={item.link} key={item.name} icon={item.icon} onClick={toggleOpen}  />
    ))}
    
  </motion.ul>
);
