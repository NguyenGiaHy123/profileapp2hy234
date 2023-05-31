import React, { FunctionComponent } from 'react'
import { NavItem } from '../../Type'
import {Link} from 'react-router-dom'
export const Navitems:FunctionComponent<NavItem> = ({activeItem, setActiveItem, name, route}) => {
  return (
    <>
      {activeItem!==`${name}`&&
         <Link to={`/${route}`}>
         <span onClick={()=>{setActiveItem(`${route}`)}}>{name}</span>
        
         </Link>
        }
    </>
  )
}
