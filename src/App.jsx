import React, { useState } from 'react'
import Textforms from './components/Textforms'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact';
import Alert from './components/Alert';
const App = () => {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const setDarkMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert(" Dark mode has been enabled ", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" Light mode has been enabled ", "success")
    }
  }

  const setBlueMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? "#01011c" : "white";
    if (newMode === "dark") {
      showAlert(" Blue mode has been enabled ", "success")
    }
    else {
      showAlert(" Light mode has been enabled ", "success")
    }
  };
  return (
    <BrowserRouter>
      <Navbar mode={mode} setDarkMode={setDarkMode} setBlueMode={setBlueMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<Textforms showAlert={showAlert} mode={mode} setDarkMode={setDarkMode} />} />
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='/contact' element={<Contact mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
  )
}

export default App