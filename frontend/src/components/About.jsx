//import React from 'react';
import about from '../images/about.jpg'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt="Outfit image"
              src= {about}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              About The Oufit Generator
            </h2>
  
            <p className="mt-4 text-gray-600">
            We are a web application that uses advanced AI to help you create personalized and stylish outfits effortlessly. The platform leverages Prodia, a cutting-edge image generation model, to generate realistic and visually stunning outfits based on your preferences. The team of fashion enthusiasts and technologists behind Outfit Generator aims to empower individuals to explore their unique style and creativity while embracing the latest technological advancements. By combining passion for fashion with expertise in technology, Outfit Generator provides a seamless and immersive experience that revolutionizes the way people approach fashion.
            </p>
  
            <Link
              to='/generated'
              className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
  };

  export default About;