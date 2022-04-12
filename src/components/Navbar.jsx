import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[72px] flex justify-between items-center px-4 bg-omio text-nft z-10'>
            <div>
                AR.
            </div>
            {/* menu */}

            <ul className='hidden md:flex'>
                <li className='hover:text-sky-500'>
                    <Link to="home" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-sky-500'>
                    <Link to="work" smooth={true} offset={0} duration={500}>
                        Works
                    </Link>
                </li>
                <li className='hover:text-sky-500'>
                    <Link to="about" smooth={true} offset={0} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-sky-500'>
                    <Link to="about" smooth={true} offset={0} duration={500}>
                        Nft
                    </Link>
                </li>
            </ul>

            {/* Omio man burger */}

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-omio flex flex-col justify-center items-center'}>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} offset={0} duration={700}>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} offset={0} duration={700}>
                        Works
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={0} duration={700}>
                        About
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={0} duration={700}>
                        Nfts
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default Navbar