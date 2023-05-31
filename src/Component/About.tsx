import React,{FunctionComponent} from 'react'
import {Service} from '../data'
import { Card } from './SlidBar/Card'
import { Icorlor } from '../Type'


export const About=() =>{
  return (
    <div className='flex flex-col '>
      <p>Trong suốt hai năm kinh nghiệm của tôi, tôi đã phát triển và làm việc trên một loạt công nghệ và framework trong lĩnh vực phát triển ứng dụng web và di động. Tôi đã sử dụng React Native để xây dựng ứng dụng di động đa nền tảng. Trong lĩnh vực phát triển web, tôi đã sử dụng ReactJS để xây dựng các ứng dụng web động và tương tác. TypeScript đã được tôi sử dụng để viết mã JavaScript có kiểu dữ liệu tĩnh, giúp tăng tính rõ ràng và dễ bảo trì của mã nguồn, cũng như giảm thiểu lỗi. Đối với việc lưu trữ và truy xuất dữ liệu, tôi đã sử dụng cơ sở dữ liệu NoSQL MongoDB. Bên cạnh đó, tôi đã xây dựng phía server theo mô hình MVC bằng Node.js. Sử dụng Tailwind CSS, tôi đã xây dựng giao diện người dùng. Nhờ vào những kinh nghiệm này, tôi đã có cơ hội phát triển các ứng dụng di động và web tương tác, tối ưu hiệu suất và tăng cường trải nghiệm người dùng. </p>
      <div className=' bg-gray-200 dark:bg-gray-900 p-3 mt-5'>
        <h6 className='font-bold mb-5 text-lg'>Những gì tôi có thể cung cấp</h6>
        <div className='grid grid-cols-12 h-full gap-5  '>
          {Service.map((value,index)=>
          <div className='lg:col-span-6 col-span-12'>
              <Card key={index} title={value.title} about={value.about} Icon={value.Icon} />
             <div>
             </div>
             </div>)}
        </div>
      </div>
    </div>
  )
}

