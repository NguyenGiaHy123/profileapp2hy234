import React from 'react'
import {ProjectData} from '../data'
import { CardProject } from './Profile/CardProject'
import ProjectNavItem from './Profile/NavItemProject'
import {useState} from 'react'
import { category } from '../Type'
function Project() {
  const [data,setData]=useState(ProjectData)
  const handleLoai=(category:category|'all')=>{
    if(category=='all'){
      setData(ProjectData)
      return
    }
       

    setData(ProjectData.filter((value,key)=>{
      return value.category.includes(category)
    }))
  }
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex'>
      <ProjectNavItem handleLoai={handleLoai} />
        
     </div>
      <div className='grid grid-cols-12 gap-5 relative'>
        {data.map((value,key)=>{
          return(
            <div key={key}>
            <CardProject name={value.name} description={value.description} image={value.image} pathgithub={value.pathgithub} category={value.category} key_techt={value.key_techt}/>
            </div>
          
          )
        })}

      </div>
    </div>
  )
}

export default Project