import React from 'react'
import blogs from "../api/BlogApi"
import Heading from '../components/Heading'
import upper from "../api/HeadingApi"
import BlogCompo from '../components/BlogCompo'
const Blog = () => {
  return (
    <section className="bg-gray-200 body-font">

  <div className="container px-5 py-24 mx-auto">
  <Heading title={upper[3].title} desc={upper[3].desc}/>
    <div className="flex flex-wrap -m-4">
     {
        blogs.map((blog)=>{
            return (
              <BlogCompo key={blog.id} url={blog.url} date={blog.date} title={blog.title} desc={blog.desc}/>
            )
        })
     }
     
    </div>
  </div>
</section>

  )
}

export default Blog
