import { motion } from "framer-motion"
const Projects = () => {
    return (
        <motion.div 
        
        className="min-h-svh flex justify-center items-center">
            <motion.h1 className="text-teal-50 text-5xl uppercase font-extrabold"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            
            viewport={{once: true, amount: 0.1}}
            >Projects</motion.h1>
        </motion.div>
    )
}
export default Projects