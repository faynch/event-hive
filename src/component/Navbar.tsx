import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Account from '../pages/assets/account.svg'
import Favourite from '../pages/assets/unlike.svg'
import Menu from '../pages/assets/menu.svg'
import EventHive from '../pages/assets/eventHive.svg'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    return (
        <nav className="w-full bg-white shadow">
            <div className="mx-auto justify-stretch px-8 md:flex md:items-center lg:max-w-7xl">
                <div className="md:basis-1/3">
                    <div className="flex py-5 md:block">
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
                        <div className="flex items-center space-x-3 md:hidden">
                            <button>
                                <Image
                                    className="w-6"
                                    src={Favourite}
                                    alt={'favourite'}
                                />
                            </button>
                            <button>
                                <Image
                                    className="w-6"
                                    src={Account}
                                    alt={'account'}
                                />
                            </button>
                            <button onClick={() => setNavbar(!navbar)}>
                                <Image
                                    className="w-6"
                                    src={Menu}
                                    alt={'menu'}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:basis-1/2">
                    <div
                        className={`pb-8 pt-4 md:block md:pt-0 md:pb-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="space-y-8 justify-center text-center md:flex md:space-x-12 md:space-y-0">
                            <li className="text-xl font-extrabold hover:text-secondary">
                                <a href="/store">Stores</a>
                            </li>
                            <li className="text-xl font-extrabold hover:text-secondary">
                                <a href="javascript:void(0)">Events</a>
                            </li>
                            <li className="text-xl font-extrabold hover:text-secondary">
                                <a href="javascript:void(0)">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden basis-1/3 space-x-3 justify-end md:flex">
                    
                    <button><a href='/favourite'>
                        <Image className="w-6" src={Favourite} alt={'favourite'} />
                    </a></button>
                    <button>
                        <Image
                            className="w-6"
                            src={Account}
                            alt={'account'}
                        />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
