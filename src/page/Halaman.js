import React from 'react';
import dinImage from "../image_p/CV.png"; // Provide the correct image path
import '../CSS/Halaman.css';

const Halaman = () => {
  return (
    <div className="center-container">
      <div className="image-container">
        <img src={dinImage} alt="dinejad"  />
      </div>
    </div>
  );
};

export default Halaman;
