"use client"
import React, { useEffect } from 'react';
import { projectsData } from '@/lib/data';
import Sectionheader from './section-header';
import Project from './project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section';
import useSectionInView from '@/lib/hooks';

export default function Projects() {
    const {ref }= useSectionInView('Projects',0.25)
    return (
       <section ref={ref} id='projects' className='scroll-mt-28'>
        <Sectionheader>My Projects</Sectionheader>
        <div>
            {projectsData.map((project,index)=>{
                return (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                
                )
            })}
        </div>
       </section>
    );
}


