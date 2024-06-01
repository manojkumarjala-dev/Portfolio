import Aboutme from "@/components/about-me"
import Intro from "@/components/intro"
import Sectiondivider from "@/components/sectiondivider"
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro></Intro>
      <Sectiondivider></Sectiondivider>
      <Aboutme></Aboutme>
    </main>
  )
}
