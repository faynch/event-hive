import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import Event from '../pages/assets/event.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface CardProps {
    type: string
    data: any
}

export default function Card(props: CardProps) {
    const [active, setActive] = useState(false)

    const router = useRouter()

    function sendEventData(data: any) {
        router.push({
            pathname: '/eventInfo',
            query: { data: JSON.stringify(data) },
        })
    }

    function sendShopData(data: any) {
        router.push({
            pathname: '/shopInfo',
            query: { data: JSON.stringify(data) },
        })
    }

    function isAvailble() {
        if (
            props.data.line == '' &&
            props.data.facebook == '' &&
            props.data.instagram == ''
        )
            return false
        return true
    }

    return (
        <div className="relative flex w-96 flex-col items-center gap-3 rounded-lg bg-white px-9 pb-12 text-center">
            {props.type === 'Event' ? (
                <div
                    onClick={() => sendEventData(props.data)}
                    className="flex flex-col items-center gap-3"
                >
                    {props.data.picture === '' ? (
                        <Image className="w-32 pt-14" src={Event} alt={''} />
                    ) : (
                        <img
                            className="mt-14 h-32 w-32 rounded-full"
                            src={props.data.picture}
                            alt={''}
                        />
                    )}
                    <h5 className="text-lg font-extrabold">
                        {props.data.eventName}
                    </h5>
                </div>
            ) : (
                <div
                    // id="eventLink"
                    onClick={() => sendShopData(props.data)}
                    // data-json={props.data}
                    className="flex flex-col items-center gap-3"
                >
                    {props.data.picture === '' ? (
                        <Image className="w-32 pt-14" src={Shop} alt={''} />
                    ) : (
                        <img
                            className="mt-14 h-32 w-32 rounded-full"
                            src={props.data.picture}
                            alt={''}
                        />
                    )}
                    <h5 className="text-lg font-extrabold">
                        {props.data.shopName}
                    </h5>
                </div>
            )}
            <div className="absolute top-7 right-7">
                <button onClick={() => setActive(!active)} className="w-8">
                    {active ? (
                        <Image src={Like} alt={''} />
                    ) : (
                        <Image src={Unlike} alt={''} />
                    )}
                </button>
            </div>
            <GroupButton
                line={props.data.line}
                facebook={props.data.facebook}
                instagram={props.data.instagram}
                tiktok={props.data.tiktok}
            />
            <p className={isAvailble() ? '' : 'mb-4'}>
                {props.data.about.length > 100
                    ? props.data.about.slice(0, 100) + '...'
                    : props.data.about}
            </p>
            <div className="flex flex-wrap gap-2">
                {props.data.tags.map((tag: any) => (
                    <div
                        key={tag.id}
                        className="rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]"
                    >
                        {tag.tagName}
                    </div>
                ))}
            </div>
        </div>
    )
}
