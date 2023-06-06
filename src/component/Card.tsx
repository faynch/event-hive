import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import Event from '../pages/assets/event.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

interface CardProps {
    type: string
    data: any
    like: boolean
}

export default function Card(props: CardProps) {
    const [active, setActive] = useState(props.like)
    const { data: session } = useSession()

    const handleFollow = async (id: any) => {
        try {
            if (!active) {
                setActive(true)
                const formData = {
                    type: props.type.toLowerCase() ,
                    targetId: id,
                    userId: session?.user?.name,
                }
                console.log('follow ', formData)
                const response = await fetch(
                    `http://localhost:3000/api/follows`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    }
                )
                if (response.ok) {
                    // Successful response, handle accordingly
                    console.log('Data successfully follow!')
                    // window.location.reload()
                } else {
                    // Error response, handle accordingly
                    console.log('Failed to follow data')
                }
            } else {
                setActive(false)
                const formData = {
                    type: props.type.toLowerCase(),
                    targetId: id,
                    userId: session?.user?.name,
                }
                console.log('unfollow ', formData)

                const response = await fetch(
                    `http://localhost:3000/api/unfollows`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    }
                )
                if (response.ok) {
                    // Successful response, handle accordingly
                    console.log('Data successfully unfollow!')
                    // window.location.reload()
                } else {
                    // Error response, handle accordingly
                    console.log('Failed to unfollow data')
                }
            }
        } catch (error) {
            // Error occurred during the request, handle accordingly
            console.error('Error:', error)
        }
    }

    const router = useRouter()
    const valueToSend = props.data.id

    const sendEventValue = () => {
        router.push(`/eventInfo?id=${valueToSend}`)
    }

    const sendShopValue = () => {
        router.push(`/shopInfo?id=${valueToSend}`)
    }

    function isAvailble() {
        if (
            props.data.line == '' &&
            props.data.facebook == '' &&
            props.data.instagram == '' &&
            props.data.tiktok == ''
        )
            return false
        return true
    }

    return (
        <div className="relative flex h-[27.75rem] w-96 flex-col items-center gap-3 rounded-lg bg-white px-9 pb-12 text-center">
            {props.type === 'Event' ? (
                <div
                    onClick={sendEventValue}
                    className="flex flex-col items-center gap-3"
                >
                    {props.data.picture === '' ? (
                        <Image className="w-32 pt-14" src={Event} alt={''} />
                    ) : (
                        <img
                            className="mt-14 h-32 w-32 rounded-full bg-slate-400"
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
                    onClick={sendShopValue}
                    className="flex flex-col items-center gap-3"
                >
                    {props.data.picture === '' ? (
                        <Image className="w-32 pt-14" src={Shop} alt={''} />
                    ) : (
                        <img
                            className="mt-14 h-32 w-32 rounded-full bg-slate-400"
                            src={props.data.picture}
                            alt={''}
                        />
                    )}
                    <h5 className="text-lg font-extrabold">
                        {props.data.shopName}
                    </h5>
                </div>
            )}
            {session?.user?.image === 'visitor' ? (
                <div className="absolute top-7 right-7">
                    <button
                        onClick={() => handleFollow(props.data.id)}
                        className="w-8"
                    >
                        {active ? (
                            <Image src={Like} alt={''} />
                        ) : (
                            <Image src={Unlike} alt={''} />
                        )}
                    </button>
                </div>
            ) : (
                ''
            )}
            <GroupButton
                line={props.data.line}
                facebook={props.data.facebook}
                instagram={props.data.instagram}
                tiktok={props.data.tiktok}
            />
            <p
                className={`grid h-[4.875rem] place-content-center ${
                    isAvailble() ? '' : 'mb-4'
                }`}
            >
                {props.data.about.length > 100
                    ? props.data.about.slice(0, 100) + '...'
                    : props.data.about}
            </p>
            <div className="flex flex-wrap gap-2">
                {props.data.tags.length > 3 ? (
                    <>
                    <div
                        key={props.data.tags[0].id}
                        className="rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]"
                    >
                        {props.data.tags[0].tagName}
                    </div>
                    <div
                        key={props.data.tags[1].id}
                        className="rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]"
                    >
                        {props.data.tags[1].tagName}
                    </div>
                    <div
                        className="rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]"
                    >
                        ...
                    </div>
                    </>
                ) : (
                    <>
                        {props.data.tags.map((tag: any) => (
                            <div
                                key={tag.id}
                                className="rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]"
                            >
                                {tag.tagName}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}
