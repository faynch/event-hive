import CarouselCard from '../component/CarouselCard'
import { productList } from 'public/CarouselItem.json'
import Image from 'next/image'
import Product from '../pages/assets/product.svg'

export default function Carousel({type}: any) {
    
    const slides = productList
    return (
        <CarouselCard>
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequatur, s
                            </p>
                            <p className="text-center font-extrabold">{items.price} ฿</p>
                        </div>
                    </div>
                </div>
            ))}
        </CarouselCard>
    )
}


