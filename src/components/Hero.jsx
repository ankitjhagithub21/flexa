import React from 'react';

const Hero = () => {
  return (
    <section className="text-gray-600 py-12">
      <div className="container mx-auto flex flex-wrap-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <b className="text-green-800 my-3">Investment Retirement Insurance!</b>
          <h1 className="title-font sm:text-4xl mb-4 font-bold text-gray-900">
            Protect Your Business with Our Services
          </h1>
          <p className="mb-4 leading-relaxed">
            Safeguard your business and financial future with Flexa. Our team provides tailored solutions for your investments, retirement, and insurance needs.
          </p>
          <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full"
            alt="Business Security"
            src="/home.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
