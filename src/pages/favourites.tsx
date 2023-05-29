import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Footer from '../component/Footer'

import { useState } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

function favourites({ eventdata, shopdata }: any) {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                        <h4 className="mx-auto mt-8 text-xl font-extrabold text-primary">
                            SEARCH FOR :
                        </h4>
                        <div className="mt-6 mb-10 flex justify-center">
                            <button onClick={() => setToggle(true)}>
                                <div
                                    className={`rounded-l-md bg-[#FFB84C]  px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 ${
                                        toggle ? 'opacity-100' : 'opacity-30'
                                    }`}
                                >
                                    Stores
                                </div>
                            </button>
                            <button onClick={() => setToggle(false)}>
                                <div
                                    className={`rounded-r-md bg-[#FFB84C] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 ${
                                        toggle ? 'opacity-30' : 'opacity-100'
                                    }`}
                                >
                                    Event
                                </div>
                            </button>
                        </div>
                        <div className="mb-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                            {toggle ? (
                                <>
                                    {shopdata.map((item: any) => (
                                        <Card type="Shop" data={item} />
                                    ))}
                                </>
                            ) : (
                                <>
                                    {eventdata.map((item: any) => (
                                        <Card type="Event" data={item} />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    )
    const res1 = await fetch('http://localhost:3000/api/events/') // Replace with your API endpoint URL
    const data1 = await res1.json()
    const res2 = await fetch('http://localhost:3000/api/shops/') // Replace with your API endpoint URL
    const data2 = await res2.json()

    return {
        props: {
            session,
            eventdata: data1,
            shopdata: data2,
        },
    }
}

export default favourites
