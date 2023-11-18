import React from 'react'

const AboutCompo = ({boxclasses,icon,name,desc}) => {
  return (
    <div className={boxclasses}>
    <i className={icon}></i>
    <h5 className='font-bold'>{name}</h5>
    <p>{desc}</p>
  </div>
  )
}

export default AboutCompo
