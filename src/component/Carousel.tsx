import Image from 'next/image'

import Left from '../pages/assets/left.svg'
import Right from '../pages/assets/right.svg'
import Event from '../pages/assets/event.svg'

const Carousel = () => {
    return (
        <div className="mx-36 px-36 py-12 text-center">
            <h2 className="text-3xl font-extrabold text-primary">
                UPCOMING EVENT
            </h2>
            <div id="carousel" className="relative" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div
                        className="place-content-center"
                        data-carousel-item
                    >
                        <Image className='absolute block h-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src={Event} alt={''} />
                    </div>
                    
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
                    <button
                        type="button"
                        className="h-3 w-3 rounded-full bg-[#FFB84C]"
                        aria-current="false"
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                    ></button>
                    <button
                        type="button"
                        className="h-3 w-3 rounded-full bg-[#F3F4F4]"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                    ></button>
                    <button
                        type="button"
                        className="h-3 w-3 rounded-full bg-[#F3F4F4]"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to="2"
                    ></button>
                </div>
                {/* <!-- Slider controls --> */}

                <button
                    type="button"
                    className="absolute top-0 left-0 flex h-full cursor-pointer items-center justify-center px-4"
                    data-carousel-prev
                >
                    <Image src={Left} alt={''} />
                </button>

                <button
                    type="button"
                    className="absolute top-0 right-0 flex h-full cursor-pointer items-center justify-center px-4"
                    data-carousel-next
                >
                    <Image src={Right} alt={''} />
                </button>
            </div>
        </div>
    )
}

export default Carousel
