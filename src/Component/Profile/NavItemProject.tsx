import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { category } from '../../Type'
//rafec
const NavItemProject:FunctionComponent<{value:category|'all';handleLoai:Function}> = ({value,handleLoai}) => {
  return (
    <li className='capitalize list-none cursor-pointer hover:text-green-400' onClick={()=>handleLoai
    (value)}>{value}</li>
  )
}

const ProjectNavItem:FunctionComponent<{handleLoai:Function}>=(props)=>{
    return <div className='flex gap-3 flex-wrap'>
      <NavItemProject value='all' {...props}/>
      <NavItemProject value='react' {...props}/>
      <NavItemProject value='mongodb' {...props}/>
      <NavItemProject value='nodejs' {...props}/>
    </div>
}

export default ProjectNavItem