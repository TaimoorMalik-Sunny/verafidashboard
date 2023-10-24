import React,{FC} from 'react'
 
const RootWrapper:FC<{children:React.ReactNode}> = ({children}) => {
 return (
   <div className=" max-w-7xl mx-auto px-3 md:px-10 ">
       {children}
       
   
   </div>
 )
}
export default RootWrapper

// w-11/12
// max-w-7xl
// mx-auto