"use client"
import React from 'react'
import {MdOutlineSms} from 'react-icons/md'
import { Progress } from "@/components/ui/progress"
import ProgressBar2 from '@/components/shared/PrograssBar'
import { useAppSelector } from '@/redux/store'
import { CalendarDays } from "lucide-react"
import nftfi from '../../../../public/nftfi.png'
import blend from '../../../../public/blend.webp'
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import CryptoProfileInfo from '@/components/shared/CryptoProfileInfo'
import { Skeleton } from '@/components/ui/skeleton'
import LabelPositions from '@/components/shared/PrograssBar'



export const PreApprovals = () => {
    const [progress, setProgress] = React.useState(13)
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])
     
      const {preApprovalNftfi ,preApprovalBendDao , fetchingStatus, nftcounts} = useAppSelector(s => s.wallet);
 

  return (
    <div className=" rounded-lg">
        <div className="flex  flex-col gap-6 w-full ">
            <span className="flex items-center gap-6">
            <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Pre-Approvals
             </h3>
           <MdOutlineSms/>
            </span>
            
         {fetchingStatus.getWalletNftsCount?<Skeleton className="h-4 w-[150px]"/> :
         
      <>{ nftcounts?<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {nftcounts?.noOfBlueChipNftTokens}
            </h1>
            
          :<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            0
            </h1>}
          </>
            }
            {/* <Progress value={progress} className="w-[60%]" /> */}
          

            <HoverCard>
      <HoverCardTrigger asChild>
        {nftcounts.noOfBlueChipNftTokens>0?
    <span className="hover:underline">
        <LabelPositions  value={+Number((nftcounts?.noOfBlueChipNftTokens)/(nftcounts?.noOfNftTokens)*100).toFixed(2)}/>
    </span>:
    <LabelPositions value={0}/>
       }
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
      
         {fetchingStatus.calcPreApproval? <div className="flex items-center justify-between bg-white rounded-lg p-3  border mt-2 ml-1 mr-0 ">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>  :   <CryptoProfileInfo image={blend}  title={"BendDAO"}  value={preApprovalBendDao+"ETH"}/>}
           
          { fetchingStatus.calcPreApproval?
           <div className="flex items-center justify-between bg-white rounded-lg p-3  border mt-2 ml-1 mr-0 ">
           <Skeleton className="h-12 w-12 rounded-full" />
           <div className="space-y-2">
             <Skeleton className="h-4 w-[150px]" />
             <Skeleton className="h-4 w-[100px]" />
           </div>
         </div> 
            :<CryptoProfileInfo image={nftfi}  title={"NFTFI"} value={preApprovalNftfi+"ETH"}/>
 }      
      </HoverCardContent>
    </HoverCard>

           
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Approval Rating
            </h4>
          
         
              
            
        </div>

    </div>  
  )
}
