import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { MenuItemLite } from "../MenuItemLite";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 }
  },
  closed: {
    transition: {  staggerChildren: 0.1, staggerDirection: -1 }
  }
};

const navItems = [
  { link: '/', name: 'E-Mail', icon: faEnvelope, details: 'johan.hertz@hotmail.com' },
  { link: '/', name: 'Phone', icon: faPhone, details: '073 322 1650' },
  { link: '/', name: 'LinkedIn', icon: faLinkedin , details: 'johan-hertz-721699131'},
  { link: '/', name: 'Github', icon: faGithub, details: 'github.com/johahert' }
];

export const NavigationLite = ({toggleOpen}) => (
  <motion.ul className="mt-16 relative" variants={variants}>

    {navItems.map(item => (
      <MenuItemLite name={item.name} link={item.link} details={item.details} key={item.name} icon={item.icon} onClick={toggleOpen}  />
    ))}
    
  </motion.ul>
);
