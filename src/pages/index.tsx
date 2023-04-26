import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Image from 'next/image'
import Carousel from '../component/Carousel'
import StoreCard from '../component/StoreCard'
import Footer from '../component/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Carousel />
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
