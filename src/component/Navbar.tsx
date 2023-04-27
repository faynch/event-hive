import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Account from '../pages/assets/account.svg'
import Favourite from '../pages/assets/favourite.svg'
import Menu from '../pages/assets/menu.svg'
import EventHive from '../pages/assets/eventHive.svg'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    // const [account, setAccount] = useState(false)
    const account = false

    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <nav className="sticky top-0 z-10 w-full bg-white shadow">
            <div className="justify-stretch mx-auto px-8 md:flex md:items-center lg:max-w-7xl">
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
                            <button className={account ? 'block' : 'hidden'}>
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
                <div className="md:basis-1/2 ">
                    <div
                        className={`pb-8 pt-4 md:flex md:pt-0 md:pb-0 md:justify-center ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="justify-center space-y-8 text-center md:flex md:space-x-12 md:space-y-0 ">
                            <li className="text-xl font-extrabold">
                                <a
                                    href="/stores"
                                    className={`hover:text-secondary ${
                                        currentRoute === '/stores'
                                            ? 'text-secondary'
                                            : 'text-black'
                                    }`}
                                >
                                    Stores
                                </a>
                            </li>

                            <li className="text-xl font-extrabold">
                                <a
                                    href="/events"
                                    className={`hover:text-secondary ${
                                        currentRoute === '/events'
                                            ? 'text-secondary'
                                            : 'text-black'
                                    }`}
                                >
                                    Events
                                </a>
                            </li>
                            <li className="text-xl font-extrabold">
                                <a
                                    href="/favourites"
                                    className={`hover:text-secondary ${
                                        currentRoute === '/favourites'
                                            ? 'text-secondary'
                                            : 'text-black'
                                    }`}
                                >
                                    Favourites
                                </a>
                            </li>
                            <li className="text-xl font-extrabold">
                                <a
                                    href="/test"
                                    className={`rounded-lg hover:underline decoration-2 underline-offset-2 md:hidden ${account? 'text-[#F16767]' : 'text-primary' }`}
                                >
                                    {account? 'Log out' : 'Sign in'}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden basis-1/3 justify-end space-x-3 md:flex">
                    <button className={account ? 'block' : 'hidden'}>
                        <a href="/test">
                            <Image
                                className="w-6"
                                src={Account}
                                alt={'account'}
                            />
                        </a>
                    </button>
                    <div className={`flex flex-row items-center gap-6 ${account ? 'hidden' : 'block'}`}>
                    <Link href="/test">
                        <div className="justify-end rounded-lg font-extrabold hover:text-primary text-md">
                            Sign in
                        </div>
                        </Link>
                        <Link href="/register">
                        <div className="rounded-md bg-[#FFB84C] hover:bg-gradient-to-r from-[#EF9323] to-[#5D3891] px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                            Register
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
