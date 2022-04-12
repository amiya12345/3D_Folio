import React from 'react'
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <section name='home' className='max-h-[59.0625rem] relative'>
      <div className='flex flex-col justify-center items-center absolute z-5 top-[50%] w-[100%]'>
        <p className='text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-nft'>
          Hi!I am
        </p>
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-nft">
          Amiya Ranjan
        </h1>
      </div>
      <div className="max-h-[59.0625rem] mt-0 mb-auto ml-auto mr-auto overflow-hidden">
        <div className="w-[100%] h-[100%] flex">
          <Spline scene="https://draft.spline.design/TUzOCtxP59E5CxOg/scene.spline"/>
        </div>
      </div>
    </section>
  )
}
export default Home