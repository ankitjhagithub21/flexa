import React from 'react'

const TeamCompo = ({url,name,role}) => {
  return (
    <div className="p-4 md:w-1/3 relative">
    <div className="h-full overflow-hidden client">
      <img
        className="w-full object-fit h-96"
        src={url}
        alt="team"
      />
      <div className="p-4 text-center   bg-white shadow-lg">
        
        <h1 className="title-font text-xl font-bold text-blue-900">
          {name}
        </h1>
        <p className="leading-relaxed  text-green-500 text-xl">
         
         {role}
        </p>
        
      </div>
    </div>
  </div>
  )
}

export default TeamCompo
