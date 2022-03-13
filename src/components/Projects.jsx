import { ProjectCard } from "./ProjectCard"
import { SubTitulo } from "./SubTitulo"

export const Projects = () => {
  return (
    <div id="skills" className="w-full md:h-screen bg-[#04001E] text-gray-100">
      {/* Container */}
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SubTitulo title={"Proyects"}></SubTitulo>
        <div className="w-full grid gap-12 grid-cols-1 md:grid-cols-3 py-12">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  )
}
