//import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-zinc-600 w-full py-8">
      <div className="container mx-auto text-center text-white">
        <div className="mb-4">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>info@outfitgenerator.com</p>
          <p>555-555-5555</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="text-gray-400">&copy; 2024 Outfit Generator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;