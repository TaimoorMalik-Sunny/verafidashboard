'use client'
import React, { useEffect } from 'react';
 import Swiper from 'swiper/bundle';
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'; // Import Swiper CSS
import './SwiperComponent.css'; // Import your component-specific CSS
import { PreApprovals } from '@/components/views/Pre-Approvals';
import { CustomPreApproval } from '@/components/views/CustomPre-Approval';
import { VerafiGrade } from '@/components/views/VerafiGrade';
import { Assets } from '@/components/views/Assets';
import Cardview from '../Cardview';
import Cardview2 from '../Cardview2';
import Cardview3 from '../Cardview3';



const SwiperComponent = () => {
    useEffect(() => {
      const swiper = new Swiper('.sample-slider', {
        loop: true, // Loop
        slidesPerView: 3,
        centeredSlides: true,
        effect: "coverflow",    //add(applying the coverflow effect)
       
        pagination: {
        //   el: '.swiper-pagination', // Pagination dots
        },
        navigation: {
          nextEl: '.swiper-button-next', // Next button
          prevEl: '.swiper-button-prev', // Previous button
        },
      });
    }, []);
  
    return (
      <div className="sample-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {/* <img src={'./BoredApeYachtClub.jpg'} alt="Sample 1" /> */}
            <Cardview/>    
          </div>
          <div className="swiper-slide">
            {/* <img src={'./aavelogo.png'} alt="Sample 2" /> */}
            <Cardview2/> 
          </div>
          <div className="swiper-slide">
            {/* <img src={'./BoredApeYachtClub.jpg'} alt="Sample 3" /> */}
            <Cardview3/>  
          </div>
          <div className="swiper-slide">
            {/* <img src={'./aavelogo.png'} alt="Sample 4" /> */}
            <Cardview/> 
          </div>
          <div className="swiper-slide">
            {/* <img src={'./aavelogo.png'} alt="Sample 4" /> */}
            <Cardview2/> 
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  };
  
  export default SwiperComponent;
  
