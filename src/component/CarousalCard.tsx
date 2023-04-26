import Image from 'next/image'
import Event from '../pages/assets/event.svg'
import GroupButton from './GroupButton'

const Carousel = () => {
    return (
        <>
            <div id="slide1" className="carousel-item w-full justify-center">
                <div className="grid grid-cols-1 content-center justify-items-center gap-4 lg:grid-cols-2 lg:justify-items-end lg:gap-12">
                    <Image src={Event} className="w-48 md:w-64" alt={''} />

                    <div className="flex flex-col gap-2 pb-2 lg:items-start lg:pt-8 lg:pr-24 xl:pr-36">
                        <h4 className="text-center text-xl font-extrabold">
                            EVENT NAME 1
                        </h4>
                        <p className="text-center text-[#989898] lg:text-start ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur, s
                        </p>

                        <GroupButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel
