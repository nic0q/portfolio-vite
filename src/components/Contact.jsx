import { SubTitulo } from "./SubTitulo"

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full p-16 flex flex-col text-white footer items-center justify-center text-center"
    >
      <form className="md:max-w-[570px] max-w-[400px] w-full">
        <SubTitulo title={"Contact"}></SubTitulo>
        <p className="font-light pt-6 text-center">
          Submit the form bellow or send me an email - nicolascheneaux@gmail.com
        </p>
        <div className="text-black flex flex-col m-5">
          <input
            type="text"
            className="m-2 h-9 p-3 rounded-xl caret-[#DB077B]
            border-2 border-solid border-white  
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-[#DB077B] focus:outline-none "
            placeholder="Name"
          ></input>
          <input
            type="email"
            className="m-2 h-9 p-3 rounded-xl caret-[#DB077B]
            border-2 border-solid border-white  
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-[#DB077B] focus:outline-none "
            placeholder="Email"
          ></input>
          <textarea
            type="text"
            className="items-start m-2 h-48 p-3 rounded-xl  form-control
            caret-[#DB077B]
            border-2 border-solid border-white  
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-[#DB077B] focus:outline-none "
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
