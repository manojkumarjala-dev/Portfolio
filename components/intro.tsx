"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import img from '../public/img.jpeg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDown, BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import linkedin from '../public/linkedin-svgrepo-com.svg'
import github from '../public/github.svg'
import useSectionInView from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section'
export default function Intro() {
    const {ref }= useSectionInView('Home')
    const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <section ref={ref} className='max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] mt-14' id='home'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div initial={{y:-100, opacity :0}}
                    animate={{y:0,opacity:1}}
                    transition={{
                        type:'spring',
                        duration:1
                    }}
                >
                <Image width="200" height="200" src={img} alt="Display Image" className='h-[15rem] w-[15rem] rounded-full border-[0.35rem] shadow-xl object-cover border-white'></Image>
                </motion.div>
                
            </div>
        </div>

        <motion.p className='mb-10 mt-5 text-2xl font-medium !leading-[1.5] sm:text-2xl px-4'>
            <motion.span initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.58 }}>
        Hello, I am 
    </motion.span>
    <motion.span initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.79 }}>
        <span className='font-bold text-[#1f2e51]'> Manoj Kumar Jala. </span>
    </motion.span>
    <motion.span initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.98 }}>
        I&apos;m a 
    </motion.span>
    <motion.span initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.19 }}>
        <span className='font-bold text-[#1f2e51]'> Full-stack Developer </span>
    </motion.span>
    <motion.span initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.35 }}>
        with 1.5 years of Experience. My area of expertise is in 
    </motion.span>
    <motion.span initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}>
        <span className='font-bold text-[#1f2e51]'> Java, Springboot, ReactJS, NextJS.</span>
    </motion.span>
        </motion.p>
        <motion.div className='flex flex-col gap-4 flex-wrap sm:flex-row items-center justify-center font-medium' initial={{y:-100, opacity :0}}
        animate={{y:0,opacity:1}} transition={{
                        type:'spring',
                        duration:1.25
                    }}>
            <Link className='group bg-slate-900 rounded-full text-white px-6 py-2 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition' href="#contact" onClick={()=>{setActiveSection("Contact");setTimeOfLastClick(Date.now())}}>Contact Me here <BsArrowRight className='group-hover:translate-x-1 transition'/></Link>
            <a className='group bg-gray-200 rounded-full text-black px-6 py-2 flex items-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer' href='/Resume.pdf' download={true}>Download Resume <HiDownload className='group-hover:translate-y-1 transition'/></a>
            <a target='_blank' className='focus:scale-110 hover:scale-[1.15] hover:bg-gray-950 active:scale-105 transition' href='https://www.linkedin.com/in/manojkumarjala/'><Image src={linkedin} alt="LinkedIn" className='h-8 w-8' ></Image></a>
            <a className='focus:scale-110 hover:scale-[1.15] hover:bg-gray-200 active:scale-105 transition rounded-full' href='https://github.com/manojmj98' target='_blank'><Image src={github} alt="Github" className='h-10 w-10 pt-1'></Image></a>
        </motion.div>

    </section>
  )
}

