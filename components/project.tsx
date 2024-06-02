"use client"
import Image from 'next/image';
import {useScroll} from 'framer-motion'
import { projectsData } from '@/lib/data';
import React, { useRef } from 'react';
import {motion, useTransform } from 'framer-motion';
export default function Project({title, description, tags, imageUrl}:(typeof projectsData)[number]){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress,[0, 1],[0.8,1])
    const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1])
    return (
        <motion.div style={{scale:scaleProgress,opacity:opacityProgress}} ref={ref} className='group sm:h-[20rem] sm:pr-8 last:mb-0'>
            <section className=' bg-gray-100 rounded-lg border border-black/5 max-w-[42rem] overflow-hidden my-5 relative sm:h-[20rem] sm:pr-8 last:mb-0 hover:bg-gray-200 transition'>
            <div className='max-w-[50%] flex flex-col h-full px-5 pb-16 pt-8 group-even:ml-[22rem]'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            
            <p className=' text-gray-700 leading-relaxed'>{description}</p>
                <ul className='flex flex-wrap sm:mt-auto'>
                {
                    tags.map((tag,index)=>
                    <li className='bg-black/[0.7] rounded-full text-gray-100 text-center px-2 mx-1 my-1 capitalize' key={index}>{tag}</li>
                        )
                }
            </ul>
            </div>
                
            
            <Image src={imageUrl} alt={title} quality={95} className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[intial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-1.05 group-hover:transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2'></Image>
            
        </section>
        </motion.div>
        
    )
}