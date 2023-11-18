import React from 'react'
import teams from "../api/TeamApi"
import Heading from '../components/Heading'
import upper from "../api/HeadingApi"
import TeamCompo from '../components/TeamCompo'
const Team = () => {
  return (
    <section className="body-font bg-gray-200 py-24">
  <div className="container px-5 pb-12  mx-auto">
  <Heading title={upper[2].title} desc={upper[2].desc}/>
    <div className="flex flex-wrap -m-4 justify-center">
      {
        teams.map((team)=>{

            return (
                <TeamCompo key={team.id} url={team.url} name={team.name} role={team.role}/>
            )
        })
      }
      
    </div>
  </div>
</section>

  )
}

export default Team
