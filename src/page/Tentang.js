
import React from 'react';
import '../CSS/About.css';
import dinejadImage from "../image_p/photo.png";

const AboutMe = () => {
  return (
    <div className='body'>
      <div className="about">
        <div className="main">
          <div className="about-text">
            <h2>About me</h2>
            <h1>Gaming, Graphic Designer, Photographer, Editing Video</h1>
            <p>
              Perkenalkan nama saya Ravi Ahmad Dinejad, asal kota saya Surabaya. Saya memiliki keahlian di bidang gaming, design, photographer, dan editing video. Saya sekarang bersekolah di SMK Telkom Malang. Saya masih bersekolah dan saya ingin mencari pengalaman untuk mencari ilmu, dan meningkatkan karier.
            </p>
            
          </div>
          <img src={dinejadImage} alt="dinejad"  />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
