import React from "react"

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Node from "../assets/node.png"
import Git from "../assets/git.png"
import Mongo from "../assets/mongo.png"
import PosgreSQL from "../assets/postgresql.png"
import { SubTitulo } from "./SubTitulo"
// import FireBase from "../assets/firebase.png"
// import AWS from "../assets/aws.png"
// import GitHub from "../assets/github.png"
// import Tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen bg-[#04001E] text-gray-100">
      {/* Container */}
      <div className="font-semibold max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
          <SubTitulo title={"Skills"}></SubTitulo>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img className="w-20 mt-2 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img className="w-20 mt-2 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img
              className="w-20 mt-2 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img className="w-20 mt-2 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img className="w-20 mx-auto mt-2" src={Git} alt="HTML icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img className="w-20 mx-auto mt-2" src={Node} alt="HTML icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img className="w-20 mx-auto mt-2" src={Mongo} alt="HTML icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#5d82af] hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mt-2"
              src={PosgreSQL}
              alt="HTML icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
