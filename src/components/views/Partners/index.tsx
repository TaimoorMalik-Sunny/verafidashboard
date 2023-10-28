import React from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import benddao from '../../../../public/benddao.jpeg' 
import blend from '../../../../public/blend.webp'
import nftfi from '../../../../public/nftfi.png'
import visa from '../../../../public/visa.png'
import para from '../../../../public/ParaSpace_Logo.jpg'
import frakt from '../../../../public/frakt.png'  
import lur from '../../../../public/lur.png'  
import sharky from '../../../../public/sharky.png'  
import logo1111 from '../../../../public/logo1111.png'  
import logo1112 from '../../../../public/logo1112.png'  
import logo1113 from '../../../../public/logo1113.jpeg'  
import logo1114 from '../../../../public/logo1114.png'  
import logo1115 from '../../../../public/logo1115.png'  
import pine from '../../../../public/pine.jpg'  
import citrus from '../../../../public/citrus-logo.webp'  
// import citrus from '../../../../public/blend.webp'  


import Image from 'next/image'


export const Partners = () => {
  return (
    <div className="flex justify-center gap-6">
         <Image className=" rounded-full" src={visa} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} />
         <Image className=" rounded-full" src={aavelogo} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={frakt} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={lur} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={sharky} alt="image" width={40} height={2} />
         <Image className=" rounded-full" src={logo1111} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={logo1112} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={logo1113} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={para} alt="image" width={40} height={2} />
         <Image className=" rounded-full" src={logo1115} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={pine} alt="image" width={40} height={2} />
         <Image className="rounded-full" src={citrus} alt="image" width={40} height={2} />
         {/* <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} /> */}
    </div>
  )
}
