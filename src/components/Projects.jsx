import { ProjectCard } from "./ProjectCard"
import { SubTitulo } from "./SubTitulo"

export const Projects = () => {
  return (
    <div id="projects" className="bg-[#04001E] text-gray-100 pt-16 ">
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SubTitulo title={"Projects"}></SubTitulo>
        <div className="w-full grid gap-12 grid-cols-1 md:grid-cols-3 py-14">
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158070244-6966f9c6-e8e0-48cc-a204-45243539e959.png"
            name="Memory Game"
            details="A simple Memory Game with the basic rules s ssssssssssssss a ssssss"
            tech={["html", "css", "react"]}
          ></ProjectCard>
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158070244-6966f9c6-e8e0-48cc-a204-45243539e959.png"
            name="Memory Game"
            details="A simple Memory Game with the basic rules s ssssssssssssss a ssssss"
            tech={["html", "css", "react"]}
          ></ProjectCard>
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158070244-6966f9c6-e8e0-48cc-a204-45243539e959.png"
            name="Memory Game"
            details="A simple Memory Game with the basic rules s ssssssssssssss a ssssss"
            tech={["html", "css", "react"]}
          ></ProjectCard> 
        </div>
        <div className="flex items-center justify-center">
          <button className="font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#DB077B]">
            View More
          </button>
        </div>
      </div>
    </div>
  )
}
