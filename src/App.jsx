import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

import '../server/vansData'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
