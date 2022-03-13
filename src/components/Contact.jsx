import { SubTitulo } from "./SubTitulo"

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full md:h-screen flex flex-col text-white h-screen footer items-center justify-center text-center"
    >
      <form className="pt-14 md:max-w-[570px] max-w-[400px] w-full">
        <SubTitulo title={"Contact"}></SubTitulo>
        <p className="font-light pt-6 text-center">
          Submit the form bellow or send me an email - nicolascheneaux@gmail.com
        </p>
        <div className="text-black flex flex-col m-5">
          <input type="text" className="m-2 h-9 p-3 rounded-xl" placeholder="Name"></input>
          <input type="email" className="m-2 h-9 p-3 rounded-xl" placeholder="Email"></input>
          <textarea type="text"
            className="items-start m-2 h-48 p-3 rounded-xl"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#DB077B]">
          Let's Collaborate
        </button>
      </form>
    </div>
  )
}
