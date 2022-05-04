import React from 'react';
import ReactGA from "react-ga";

const TRACKING_ID = "G-CK1R436B5M";
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
              <p className='font-omiofont3 lg:text-[16px] sm:text-[12px]'>I’m a 3D generalist, with a constant obsession to inject uniqueness & delight into all my crafts. In just a year, I’ve minted and sold NFTs involving 3D animations for more than two thousand Dollars. Lately,
               I’ve attained fluency in coding & I’m intrigued by the possibilities offered by the Metaverse.</p>  
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default About;