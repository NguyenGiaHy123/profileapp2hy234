
import { useState,useEffect, FunctionComponent} from 'react';
import { Link  } from 'react-router-dom';
import {About} from '../About';
import Project from '../Project';
import Resume from '../Resume';
import { useMatch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navitems } from './Navitems';
import { Icorlor } from '../../Type';
export const  Profile=()=> {
  const [activemenu, setActiveMenu] = useState<string>("");
  const location = useLocation();


  useEffect(() => {
    let path = location.pathname;
    if(path=="/"){
      setActiveMenu("About")
    }else if(path=="/Project"){
      setActiveMenu("Project")
    }else if(path=="/Resume"){
      setActiveMenu("Resume")
    }
  }, [])

  return (

   <div className='p-3'>
    <div className="flex justify-between">
      <span className='text-green-500 mb-7 font-bold border-b-4 border-green-500 text-xl'>{activemenu}</span>
      {/* activeItem, setActiveItem, name, route} */}
      <div className='flex gap-3 mr-3'>
      <Navitems activeItem={activemenu} setActiveItem={setActiveMenu} name="About" route="About" />
      <Navitems activeItem={activemenu} setActiveItem={setActiveMenu} name="Project" route="Project" />
      <Navitems activeItem={activemenu} setActiveItem={setActiveMenu} name="Resume" route="Resume" />
      </div>
    </div>

    <div >
      {activemenu=="About"&&<>
      <About />
      </>}

      {activemenu=="Project"&&<>
      <Project/>
      </>}

      {activemenu=="Resume"&&<>
      <Resume/>
      </>}
    </div>
   </div>
  ); 
}