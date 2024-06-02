import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Sectionheader from './section-header';
import Project from './project';

export default function Projects() {
    return (
       <section>
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


