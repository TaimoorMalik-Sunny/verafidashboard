'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setMyValue } from '@/redux/features/wallet.slice'

export const Navbar= () => {

  const dispatch = useAppDispatch();
  const {userinfo ,address ,attribute,coins,fetchingStatus,titleOfOwner,nftsdataCount,tokendataCount  } = useAppSelector(s => s.wallet);
 
    
  return (
    <div className=" mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-0">
     {/* LOGO    */}
    <div className="flex justify-between">
    <div>  
  
   
   <Image width={150} height={150} src={"/vlogo.png"} alt="logo" />
  </div>
    {/* Nav items */}
    <div className='flex gap-6 items-center'>
      {/* <Link href={'/home'}><p>Home</p></Link>
      <Link href={'/support'}><p>Supprot</p></Link>
      <Link href={'/myaccount'}><p>My account</p></Link> */}
    {/* <RxHamburgerMenu/> */}
   {!userinfo? "" :<Button onClick={()=>{dispatch(setMyValue(false))}} className="bg-indigo-600   rounded-full ">
      Disconnect
      </Button>}
    </div>
    </div>
    
    
    

    </div>
  )
}
