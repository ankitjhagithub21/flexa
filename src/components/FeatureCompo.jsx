import React from 'react'

const FeatureCompo = ({iconPath,name,desc}) => {
  return (
    <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-sky-200 bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative shadow-lg feature">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
                                    <i className={iconPath}></i>
    
                                    </div>
    
                                    <h1 className="title-font sm:text-2xl text-xl font-bold mb-3">
                                       {name}
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                       {desc}
                                    </p>
                                </div>
                            </div>
  )
}

export default FeatureCompo
