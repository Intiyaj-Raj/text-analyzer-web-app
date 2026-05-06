import React, { useState } from 'react'
import Textforms from './components/Textforms'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
const App = () => {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path='/' element={<Textforms mode={mode} toggleMode={toggleMode} />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App