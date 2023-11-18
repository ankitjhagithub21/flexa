import React from 'react'
import features from "../api/FeaturesApi"
import Heading from '../components/Heading'
import boxes from "../api/HeadingApi"
import FeatureCompo from '../components/FeatureCompo'
const Features = () => {
   
    return (
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
                <Heading title={boxes[0].title} desc={boxes[0].desc}/>

                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                      {
                        features.map((feature)=>{
                            return (
                               <FeatureCompo key={feature.id} iconPath={feature.iconPath} name={feature.name} desc={feature.desc}/>
                            )
                        })
                      }
                       
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Features
