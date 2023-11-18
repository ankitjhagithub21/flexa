import React from 'react'

const Contact = () => {
  return (
    <section className=" body-font relative">
  <div className="absolute inset-0">
    <iframe
      width="100%"
      height="100%"
      
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104507.56267733246!2d86.90940401101747!3d25.240486525970308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049f79910fbc7%3A0x9e3efe37aca8e227!2sBhagalpur%2C%20Bihar!5e1!3m2!1sen!2sin!4v1682390101645!5m2!1sen!2sin"
      style={{ filter: " opacity(0.8)" }}
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Submit
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p>
    </div>
  </div>
</section>

  )
}

export default Contact
