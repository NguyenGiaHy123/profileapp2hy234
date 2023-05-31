import React, { FunctionComponent } from 'react'
import {Languages} from '../../data'
import { ILanguage } from '../../Type'

export const  Process:FunctionComponent<ILanguage>=({name,level,Icon})=> {
  return (
    <div className='flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full px-2 py-1 ' style={{width:`${level}`}}>
        <Icon className='text-white'/>
        <p className='text-white'>{name}</p>
    </div>
  )
}

