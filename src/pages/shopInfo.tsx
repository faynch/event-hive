import Navbar from '../component/Navbar'
import LargeCard from '../component/CardInfo'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel'
import Image from 'next/image'
import Product from '../pages/assets/product.svg'
import GroupButton from '../component/GroupButton'

import Right from '../pages/assets/right.svg'
import Left from '../pages/assets/left.svg'

function ProductInfo() {
    return (
        <>
            <Navbar />
            <div className="mt-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                <LargeCard />
            </div>
            <div className="grid justify-center py-8 px-4 md:px-24">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary ">
                    RECOMMENDED
                </h3>
                <div className="relative lg:max-w-5xl">
                    <div className="absolute left-5 top-1/3 hidden md:flex">
                        <a href="#slide1">
                            <Image src={Left} alt={''} />
                        </a>
                    </div>
                    <div className="absolute right-5 top-1/3 hidden md:flex">
                        <a href="#slide2">
                            <Image src={Right} alt={''} />
                        </a>
                    </div>
                    <div className="carousel ">
                        <div
                            id="slide1"
                            className="carousel-item w-full justify-center"
                        >
                            <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                <Image
                                    src={Product}
                                    className="w-40 md:w-52"
                                    alt={''}
                                />

                                <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                    <h4 className="text-center text-xl font-extrabold">
                                        Product NAME 1
                                    </h4>
                                    <p className="text-center text-[#989898] lg:text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto s</p>

                                    <GroupButton />
                                </div>
                            </div>
                        </div>
                        <div
                            id="slide2"
                            className="carousel-item w-full justify-center"
                        >
                            <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                <Image
                                    src={Product}
                                    className="w-40 md:w-52"
                                    alt={''}
                                />

                                <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                    <h4 className="text-center text-xl font-extrabold">
                                        Product NAME 2
                                    </h4>
                                    <p className="text-center text-[#989898] lg:text-start ">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Consequatur, s
                                    </p>

                                    <GroupButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-2 py-4">
                    <a href="#slide1">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#989898]"
                        ></button>
                    </a>
                    <a href="#slide2">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#989898]"
                        ></button>
                    </a>
                    <a href="#slide3">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#989898]"
                        ></button>
                    </a>
                    <a href="#slide4">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#989898]"
                        ></button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductInfo
