import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserAlt } from "@fortawesome/free-solid-svg-icons"
import AnimatedLetters from "../AnimatedLetters"
import { easeInOut, motion } from "framer-motion"
import { FadeInH1, FadeInWhileInView, SpinningBox } from "../MotionElements"
import 'animate.css'
import  './index.module.scss'
const variants = {

    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1 , y: 0, transition: { duration: 1, ease: "easeOut"  }
     },

  }
const Contact = () => {
    return (
        <>
        {/* <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true, amount: 0.1 }}
        className="contact bg-white py-16 sm:rounded-2xl max-w-xl mx-auto sm:shadow-2xl">
            <div className="px-5 lg:px-10  mx-auto">
                <FadeInH1 />
                <FadeInWhileInView />

                
            </div>
                
                
        </motion.div> */}
        <div className="flex w-full justify-center items-center mx-auto">
        <SpinningBox />

        </div>
        </>
    )
}
export default Contact