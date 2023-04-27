import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'
import Like from '../pages/assets/like.svg'
import Unlike from '../pages/assets/unlike.svg'
import Edit from '../pages/assets/edit.svg'
import { useState } from 'react'

const LargeCard = () => {
    const [storeName, setStoreName] = useState('Example Shop')
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio nostrum aliquid enim facere obcaecati in vero quia? Maxime nam dolore perspiciatis expedita quia tempora, consectetur deserunt. Mollitia, veritatis maiores?')
    const [editMode, setEditMode] = useState(false)
    const [like, setLike] = useState(false)

    const handleSave = () => {
        // logic to save changes made by the user
        setEditMode(false) // switch back to view mode
    }

    if (editMode) {
        return (
            <div className="flex flex-row rounded-lg bg-white py-12 px-12 sm:px-20 xl:px-28 lg:max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    <div>
                        <Image className="basis-1/3 w-52 self-center sm:self-start" src={Shop} alt={''} />
                    </div>
                    <div className="basis-2/3 col-span-2 flex flex-col items-center sm:items-start gap-4">
                        <input className="bg-white sm:text-4xl text-2xl font-extrabold" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
                        <GroupButton />
                        <button className="items-center sm:self-start rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]">
                            catagories
                        </button>
                        <textarea className='bg-white text-center sm:text-start w-full' value={description} onChange={(e) => setDescription(e.target.value)} />
                        <button onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex relative flex-row rounded-lg bg-white py-12 px-12 sm:px-20 xl:px-28 lg:max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <Image className="basis-1/3 w-52 self-center sm:self-start" src={Shop} alt={''} />
                <div className="absolute top-8 right-8 flex items-center">
                    <button
                        onClick={() => setEditMode(!editMode)}
                        className="mx-3 w-7 md:w-9"
                        
                    ><Image src={Edit} alt={''} /></button>
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

                <div className="basis-2/3 col-span-2 flex flex-col items-center sm:items-start gap-4">
                    <h2 className="sm:text-4xl text-2xl font-extrabold">{storeName}</h2>
                    <GroupButton />
                    <button className="items-center rounded-xl bg-[#F5EAEA] px-3 text-[#F16767] sm:self-start">
                        catagories
                    </button>
                    <p className='text-center sm:text-start'>
                        {description}
                    </p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default LargeCard
