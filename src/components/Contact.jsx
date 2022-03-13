export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col text-white w-full h-screen footer items-center justify-center text-center"
    >
      <form className="pt-14 max-w-[570px] w-full">
        <h3 className="text-4xl m-3 font-bold">Contact</h3>
        <p className="font-light text-center">
          Submit the form bellow or send me an email - nicolascheneaux@gmail.com
        </p>
        <div className="text-black flex flex-col m-5">
          <input className="m-2 h-9 p-3 rounded-xl" placeholder="Name"></input>
          <input className="m-2 h-9 p-3 rounded-xl" placeholder="Email"></input>
          <textarea
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
