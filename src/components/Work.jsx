import React from 'react'
import WorkImg from '../assets/fgnv.png';
import { Link } from 'react-router-dom'
import { BrowserRouter} from "react-router-dom";


const Work = (props) => {
    return (
        <div name='work' className='bg-omio'>
            <div className='max-w-screen mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p></p>
                </div>
                {/*Container */}

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-2'>
                <BrowserRouter> 
                 <Link to='/project1'> 
                      <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                               36 Days Of Type
                            </span>
                        </div>
                    </div>
                    </Link>
                    </BrowserRouter>  

                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                               ETH Portal
                            </span>
                            <div className='pt-8 text-center'>
                               
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                              Abstracto
                            </span>
                            <div className='pt-8 text-center'>
                              
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                             7 Days of Tiny Rooms
                            </span>
                            <div className='pt-8 text-center'>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Work