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
    const [image, setImage] = useState(String)
    const [productName, setProductName] = useState(String)
    const [description, setDescription] = useState(String)
    const [slides, setSlides] = useState(productList)
    const [price, setPrice] = useState(String)

    var index = String(slides.length + 1)
    const addSlide = () => {
        slides.push({
            id: index,
            image: image,
            productName: productName,
            description: description,
            price: price,
        })
        console.log(slides)
    }
    const deleteSlide = (id: any) => {
        const delslides = slides.filter(
            (x) => x.id.toString() !== id.toString()
        )

        setSlides(delslides)
    }
    console.log(slides, 'data-')

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

                        <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-[#F5EAEA] p-12 drop-shadow-xl lg:max-w-5xl lg:gap-8">
                            <div className="flex w-full flex-row items-center">
                                <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                                    Image
                                </h5>
                                <input
                                    className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                    placeholder="Image URL"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>
                            <div className="flex w-full flex-row items-center">
                                <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                                    Name
                                </h5>
                                <input
                                    className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                    value={productName}
                                    placeholder="Store Name"
                                    onChange={(e) =>
                                        setProductName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex w-full flex-col items-start gap-4">
                                <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                                    Description
                                </h5>
                                <textarea
                                    className="h-32 w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                    value={description}
                                    placeholder="description"
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex w-full flex-row items-center">
                                <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                                    Price
                                </h5>
                                <input
                                    className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                    placeholder="price"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex w-full justify-center gap-4 px-12 lg:max-w-5xl lg:justify-end">
                            <button onClick={() => addSlide()} className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r">
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
                        {slides.length <= 0 ? (
                            <div></div>
                        ) : (
                            <Carousel>
                                {slides.map((items) => (
                                    <div className="flex w-full flex-none justify-center">
                                        <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                                            <a href="/shopInfo">
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
                                            </a>

                                            <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                                <h4 className="text-center text-xl font-extrabold">
                                                    {items.productName}
                                                </h4>
                                                <p className="text-center text-[#989898] lg:text-start ">
                                                    {items.description}
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
                            </Carousel>
                        )}
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}

export default ShopInfo
