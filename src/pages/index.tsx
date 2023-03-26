import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Image from 'next/image'
import Carousel from '../component/Carousel'
import StoreCard from '../component/StoreCard'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <Carousel /> */}
            <h3 className="text-2xl font-extrabold text-primary bg-[#F3F4F4] text-center py-3">
                    TOP STORES
                </h3>
            <section className="col-span-4 grid grid-cols-1 bg-[#F3F4F4] px-8 md:grid-cols-4 lg:px-16">
                <div className="md:col-span-2 md:col-start-2">
                    <StoreCard />
                </div>
                <div className="md:col-span-2 md:pr-3">
                    <StoreCard />
                </div>
                <div className="md:col-span-2 md:pl-3">
                    <StoreCard />
                </div>
            </section>
        </>
    )
}
