"use client"
import React, { useState } from 'react'
import { MdOutlineSms } from 'react-icons/md'
import { Progress } from "@/components/ui/progress"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CustomInput from '@/components/shared/customInput'

import { calcLaonSuccessProbability } from '@/redux/features/wallet.slice/asyncThunks';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Skeleton } from '@/components/ui/skeleton'

export const CustomPreApproval = () => {
  const dispatch = useAppDispatch();
  const {userinfo ,address ,probability , fetchingStatus} = useAppSelector(s => s.wallet);
  const [CustomPreApprovalvalue ,setCustomPreApprovalvalue] = useState<boolean>(false)

    
    const [inputValueAmount, setInputValueAmount] = useState<number>(0);
    const [inputValueAmountDuration, setInputValueAmountDuration] = useState<number>(0);
    const [inputValueAmountAPR, setInputValueAmountAPR] = useState<number>(0);

  const handleInputChangeAmount = (e: { target: { value: React.SetStateAction<number> } }) => {
    setInputValueAmount(e.target.value);
  };
  const handleInputChangeDuration = (e: { target: { value: React.SetStateAction<number> } }) => {
    setInputValueAmountDuration(e.target.value);
  };
  const handleInputChangeAPR = (e: { target: { value: React.SetStateAction<number> } }) => {
    setInputValueAmountAPR(e.target.value);
  };

  const handleGetcustompreapprovals = () => {
    setCustomPreApprovalvalue(!CustomPreApprovalvalue)
  
    console.log(probability)
    address && dispatch(calcLaonSuccessProbability({
      appliedInterestRate: inputValueAmountAPR, loanRequired_eth: inputValueAmount, repaymentDays: inputValueAmountDuration,
      walletAddress: address
    }))
    
    console.log("===Values of probability ====")
    console.log(probability)
  
  }
  
  const handleTryAgainGetcustompreapprovals = () => {
    setCustomPreApprovalvalue(!CustomPreApprovalvalue)
    setInputValueAmount(0)
    setInputValueAmountDuration(0)
    setInputValueAmountAPR(0)
  }
  const isFormReadyForSubmission = () => {
    // Add your validation criteria here
    // For example, check if all fields have values greater than zero
    return inputValueAmount > 0 && inputValueAmountDuration > 0 && inputValueAmountAPR > 0;
  };
     
  return (
    <div>
     <div className="flex flex-col gap-6 w-full ">
            <span className=" flex gap-3 items-center">
            <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Custom Pre-Approval</h3>
            <MdOutlineSms/>
            </span>

            {CustomPreApprovalvalue? 
            <div className="flex items-center flex-col mt-4 gap-8">
            {fetchingStatus.calcLaonSuccessProbability
            ?<Skeleton className="flex items-center justify-center h-6 w-56 px-5 " />
            :<p className="flex justify-center text-center  pr-2 text-lg">
              Loan Return Probability 
              <br/>{probability}%</p>}
  
            <Button onClick={()=>{handleTryAgainGetcustompreapprovals()}} className=" bg-indigo-600  mt-2  px-3 py-2">Try Again </Button>
            </div>
            : <>  <div className=" flex flex-col gap-1">
            
            <CustomInput
               title = "Amount in ETH"
              placeholder="Enter text"
              // value={inputValueAmount}
              onChange={handleInputChangeAmount}/>
               <CustomInput
              title = "Duration in Days"
              placeholder="Enter text"
              // value={inputValueAmountDuration}
              onChange={handleInputChangeDuration}/>
               <CustomInput
               title = "APR Value"
              placeholder="Enter text"
              // value={inputValueAmountAPR}
              onChange={handleInputChangeAPR}/>
              
              <Button 
               onClick={() => { handleGetcustompreapprovals(); } }
              className="bg-indigo-600 rounded-full py-0 w-full"
              disabled={!isFormReadyForSubmission()}>
                Submit
                </Button>
            </div>
            </>}
           
            
            
            
        </div>    
        
    </div>
  )
}
