import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Menu from '../pages/assets/menu.svg'
import EventHive from '../pages/assets/eventHive.svg'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <div className="grid grid-cols-6 items-center bg-white py-4 px-8">
            <a href="#" className="w-48 grow md:flex-none">
                <div className="flex flex-row">
                    <Image
                        className="mr-3 w-6"
                        src={EventHive}
                        alt={'Event Hive'}
                    />
                    <span className="bg-gradient-to-r from-[#EF9323] to-[#5D3891] bg-clip-text text-2xl font-extrabold text-transparent">
                        EVENT HIVE
                    </span>
                </div>
            </a>

            <div className="col-span-4 text-center hidden md:flex md:justify-center">
                <a
                    href="#"
                    className="px-4 text-xl font-extrabold text-gray-900 lg:px-8"
                >
                    Stores
                </a>

                <a
                    href="#"
                    className="px-4 text-xl font-extrabold text-gray-900 md:px-4 lg:px-8"
                >
                    Events
                </a>

                <a
                    href="#"
                    className="px-4 text-xl font-extrabold text-gray-900 md:px-4 lg:px-8"
                >
                    Blogs
                </a>
            </div>
            <div className="col-start-6 h-6 justify-self-end">
                <button className="" onClick={handleClick}>
                    <Image className="w-6" src={Menu} alt={'account'} />
                </button>
            </div>
        </div>
    )
}

export default Navbar


