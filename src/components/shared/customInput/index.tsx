
import React from 'react';
import { VscSearch } from 'react-icons/vsc'

const CustomInput = ({ placeholder, onChange , title }:{ placeholder:string, onChange:any , title:string }) => {
  return (
    <div className="flex items-center  border-2 rounded-full "> {/* Adjust width and other styles as needed */}
      <div className="flex items-center justify-center bg-indigo-600  py-2  w-56 rounded-full">
        <span className=" text-white text-xs whitespace-nowrap overflow-hidden">{title}</span>
      </div>
      <input
        type="text"
        placeholder={""}
     
        onChange={onChange}
        className="w-full text-center  border-none outline-none rounded-l-full"
      /><span className="px-2 py-1">
        <VscSearch/>
      </span>
      
    </div>
  );
};

export default CustomInput;