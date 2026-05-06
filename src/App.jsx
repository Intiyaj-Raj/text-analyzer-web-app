import React, { useState } from 'react'
import Textforms from './components/Textforms'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact';
const App = () => {

  const [mode, setMode] = useState("light")

  const setDarkMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  const setBlueMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);

    document.body.style.backgroundColor =
      newMode === 'dark' ? "#01011c" : "white";
  };
  return (
    <BrowserRouter>
      <Navbar mode={mode} setDarkMode={setDarkMode} setBlueMode={setBlueMode} />
      <Routes>
        <Route path='/' element={<Textforms mode={mode} setDarkMode={setDarkMode} />} />
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='/contact' element={<Contact mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
  )
}

export default App