import React from 'react'
import{AiOutlineLinkedin,AiOutlineBehance,AiOutlineGithub,AiOutlineDribbble,AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className='footer bg-omio relative pt-1 pb-0'>
            <div className='container mx-auto px-className'>

                <div className='sm:flex sm:mt-8'>
                    <div className='mt-8 sm:mt-0 sm:w-full sm:px-8 flex justify-center flex-col md:flex-row'>
                        <div class='flex flex-col items-center'>
                            <span className="font-bold text-gray-700 uppercase mb-2">Connect with me</span>
                            <div className='flex justify-between text-[32px] py-4 '>
                                <span className="my-2 px-4"><a href='/' className="text-nft text-md hover:text-blue-500"><span><AiOutlineLinkedin/></span></a></span>
                                <span className="my-2 px-4"><a href='/' className="text-blue-700  text-md hover:text-blue-500"><AiOutlineBehance/></a></span>
                                <span className="my-2 px-4"><a href='/' className="text-blue-700  text-md hover:text-blue-500"><AiOutlineGithub/></a></span>
                                <span className="my-2 px-4"><a href='/' className="text-blue-700  text-md hover:text-blue-500"><AiOutlineDribbble/></a></span>
                                <span className="my-2 px-4"><a href='/' className="text-blue-700  text-md hover:text-blue-500"><AiOutlineTwitter/></a></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-sky-500 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-nft font-bold mb-2">
                            © 2022 Design & Develope by AR.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;