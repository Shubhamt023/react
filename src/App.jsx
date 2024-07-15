
import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Friends from "./Pages/Friends"
import Home from "./Home"
import NewHome from "./Pages/NewHome"



function App() {


  return (
    <>

    <NewHome />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/friends' element={<Friends />}/>
      </Routes>
   
    </>
  )
}

export default App
