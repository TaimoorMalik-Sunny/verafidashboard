'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { MdOutlineSms } from 'react-icons/md'
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import { generatePdf } from '@/redux/features/wallet.slice/asyncThunks'

export const VerafiGrade = () => {
   
  const {address,calUserRep,userinfo , score,fetchingStatus } = useAppSelector(s => s.wallet);
  
  const dispatch = useAppDispatch();

  const isFormReadyForSubmission = () => {
    // Add your validation criteria here
    // For example, check if all fields have values greater than zero
    return score > 0 ;
  };
     

  const handlePDFwalletReport = () => {
       
      // console.log("call PDF")
      const walletAddress = address
      // downloadPDF({walletAddress});
      
      dispatch(generatePdf({ walletAddress:walletAddress}))
       }
    // ================  CODE for DOWNLOAD PDF ================
 
 
 const downloadPDF = async ({walletAddress}:{walletAddress:string|undefined|null}) => {
  const apiEndpoint = `https://yekzta3qa8.execute-api.us-east-1.amazonaws.com/prod/generate-pdf?wallet_address=${walletAddress}`
  try {
      const resp = await axios.get(apiEndpoint, { responseType: 'blob' });
      console.log("res.data ===>", resp.data);
      const url = window.URL.createObjectURL(new Blob([resp.data], { type: "application/pdf" }));
      const link = document.createElement('a');
      link.href = url;
      link.target = "_blank"
      //link.setAttribute('download', `Transactions-Report.pdf`);
      document.body.appendChild(link);
      link.click();
  
  } catch (error) {
      console.log((error as any).response);
      return { error } as any
  }
}

const  score_percentage = score?((score-300)/550) * 100 : 0
  
// useEffect(()=>{


 
// },[address])
  
   return (
    <div className="flex flex-col rounded-lg ">
    <div className="flex flex-col gap-x-3 w-full ">
        <span className=" flex items-center gap-4">
        <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Verafi Grade</h3>
            <MdOutlineSms/>
        </span>
        </div>
        <div className="flex  gap-x-4">       
           <div className="flex flex-col items-center gap-y-4 gap-2 mt-5 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
       {fetchingStatus.calcCreditScore?<Skeleton className="h-12 w-[80px]" />:<>{score}</>}
        </h1>
      
        {fetchingStatus.generatePdf
        ?<Skeleton className=" bg-amber-300 h-4 w-[130px]" />
        :<button onClick={()=>{handlePDFwalletReport()}} 
        className="bg-yellow-500 rounded-full w-32 hover:bg-yellow-400 "
        disabled={!isFormReadyForSubmission()}>
          Download 
          <br />
        Report </button>}
        
        </div>

        <span className=" w-40 h-32"> 
    <Flat
	progress={+Number(score_percentage).toFixed(1)}
	sign={{ value: '%', position: 'end' }}
	text={'Grade'}
	sx={{
		strokeColor: '#ffbb00',
		barWidth: 3,
		valueSize: 15,
		textSize: 23,
    miniCircleColor: '#000000'
	}}
/>
</span>

        </div>
        
        
        {/* <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Approval Rating
        </h4> */}
        {/* Download */}


        
   
    
    
  


</div>  
  )
}

