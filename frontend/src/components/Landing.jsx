//import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/background.jpg';
import Typing from 'react-typing-effect';

const Landing = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="text-center mb-12 animate-fade-in"> 
        <h1 className="text-5xl font-bold text-white mb-4">WELCOME TO OUTFIT GENERATOR</h1>
        <Typing
            className='text-3xl font-bold text-zinc-300 mb-4'
            text={[ 'Just write your prompt','Unleash your style with AI', 'Get your everyday wear ideas from us']}
            speed={80}
            eraseDelay={500}
        />
      </div>

      <div className="max-w-md flex mx-auto  animate-slide-up"> 
      <Link to='/generated'>
        <button className="bg-indigo-400 hover:bg-indigo-700 text-2xl text-white font-bold py-2 px-4 rounded">
              Get Started
        </button>
      </Link>
        
       
      </div>
    </div>
  );
};

export default Landing;
