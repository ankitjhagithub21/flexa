import React from 'react'
import boxes from "../api/AboutApi"
import AboutCompo from '../components/AboutCompo'
const About = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-200">
      <div className="container mx-auto flex  py-24 lg:pl-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className='mb-3 text-green-700'>About Us</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Proud of 15 Years <br /> Excellence
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus reiciendis qui veritatis in dolores ea id quia eos minima. Odio esse ut libero
          </p>

          <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
            About More
          </button>

        </div>
        <div className="md:w-1/2 sm:w-full">
          <div className='flex flex-wrap'>
           {
            boxes.map((box)=>{
              return (
               <AboutCompo key={box.id} boxclasses={box.boxclasses} icon={box.icon} name={box.name} desc={box.desc}/>
              )
            })
           }
           
          </div>

        

        </div>
      </div>
    </section>

  )
}

export default About
