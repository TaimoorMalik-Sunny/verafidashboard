'use client'
import React, { useEffect, useState } from 'react'
import { PreApprovals } from '../Pre-Approvals'
import { Button } from '@/components/ui/button'
import { Partners } from '../Partners'
import { CustomPreApproval } from '../CustomPre-Approval'
import { LoanOpportunities } from '../LoanOpportunities'
import Image from 'next/image'
import aavelogo from '../../../../public/aavelogo.png'
import { Skeleton } from '@/components/ui/skeleton';
import { CgProfile } from 'react-icons/cg';

import { VerafiGrade } from '../VerafiGrade'
import { Assets } from '../Assets'
import PerspectiveSection from '@/components/shared/Slider'
import TransformBox from '@/components/shared/TransformBox'
import '../../shared/TransformBox'; 
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { getWalletAttributes, setMyValue,getWalletNftsCount } from '@/redux/features/wallet.slice';
import { calcCreditScore, calcPreApproval, fetchNFTsForOwner, fetchTitleForOwner, fetchTokensForOwner, getHighestLtvLoans } from '@/redux/features/wallet.slice/asyncThunks'
import Gettingavatarofowner from '@/components/shared/Gettingavatarofowner';
import DaysAgoCounter from '@/components/shared/DayAgoCounter';

import { OwnedNft} from 'alchemy-sdk';
import { Footer } from '@/components/shared/Footer'
import { GRAPHQL_API } from '@/app-config'


