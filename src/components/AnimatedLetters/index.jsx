import './index.scss'
import 'animate.css'
import { motion } from 'framer-motion'
const AnimatedLetters = ({addClass, letterClass, strArray, idx}) =>{

    return (
        <span>
            {
                strArray.map((char, i) => {
                    return (
                        <span key={char+i} className={`${letterClass} _${i+idx} ${addClass}`}>
                            {char}
                        </span>
                    )
                })
            }
        </span>
        
    )
}
export default AnimatedLetters