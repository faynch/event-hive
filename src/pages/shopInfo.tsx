import Navbar from '../component/Navbar'
import LargeCard from '../component/CardInfo'
import Footer from '../component/Footer'
import Carousel from '../component/CarouselCard'
import Image from 'next/image'
import Shop from '../pages/assets/product.svg'
import GroupButton from '../component/GroupButton'

function shopInfo() {
  return (
    <>
            <Navbar />
            <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                <LargeCard />
            </div>
            <h3 className="py-4 text-center text-2xl font-extrabold text-primary ">
                    RECOMMENDED
                </h3>
            <div className="py-8 px-4 md:px-24 grid justify-center">
                <div className="carousel lg:max-w-5xl">
                    <div id="slide1" className="carousel-item relative w-full justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center lg:justify-items-end gap-4 lg:gap-12">
                            <Image
                                src={Shop}
                                className="w-48 md:w-64"
                                alt={''}
                            />

                            <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                <h4 className="text-center text-xl font-extrabold">
                                    Product NAME 1
                                </h4>
                                <p className="text-center lg:text-start text-[#989898] ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequatur, s
                                </p>

                                
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
                    <div id="slide2" className="carousel-item relative w-full justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center lg:justify-items-end gap-4 lg:gap-12">
                            <Image
                                src={Shop}
                                className="w-48 md:w-64"
                                alt={''}
                            />

                            <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                <h4 className="text-center text-xl font-extrabold">
                                    Product NAME 2
                                </h4>
                                <p className="text-center lg:text-start text-[#989898] ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequatur, s
                                </p>

                                
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
                            <a href="#slide1" className="btn-circle btn">
                                ❮
                            </a>
                            <a href="#slide3" className="btn-circle btn">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center lg:justify-items-end gap-4 lg:gap-12">
                            <Image
                                src={Shop}
                                className="w-48 md:w-64"
                                alt={''}
                            />

                            <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                <h4 className="text-center text-xl font-extrabold">
                                    Product NAME 3
                                </h4>
                                <p className="text-center lg:text-start text-[#989898] ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequatur, s
                                </p>

                                
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
                            <a href="#slide2" className="btn-circle btn">
                                ❮
                            </a>
                            <a href="#slide4" className="btn-circle btn">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center lg:justify-items-end gap-4 lg:gap-12">
                            <Image
                                src={Shop}
                                className="w-48 md:w-64"
                                alt={''}
                            />

                            <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                                <h4 className="text-center text-xl font-extrabold">
                                    Product NAME 4
                                </h4>
                                <p className="text-center lg:text-start text-[#989898] ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequatur, s
                                </p>

                                
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
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
            <Footer />
        </>
  )
}

export default shopInfo