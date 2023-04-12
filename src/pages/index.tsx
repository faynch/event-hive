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
            <section className="my-8 mx-52">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary">
                    TOP STORES
                </h3>
                <div className="col-span-4 grid grid-cols-1 gap-3 px-8 md:grid-cols-4 md:px-16 lg:px-32 xl:grid-cols-6 xl:gap-12">
                    <div className="md:col-span-2 md:col-start-2 xl:col-start-1 xl:mt-12">
                        <StoreCard />
                    </div>
                    <div className="md:col-span-2 md:pr-3 xl:pr-0">
                        <StoreCard />
                    </div>
                    <div className="md:col-span-2 md:pl-3 xl:mt-12 xl:pl-0">
                        <StoreCard />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
