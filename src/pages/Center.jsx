import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Posts from './Posts';
import Profile from './Profile';

export default function Center() {
  const [navigate, setNavigate] = useState("PRO");
console.log(navigate);
  return (
    <>
      <div className=' flex flex-col-reverse md:flex-row items-center  justify-center  md:justify-around  w-full h-[91%]'>
        <div className='  w-[91%]  h-[10%]  md:w-[35%] md:h-[91%]'><SideBar setNavigate={setNavigate} /></div>
        {(() => {
          switch (navigate) {
            case "CP":
              return <div className='w-[70%]'> <Posts /></div>;
            case "PRO":
              return <div className='w-[60%] mr-40 h-[91%]  rounded-lg shadow-[0_15px_30px_10px_rgba(0,0,0,0.9) '> <Profile setNavigate={setNavigate} /> </div>;
            default:
              return <div> hey </div>;
          }
        })()}
      </div>
    </>
  );
}
