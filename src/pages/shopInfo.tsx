import Navbar from '../component/Navbar'
import CardInfo from '../component/CardInfo'
import Footer from '../component/Footer'

import { useState } from 'react'

import Image from 'next/image'
import Product from '../pages/assets/product.svg'
import Right from '../pages/assets/right.svg'
import Left from '../pages/assets/left.svg'


function ShopInfo({ data }: any) {
    const [curr, setCurr] = useState(0)

    const [slides, setSlides] = useState(data.products)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    function handleClick(i: number) {
        setCurr(i)
    }

    const deleteSlide = (id: any) => {
        if (curr === slides.length - 1) {
            prev()
        }
        const delslides = slides.filter(
            (x: any) => x.id.toString() !== id.toString()
        )
        setSlides(delslides)
    }

    return (
        <>
            <Navbar />
            <div className="mt-12 grid justify-center px-8 md:py-8 md:px-20">
                <CardInfo type={'Shop'} edit={false} data={data} />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-8 md:px-24">
                <div className="flex flex-row justify-center gap-4">
                    <h3 className="text-center text-2xl font-extrabold text-primary ">
                        PRODUCT HIGHLIGHTS
                    </h3>
                </div>
                <div className="relative overflow-hidden lg:max-w-5xl">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${curr * 100}%)`,
                        }}
                    >
                        {slides.map((items: any) => (
                            <div className="flex w-full flex-none justify-center">
                                <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                    {items.image != '' ? (
                                        <img
                                            src={items.image}
                                            className="w-40 md:w-52"
                                            alt={''}
                                        />
                                    ) : (
                                        <Image
                                            src={Product}
                                            className="w-40 md:w-52"
                                            alt={''}
                                        />
                                    )}

                                    <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                        <h4 className="text-center text-xl font-extrabold">
                                            {items.productName}
                                        </h4>
                                        <p className="text-center text-[#989898] lg:text-start ">
                                            {items.description.length > 130
                                                ? items.description.slice(
                                                      0,
                                                      130
                                                  ) + '...'
                                                : items.description}
                                        </p>
                                        <p className="text-center font-extrabold">
                                            {items.price} ฿
                                        </p>
                                        <button
                                            className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r"
                                            onClick={() =>
                                                deleteSlide(items.id)
                                            }
                                        >
                                            Delete
                                        </button>
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
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context: { req: any; query: any }) {
    const { req, query } = context
    const valueFromRouter = query.id
    const data = await fetch(
        `http://localhost:3000/api/shops/${valueFromRouter}`
    )
    const jsonData = await data.json()
    return {
        props: {
            data: jsonData[0],
        },
    }
}

export default ShopInfo
