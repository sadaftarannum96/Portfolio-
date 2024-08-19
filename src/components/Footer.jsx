import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

export const Footer=()=>{
    return(
     <>
     <hr />
     <footer className='py-12'>
     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <FaFacebook size={24}/>
                <FaInstagram size={24}/>
                <FaLinkedin size={24}/>
                <FaTelegram size={24}/>
            </div>
            <div className='flex flex-col items-center border-t border-gray-700 pt-8 mt-8'>
                <p className='text-sm'>&copy;2024 Company All Rights reserved</p>
                <p className='text-sm'> Supportive Partner Sadaf❤️</p>
            </div>
        </div>
        </div>
     </footer>
     </>
    )
}