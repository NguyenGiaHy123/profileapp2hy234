import React ,{useState,useEffect}from 'react';

import './App.css';
import {Slidebar} from './Component/SlidBar/Slidebar';
import {Profile} from './Component/Profile/Profile';



function App() {
  const [theme, setTheme] = useState('');
  const localStorageColor=JSON.parse(localStorage.getItem('theme')||'');

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (localStorageColor &&localStorageColor=== "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if(theme==='dark'){
      localStorage.setItem('theme',JSON.stringify('light'))
    }
    else{
      localStorage.setItem('theme',JSON.stringify('dark'))
    }
  };




  return (

 
    <main className={`min-h-screen ${localStorageColor=='dark'?'dark:bg-gray-900':'bg-gradient-to-r from-green-400 to-blue-400 '} dark:text-white` }>
        <div className=' grid grid-cols-12 gap-6 py-14  lg:px-36 md:px-20 px-10'>
        <div className={`col-span-12 lg:col-span-3 rounded bg-white dark:bg-gray-900`} ><Slidebar  theme={theme} setTheme={handleThemeSwitch}/></div>
      <div className={`col-span-12 lg:col-span-9 bg-white rounded dark:bg-gray-900 dark:shadow-custom-light`}><Profile  /></div> 
        </div>
    </main>

 


  
  );
}

export default App;
