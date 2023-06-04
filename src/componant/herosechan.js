import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg md:text-xl mb-6">Discover a world of innovation and creativity.</p>
            <button className="bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600">Get Started</button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src="/hero-image.png" alt="Hero Image" className="mx-auto w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
