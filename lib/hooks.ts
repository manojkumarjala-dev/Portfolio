import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export default function useSectionInView(sectionName: SectionName, threshold = 0.75,triggerOnce=false){
    const {ref,inView} = useInView({threshold:threshold, triggerOnce: triggerOnce,});

    const {setActiveSection, timeOfLastClick}=useActiveSectionContext();

    useEffect(()=>{if(inView && Date.now()-timeOfLastClick>1000){
        setActiveSection(sectionName)
    }},[inView, setActiveSection,timeOfLastClick,sectionName])

    return {ref,inView};
}