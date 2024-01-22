import React from 'react'
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Features from "./Features"
import Services from "./Services"
import Team from "./Team"
import Reviews from './Reviews'
import Clients from '../components/Clents'
import Hero from '../components/Hero'
const Home = () => {
  return (
    <>
  <Hero/>
  <About/>
  <Features/>
  <Services/>
  <Clients/>
  <Team/>
  <Reviews/>
  <Blog/>
  <Contact/>
  </>
  )
}

export default Home
