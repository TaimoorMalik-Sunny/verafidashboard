import React from 'react';
import './PerspectiveSection.css'; // Import your CSS file


const PerspectiveSection = () => {
    return (
      <div className="section section_light">
        <div className="container">
          <div className="perspective">
            <div className="perspective__flex">

           

              <div className="perspective__col">
                <div className="perspective__item perspective-item">
                  <div className="perspective-item__icon">
                    <img src="./BoredApeYachtClub.jpg" alt="" />
                  </div>
                  <div className="perspective-item__title">Bored Ape Yacht Club</div>
                  <div className="perspective-item__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  </div>
                </div>
              </div>

              <div className="perspective__col">
                <div className="perspective__item perspective-item">
                  <div className="perspective-item__icon">
                    <img src="./BoredApeYachtClub.jpg"  alt="" />
                  </div>
                  <div className="perspective-item__title">Bored Ape Yacht Club</div>
                  <div className="perspective-item__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  </div>
                </div>
              </div>
              <div className="perspective__col">
                <div className="perspective__item perspective-item">
                  <div className="perspective-item__icon">
                    <img src="./BoredApeYachtClub.jpg"  alt="" />
                  </div>
                  <div className="perspective-item__title">Bored Ape Yacht Club</div>
                  <div className="perspective-item__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PerspectiveSection;
  