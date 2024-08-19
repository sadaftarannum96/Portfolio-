import React, { useState } from 'react'
import pic from "../../public/profile.avif"
import { TfiMenuAlt } from "react-icons/tfi";
import { CgClose } from "react-icons/cg";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false)
    const Navitems = [
        {
            id: "1",
            text: "Home"
        },
        {
            id: "2",
            text: "About"
        },
        {
            id: "3",
            text: "Services"
        },
        {
            id: "4",
            text: "Skills"
        },
        {
            id: "5",
            text: "Contact"
        }

    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed bg-fuchsia-200 z-50 '>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2 '>
                        <img src={pic} className="h-14 w-14  rounded-full" alt="" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Sada<span className='text-pink-700 text-2xl'>F </span>
                            Tarannum
                            <p className='text-sm'>web Developer</p>
                        </h1>

                    </div>

                    <div >
                        <ul className='hidden md:flex space-x-8'>
                            {Navitems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                    <Link to={text}
                                        smooth={true}
                                        activeClass='active'
                                        duration={500}
                                        offset={-70}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className="md:hidden">
                            {menu ?
                                <CgClose size={24} /> :
                                <TfiMenuAlt size={24} />}</div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {menu && (
                    <div>
                        <ul className='md:hidden flex flex-col justify-center items-center h-screen'>
                            {Navitems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id} >
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        activeClass='active'
                                        duration={500}
                                        offset={-70}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar