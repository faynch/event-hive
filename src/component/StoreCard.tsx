import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import { useState } from 'react'

const StoreCard = () => {
    const [active, setActive] = useState(false)

    return (
        <div className="my-3 flex w-96 flex-col items-center gap-3 rounded-lg bg-white px-9 pb-12 text-center">
            <div className="grid grid-cols-3">
                <Image className="col-start-2 w-32 pt-14" src={Shop} alt={''} />
                <button onClick={() => setActive(!active)} className="w-8 justify-self-end pt-7 flex items-start">
                    {active ? (<Image
                        src={Like}
                        alt={''}
                    />) : <Image
                    src={Unlike}
                    alt={''}
                />}
                </button>
            </div>

            <h5 className="text-lg font-extrabold">STORE NAME</h5>
            <GroupButton />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem, voluptat
            </p>
            <button className="rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]">
                catagories
            </button>
        </div>
    )
}

export default StoreCard
