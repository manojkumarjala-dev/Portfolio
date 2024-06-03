"use client"
import React from 'react';
import Sectionheader from './section-header';

import {motion} from 'framer-motion';
import useSectionInView from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

import Submitbtn from './submit-btn';
import toast from 'react-hot-toast';
function Contact() {

    const {ref }= useSectionInView('Contact',0.25)
    return (
        <motion.section id='contact' ref={ref} className='w-[min(100%,38rem)] text-center  mb-28 px-10 pb-10' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}}>
            <Sectionheader>Contact me</Sectionheader>
            <p className='-mt-6 mb-4'>Please contact directly at <a href='mailto:jalav@iu.edu' className='underline '>jalav@iu.edu</a> or through this form</p>
            <form action={async formData => {const {data, error} = await sendEmail(formData)
        if(error){
            toast.error(error)
            return
        }
        toast.success("Email Sent Sucessfully")
        }} className='flex flex-col'>
                <input name='senderemail' type='email' required maxLength={500} className='h-14 p-4 rounded-lg border border-black/10' placeholder='Your Email'></input>
                <textarea name='message' required className='h-52 my-4 p-4 rounded-lg border border-black/10' placeholder='Your Message'></textarea>
                <Submitbtn></Submitbtn>
            </form>
        </motion.section>
    );
}

export default Contact;