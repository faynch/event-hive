import Navbar from '../component/Navbar'
import CardInfo from '../component/CardInfo'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel'
import Image from 'next/image'
import Product from '../pages/assets/product.svg'
import GroupButton from '../component/GroupButton'
import { shopList } from 'public/CarouselItem.json'

function EventInfo() {
    const slides = shopList
    return (
        <>
            <Navbar />
            <div className="mt-12 grid justify-center px-8 md:py-8 md:px-20">
                <CardInfo type="Event" />
            </div>
            <div className="grid justify-center py-8 px-4 md:px-24">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary ">
                    RECOMMENDED
                </h3>
                <Carousel>
                    {slides.map((items) => (
                        <div className="flex w-full flex-none justify-center">
                            <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                <a href="/shopInfo">
                                    {' '}
                                    <Image
                                        src={Product}
                                        className="w-40 md:w-52"
                                        alt={''}
                                    />
                                </a>

                                <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                    <a href="/shopInfo">
                                        <h4 className="text-center text-xl font-extrabold">
                                            {items.shopName}
                                        </h4>
                                    </a>
                                    <p className="text-center text-[#989898] lg:text-start ">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Consequatur, s
                                    </p>

                                    <GroupButton />
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <Footer />
        </>
    )
}

export default EventInfo
