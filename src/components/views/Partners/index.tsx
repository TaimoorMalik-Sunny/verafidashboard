import React from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import benddao from '../../../../public/benddao.jpeg'
import blend from '../../../../public/blend.webp'
import nftfi from '../../../../public/nftfi.png'
import visa from '../../../../public/visa.png'
import Image from 'next/image'

export const Partners = () => {
  return (
    <div className="flex justify-center gap-6">
         <Image className=" rounded-full" src={visa} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} />
         <Image className=" rounded-full" src={visa} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} />
         <Image className=" rounded-full" src={visa} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} />
         <Image className=" rounded-full" src={visa} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
         {/* <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} /> */}
    </div>
  )
}
