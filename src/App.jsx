import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound"
import Reviews from "./pages/Reviews";

import "./App.css"

function App() {
 
  return (
    <BrowserRouter>
        
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="*" element={<NotFound/>}/>
     
    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
