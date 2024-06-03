import Aboutme from "@/components/about-me"
import Intro from "@/components/intro"
import Sectiondivider from "@/components/sectiondivider"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Sectionheader from "@/components/section-header"
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro></Intro>
      <Sectiondivider></Sectiondivider>
      <Aboutme></Aboutme>
      <Sectionheader>My Projects</Sectionheader>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
    </main>
  )
}
