import React, { FunctionComponent,useState } from 'react'
import { Iproject } from '../../Type'

import { AiFillGithub,AiFillProject,AiOutlineClose } from "react-icons/ai";
import image1 from '../../image/home.png'
export const  CardProject:FunctionComponent<Iproject>=({name,description,image,pathgithub,category,key_techt})=> {
   const [projectdetail,setProjectdetail]=useState<boolean>()
    return (
        <>
        <div onClick={()=>{setProjectdetail(true)}} className='lg:col-span-4 md:col-span-6 col-span-12 cursor-pointer'>
            <div className='col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-white'>
                <img src={`${image}`} className='h-40 w-full'/>
                <p className='text-center mt-2'>{name}</p>
                </div>
         </div>
            {projectdetail && (<>
          
        
            <div className='absolute top-0 left-0 w-full z-50 bg-gray-900 '>
            <div className='absolute z-51 right-0'>
            <AiOutlineClose size={25} color='white' onClick={()=>{setProjectdetail(false)}} className='absolute z-51 right-0'/>
            </div>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='lg:col-span-6 col-span-12'>
                        <img src={`${image}`} className='h-56 w-full border-2 border-white '/>
                        <div className='flex gap-5 items-center justify-center p-2'>
                            <div className='flex items-center gap-2 dark:bg-dark-700  p-1 rounded justify-center'>
                                <AiFillGithub/><span> github</span>

                            </div>
                            <div className='flex items-center gap-2 p-1 rounded dark:bg-dark-700 justify-center'>
                                <AiFillProject/><span> project</span>
                            </div>
                        </div>

                    </div>
                    <div className='lg:col-span-6 col-span-12 flex flex-col gap-3'>
                        <p className='text-2xl font-bold'>{name}</p>
                        <p className='text-gray-100' >{description}</p>
                        <div className='flex gap-2 flex-wrap'>
                        {
                        key_techt.map((value,index)=>(<>
                        <div  key={index} className='rounded-3xl px-2 bg-blue-50 text-black'>
                            {value}

                        </div>
                        
                        </>))
                      }
                        </div>
                      

                    </div>
                    
                </div>

            </div>
            

            
            </>)}

        </>
  
  )
}
