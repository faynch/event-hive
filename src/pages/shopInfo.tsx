import Navbar from '../component/Navbar'
import CardInfo from '../component/CardInfo'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel'
import CarouselCardInput from '../component/CarouselCardInput'
import Image from 'next/image'
import Product from '../pages/assets/product.svg'
import Add from '../pages/assets/add.svg'
import { productList } from 'public/CarouselItem.json'
import { useState } from 'react'

function ShopInfo() {
    const slides = productList
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Navbar />
            
                <div className="mt-12 grid justify-center px-8 md:py-8 md:px-20">
                    <CardInfo type={'Shop'} />
                </div>
                <div className="flex flex-col justify-center items-center py-8 px-4 md:px-24">
                    <div className="flex flex-row justify-center gap-4">
                        <h3 className="py-4 text-center text-2xl font-extrabold text-primary ">
                            RECOMMENDED
                        </h3>
                        <button>
                            <Image
                                className="w-6"
                                src={Add}
                                alt={''}
                                onClick={() => setShowModal(!showModal)}
                            />
                        </button>
                    </div>{showModal ? <CarouselCardInput /> : 
                    <Carousel>
                        {slides.map((items) => (
                            <div className="flex w-full flex-none justify-center">
                                <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                    <Image
                                        src={Product}
                                        className="w-40 md:w-52"
                                        alt={''}
                                    />

                                    <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                        <h4 className="text-center text-xl font-extrabold">
                                            {items.productName}
                                        </h4>
                                        <p className="text-center text-[#989898] lg:text-start ">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Consequatur, s
                                        </p>
                                        <p className="font-extrabold">
                                            {items.price} ฿
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
}
                </div>
            <Footer />
        </>
    )
}

export default ShopInfo
