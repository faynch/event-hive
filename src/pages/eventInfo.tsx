import Navbar from '../component/Navbar'
import CardInfo from '../component/CardInfo'
import Footer from '../component/Footer'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Shop from '../pages/assets/product.svg'
import Right from '../pages/assets/right.svg'
import Left from '../pages/assets/left.svg'

function EventInfo({ data }: any) {
    const [curr, setCurr] = useState(0)
    const [curr2, setCurr2] = useState(0)

    const [request, setRequest] = useState(false)
    const [participate, setParticipate] = useState(true)

    const { data: session } = useSession()
    const id = session?.user?.name

    const slides = data.shopParticipations
    const slides2 = data.shopApplications

    const owner = session?.user?.name === data.eventOrganizerId ? true : false

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    const prev2 = () =>
        setCurr2((curr2) => (curr2 === 0 ? slides2.length - 1 : curr2 - 1))
    const next2 = () =>
        setCurr2((curr2) => (curr2 === slides2.length - 1 ? 0 : curr2 + 1))

    function handleClick(i: number) {
        setCurr(i)
    }
    function handleClick2(i: number) {
        setCurr2(i)
    }
    useEffect(() => {
        if (session?.user?.image == 'shopOwner') {
            handleApplication()
        }
    }, [])

    async function handleApplication() {
        const shopOwnerId = session?.user?.name!
        const endpoint = `http://localhost:3000/api/shopowners/${shopOwnerId}`

        const shopIdResponse = await fetch(endpoint)
        const jsonData = await shopIdResponse.json()
        const itemsA = jsonData[0].shop.eventApplications

        itemsA.map((item: any) => {
            if (item.id == data.id) {
                setRequest(true)
            }
        })
        const itemsP = jsonData[0].shop.eventParticipations
        let check = false
        itemsP.map((item: any) => {
            if (item.id == data.id) {
                check = true
            }
        })
        setParticipate(check)
    }

    const handleRequest = async () => {
        setRequest(true)
        const shopOwnerId = session?.user?.name!
        const endpoint = `http://localhost:3000/api/shopowners/${shopOwnerId}`

        try {
            const shopIdResponse = await fetch(endpoint, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            if (shopIdResponse.ok) {
                const shopData = await shopIdResponse.json()

                const formData = {
                    shopId: shopData[0].shop.id,
                    eventId: data.id,
                }
                const response = await fetch(
                    `http://localhost:3000/api/applyforevent`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    }
                )
                if (response.ok) {
                    // Successful response, handle accordingly
                    console.log('Data successfully submitted!')
                    // window.location.reload()
                } else {
                    // Error response, handle accordingly
                    console.log('Failed to submit data')
                }
            }
        } catch (error) {
            // Error occurred during the request, handle accordingly
            console.error('Error:', error)
        }
    }

    const handleAccept = async (id: any) => {
        try {
            const formData = {
                shopId: id,
                eventId: data.id,
            }
            const response = await fetch(
                `http://localhost:3000/api/acceptshop`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            )
            if (response.ok) {
                // Successful response, handle accordingly
                console.log('Data successfully accepted!')
                window.location.reload()
            } else {
                // Error response, handle accordingly
                console.log('Failed to accept data')
            }
        } catch (error) {
            // Error occurred during the request, handle accordingly
            console.error('Error:', error)
        }
    }

    const handleDecline = async () => {
        setRequest(false)
        const shopOwnerId = session?.user?.name!
        const endpoint = `http://localhost:3000/api/shopowners/${shopOwnerId}`

        try {
            const shopIdResponse = await fetch(endpoint, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            if (shopIdResponse.ok) {
                const shopData = await shopIdResponse.json()

                const formData = {
                    shopId: shopData[0].shop.id,
                    eventId: data.id,
                }
                const response = await fetch(
                    `http://localhost:3000/api/declineshop`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    }
                )
                if (response.ok) {
                    // Successful response, handle accordingly
                    console.log('Data successfully deleted!')
                    // window.location.reload()
                } else {
                    // Error response, handle accordingly
                    console.log('Failed to delete data')
                }
            }
        } catch (error) {
            // Error occurred during the request, handle accordingly
            console.error('Error:', error)
        }
    }
    const handleDecline2 = async (id: any) => {
        setRequest(false)
        try {
            const formData = {
                shopId: id,
                eventId: data.id,
            }
            const response = await fetch(
                `http://localhost:3000/api/declineshop`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            )
            if (response.ok) {
                // Successful response, handle accordingly
                console.log('Data successfully deleted!')
                window.location.reload()
            } else {
                // Error response, handle accordingly
                console.log('Failed to delete data')
            }
        } catch (error) {
            // Error occurred during the request, handle accordingly
            console.error('Error:', error)
        }
    }

    const router = useRouter()
    const sendShopValue = (id: string) => {
        router.push(`/shopInfo?id=${id}`)
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <div className="my-12 grid justify-center px-8 md:py-8 md:px-20">
                        <CardInfo
                            type="Event"
                            edit={owner}
                            data={data}
                            like={data.favouriteByVisitors.some(
                                (visitor: { id: any }) => visitor.id === id
                            )}
                        />
                        {session?.user?.image == 'shopOwner' && !participate ? (
                            <button
                                onClick={() => {
                                    request ? handleDecline() : handleRequest()
                                }}
                                className="mx-3 mt-4 w-32 justify-end self-center rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-6 py-2 font-extrabold text-white hover:bg-gradient-to-r lg:self-end"
                            >
                                {request ? 'Requested' : 'Join'}
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                    <div
                        className={`flex flex-col items-center justify-center gap-8 pb-12 md:px-24 ${
                            slides.length == 0 ? 'hidden' : ''
                        }`}
                    >
                        <h3 className="text-center text-2xl font-extrabold text-primary ">
                            STORE HIGHLIGHTS
                        </h3>

                        <div className="relative overflow-hidden lg:max-w-5xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translateX(-${curr * 100}%)`,
                                }}
                            >
                                {slides.map((items: any) => (
                                    <div
                                        key={items.id}
                                        className="flex w-full flex-none justify-center"
                                    >
                                        <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                            <button
                                                onClick={() =>
                                                    sendShopValue(items.id)
                                                }
                                            >
                                                {items.picture != '' ? (
                                                    <img
                                                        src={items.picture}
                                                        className="h-40 w-40 rounded-full bg-slate-400 md:h-52 md:w-52"
                                                        alt={''}
                                                    />
                                                ) : (
                                                    <Image
                                                        src={Shop}
                                                        className="w-40 md:w-52"
                                                        alt={''}
                                                    />
                                                )}
                                            </button>
                                            <div
                                                key={items.id}
                                                className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36"
                                            >
                                                <button
                                                    onClick={() =>
                                                        sendShopValue(items.id)
                                                    }
                                                >
                                                    <h4 className="text-center text-xl font-extrabold lg:text-start ">
                                                        {items.shopName}
                                                    </h4>
                                                </button>
                                                <p className="text-center text-[#989898] lg:text-start ">
                                                    {items.about.length > 130
                                                        ? items.about.slice(
                                                              0,
                                                              130
                                                          ) + '...'
                                                        : items.about}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`absolute left-5 top-1/3 hidden md:flex ${
                                    slides.length <= 1 ? 'invisible' : ''
                                }`}
                            >
                                <button onClick={prev}>
                                    <Image src={Left} alt={''} />
                                </button>
                            </div>
                            <div
                                className={`absolute right-5 top-1/3 hidden md:flex ${
                                    slides.length <= 1 ? 'invisible' : ''
                                }`}
                            >
                                <button onClick={next}>
                                    <Image src={Right} alt={''} />
                                </button>
                            </div>
                        </div>
                        <div
                            className={`flex items-center justify-center gap-2 py-4 ${
                                slides.length <= 1 ? 'hidden' : ''
                            }`}
                        >
                            {slides.map((_: any, i: number) => (
                                <button
                                    key={i}
                                    onClick={() => handleClick(i)}
                                    className={`
              h-3 w-3 rounded-full bg-secondary transition-all
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
                                />
                            ))}
                        </div>
                    </div>
                    {owner ? (
                        <>
                            <div
                                className={`flex flex-col items-center justify-center gap-8 pb-12 md:px-24 ${
                                    slides2.length == 0 ? 'hidden' : ''
                                }`}
                            >
                                <h3 className="text-center text-2xl font-extrabold text-primary ">
                                    STORE APPLICATIONS
                                </h3>
                                <div className="relative overflow-hidden lg:max-w-5xl">
                                    <div
                                        className="flex transition-transform duration-500 ease-out"
                                        style={{
                                            transform: `translateX(-${
                                                curr2 * 100
                                            }%)`,
                                        }}
                                    >
                                        {slides2.map((items: any) => (
                                            <div
                                                key={items.id}
                                                className="flex w-full flex-none justify-center"
                                            >
                                                <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                                    <button
                                                        onClick={() =>
                                                            sendShopValue(
                                                                items.id
                                                            )
                                                        }
                                                    >
                                                        {items.picture != '' ? (
                                                            <img
                                                                src={
                                                                    items.picture
                                                                }
                                                                className="h-40 w-40 rounded-full bg-slate-400 md:h-52 md:w-52"
                                                                alt={''}
                                                            />
                                                        ) : (
                                                            <Image
                                                                src={Shop}
                                                                className="w-40 md:w-52"
                                                                alt={''}
                                                            />
                                                        )}
                                                    </button>
                                                    <div
                                                        key={items.id}
                                                        className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-6 lg:pr-24 xl:pr-36"
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                sendShopValue(
                                                                    items.id
                                                                )
                                                            }
                                                        >
                                                            <h4 className="text-center text-xl font-extrabold">
                                                                {items.shopName}
                                                            </h4>
                                                        </button>
                                                        <p className="text-center text-[#989898] lg:text-start ">
                                                            {items.about
                                                                .length > 130
                                                                ? items.about.slice(
                                                                      0,
                                                                      130
                                                                  ) + '...'
                                                                : items.about}
                                                        </p>
                                                        <div className="flex w-full flex-row justify-center gap-4">
                                                            <button
                                                                onClick={() =>
                                                                    handleAccept(
                                                                        items.id
                                                                    )
                                                                }
                                                                className="justify-end rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-6 py-2 font-extrabold text-white hover:bg-gradient-to-r"
                                                            >
                                                                Accept
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleDecline2(
                                                                        items.id
                                                                    )
                                                                }
                                                                className="justify-end rounded-lg bg-[#F16767] px-6 py-2 font-extrabold text-white hover:bg-gradient-to-r"
                                                            >
                                                                Decline
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className={`absolute left-5 top-1/3 hidden md:flex ${
                                            slides2.length <= 1
                                                ? 'invisible'
                                                : ''
                                        }`}
                                    >
                                        <button onClick={prev2}>
                                            <Image src={Left} alt={''} />
                                        </button>
                                    </div>
                                    <div
                                        className={`absolute right-5 top-1/3 hidden md:flex ${
                                            slides2.length <= 1
                                                ? 'invisible'
                                                : ''
                                        }`}
                                    >
                                        <button onClick={next2}>
                                            <Image src={Right} alt={''} />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className={`flex items-center justify-center gap-2 py-4 ${
                                        slides2.length <= 1 ? 'invisible' : ''
                                    }`}
                                >
                                    {slides2.map((_: any, i: number) => (
                                        <button
                                            key={i}
                                            onClick={() => handleClick(i)}
                                            className={`
              h-3 w-3 rounded-full bg-secondary transition-all
              ${curr2 === i ? 'p-2' : 'bg-opacity-50'}
            `}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </div>
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps(context: { req: any; query: any }) {
    const { req, query } = context
    const valueFromRouter = query.id
    const data = await fetch(
        `http://localhost:3000/api/events/${valueFromRouter}`
    )
    const jsonData = await data.json()
    return {
        props: {
            data: jsonData[0],
        },
    }
}

export default EventInfo
