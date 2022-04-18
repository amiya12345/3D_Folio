import React from 'react'
import Spline from '@splinetool/react-spline';
import Typed from 'react-typed';
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <section name='home' className='max-h-[59.0625rem] relative'>

      <motion.div className='flex flex-col justify-center items-center absolute z-5 top-[50%] w-[100%]'
        initial={{ opacity: 0,y:0 }} animate={{ opacity: 1,y:-10 }} transition={{delay:1 , duration: 2}}>


        <p className='text-[32px] font-bold  max-w-3xl mx-auto text-nft'>
          <Typed className='font-bold text-[32px] text-center max-w-3xl mx-auto text-nft' 
          strings={['Hello!', 'Hola!', 'Namaste!', 'Bonjour!', 'Ciao!','Konnichiwa!']}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
          I am
        </p>
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl  text-center dark:text-nft tracking-widest">
          Amiya Ranjan
        </h1>
      </motion.div>
      <div className="max-h-[59.0625rem] mt-0 mb-auto ml-auto mr-auto overflow-hidden">
        <div className="w-[100%] h-[100%] flex">
          <Spline scene="https://draft.spline.design/TUzOCtxP59E5CxOg/scene.spline" />
        </div>
      </div>
    </section>
  )
}
export default Home