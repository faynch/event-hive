import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Account from '../pages/assets/account.svg'
import Like from '../pages/assets/like.svg'
import Menu from '../pages/assets/menu.svg'
import EventHive from '../pages/assets/eventHive.svg'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    return (
        <nav className="w-full bg-white shadow">
            <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
                <div className="basis-1/4">
                    <div className="items-center justify-between py-3 md:block md:py-5">
                        <a href="/" className="w-48 grow">
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
                        <div className="md:hidden">
                            <button
                                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <Image
                                    className="w-6"
                                    src={Menu}
                                    alt={'account'}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`mt-8 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="space-y-8 md:flex md:space-x-12 md:space-y-0">
                            <li className="text-xl font-extrabold text-gray-900 hover:text-secondary">
                                <a href="/store">Stores</a>
                            </li>
                            <li className="text-xl font-extrabold text-gray-900 hover:text-secondary">
                                <a href="javascript:void(0)">Events</a>
                            </li>
                            <li className="text-xl font-extrabold text-gray-900 hover:text-secondary">
                                <a href="javascript:void(0)">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex basis-1/4 content-center justify-end">
                    <button>
                        <Image className="mx-3 w-6" src={Like} alt={'like'} />
                    </button>
                    <button>
                        <Image
                            className="mx-3 w-6"
                            src={Account}
                            alt={'account'}
                        />
                    </button>
                </div>
            </div>
        </nav>
    )

    // return (
    //     <div className="grid grid-cols-6 items-center bg-white py-4 px-8">
    //         <a href="/" className="w-48 grow md:flex-none">
    //             <div className="flex flex-row">
    //                 <Image
    //                     className="mr-3 w-6"
    //                     src={EventHive}
    //                     alt={'Event Hive'}
    //                 />
    //                 <span className="bg-gradient-to-r from-[#EF9323] to-[#5D3891] bg-clip-text text-2xl font-extrabold text-transparent">
    //                     EVENT HIVE
    //                 </span>
    //             </div>
    //         </a>

    //         <div className="col-span-4 hidden text-center md:flex md:justify-center">
    //             <a
    //                 href="/store"
    //                 className="px-4 text-xl font-extrabold text-gray-900 lg:px-8"
    //             >
    //                 Stores
    //             </a>

    //             <a
    //                 href="#"
    //                 className="px-4 text-xl font-extrabold text-gray-900 md:px-4 lg:px-8"
    //             >
    //                 Events
    //             </a>

    //             <a
    //                 href="#"
    //                 className="px-4 text-xl font-extrabold text-gray-900 md:px-4 lg:px-8"
    //             >
    //                 Blogs
    //             </a>
    //         </div>
    //         <div className="col-start-6 h-6 justify-self-end text-right">
    //             <button onClick={toggleNav}>
    //                 <Image className="w-6" src={Menu} alt={'account'} />
    //             </button>{activeNav && window.innerWidth < 769 && (
    //                 <ul className="">
    //                     <li className="">Home</li>
    //                     <li className="">Services</li>
    //                     <li className="">Contact</li>
    //                 </ul>
    //             )}
    //         </div>
    //     </div>
    // )
}

export default Navbar
