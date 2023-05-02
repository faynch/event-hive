import Navbar from '../component/Navbar'
import CardInfo from '../component/CardInfo'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel'
import CarouselCardInput from '../component/CarouselCardInput'
import Image from 'next/image'
import { productList } from 'public/CarouselItem.json'
import Product from '../pages/assets/product.svg'

import Add from '../pages/assets/add.svg'

import { useState } from 'react'

function ShopInfo() {
    const [edit, setEdit] = useState(false)
    const slides = productList
    return (
        <>
            <Navbar />

            <div className="mt-12 grid justify-center px-8 md:py-8 md:px-20">
                <CardInfo type={'Shop'} />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-8 md:px-24">
                {edit ? (
                    <>
                        <h3 className="text-center text-2xl font-extrabold text-primary ">
                            ADD RECOMMENDED PRODUCT
                        </h3>

                        <CarouselCardInput contact={false}/>
                        <div className="flex w-full justify-center gap-4 px-12 lg:max-w-5xl lg:justify-end">
                            <button className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r">
                                Add
                            </button>
                            <button
                                className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r"
                                onClick={() => setEdit(false)}
                            >
                                Save
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-row justify-center gap-4">
                            <h3 className="text-center text-2xl font-extrabold text-primary ">
                                RECOMMENDED
                            </h3>
                            <button>
                                <Image
                                    className="w-6"
                                    src={Add}
                                    alt={''}
                                    onClick={() => setEdit(true)}
                                />
                            </button>
                        </div>
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
                                            <p className="text-center font-extrabold">
                                                {items.price} ฿
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}

export default ShopInfo
