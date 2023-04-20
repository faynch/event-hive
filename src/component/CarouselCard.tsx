import Image from 'next/image'
import Event from '../pages/assets/event.svg'
import GroupButton from './GroupButton'

const CarouselCard = () => {
    return (
        <>
            <div className="bg-white py-8">
                <h3 className="py-4 text-center text-2xl font-extrabold text-primary">
                    UPCOMING EVENT
                </h3>
                <div className="carousel ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="grid grid-cols-1 gap-4 justify-items-center content-center">
                            <Image
                                src={Event}
                                className="w-48 md:w-64"
                                alt={''}
                            />

                            <div className="flex flex-col gap-4 pb-2">
                                <h4 className="text-center text-xl font-extrabold">
                                    EVENT NAME
                                </h4>
                                <p className="text-center text-[#989898] ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequatur, s
                                </p>

                                <GroupButton />
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
                            <a href="#slide4" className="btn-circle btn">
                                ❮
                            </a>
                            <a href="#slide2" className="btn-circle btn">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <Image src={Event} className="w-full" alt={''} />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn-circle btn">
                                ❮
                            </a>
                            <a href="#slide3" className="btn-circle btn">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <Image src={Event} className="w-full" alt={''} />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn-circle btn">
                                ❮
                            </a>
                            <a href="#slide4" className="btn-circle btn">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <Image src={Event} className="w-full" alt={''} />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn-circle btn">
                                ❮
                            </a>
                            <a href="#slide1" className="btn-circle btn">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-2 py-2">
                    <a href="#slide1">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#F3F4F4]"
                        ></button>
                    </a>
                    <a href="#slide2">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#F3F4F4]"
                        ></button>
                    </a>
                    <a href="#slide3">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#F3F4F4]"
                        ></button>
                    </a>
                    <a href="#slide4">
                        <button
                            type="button"
                            className="h-3 w-3 rounded-full bg-[#F3F4F4]"
                        ></button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default CarouselCard
