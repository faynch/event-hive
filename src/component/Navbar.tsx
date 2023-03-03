import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Menu from '../pages/assets/menu.svg'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <div className="flex flex-row items-center bg-white">
            <a href="#" className="flex flex-row">
                <Image className="w-6" src={Menu} alt={'menu'} />
                {/* <h3 className="hidden md:text-2xl md:font-extrabold md:text-gray-900">Event Hive</h3> */}
            </a>

            <div className="flex grow justify-center">
                <a href="#" className="text-xl font-extrabold text-gray-900">
                    Stores
                </a>

                <a href="#" className="text-xl font-extrabold text-gray-900">
                    Events
                </a>

                <a href="#" className="text-xl font-extrabold text-gray-900">
                    Blogs
                </a>
            </div>
            <div>
                <button
                    className="lg:hidden"
                    onClick={handleClick}
                    
                ><Image className="w-6" src={Menu} alt={'menu'} /></button>
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
