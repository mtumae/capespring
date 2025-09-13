import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home.jsx'
import Stream from './pages/stream.tsx'
import About from './pages/about.tsx'
import Gallery from './pages/gallery.js'

import './index.css'
import NavBar from './components/navigation.tsx'
import Footer from './components/footer.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/stream' element={<Stream />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>
)
