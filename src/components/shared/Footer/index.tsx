import { Button } from '@/components/ui/button'
import { setMyValue } from '@/redux/features/wallet.slice';
import { useAppDispatch } from '@/redux/store';
import React from 'react'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import logo from '../../../../public/vlogo.png'
import Image from 'next/image'

export const Footer = () => {
    const dispatch = useAppDispatch();

  return (
   <>
  <div className="flex flex-wrap  justify-between    items-center m-1 px-4 py-2 ">
           {/* for icons */}
            <div className="flex flex-wrap p-4 gap-4">
               
                <Image src={logo} width={70} height={70} alt="logo"/>
                <span className="flex justify-center items-center gap-x-8">
                <BsTwitter size={25}/>
                <BiLogoDiscordAlt size={25}/>
               </span>


            </div>
            {/* for text  */}
            <div className="flex flex-wrap justify-center items-center lg:flex gap-5">
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">Terms & Conditions</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">Privacy Policy</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">FAQ</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">Documentation</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">© 2023 VERAFI</p>


            </div>
         </div>
   </>
  )
}
