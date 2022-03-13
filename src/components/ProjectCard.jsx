import "../App.css"
import { FaReact, FaCss3, FaHtml5, FaLink, FaGithub } from "react-icons/fa"

export const ProjectCard = ({
  name = "Project Name",
  img,
  details = "Project Details",
  tech = [],
}) => {
  return (
    <div className="card bg-[#1F1F3A] rounded-xl flex md:h-96 md:w-78 md:hover:scale-110 duration-500 shadow-xl shadow-[#ae70e7] w-full">
      <div className=" w-screen">
        <img className="rounded-xl" src={img} alt="Imagen del Proyecto"></img>
        <div className="p-4">
          <h2 className="text-2xl pb-4 font-bold">{name}</h2>
          <div className="bg-[#262644] p-1">
            <p className="text-lg font-light">{details}</p>
          </div>
          <div className="flex justify-center ">
            <FaGithub className="m-3 text-4xl md:text-3xl"></FaGithub>
            <FaLink className="m-3 text-4xl md:text-3xl"></FaLink>
          </div>
          {/* <div className="flex justify-center">
            {tech.map((e) =>
              e === "react" ? (
                <FaReact key={e} className="mr-3 text-2xl" />
              ) : e === "css" ? (
                <FaCss3 key={e} className="mr-3 text-2xl" />
              ) : e === "html" ? (
                <FaHtml5 key={e} className="mr-3 text-2xl" />
              ) : (
                <div />
              )
            )}
          </div> */}
        </div>
      </div>
    </div>
  )
}
