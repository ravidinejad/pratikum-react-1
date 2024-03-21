import React from 'react';
import '../CSS/Skill.css';
import dinejadImage1 from "../image_p/skill 1.png";
import dinejadImage2 from "../image_p/skill 2.png";
import dinejadImage3 from "../image_p/skill 3.png";
import dinejadImage4 from "../image_p/skill 4.png";
import dinejadImage5 from "../image_p/skill 6.png";
import 'typeface-poppins';

const Skill = () => {
  return (
    <div className="skill">
      <div className="skill-text">
        <h2>My Skill</h2>
      </div>
      <div className="main">
        <div className="image-container1">
          <a href="https://youtu.be/orxq1ON4ecU?si=KGVCWAlOJOqukTxk" target="_blank" rel="noopener noreferrer">
            <img src={dinejadImage1} alt="dinejad1" />
          </a>
          <a href="https://m.mobilelegends.com/" target="_blank" rel="noopener noreferrer">
            <img src={dinejadImage2} alt="dinejad2" />
          </a>
          <a href="https://www.figma.com/file/aSVn0WwQhBASiNxEp4ngc7/Untitled?type=design&node-id=0%3A1&mode=design&t=lmdZ1BrZn5Jqzdyi-1" target="_blank" rel="noopener noreferrer">
            <img src={dinejadImage3} alt="dinejad3" />
          </a>
          <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
            <img src={dinejadImage4} alt="dinejad4" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            <img src={dinejadImage5} alt="dinejad5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skill;
