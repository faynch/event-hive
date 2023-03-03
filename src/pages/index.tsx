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
            <section className="grid grid-cols-1 items-center justify-left bg-[#F3F4F4] md:grid-cols-2 lg:grid-cols-3">
                {/* <h3 className="text-2xl font-extrabold text-primary">
                    TOP STORES
                </h3> */}
                <StoreCard />
                <StoreCard />
                <StoreCard />
                
            </section>
        </>
    )
}
