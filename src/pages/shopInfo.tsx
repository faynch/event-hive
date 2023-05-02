import Navbar from '../component/Navbar'
import CardInfo from '../component/CardInfo'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel'
import CarouselCardInput from '../component/CarouselCardInput'
import Image from 'next/image'

import Add from '../pages/assets/add.svg'

import { useState } from 'react'

function ShopInfo() {
    const [edit, setEdit] = useState(false)

    return (
        <>
            <Navbar />

            <div className="mt-12 grid justify-center px-8 md:py-8 md:px-20">
                <CardInfo type={'Shop'} />
            </div>
            <div className="flex flex-col items-center justify-center p-8 gap-8 md:px-24">
                {edit ? (
                    <>
                    
                        <h3 className="text-center text-2xl font-extrabold text-primary ">
                            ADD RECOMMENDED PRODUCT
                        </h3>
                   
                        <CarouselCardInput />
                        <div className='w-full px-12 flex gap-4 justify-center lg:justify-end lg:max-w-5xl'>
                        <button
                            className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r"
                            
                        >
                            Add
                        </button>
                        <button
                            className="rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2 text-center font-extrabold text-white hover:bg-gradient-to-r"
                            onClick={() => setEdit(false)}
                        >
                            Save
                        </button></div>
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
                        <Carousel />
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}

export default ShopInfo
