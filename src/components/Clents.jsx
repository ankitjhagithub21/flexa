import React from 'react'
import boxes from "../api/ClientApi"
import ClientCompo from './ClientCompo'
const Clients = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4 text-center">
                    
                        {
                            boxes.map((box) => {
                                return (
                                  <ClientCompo key={box.id} icon={box.icon} number={box.number} name={box.name}/>

                                )
                            })
                        }

                    


                </div>
            </div>
        </section>

    )
}

export default Clients
