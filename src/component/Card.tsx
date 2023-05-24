import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import Event from '../pages/assets/event.svg'
import { useState } from 'react'

interface CardProps {
    type: string
    data: any
}

export default function Card(props: CardProps) {
    const [active, setActive] = useState(false)
    
    const defaultPic = props.type === 'Shop' ? Shop : Event

    return (
        <div className="relative flex w-96 flex-col items-center gap-3 rounded-lg bg-white px-9 pb-12 text-center">
            <a
                href={props.type === 'Shop' ? '/shopInfo' : '/eventInfo'}
                className="flex flex-col items-center gap-3"
            >
                {props.data.picture === '' ? (
                    <Image className="w-32 pt-14" src={defaultPic} alt={''} />
                ) : (
                    <div className='w-32 h-32 mt-14 rounded-full overflow-hidden' >
                        <img src={props.data.picture}  alt={''} />
                    </div>
                )}

                <h5 className="text-lg font-extrabold">
                    {props.data.eventName}
                </h5>
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
            <p>{props.data.about.length > 100 ? props.data.about.slice(0, 100)+"..." : props.data.about}</p>
            <button className="rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]">
                catagories
            </button>
        </div>
    )
}
