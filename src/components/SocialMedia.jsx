import React from 'react'
import links from "../api/SocialMediaApi"
const SocialMedia = () => {
  return (
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 text-2xl">
       
       {
        links.map((link)=>{
            return (
                <a className="text-gray-500 hover:text-green-500" href={link.href} key={link.id} target='_blank'>
                <i className={link.classes}></i>
               </a>
            )
        })
       }
       
      </span>
  )
}

export default SocialMedia
