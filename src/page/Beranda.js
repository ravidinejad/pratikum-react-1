import React from 'react';
import dinejadImage from "../image_p/dinejad.png";
import '../CSS/Beranda.css';
const Beranda = () => {
  return (
    <div>
      <div className="logo-container1">
        <img src={dinejadImage} alt="dinejad" />
      </div>
    </div>
  )
};

export default Beranda;
