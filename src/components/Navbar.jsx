import React from "react"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div>
      <div className="z-10 fixed pt w-full h-[65px] flex items-center px-w bg-transparent justify-end text-xl md:bg-[#06002D]">
        <ul className={"hidden md:flex text-white items-center pr-32"}>
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button className="font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#E41476]">
              Download CV
            </button>
          </li>
        </ul>
        <div
          className="text-white md:hidden z-10 text-3xl m-3"
          onClick={handleClick}
        >
          {nav ? <FaTimes /> : <GiHamburgerMenu />}
        </div>
        {/* Mobile Responsibe */}
        <ul
          className={
            nav
              ? "flex flex-col bg-[#06002D] justify-center items-center absolute top-0 left-0 w-full h-screen text-white text-4xl"
              : "hidden"
          }
        >
          <li className="py-8 font-semibold">
            <a onClick={handleClick} href="#aboutMe">
              About Me
            </a>
          </li>
          <li className="py-8 font-semibold">
            <a onClick={handleClick} href="#skills">
              Skills
            </a>
          </li>
          <li className="py-8 font-semibold">
            <a onClick={handleClick} href="#projects">
              Projects
            </a>
          </li>
          <li className="py-8 font-semibold">
            <a onClick={handleClick} href="#contact">
              Contact
            </a>
          </li>
          <button className=" my-8 font-bold border-none p-1 px-6 text-lg rounded-full bg-purple-700">
            Download CV
          </button>
        </ul>
      </div>
    </div>
  )
}
