"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Sectiondivider() {
  return (
    <motion.div className='bg-gray-200 my-10 h-20 w-1 rounded-full hidden sm:block' initial={{y:-100, opacity :0}}
    animate={{y:0,opacity:1}}
    transition={{
        duration:1,
        delay:0.75
    }}></motion.div>
  )
}
