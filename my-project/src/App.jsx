import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Route , Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'

import './App.css'

export default function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/'>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}