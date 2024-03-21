import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Styles.css';

const Utama = () => {
  return (
    <div>
      
        <nav>
          <h2 className="logo">Porto<span>folio</span></h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Tentang" className="scroll-link">About me</Link></li>
            <li><Link to="/Karya" className="scroll-link">Skill</Link></li>
            <li><Link to="/Kontak" className="scroll-link">Contact</Link></li>
            <li><Link to="/Galery" className="scroll-link">Gallery</Link></li>
            
          </ul>
          <a href="/Halaman"  rel="noreferrer">
            <div className="btn">Unduh Portofolio</div>
          </a>
        </nav>
      </div>
    
  );
};
export default Utama;
