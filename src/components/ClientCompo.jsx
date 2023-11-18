import React from 'react'

const ClientCompo = ({icon,number,name}) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="shadow-lg px-4 py-6 client" >
<i className={icon}></i>
<h2 className="title-font font-bold text-3xl text-gray-900">
{number}
</h2>
<p className="leading-relaxed text-green-500 mt-2 text-xl">{name}</p>
</div>

</div>
  )
}

export default ClientCompo
