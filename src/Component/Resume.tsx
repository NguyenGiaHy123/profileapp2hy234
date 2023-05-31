import React from 'react'
import { Languages, Tooll } from '../data'
import { Process } from './SlidBar/Process'

function Resume() {
  return (
    <div className="grid grid-cols-12 gap-5" style={{fontFamily:"Roboto"}}>
      <div className='lg:col-span-6 col-span-12'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold text-xl'>Giáo dục</h1>
          <p className=' text-lg'>Chuyên ngành kỹ thuật phần mềm </p>
          <p className=' text-md'>Học kỳ của Ngành (2020-2024)</p>
          <p className='text-gray-500'>Trong quá trình học tại Trường Đại học Công nghiệp TP.HCM tôi đã có kinh nghiệm 2 năm làm việc trong câu lạc bộ An Toàn Thông Tin </p>
          <p className='text-xl font-bold my-2'>Ngôn ngữ và thư viện </p>
          <div className='flex flex-col gap-5 '>
          
              {Languages.map((value,index)=><>
                <div className='w-full bg-gray-200 rounded-full' key={index}>
               <Process name={value.name} level={value.level} Icon={value.Icon}/>
              </div>
              </>)}
            
           
          </div>
        </div>

      </div>
      <div className='lg:col-span-6 col-span-12 flex flex-col gap-3'>
      <h1  className='font-bold text-xl'>Kinh nghiệm </h1>
          <p className=' text-lg'>Thực tập sinh  </p>
          <p className=' text-md'>website và app android </p>
          <p className='text-gray-500'>Đã tường làm dự án thực tế trong 3 tháng  website thương mại điện tử vào ứng dụng trên android </p>
          <p className='text-xl font-bold my-2 lg:mt-9 '>Công cụ và phần mềm </p>
           <div className='flex flex-col gap-5 '>
          
              {Tooll.map((value,index)=><>
                <div className='w-full bg-gray-200 rounded-full' key={index}>
               <Process name={value.name} level={value.level} Icon={value.Icon}/>
              </div>
              </>)}
            
           
          </div>
  

      </div>
    </div>
  )
}

export default Resume