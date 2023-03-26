import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Account from '../pages/assets/account.svg'
import Shop from '../pages/assets/shop.svg'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <div className="flex flex-row items-center py-4 px-8 bg-white">
            <a href="#" className="">
                <Image className="w-6" src={Shop} alt={'menu'} />
                {/* <h3 className="hidden md:text-2xl md:font-extrabold md:text-gray-900">Event Hive</h3> */}
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
