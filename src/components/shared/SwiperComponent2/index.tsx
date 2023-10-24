'use client'
import React, { useEffect } from 'react';
 import Swiper from 'swiper/bundle';
//import Swiper from ''swiper/bundle.min.js;
 //import Swiper from ''swiper/bundle.css;
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'; // Import Swiper CSS
import './SwiperComponent.css'; // Import your component-specific CSS
import { PreApprovals } from '@/components/views/Pre-Approvals';
import { CustomPreApproval } from '@/components/views/CustomPre-Approval';
import { VerafiGrade } from '@/components/views/VerafiGrade';
import { Assets } from '@/components/views/Assets';
import Cardview from '../Cardview';
import Cardview2 from '../Cardview2';
import CardviewC from '../CardviewC';
import CardviewA from '../CardviewA';
import CardviewB from '../CardviewB';
import { useAppSelector } from '@/redux/store';
//import { Swiper } from 'swiper';





const SwiperComponent2 = () => {


  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  const {getHighestLtvLoans, fetchingStatus, nftcounts} = useAppSelector(s => s.wallet);



  useEffect(() => {
    const swiper = new Swiper('.sample-slider', {
     
        // loop: true, // Loop
        // slidesPerView: 3,
        // centeredSlides: true,
        // effect: "slide", 
        loop: true,                         // loop
        slidesPerView: 3,                   // how many slides to show
        centeredSlides: true,               // centering the first slide
        effect: "coverflow",                // applying the coverflow effect
        coverflowEffect: {
            rotate: 0,                      // Rotate of the prev and next slides
            depth: 200,                     // Depth of the prev and next slides
            stretch: 30,                    // Space between the slides
            modifier: 1,                    // Multiply the values of rotate, depth, and stretc
            //  scale: 1,                       // Size ratio of the prev and next slides
            slideShadows: false,            // Presence of shadow on the surfaces of the prev and next slides
        }, 
      pagination: {
        // el: '.swiper-pagination', // Pagination dots
      },
      navigation: {
        nextEl: '.swiper-button-next', // Next button
        prevEl: '.swiper-button-prev', // Previous button
      },
    });
  }, []);
  
    return (
      <div className=' w-4/5'>
      <div className="sample-slider swiper-container">
      <div  className="swiper-wrapper">
       
      
         
       
         {getHighestLtvLoans?.map(( loan :any, idx: number )=>{
            return (  
              <> 
              <div  key={idx} className="swiper-slide">  
              <CardviewA title={loan.asset['name']} balance={loan.asset['balance']} loanDurationSec={loan.loanDurationSec} ltv={loan.ltv} titleimage={loan.asset['imgUrl']}/>    
              </div>
              </>
       
             
          )
        
            
          })
      
      }
     
            <div className="swiper-slide">
           
           <CardviewB/> 
         </div>  
             
          <div className="swiper-slide">
           
            <CardviewB/> 
          </div>
          <div className="swiper-slide"> 
         
            <CardviewC/>  
          </div>
          <div className="swiper-slide">
        
            <CardviewB/> 
           </div> 
           <div className="swiper-slide"> 
         
         <CardviewC/>  
       </div>
          </div>
       
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      </div>
    );
  };
  
  export default SwiperComponent2;
  
