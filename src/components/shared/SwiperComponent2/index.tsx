'use client'
import React, { useEffect, useState } from 'react';
// import Swiper from 'swiper/bundle';
//import Swiper from ''swiper/bundle.min.js;
//import Swiper from ''swiper/bundle.css;
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper-bundle.min.css'; // Import Swiper CSS
// import './SwiperComponent.css'; // Import your component-specific CSS
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
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import Link from 'next/link';


const SwiperComponent2 = () => {


  // <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  const { getHighestLtvLoans, fetchingStatus, nftcounts } = useAppSelector(s => s.wallet);
  // const [swiper, setSwiper] = useState<Swiper | null>(null);

  return (
    <div className=' w-4/5'>
      <Swiper
        loop
        slidesPerView={3}
        centeredSlides={true}
        effect={'coverflow'}
        // grabCursor={true}
        coverflowEffect={{
          rotate: 0,                      // Rotate of the prev and next slides
          depth: 200,                     // Depth of the prev and next slides
          stretch: 30,                    // Space between the slides
          modifier: 1,                    // Multiply the values of rotate, depth, and stretc
          //  scale: 1,                       // Size ratio of the prev and next slides
          slideShadows: false,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        navigation={{
          nextEl: '.swiper-button-next', // Next button
          prevEl: '.swiper-button-prev', // Previous button
        }}
      >
        
      {!fetchingStatus.getHighestLtvLoans?<>{getHighestLtvLoans?.map((loan: any, idx: number) => {
          return (
            <>
            <SwiperSlide key={idx}>
              <Link href={loan.loanPlatform['websiteUrl']}>
              <CardviewA title={loan.asset['name']} balance={loan.amountUsd} apr={loan.apr} ltv={loan.ltv} titleimage={loan.asset['imgUrl']} />
              </Link>
            </SwiperSlide>
          
            </>
            
          )
        })}</>
        :<>
      <SwiperSlide>
          <CardviewB />
        </SwiperSlide>
          <SwiperSlide>
          <CardviewC />
        </SwiperSlide>
        <SwiperSlide>
          <CardviewB />
        </SwiperSlide>
        <SwiperSlide>
          <CardviewC />
        </SwiperSlide>
        <SwiperSlide>
          <CardviewB />
        </SwiperSlide>
        <SwiperSlide>
          <CardviewC />
        </SwiperSlide>
        </>
        } 
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>

    </div>
  );
};

export default SwiperComponent2;

