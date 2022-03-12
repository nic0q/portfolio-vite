import "./App.css"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default App
