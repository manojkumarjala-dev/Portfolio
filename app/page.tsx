import Aboutme from "@/components/about-me"
import Intro from "@/components/intro"
import Sectiondivider from "@/components/sectiondivider"
import Projects from "@/components/projects"
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro></Intro>
      <Sectiondivider></Sectiondivider>
      <Aboutme></Aboutme>
      <Projects></Projects>
    </main>
  )
}
