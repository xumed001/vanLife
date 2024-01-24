import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../server/vansData'

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
