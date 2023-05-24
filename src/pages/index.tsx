import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Image from 'next/image'
import Upcoming from '../pages/assets/upcoming.svg'
import GroupButton from '../component/GroupButton'
import Card from '../component/Card'
import Footer from '../component/Footer'
import { useState, useEffect } from 'react'

import Right from '../pages/assets/right.svg'
import Left from '../pages/assets/left.svg'
import { useRouter } from 'next/router'

function Home({ eventdata, shopdata }: any) {
    const slides = eventdata
    const [curr, setCurr] = useState(0)
    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    function handleClick(i: number) {
        setCurr(i)
    }

    const router = useRouter()
    function sendEventData(data: any) {
        router.push({
            pathname: '/eventInfo',
            query: { data: JSON.stringify(data) },
        })
    }

    useEffect(() => {
        const slideInterval = setInterval(next, 5000)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <section className="grid justify-center bg-white py-8 px-4 md:px-24">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary ">
                    UPCOMING EVENTS
                </h3>

                <div className="relative overflow-hidden lg:max-w-5xl">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${curr * 100}%)`,
                        }}
                    >
                        {slides.map((item: any) => (
                            <div className="flex w-full flex-none justify-center">
                                <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                <div
                    onClick={() => sendEventData(item)}>
                                        {item.picture === '' ? (
                                            <Image
                                                src={Upcoming}
                                                className="w-48 md:w-64"
                                                alt={''}
                                            />
                                        ) : (
                                            <img
                                                className="h-48 w-48 rounded-full md:h-60 md:w-60"
                                                src={item.picture}
                                                alt={''}
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                        <a href="/eventInfo">
                                            <h4 className="text-center text-xl font-extrabold">
                                                {item.eventName}
                                            </h4>
                                        </a>
                                        <p className="text-center text-[#989898] lg:text-start ">
                                            {item.about.length > 130
                                                ? item.about.slice(0, 130) +
                                                  '...'
                                                : item.about}
                                        </p>

                                        <GroupButton
                                            line={item.line}
                                            facebook={item.facebook}
                                            instagram={item.instagram}
                                            tiktok={item.tiktok}
                                        />
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
                        slides.length <= 1 ? 'invisible' : ''
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
            </section>

            <section className="my-8 grid justify-center">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary">
                    TOP STORES
                </h3>
                <div className="my-3 grid grid-cols-1 gap-8 lg:grid-cols-4 xl:max-w-7xl 2xl:grid-cols-6 2xl:gap-12">
                    <div className="lg:col-span-2 lg:col-start-2 lg:justify-self-center 2xl:col-start-1 2xl:mt-12">
                        <Card type="Shop" data={shopdata[0]}/>
                    </div>
                    {/* <div className="lg:col-span-2">
                        <Card type={'Shop'} />
                    </div>
                    <div className="lg:col-span-2 2xl:mt-12">
                        <Card type={'Shop'} />
                    </div> */}
                </div>
            </section>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const res1 = await fetch('http://localhost:3000/api/events/') // Replace with your API endpoint URL
    const data1 = await res1.json()
    const res2 = await fetch('http://localhost:3000/api/shops/') // Replace with your API endpoint URL
    const data2 = await res2.json()

    return {props: {
        eventdata: data1,
        shopdata: data2,
    },}
}

export default Home
