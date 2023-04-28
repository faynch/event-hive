import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import Event from '../pages/assets/event.svg'
import { useState } from 'react'

interface CardProps {
    type: string
}

export default function Card(props: CardProps) {
    const [active, setActive] = useState(false)

    return (
        <div className="relative flex w-96 flex-col items-center gap-3 rounded-lg bg-white px-9 pb-12 text-center">
            <a
                href={props.type === 'Shop' ? '/shopInfo' : '/eventInfo'}
                className="flex flex-col justify-center gap-3"
            >
                {props.type === 'Shop' ? (
                    <Image
                        className="col-start-2 w-32 pt-14"
                        src={Shop}
                        alt={''}
                    />
                ) : (
                    <Image
                        className="col-start-2 w-32 pt-14"
                        src={Event}
                        alt={''}
                    />
                )}

                <h5 className="text-lg font-extrabold">Example {props.type}</h5>
            </a>
            <div className="absolute top-7 right-7">
                <button onClick={() => setActive(!active)} className="w-8">
                    {active ? (
                        <Image src={Like} alt={''} />
                    ) : (
                        <Image src={Unlike} alt={''} />
                    )}
                </button>
            </div>

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
