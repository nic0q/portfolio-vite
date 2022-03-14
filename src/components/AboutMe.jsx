import { SubTitulo } from "./SubTitulo"
import { RiEnglishInput } from "react-icons/ri" // Delete in the future if is unused

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-[#04001E] w-full text-gray-100">
      <div className="max-w-[1000px] mx-auto p-4 sm:pt-20 flex flex-col justify-center w-full">
        <SubTitulo title={"About Me"}></SubTitulo>
        {/* Main Container => Img + Text */}
        <div className="lg:flex-row flex flex-col mt-16 items-center">
          <img
            src="https://images.pexels.com/photos/11118384/pexels-photo-11118384.jpeg?cs=srgb&dl=pexels-brcunel-11118384.jpg&fm=jpg"
            alt="profilePhoto"
            className="float-left w-96 rounded-xl "
          ></img>
          <div className="flex flex-col">
            <h3 className="text-4xl ml-10 mt-8 text-pink-500">Hello!</h3>
            <h3 className="text-xl text-justify mx-10 mt-1">
              I'm a Informatics Engineering student and appasionate for the Web
              Development from Chile, in the last summer I've build some
              projects to improve my skills in web sites and aplications
              development, I wish in the future collaborate in bigger projects
              and interact with other developers. I'm looking for any
              opportunity to adquire experience in this area. I specialize in
              React Apps, with CSS frameworks. I'm not english native speaker,
              but I can normally express my ideas , discusing and writing in
              english.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
