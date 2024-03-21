
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Utama from './Utama';
import Beranda from './page/Beranda';
import Kontak from './page/Kontak';
import Tentang from './page/Tentang';
import Karya from './page/Karya';
import Halaman from './page/Halaman';
import Gallery from './page/Galery';




const App = () => {
  return (
    <Router>
      <div>
        
        <Utama />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Kontak" element={<Kontak />} />
          <Route path="/Tentang" element={<Tentang />} />
          <Route path="/Karya" element={<Karya />} />
          <Route path="/Halaman" element={<Halaman />} />
          <Route path="/Galery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