let ethereum:any 
export const Hero = () => {
  
  const {userinfo ,address ,attribute,coins,fetchingStatus,titleOfOwner,nftsdataCount,tokendataCount ,nftcounts  } = useAppSelector(s => s.wallet);
 
 
  useEffect(()=>{
    ethereum = (window as  any ).ethereum;
  
  
   
  },[address])
  const dispatch = useAppDispatch();
  const [connectionStatus, setConnectionStatus] = useState("");
  const [etherValuestate, setEtherValuestate] = useState("");
  const handleConnectwallet = () => {
      
      
     connectToWallet()
    // dispatch(getWalletNftsCount({walletAddress:"0xfa3ce71036dd4564d7d8de19d2b90fb856c5be82"}))
   
  
    
      
      
      console.log("call")
      console.log(GRAPHQL_API)
      console.log("is ko check krna hy "+userinfo)
      
    
     
   
       
   }
   const connectToWallet = async () => {
    console.log(ethereum)
 
    if (ethereum) {
      try {
        // Requesting access to MetaMask wallet
       const etherValue= await ethereum.request({ method: "eth_requestAccounts" }).
  
       then((addr: string[])=>{
        // setEtherValuestate(addr)
        //  address && 
      
       
        
        dispatch(setMyValue(addr[0])); ;
         
       
         dispatch(getWalletAttributes( { walletAddress:addr[0]}));
        
        // dispatch(getWalletNftsCount({ walletAddress:addr[0]}))
        
        // dispatch(getWalletNftsCount({walletAddress:"0xfa3ce71036dd4564d7d8de19d2b90fb856c5be82"}))
        dispatch(getWalletNftsCount({walletAddress:addr[0]}))

        dispatch(getHighestLtvLoans())
        
        // 0xfa3ce71036dd4564d7d8de19d2b90fb856c5be82
      
        
       //  dispatch(getWalletAttributes( { walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}));
        
        
        //  address && 
        
        //  address && 
         dispatch(calcCreditScore({ walletAddress:addr[0]}))
       //  dispatch(calcCreditScore({ walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}))
        
        //  address && 
        dispatch(calcPreApproval({ walletAddress:addr[0]}))
        
        dispatch(fetchNFTsForOwner({walletAddress:addr[0]}));
      //  dispatch(fetchNFTsForOwner({walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}));
      // Fetch Tokens for a wallet address
       dispatch(fetchTokensForOwner({ walletAddress:addr[0]}));
       // dispatch(fetchTokensForOwner({ walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}));
       
        //dispatch(fetchTitleForOwner({ walletAddress:"0x0fe93C4feBD368204D81758468EE5BFAF623fA5f"}))
        dispatch(fetchTitleForOwner({ walletAddress:addr[0]}))
       }
       );
     
      
        setConnectionStatus("Successfully Connected");
        // state.address = etherValue
        console.log(connectionStatus)
      } catch (error) {
        setConnectionStatus("Connection Failed");
        console.error("MetaMask connection error:", error);
      }
    } else {
      setConnectionStatus("MetaMask Not Detected");
    }
   
  };




  return (
    <div className=" flex flex-col justify-center items-center mt-2  mb-2 ">
    
     {userinfo?
      <div className=" flex justify-center  px-8 py-3 rounded-lg shadow-lg">
      <div className="flex items-center gap-4">
      <div className="flex flex-col items-center">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Active Since
      </h4>
      <p className="text-sm text-muted-foreground">
          {/* 12 05 2023 */}
         
         {fetchingStatus.getWalletDetails?<Skeleton className="  bg-indigo-400 h-3 w-[90px]" />:<DaysAgoCounter numberOfDays={attribute?.wallet_age_days_att_7}/>}
      </p>
      </div>
      <div className="flex flex-col items-center">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
      Balance
      </h4>
      <p className="text-sm text-muted-foreground">
    {fetchingStatus.getWalletDetails?<Skeleton className="  bg-indigo-400 h-3 w-[90px]" /> :<>{attribute?.wallet_balance_eth_att_1} ETH</>}
        </p>
      </div>
        <div className=" py-1 px-1 flex w-60  items-center bg-white border-2  border-indigo-600   rounded-lg ">
       
     { fetchingStatus.getWalletDetails  ?<Skeleton className="  bg-indigo-400 h-10 rounded-full w-[40px]" />:<Gettingavatarofowner  address={`address`} diameter={30} /> }
      <div className="flex flex-col items-center ml-16">
     
      {titleOfOwner?titleOfOwner.map((titleOfOwner: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; } , idx: any)=>{
             return  <h1 key={idx}> {titleOfOwner.title }</h1>
             
            }):  
            <Skeleton className="  bg-indigo-400 h-3 w-[90px]" /> }
    
    {fetchingStatus.getWalletDetails? <Skeleton className="  mt-2 bg-indigo-400 h-3 w-[90px]" /> :<p className="w-32 overflow-hidden overflow-ellipsis text-xs text-gray-400">{attribute?.wallet_address}</p>
    }  
      </div>
      
        </div>
        <div className="flex flex-col items-center">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          NFTs
        </h4>
        <p className="text-sm text-muted-foreground">
        { fetchingStatus.fetchNFTsForOwner?<Skeleton className=" bg-indigo-400 h-3 w-[30px]" />: <>{nftsdataCount?nftsdataCount:0}</>}
          </p> 
        </div>
        <div className="flex flex-col items-center">
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Crypto
        </h4>
        <p className="text-sm text-muted-foreground">
       { fetchingStatus.fetchTokensForOwner?<Skeleton className="  bg-indigo-400 h-3 w-[30px]" /> :<>{tokendataCount}</>}
        </p> 
        </div>
        
      {/* <Button  onClick={()=>{dispatch(setMyValue(false))}}className="bg-indigo-600   rounded-full ">
      Disconnect
      </Button> */}
     
      </div>
      </div>
     :

  <> {fetchingStatus.getWalletDetails?
    <div className=" flex justify-center w-80 px-8 py-3 rounded-lg shadow-lg">
   <Skeleton className="h-6 w-[200px]" /> 
      </div> 
   :<div className=" flex justify-center w-80 px-8 py-3 rounded-lg shadow-lg">
    <Button  onClick={()=>{handleConnectwallet()}}className="bg-indigo-600   rounded-full ">
      Connect Wallet
      </Button>
      </div>
      }</>
     }

      {/* grid grid-cols-3 gap-x-1 mt-3 transform-box  blur-lg hover:blur-0  transition: 0.4s ease-in-out transform */}
        <span className="blur-0 blur-lg"></span>
        <div className={`grid grid-cols-3 gap-x-1 mt-3 transition delay-1000 ease-in-out ${userinfo?"transform-box-none blur-0":"transform-box blur-lg"}`}>
            <div className="w-100 px-6 py-3 h-full rounded-lg shadow-lg ">
             <PreApprovals/>
            </div>
            <div className=" w-100 px-6 py-3 h-full  rounded-lg shadow-lg ">
            <VerafiGrade/>
            </div>
            <div className=" w-100 px-6 py-3 h-full  rounded-lg shadow-lg   ">
            <CustomPreApproval/>
            </div>
            <div className=" col-span-3  px-6 py-3 h-full rounded-lg shadow-lg ">
            <Partners/>
            </div>
            <div className="  col-span-3  ">
                <div className=" grid grid-cols-2 gap-2">
                    <div className="px-2 py-3  h-full  rounded-lg shadow-lg  ">
                    <LoanOpportunities/>
                    </div>
                    <div className="px-6 py-3 h-full rounded-lg shadow-lg ">
                    <Assets/>
                    </div>

                </div>
            </div>
            <div className="col-span-3 ">
              {/* footer */}
              <Footer/>
          
              </div>          

        </div>
    
       
    </div>
  )
}
