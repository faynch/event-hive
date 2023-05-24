import Navbar from '../component/Navbar'
import CardInfo from '../component/CardInfo'
import Footer from '../component/Footer'
import Image from 'next/image'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { shopList } from 'public/CarouselItem.json'
import Shop from '../pages/assets/product.svg'

import Right from '../pages/assets/right.svg'
import Left from '../pages/assets/left.svg'
import Add from '../pages/assets/add.svg'
import { useRouter } from 'next/router'

function EventInfo() {
    const [curr, setCurr] = useState(0)
    const [edit, setEdit] = useState(false)

    const router = useRouter()
    const { data } = router.query
    const item = data ? JSON.parse(String(data)) : null

    const [index, setIndex] = useState(String)
    const [image, setImage] = useState(String)
    const [storeName, setStoreName] = useState(String)
    const [description, setDescription] = useState(String)

    const [slides, setSlides] = useState(shopList)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    function handleClick(i: number) {
        setCurr(i)
    }

    const addSlide = () => {
        setIndex(uuidv4())
        slides.push({
            id: index,
            image: image,
            shopName: storeName,
            description: description,
        })
        setEdit(false)
    }
    const deleteSlide = (id: any) => {
        if (curr === slides.length - 1) {
            prev()
        }
        const delslides = slides.filter(
            (x) => x.id.toString() !== id.toString()
        )
        setSlides(delslides)
    }

    // const getData = () => {
    //     const router = useRouter();
    //     const data = router.query.data;
    //     return <div>Data: {data}</div>;
    //   };
    // const data = getData()

    return (
        <>
            <Navbar />
            <div className="mt-12 grid justify-center px-8 md:py-8 md:px-20">
                <CardInfo type="Event" data={item} />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-8 md:px-24">
                {edit ? (
                    <>
                        <h3 className="text-center text-2xl font-extrabold text-primary ">
                            ADD HIGHLIGHT SHOP
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
                                    value={storeName}
                                    placeholder="Store Name"
                                    onChange={(e) =>
                                        setStoreName(e.target.value)
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
                            <div className="flex w-full justify-center gap-4 lg:max-w-5xl lg:justify-end">
                                <button
                                    onClick={() => addSlide()}
                                    className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r"
                                >
                                    Add
                                </button>
                                <button
                                    onClick={() => setEdit(false)}
                                    className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r"
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-row justify-center gap-4">
                            <h3 className="text-center text-2xl font-extrabold text-primary ">
                                STORE HIGHLIGHTS
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
                        <div className="relative overflow-hidden lg:max-w-5xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translateX(-${curr * 100}%)`,
                                }}
                            >
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
                                                        src={Shop}
                                                        className="w-40 md:w-52"
                                                        alt={''}
                                                    />
                                                )}
                                            </a>
                                            <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                                <a href="/shopInfo">
                                                    <h4 className="text-center text-xl font-extrabold">
                                                        {items.shopName}
                                                    </h4>
                                                </a>
                                                <p className="text-center text-[#989898] lg:text-start ">
                                                    {items.description.length >
                                                    130
                                                        ? items.description.slice(
                                                              0,
                                                              130
                                                          ) + '...'
                                                        : items.description}
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
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}

export default EventInfo
