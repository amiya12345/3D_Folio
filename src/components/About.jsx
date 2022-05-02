import React from 'react';

import ReactGA from "react-ga";

const TRACKING_ID = "UA-164321636-3";
ReactGA.initialize(TRACKING_ID);


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-omio text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[2000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-3xl font-bold inline border-b-4 border-sky-400 font-omiofont2 '>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-full w-full grid sm:grid-cols-2 gap-8 px-4 '>
            <div className='sm:text-right text-[16px] font-bold font-omiofont2 lg:text-4xl '>
              <p>Hi. I'm Amiya, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='font-omiofont3 lg:text-[16px] sm:text-[12px]'>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum .</p>  
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default About;