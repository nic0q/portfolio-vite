import React from "react"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    console.log(nav)
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-[80px] flex items-center px-4 bg-[#1F1F3A] justify-end text-xl">
      <ul className={"hidden md:flex text-white items-center pr-32"}>
        <li>About Me</li>
        <li>Projects</li>
        <li>
          <button className="font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#E41476]">
            Download CV
          </button>
        </li>
      </ul>
      <div className="text-white md:hidden z-10 text-xl" onClick={handleClick}>
        {nav ? <FaTimes /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Responsibe */}
      <ul
        className={
          nav
            ? "flex flex-col bg-[#1F1F3A] justify-center items-center absolute top-0 left-0 w-full h-screen text-white text-4xl"
            : "hidden"
        }
      >
        <li className="py-8 font-semibold">About M</li>
        <li className="py-8 font-semibold">Projects</li>
        <button className=" my-8 font-bold border-none p-1 px-6 text-lg rounded-full bg-purple-700">
          Download CV
        </button>
      </ul>
    </div>
  )
}
