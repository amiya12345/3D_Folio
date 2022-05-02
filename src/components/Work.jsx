import React from 'react';
import TypeImg from '../assets/type.webp';
import Abstracto from '../assets/untitled.webp'
import Webi from '../assets/webi.webp'
import Ethp from '../assets/Ethp.webp'

import ReactGA from "react-ga";

const TRACKING_ID = "UA-164321636-3";
ReactGA.initialize(TRACKING_ID);


const Work = () => {
  return (
    <div name='work' className='bg-omio font-omiofont2'>
      <div className='max-w-screen mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p></p>
        </div>
        {/*Container */}

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-4'>
        
        <div style={{ backgroundImage: `url(${TypeImg})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
           
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='lg:text-2xl font-bold text-white tracking-wider sm:text-[16px]'>
                  36 Days Of Type
                </span>
              </div>
            </div>
          <div
            style={{ backgroundImage: `url(${Ethp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='lg:text-2xl font-bold text-white tracking-wider sm:text-[16px]'>
                ETH Portal
              </span>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${Abstracto})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='lg:text-2xl font-bold text-white tracking-wider sm:text-[16px]'>
                Abstracto
              </span>
            
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Webi})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='lg:text-2xl font-bold text-white tracking-wider sm:text-[16px]'>
              3D Illustration
              </span>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
