import React from 'react'
import boxes from "../api/ServiceApi"
import Heading from '../components/Heading'
import upper from "../api/HeadingApi"
import ServiceCompo from '../components/ServiceCompo'

const Services = () => {
  return (
    <section className= "py-12 body-font bg-gray-200">
         <Heading title={upper[1].title} desc={upper[1].desc}/>
  <div className="container px-5  mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      {
        boxes.map((box)=>{
            return(
               <ServiceCompo key={box.id} iconPath={box.iconPath} name={box.name} desc={box.desc}/>
            )
        })
      }
      
    </div>
  </div>
</section>

  )
}

export default Services
