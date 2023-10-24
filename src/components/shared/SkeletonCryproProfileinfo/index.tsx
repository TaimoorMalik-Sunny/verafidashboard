import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'




const SkeletonCryproProfileinfo = () => {
  return (
    <div className=" flex items-center justify-between bg-white rounded-lg p-3  border-indigo-600  border mt-2 ml-1 mr-0 ">
      
      <div className="flex items-center space-x-2">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[180px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
    </div>
  )
}

export default SkeletonCryproProfileinfo
