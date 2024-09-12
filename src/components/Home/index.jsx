import './index.scss'
import * as React from "react";

import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { StudentCap } from '../AnimatedIcon'
import Contact from '../Contact';

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'o', 'h', 'a', 'n', ' ', 'H', 'e', 'r', 't', 'z']
    const jobArray = ['W', 'e', 'b', 'b', 'u', 't', 'v', 'e', 'c', 'k', 'l', 'a', 'r', 'e']
    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3800)
    }, [])

   

    return (
        <>
            <div className=' textzone text-center  flex flex-col min-h-dvh items-center justify-center'>
            <h1 className='text-white kallisto tracking-wide uppercase animate__animated animate__fadeInUp text-3xl font-extrabold animate__slow'>
            <AnimatedLetters addClass={'hover:text-gray-400 z-index-10'} letterClass={letterClass} strArray={nameArray} idx={2} />
                
            </h1>
            <h2 className='font-bold kallisto uppercase text-xl text-teal-100 animate__delay-1s animate__animated animate__fadeIn'>
            <AnimatedLetters addClass={'hover:text-white'} letterClass={letterClass} strArray={jobArray} idx={9} />
            </h2>
            <div className='w-36 py-10'>

            <StudentCap />
            </div>
            </div>
            

            
        </>
    )
}

export default Home