import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"
import React from "react"

export const Home = () => {
  return (
    <div id="home" className="flex w-full h-screen bg-[#04001E] items-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <p className="ml-[2px] text-2xl text-pink-600 md:ml-[4px] ">Hi, my name is</p>
        <h2 className="text-4xl md:text-8xl text-white font-bold">
          Nícolas Farfán
        </h2>
        <h2 className="my-3 text-2xl md:text-5xl md:ml-1 font-bold text-[#8892b0]">
          I'm a FrontEnd Developer
        </h2>
        <div className="flex mt-6 items-center text-white text-4xl">
          <button className="shadow-lg text-xl hover:shadow-[#f129ae] hover:scale-110 duration-200 font-light my-4 ml-1 mr-5 bg-pink-600 border-2 border-none px-4 md:text-2xl p-2 rounded-full">
            View Work
          </button>
          <a href="https://github.com/nic0q" target="_blank">
            <FiGithub className="m-3 md:text-5xl text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/n%C3%ADcolas-farf%C3%A1n-cheneaux-14365b15b/"
            target={"_blank"}
          >
            <FiLinkedin className="m-3 md:text-5xl text-4xl" />
          </a>
          <a href="https://twitter.com/CheneauxNicolas" target={"_blank"}>
            <FiTwitter className="m-3 md:text-5xl text-4xl" />
          </a>
        </div>
      </div>
    </div>
  )
}
