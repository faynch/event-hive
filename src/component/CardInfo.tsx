import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Event from '../pages/assets/event.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import Edit from '../pages/assets/edit.svg'
import { useState } from 'react'

import Phone from '../pages/assets/phone.svg'
import Email from '../pages/assets/email.svg'

export default function CardInfo({ type }: any) {
    const [storeName, setStoreName] = useState(`Example ${type}`)
    const [description, setDescription] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio nostrum aliquid enim facere obcaecati in vero quia? Maxime nam dolore perspiciatis expedita quia tempora, consectetur deserunt. Mollitia, veritatis maiores?'
    )
    const [phone, setPhone] = useState('000-111111')
    const [email, setEmail] = useState('admin@eventhive')
    const [editMode, setEditMode] = useState(false)
    const [like, setLike] = useState(false)

    const handleSave = () => {
        // logic to save changes made by the user
        setEditMode(false) // switch back to view mode
    }

    if (editMode) {
        return (
            <div className="relative flex flex-row rounded-lg bg-white py-12 px-12 sm:px-20 lg:max-w-7xl xl:px-28">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
                    {type === 'Shop' ? (
                        <Image
                            className="w-52 basis-1/3 self-center sm:self-start"
                            src={Shop}
                            alt={''}
                        />
                    ) : (
                        <Image
                            className="w-52 basis-1/3 self-center sm:self-start"
                            src={Event}
                            alt={''}
                        />
                    )}

                    <div className="col-span-2 flex basis-2/3 flex-col items-center gap-4 sm:items-start">
                        <input
                            className="border-2 border-black bg-white text-2xl font-extrabold sm:text-4xl"
                            value={storeName}
                            onChange={(e) => setStoreName(e.target.value)}
                        />
                        <div className="flex flex-row items-center gap-2">
                            <button>
                                <Image className="h-8" src={Phone} alt={''} />
                            </button>
                            <input
                                className="border-2 border-black bg-white"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <button>
                                <Image
                                    className="ml-2 h-8"
                                    src={Email}
                                    alt={''}
                                />
                            </button>
                            <input
                                className="border-2 border-black bg-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <GroupButton />
                        <button className="items-center rounded-xl bg-[#F5EAEA] px-3 text-[#F16767] sm:self-start">
                            catagories
                        </button>
                        <textarea
                            className="w-full bg-white text-center sm:text-start"
                            rows={5}
                            cols={100}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button
                            onClick={handleSave}
                            className="mx-3 justify-end self-end rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-6 py-2 font-extrabold text-white hover:bg-gradient-to-r"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative flex flex-row rounded-lg bg-white py-12 px-12 sm:px-20 lg:max-w-7xl xl:px-28">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
                {type === 'Shop' ? (
                    <Image
                        className="w-52 basis-1/3 self-center sm:self-start"
                        src={Shop}
                        alt={''}
                    />
                ) : (
                    <Image
                        className="w-52 basis-1/3 self-center sm:self-start"
                        src={Event}
                        alt={''}
                    />
                )}
                <div className="absolute top-8 right-8 flex items-center">
                    <button
                        onClick={() => setEditMode(!editMode)}
                        className="mx-3 w-7 md:w-9"
                    >
                        <Image src={Edit} alt={''} />
                    </button>
                    <button
                        onClick={() => setLike(!like)}
                        className="w-6 md:w-8"
                    >
                        {like ? (
                            <Image src={Like} alt={''} />
                        ) : (
                            <Image src={Unlike} alt={''} />
                        )}
                    </button>
                </div>

                <div className="col-span-2 flex basis-2/3 flex-col items-center gap-4 sm:items-start">
                    <h2 className="text-2xl font-extrabold sm:text-4xl">
                        {storeName}
                    </h2>
                    <div className="flex flex-row items-center gap-2">
                        <button>
                            <Image className="h-8" src={Phone} alt={''} />
                        </button>
                        {phone}
                        <button>
                            <Image className="ml-2 h-8" src={Email} alt={''} />
                        </button>
                        {email}
                    </div>
                    <GroupButton />
                    <button className="items-center rounded-xl bg-[#F5EAEA] px-3 text-[#F16767] sm:self-start">
                        catagories
                    </button>
                    <p className="text-center sm:text-start">{description}</p>
                </div>
            </div>
        </div>
    )
}
