import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import "./index.css";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {

  const [theme, setTheme] = useState('light');

    useEffect(()=>{
        localStorage.getItem("theme")?setTheme(JSON.parse(localStorage.getItem("theme"))):""
    },[])

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem("theme",JSON.stringify(newTheme))
        setTheme(newTheme)
    }

  return (
    <BrowserRouter>
      <div className="app" data-theme={theme}>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link onClick={switchTheme}>Toggle</Link>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
