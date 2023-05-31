import React, { FunctionComponent } from 'react';
import { IService } from '../../Type';

export const Card: FunctionComponent<IService> = ({ title, about, Icon }) => {
  return (
    <div className='flex items-center bg-gray-50 dark:bg-dark-700 p-2 rounded-3xl'>
      <Icon size={35} className='mr-5 text-green-500' style={{ flexShrink: 0 }} />
      <div>
        <h4 className='text-justify m-0 font-bold'>{title}</h4>
        <h4 className='text-justify m-0'>{about}</h4>
      </div>
    </div>
  );
};