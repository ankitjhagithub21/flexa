import React from 'react'

const Heading = ({title,desc}) => {
    return (
        <div className="text-center mb-20">
             <p className="sm:text-3xl lg:text-sm mt-5 text-gray-900 mb-2 border-b-2 border-green-600 w-fit mx-auto pb-1">
        {title}
    </p>
    
    <h1 className="lg:text-4xl font-bold xl:w-2/4 lg:w-3/4 mx-auto text-blue-900 sm:text-2xl" >
    {desc}
    </h1>
    <p className='xl:w-2/4 lg:w-3/4  mx-auto mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            
        </div>
    )
}

export default Heading
