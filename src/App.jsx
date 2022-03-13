import "./App.css"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
