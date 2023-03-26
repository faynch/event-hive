import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Account from '../pages/assets/account.svg'
import EventHive from '../pages/assets/eventHive.svg'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <div className="flex flex-row items-center py-4 px-8 bg-white">
            <a href="#" className="">
            <div className='flex flex-row'>
            <Image className="w-6" src={EventHive} alt={'Event Hive'} />
            {/* <h3
                className="text-2xl font-extrabold"
            >
                <span className="bg-gradient-to-r from-[#EF9323] to-[#5D3891] bg-clip-text text-transparent">
                    EVENT HIVE
                </span>
            </h3> */}
            </div>
            </a>

            <div className="flex grow justify-center">
                <a href="#" className="px-4 text-xl font-extrabold text-gray-900 lg:px-8">
                    Stores
                </a>

                <a href="#" className="px-4 text-xl font-extrabold text-gray-900 md:px-4 lg:px-8">
                    Events
                </a>

                <a href="#" className="px-4 text-xl font-extrabold text-gray-900 md:px-4 lg:px-8">
                    Blogs
                </a>
            </div>
            <div>
                <button
                    className="flex"
                    onClick={handleClick}
                    
                ><Image className="w-6" src={Account} alt={'account'} /></button>
            </div>
        </div>
    )
}

export default Navbar

{
    /* <div className="flex lg:flex-1">
                    
                </div>
                <div className="py-6 flex sm:gap-x-12 md:gap-x-18 lg:gap-x-24">
                    
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-xl font-extrabold text-gray-900">
                        Log in
                    </a>
                </div> */
}
