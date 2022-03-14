import { useState } from "react"
import {useScroll} from "../Hooks/useScroll"
import "../assets/Styles/Hamburger.css"


export default function Hamburger() {
  const [active, setActive] = useState(false)
  const { y, x, scrollDirection } = useScroll()
  const handleClick = () => {
    setActive(!active)
  }
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.3s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.3s",
      transform: "translateY(-100%)",
    },
  }
  return (
    <div
      className="rounded-xl bg-[#04001E] p-[6px] pb-[3px] mr-1"
      style={scrollDirection === "down" ? styles.active : styles.hidden}
    >
      <button
        onClick={handleClick}
        className={
          active ? "hamburger--collapse is-active" : "hamburger--collapse"
        }
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )
}
