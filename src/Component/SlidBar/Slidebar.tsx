import React,{FunctionComponent} from 'react'

import { AiFillYoutube,AiOutlineFacebook } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { Icorlor } from '../../Type';

export const  Slidebar:FunctionComponent<Icorlor>=({theme,setTheme})=> {
  return (
    <div className={`flex flex-col  h-full bg-white dark:bg-gray-900 justify-center dark:shadow-custom-light items-center p-5  py-5`}>
       <img src='https://files.combyne.com/97834614f86f0ebc0e4d6e229280105b_image.jpg' alt='user avarta'
        className='h-36 w-36 rounded-full'
       />
       <h3 className='mt-3 mb-4 text-3xl font-bold' style={{fontFamily:" Dancing Script"}}>
          <span className='text-green-600'>Hy</span> Nguyễn 
       </h3>
       <p className={`mb-4 w-full text-center  bg-gray-200  dark:bg-dark-700  rounded-xl p-1 cursor-pointer`}  style={{fontFamily:"Labrada cursive "}}>website developer</p>
       <p className={`mb-4 w-full text-center  bg-gray-200  dark:bg-dark-700  rounded-xl p-1 cursor-pointer`}  style={{fontFamily:"Labrada cursive "}}>App developer</p>
       <div className='flex gap-10 mb-5'>
        <AiFillYoutube size={23} className='text-green-600'/>
        <AiOutlineFacebook size={23 } className='text-green-600' />
        <BsTiktok size={23} className='text-green-600'/>
       </div>

       {/* address */}
       <div className={` w-full p-4 rounded dark:bg-dark-700  bg-gray-200 `} >
        <p className='text-center cursor-pointer' style={{fontFamily:"Labrada cursive"}}>67/9 PhanVanHon quận 12 TP.HCM</p>
        <p  className='text-center cursor-pointer' style={{fontFamily:" "}}> giahynguyen33@gmail.com</p>
        <p  className='text-center cursor-pointer' style={{fontFamily:" "}}> 03994843301/0599483301</p>
       </div>
       <div className='flex flex-col'>
        <button style={{fontFamily:" "}} className=' py-1 rounded-3xl cursor-pointer   bg-gradient-to-r from-blue-400 to-green-400 text-white mt-5 mb-3 px-20'>email me</button>
        <button style={{fontFamily:" "}}  onClick={()=>{setTheme()}} className='bg-gradient-to-r cursor-pointer   from-green-400 to-blue-400 rounded-3xl py-1 text-white'> Light UI</button>
       </div>
    </div>
  )
}
