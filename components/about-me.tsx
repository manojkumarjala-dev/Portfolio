"use client"
import React, { useEffect } from 'react';
import Sectionheader from './section-header';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section';
import useSectionInView from '@/lib/hooks';
export default function Aboutme() {
    const {ref }= useSectionInView('About')
    
    return (

        <motion.section className='text-center max-w-[40rem] scroll-mt-20' initial={{y:-100, opacity :0}}
        animate={{y:0,opacity:1}} transition={{
                        type:'spring',
                        duration:1.25,
                        delay:2
                    }}
                    
                    id='about' ref={ref}>
            <Sectionheader>About Me</Sectionheader>
            <p className='leading-8'>
            I am a software development engineer with a strong foundation in programming and a passion for creating efficient and user-friendly software solutions. Currently pursuing a Masters in Computer Science at Indiana University Bloomington with a perfect GPA of 4.0, I specialize in developing and optimizing software using Java, Spring Boot, JavaScript, React.js, and Agile Methodologies.

            </p>
        </motion.section>
    );
}

