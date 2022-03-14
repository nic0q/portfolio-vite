import { useState } from "react"
import { ProjectCard } from "./ProjectCard"
import { SubTitulo } from "./SubTitulo"

export const Projects = () => {
  const [loadMore, setLoadMore] = useState(false)
  const handleClick = () => {
    setLoadMore(true)
  }
  return (
    <div id="projects" className="bg-[#04001E] text-gray-100 md:pt-16">
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <SubTitulo title={"Projects"}></SubTitulo>
        <div className="w-full grid gap-12 grid-cols-1 md:grid-cols-3 py-12">
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158098717-a7328b8d-cc68-4337-8dea-7b7954cc2758.png"
            name="Memory Game"
            details="A typical memory game with a menu token's skins and grid personalization."
            tech={["react"]}
          ></ProjectCard>
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158096348-1b893b3f-d922-4ac3-8e92-f20026f1d0bf.gif"
            name="Linked List Animation"
            details="A LinkedList animation visualizer with delete, add, change speed features."
            page="https://nic0q.github.io/Random-Animation/"
            github={"https://github.com/nic0q/Linked-List-Animation"}
            tech={["html", "css", "js"]}
          ></ProjectCard>
          <ProjectCard
            img="https://user-images.githubusercontent.com/91075814/158070244-6966f9c6-e8e0-48cc-a204-45243539e959.png"
            name="Random Questionary"
            details="Single Page Questions app, consults an external API, and gives feedback at the end."
            page="https://nic0q.github.io/Random-Questionary/"
            github={"https://github.com/nic0q/Random-Questionary"}
            tech={["react"]}
          ></ProjectCard>
          {loadMore ? (
            <>
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
                tech={["html", "css", "react", "node"]}
              ></ProjectCard>
              <ProjectCard
                img="https://user-images.githubusercontent.com/91075814/158070244-6966f9c6-e8e0-48cc-a204-45243539e959.png"
                name="Memory Game"
                details="A simple Memory Game with the basic rules s ssssssssssssss a ssssss"
                tech={["html", "css", "react"]}
              ></ProjectCard>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-center mt-6 mb-10">
          <svg
            className={
              loadMore
                ? "hidden"
                : "cursor-pointer w-14 h-14 bg-[#1F1F3A] border-[1px] border-[#75618d] border-solid rounded-full p-1 text-[#f177ba] animate-bounce"
            }
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClick}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
