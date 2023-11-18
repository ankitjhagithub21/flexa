import React from 'react'

const ServiceCompo = ({iconPath,name,desc}) => {
  return (
    <div className="p-4 lg:w-1/3 md:w-full">
    <div className="flex border-2 rounded-lg border-green-600 border-opacity-50 p-8 sm:flex-row flex-col feature">
      <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0">
       <i className={iconPath}></i>
      </div>
      <div className="flex-grow">
        <h2 className="text-lg title-font font-bold mb-3">
          {name}
        </h2>
        <p className="leading-relaxed text-base">
         {desc}
        </p>
       
      </div>
    </div>
  </div>
  )
}

export default ServiceCompo
