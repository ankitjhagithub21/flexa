import React from 'react'
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Features from "./Features"
import Services from "./Services"
import Team from "./Team"
import Reviews from './Reviews'
import Clients from '../components/Clents'
const Home = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap-reverse px-5 py-24  items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <b className='text-green-800 my-3'>Investment Retirement Insurance!</b>
        <h1 className="title-font sm:text-4xl mb-4 font-bold text-gray-900">
        Keep Your Business Safe
          <br className="hidden lg:inline-block" />
          With Our Services
        </h1>
        <p className="mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tenetur, voluptatem id dolorem eveniet dolor veniam ullam.
        </p>
        <button className=" text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
            Get Started
          </button>
      </div>
      <div className=" md:w-1/2">
        <img
          className=""
          alt="hero"
          src="/home.webp"
        />
      </div>
    </div>
  </section>
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
