import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import { useState } from 'react'

const LargeCard = () => {
    const [active, setActive] = useState(false)

    return (
        <div className="mx-20 flex flex-row rounded-lg bg-white py-12 px-12 sm:px-20 xl:px-28 ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <Image className="basis-1/3 w-52 self-center sm:self-start" src={Shop} alt={''} />

                <div className="basis-2/3 col-span-2 flex flex-col items-center sm:items-start gap-4">
                    <h2 className="sm:text-4xl text-2xl font-extrabold">STORE NAME</h2>
                    <GroupButton />
                    <button className="items-center sm:self-start rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]">
                        catagories
                    </button>
                    <p className='text-center sm:text-start'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis distinctio nostrum aliquid enim facere
                        obcaecati in vero quia? Maxime nam dolore perspiciatis
                        expedita quia tempora, consectetur deserunt. Mollitia,
                        veritatis maiores?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LargeCard
