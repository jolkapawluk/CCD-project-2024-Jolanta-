//import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-zinc-600 rounded-md w-4/5 mx-10 p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-green-200 font-bold text-xl">
        Outfit Generator
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="text-white hover:text-gray-300">
           My Gallery
          </Link>
        </li>
        
      </ul>
    </nav>
    </header>
  );
};

export default Header;


{/* <header className="bg-zinc-600 rounded-md  w-4/5 mx-10 p-4">
<nav className="container mx-auto flex justify-between items-center">
  <Link to="/" className="text-green-200 font-bold text-xl">
    Outfit Generator
  </Link>
  <ul className="flex space-x-4">
    <li>
      <Link to="/" className="text-white hover:text-gray-300">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="text-white hover:text-gray-300">
        About
      </Link>
    </li>
    <li>
      <Link to="/gallery" className="text-white hover:text-gray-300">
       My Gallery
      </Link>
    </li>
    
  </ul>
</nav>
</header> */}