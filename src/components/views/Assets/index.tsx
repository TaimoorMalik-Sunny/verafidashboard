'use client';
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,

} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { MdOutlineSms } from 'react-icons/md';
import CryptoProfileInfo from '@/components/shared/CryptoProfileInfo';
import { useAppSelector } from '@/redux/store';
import SkeletonCryproProfileinfo from '@/components/shared/SkeletonCryproProfileinfo';
//import CryptoProfileInfo from '@/components/shared/CryptoProfileInfo'
const defaultTokenImg = "https://icon-library.com/images/free-coin-icon/free-coin-icon-15.jpg"

export const Assets = () => {
  
  
  // const walletAddress = useAppSelector(s => s.wallet.address);
  
  const {userinfo,address,fetchingStatus,nftsdata ,tokendata , nftsdataCount, tokendataCount } = useAppSelector(s => s.wallet);
  


  return (
    
  

    <div className=" rounded-lg ">
      <div className="flex items-center justify-center  gap-x-3  ">
      <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Assets</h3>
        <MdOutlineSms />
         </div>
        
    
      
       {/* <Tabs defaultValue="crypto coins" className=" w-full "> */}
       <div className=" flex justify-center mt-2">
      <Tabs defaultValue="NFTs" className="mt-3 w-96 ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="NFTs">NFTs</TabsTrigger>
          <TabsTrigger value="crypto coins">Crypto Coins</TabsTrigger>
          {/* <TabsTrigger value="LiquidityPools">Liquidity Pools</TabsTrigger> */}

        </TabsList>
        <TabsContent value="crypto coins">
          <Card>
            <CardContent className="space-y-2 overflow-y-auto h-40">
           {userinfo?<> {tokendataCount==0? 
          
          <div className=" flex items-center  justify-center bg-white rounded-lg p-3  border-indigo-600  border mt-2 ml-1 mr-0 ">
     
          <p>No Crypto Coins</p>
          </div>
          :
          <>{fetchingStatus.fetchTokensForOwner? <div className="space-y-1">
            <SkeletonCryproProfileinfo/>
            <SkeletonCryproProfileinfo/>
            </div>: 
              tokendata?.map((tokendata: { imgUrl: any; name: any; symbol: any; balance: any; }, idx: React.Key | null | undefined) => {
                return <div key={idx} className="space-y-1">
             <CryptoProfileInfo image={tokendata.imgUrl || defaultTokenImg} title={tokendata.name || tokendata.symbol || ""} value={tokendata.balance || '0'} />
                </div>
              })
            }</>}</>
          :
          <div className=" flex items-center  justify-center bg-white rounded-lg p-3  border-indigo-600  border mt-2 ml-1 mr-0 ">
     
          <p>Wallet Not Connected</p>
          </div>
          }

            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="NFTs">
          <Card>

            <CardContent className="space-y-2 overflow-y-auto h-40">

        {userinfo?  <>  {nftsdataCount===0? 
          
          <div className=" flex items-center  justify-center bg-white rounded-lg p-3  border-indigo-600  border mt-2 ml-1 mr-0 ">
     
          <p>No NFTs</p>
          </div>
          :
           <> {fetchingStatus.fetchNFTsForOwner? <div className="space-y-1">
            <SkeletonCryproProfileinfo/>
            <SkeletonCryproProfileinfo/>
           
            </div>: 
          
              nftsdata?.map((nftsdata: { rawMetadata: { imgUrl: any; }; name: any; tokenId: any; balance: any; }, idx: React.Key | null | undefined) => {
               console.log(nftsdata)
                return <div key={idx} className="space-y-1">
                   
                 <CryptoProfileInfo image={nftsdata.rawMetadata?.imgUrl || defaultTokenImg} title={nftsdata.name ||nftsdata.tokenId || ""} value={nftsdata.balance || '0'} /> 
                </div>
              })
            }</>}
            </>:
              <div className=" flex items-center  justify-center bg-white rounded-lg p-3  border-indigo-600  border mt-2 ml-1 mr-0 ">
     
              <p>Wallet Not Connected</p>
              </div>

}

            </CardContent>

          </Card>
        </TabsContent>
      </Tabs>
      </div>
      </div>
   
  )
}
