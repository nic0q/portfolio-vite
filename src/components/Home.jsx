import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"
import React from "react"

export const Home = () => {
  return (
    <div className="flex w-full h-screen bg-[#04001E] items-center">
      <div className="text-lg ml-[18%] font-normal">
        <p className="ml-1 text-pink-600">Hi, my name is</p>
        <h2 className="text-4xl sm:text-7xl text-white font-bold">
          Nícolas Farfán
        </h2>
        <h2 className="my-3 text-xl sm:text-3xl sm:ml-1 font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <div className="flex  items-center text-white text-4xl">
          <button className="font-light my-4 ml-1 mr-5 bg-pink-600 border-2 border-none px-4 text-xl p-2 rounded-full">
            View Work
          </button>
          <a href="https://github.com/nic0q" target="_blank">
            <FiGithub className="m-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/n%C3%ADcolas-farf%C3%A1n-cheneaux-14365b15b/"
            target={"_blank"}
          >
            <FiLinkedin className="m-3" />
          </a>
          <FiTwitter className="m-3" />
        </div>
      </div>
    </div>
  )
}
