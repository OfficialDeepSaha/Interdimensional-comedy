import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white py-16 px-6 text-center relative overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight animate__animated animate__fadeIn">
        Personalized Comedy Shows and Kids Music
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-lg mx-auto bg-white p-2 rounded-full shadow-lg animate__animated animate__fadeIn animate__delay-1s">
        <input
          type="text"
          placeholder="Enter your kid's name"
          className="px-4 py-2 w-full rounded-full border border-gray-300 outline-none text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-0 md:ml-2 mt-2 md:mt-0">
          Get Started
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-transparent opacity-30 pointer-events-none" />
    </section>
  );
};

export default Hero;
