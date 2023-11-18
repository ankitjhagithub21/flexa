import React from 'react'
import reviews from  "../api/ReviewApi"
import Heading from '../components/Heading'
import upper from "../api/HeadingApi"
import ReviewCompo from '../components/ReviewCompo'
const Reviews = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
 <Heading title={upper[4].title} desc={upper[4].desc}/>
    <div className="flex flex-wrap -m-4">
     {
      reviews.map((review)=>{
        return (
         <ReviewCompo key={review.id} desc={review.desc} url={review.url} name={review.name} role={review.role}/>
        )
      })
    
     }
      
    </div>
  </div>
</section>

  )
}

export default Reviews
