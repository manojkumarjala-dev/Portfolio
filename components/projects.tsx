import React from 'react';
import { projectsData } from '@/lib/data';
import Sectionheader from './section-header';

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

function Project({title, description, tags}:(typeof projectsData)[number]){
    return (
        <div>{title}</div>
    )
}

