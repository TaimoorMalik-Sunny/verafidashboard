import React, { Component } from 'react'
import Image, { StaticImageData } from 'next/image'

interface ImageProps {
  title: string;
  value: string |number;
  image: StaticImageData | string ;
}
const CryptoProfileInfo = ({ title, value, image }: ImageProps) => {
  return (
    <div className=" flex items-center justify-between bg-white rounded-lg p-3  border-2  border-x-indigo-600 border-y-indigo-600  mt-2 ml-1 mr-0 ">
      
        {typeof image === 'string' ?
          <img src={image} alt="" className='w-10' /> :
          <Image className="" src={image} alt="image" width={40} height={2} />
        }
        <span className="flex items-center  flex-col px-2 justify-between">
        <h1 className="ml-2 text-base">{title}</h1>
     
      <p className=" text-xs overflow-hidden overflow-ellipsis text-gray-500">{value}</p>
      </span>
    </div>
  )
}

export default CryptoProfileInfo
