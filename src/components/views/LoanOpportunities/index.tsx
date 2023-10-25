
import PerspectiveSection from '@/components/shared/Slider'
import SwiperComponent from '@/components/shared/SwiperComponent'
import SwiperComponent2 from '@/components/shared/SwiperComponent2'
import { useAppSelector } from '@/redux/store'
import { ClassNames } from '@emotion/react'
import React from 'react'
import { MdOutlineSms } from 'react-icons/md'

export const LoanOpportunities = () => {
  const { getHighestLtvLoans, fetchingStatus, nftcounts } = useAppSelector(s => s.wallet);
  return (
    <div className=" rounded-lg ">
        <div className="flex flex-col  gap-x-1 w-full ">
            <span className=" flex justify-start items-center ml-6 gap-x-3 ">
            <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Loan Opportunities</h3>
            <MdOutlineSms/>
            </span>
           
            {!fetchingStatus.getHighestLtvLoans ?<div className="flex ml-16 mt-3  w-11/12 ">
             <SwiperComponent2/>
             </div>:""}              
            
           
        </div>
    </div>
  )
}
