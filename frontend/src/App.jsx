import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Gallery from './components/Gallery';
import Home from './Home'; 
import About from './components/About';
import Generated from './Generated'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generated" element={<Generated />} /> 

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
