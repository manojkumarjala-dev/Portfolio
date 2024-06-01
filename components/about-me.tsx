"use client"
import React from 'react';
import Sectionheader from './section-header';
import { motion } from 'framer-motion'

export default function Aboutme() {
    return (
        <motion.section className='text-center max-w-[40rem]' initial={{y:-100, opacity :0}}
        animate={{y:0,opacity:1}} transition={{
                        type:'spring',
                        duration:1.25,
                        delay:2
                    }}>
            <Sectionheader>About Me</Sectionheader>
            <p className='leading-8'>
            I am a software development engineer with a strong foundation in programming and a passion for creating efficient and user-friendly software solutions. Currently pursuing a Master's in Computer Science at Indiana University Bloomington with a perfect GPA of 4.0, I specialize in developing and optimizing software using Java, Spring Boot, JavaScript, React.js, and Agile Methodologies.

            </p>
        </motion.section>
    );
}

