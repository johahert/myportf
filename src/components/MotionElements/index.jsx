import { delay, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const containerVariants = {
    hidden: { opacity: 0, y: 50, x: -10 }, // Initial state for the container
    visible: {
      opacity: 1,
      y: 0,
        x: 0,
      transition: {
        
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.15, // Stagger the children animations
        delayChildren: .5, // Delay the children animations
      },
    },
};
  
const childVariants = {
    
    hidden: { opacity: 0, y: 50 }, // Initial state for each child
    visible: { opacity: 1, y: 0 }, // Visible state for each child
};
export const FadeInH1 = () =>{
    return(
        <motion.h1
        variants={containerVariants}  // Use container variants
        initial="hidden"  // Start with hidden state
        whileInView="visible"  // Animate to visible state when in view
        viewport={{ once: true, amount: 0.1 }}  // Trigger the animation once when 10% of h1 is visible
        className="text-5xl font-extrabold text-teal-700 kallisto uppercase mb-5"
      >
        <motion.span variants={childVariants}>H</motion.span>
        <motion.span variants={childVariants}>e</motion.span>
        <motion.span variants={childVariants}>l</motion.span>
        <motion.span variants={childVariants}>l</motion.span>
        <motion.span variants={childVariants}>o</motion.span>
      </motion.h1>
    )

}
const spanstyle = "font-bold text-teal-700"

export const FadeInWhileInView = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const opacityRange = useTransform(scrollYProgress, [0, .3], [0, 1]);
    const yRange = useTransform(scrollYProgress, [0, .3], [100, 0]);
    return (
      <motion.div
        ref={ref}
        style={{ 
            y: yRange,
            opacity: opacityRange
         }}
        className="flex flex-col items-center"
      >
        <motion.p 
         // Use child variants
        className="text-xl font-medium text-teal-600 leading-8 ">
            My name is <motion.span variants={childVariants} className={spanstyle}>Johan Hertz</motion.span>. 
            I am a <motion.span variants={childVariants} className={spanstyle}>Web Developer</motion.span> based in <motion.span variants={childVariants} className={spanstyle}>Karlstad</motion.span>. 
            Right now I am studying my third and last year at <motion.span variants={childVariants} className={spanstyle}>Karlstad University</motion.span>. 
                
                
        </motion.p>
      </motion.div>
    );
}
const hoverVariants = {
    normal: {
        scale: 1,
        rotate: 0,
        borderRadius: "0%",
    },
    hover: { 
        scale: 1.1,
        
        transition: {
            duration: .2,
            ease: "easeOut"
            
        }
    },
    click: {
        scale: .95,
        
        
        transition: {
            duration: .2,
            ease: "easeOut"
        }
    }
};
export const SpinningBox = () => {
    return (
        <motion.div
          className=" bg-white max-w-lg p-10 rounded-md"
          variants={hoverVariants}
          whileHover={"hover"}
          whileTap={"click"}
          
            initial="normal"
          
        >
            <FadeInH1 />
            <FadeInWhileInView />
        </motion.div>
      );
}