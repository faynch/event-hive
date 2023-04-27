import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Image from 'next/image'
import Event from '../pages/assets/event.svg'
import GroupButton from '../component/GroupButton'
import Carousel from '../component/Carousel'
import StoreCard from '../component/StoreCard'
import Footer from '../component/Footer'
import { items } from 'public/CarouselItem.json'

export default function Home() {
    const slides = items

    return (
        <>
            <Navbar />
            <Hero />
            <section className="grid justify-center bg-white py-8 px-4 md:px-24">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary ">
                    UPCOMING EVENT
                </h3>

                <Carousel>
                    {slides.map((items) => (
                        <div className="flex w-full flex-none justify-center">
                            <a href="/shopInfo">
                                <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                    <Image
                                        src={Event}
                                        className="w-48 md:w-64"
                                        alt={''}
                                    />

                                    <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                        <h4 className="text-center text-xl font-extrabold">
                                            {items.eventName}
                                        </h4>
                                        <p className="text-center text-[#989898] lg:text-start ">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Consequatur, s
                                        </p>

                                        <GroupButton />
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Carousel>
            </section>

            <section className="my-8 grid justify-center">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary">
                    TOP STORES
                </h3>
                <div className="my-3 grid grid-cols-1 gap-8 lg:grid-cols-4 xl:max-w-7xl 2xl:grid-cols-6 2xl:gap-12">
                    <div className="lg:col-span-2 lg:col-start-2 lg:justify-self-center 2xl:col-start-1 2xl:mt-12">
                        <StoreCard />
                    </div>
                    <div className="lg:col-span-2">
                        <StoreCard />
                    </div>
                    <div className="lg:col-span-2 2xl:mt-12">
                        <StoreCard />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
