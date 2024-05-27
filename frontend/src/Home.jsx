//import React from 'react'
import backgroundImage from './images/background2.webp';
import Landing from "./components/Landing";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';


const Home = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-7"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <Landing />
      <About />
      <Footer />
    </div>
  )
}

export default Home;
