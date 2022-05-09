import React from 'react';



const About = () => {
  return (
    <section name='about' className='w-full h-screen bg-omio text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 px-8'>
            <p className='lg:text-4xl font-bold inline border-b-4 border-sky-500 text-3xl'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-full w-full grid lg:px-8 sm:grid-cols-2 gap-8 px-8  rounded-md'>
            <div  className='bg-[url(./assets/About.webp)] content-di  rounded-md '>
              
            </div>
            <div className='flex'>
              <p className='font-omiofont3 lg:text-[16px] sm:text-[12px] leading-loose lg:tracking-[2px] sm:tracking-[0px]'>I’m a 3D generalist, with a constant obsession to inject uniqueness & delight into all my crafts.
              I’ve minted and sold NFTs involving 3D animations on various NFT marketplace. Lately,
               I’ve attained some knowledge in coding, mainly frontend-development & I’m intrigued by the possibilities offered by the Metaverse. Currently  I’m a
                final-year student at NIT Rourkela. </p>  
            </div>
          </div>
      </div>
      
    </section>
  );
};

export default About;