import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Login from './pages/Login';
import Education from './pages/Education';
import SkyMap from './pages/SkyMap';
import Game from './pages/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skymap" element={<SkyMap />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;