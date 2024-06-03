"use client"
import React from 'react';
import { skillsData } from '@/lib/data'; 
import Sectionheader from './section-header';
import useSectionInView from '@/lib/hooks';
import {animate, motion} from 'framer-motion'
const fadeInAnimationVariants = {
    initial:{ opacity: 0, y:100 },
    animate:(index:number)=>{return {opacity: 1,y:0,transition:{delay:0.07*index}} },
    
}
function Skills() {
    
    const {ref }= useSectionInView('Skills')
    return (
        <div ref={ref} id='skills'>
            <Sectionheader>Skills</Sectionheader>
        <section className=''>
            <ul className='flex flex-wrap gap-3 max-w-[50rem] justify-center mt-8 scroll-mt-28 text-center text-lg'>
            {
                skillsData.map((skill,index)=> <motion.li whileInView="animate" viewport={{once:true}}
                
                key={index} className='bg-white border border-black/[0.1] py-3 px-2 rounded-lg text-gray-700' custom={index} variants={fadeInAnimationVariants} initial="initial" animate="animate ">{skill}</motion.li>)
            }
            </ul>
            
        </section>
        </div>
        
    );
}

export default Skills;