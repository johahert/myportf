import './index.scss'
import 'animate.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
const AnimatedLetters = ({addClass, letterClass, strArray, idx}) =>{

    
        const [hovered, setHovered] = useState(false);

        const handleHover = () => {
            setHovered(true);
        };

        const handleMouseLeave = () => {
            setHovered(false);
        };

        useEffect(() => {
            if (hovered) {
                const interval = setInterval(() => {
                   
                    for(let i = 0; i < strArray.length; i++){
                        const letter = document.querySelector(`._${i+idx}`);
                        const randomX = Math.floor(Math.random() * 201) - 100; // Random number between -100 and 100
                        const randomY = Math.floor(Math.random() * 201) - 100; // Random number between -100 and 100
                        animation = letter.animate([
                            { transform: 'translate(0, 0)' },
                            { transform: `translate(${randomX}px, ${randomY}px)` }
                        ], {
                            duration: 2500,
                            iterations: 1,
                            fill: 'forwards',
                            easing: 'ease-in-out'
                        });
                    }
                }, 500);

                return () => {
                    clearInterval(interval);
                };
            }
        }, [hovered, letterClass, idx]);

        
    return (
        <span onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
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