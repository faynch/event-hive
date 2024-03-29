import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import Phone from '../pages/assets/phone.svg'
import Add from '@/pages/assets/add.svg'
import Instagram from '../pages/assets/instagram.svg'
import Line from '../pages/assets/line.svg'
import Facebook from '../pages/assets/facebook.svg'
import Tiktok from '../pages/assets/tiktok.svg'
import Location from '../pages/assets/location.svg'
import TagSelector, { Tag } from './TagSelector'
import ImageUploader from '@/component/ImageUploader'
import { useSession } from 'next-auth/react'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import supabase from 'lib/supabase'

export default function CreateShop() {
    const [storeName, setStoreName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [phone, setPhone] = useState('')
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')
    const [line, setLine] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [showTagSelector, setShowTagSelector] = useState(false)
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [pictureFile, setPictureFile] = useState<File | null>(null)
    const { data: session } = useSession()

    const handleTagSelectorClose = () => {
        setShowTagSelector(false)
    }

    const handleShowTagSelector = () => {
        setShowTagSelector(true)
    }
    const tagId = selectedTags.map((tag) => {
        return tag.id
    })

    const handleImageChange = (file: File | null) => {
        setPictureFile(file) // Store the selected image file
    }

    const handleSave = async () => {
        // Upload the image to Supabase storage
        if (pictureFile) {
            const fileName = uuid()
            const { data, error } = await supabase.storage
                .from('ShopImage')
                .upload(fileName, pictureFile)

            if (error) {
                console.error('Error uploading image:', error.message)
                return
            }

            const imageUrl = supabase.storage
                .from('ShopImage')
                .getPublicUrl(fileName)
            console.log('Image URL:', imageUrl.data.publicUrl)

            if (session?.user?.image == 'shopOwner') {
                const formData = {
                    shopName: storeName,
                    about: description,
                    address: address,
                    picture: imageUrl.data.publicUrl,
                    tags: tagId,
                    telephone: phone,
                    facebook: facebook,
                    instagram: instagram,
                    line: line,
                    tiktok: tiktok,
                    shopOwnerId: [session?.user?.name],
                }

                const jsonData = JSON.stringify(formData)
                console.log(jsonData)
                try {
                    const response = await fetch(
                        'http://localhost:3000/api/shops/registration',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: jsonData,
                        }
                    )

                    if (response.ok) {
                        console.log('Data successfully submitted!')
                    } else {
                        console.log('Failed to submit data')
                    }
                } catch (error) {
                    console.error('Error:', error)
                }
            } else {
                const formData = {
                    shopName: storeName,
                    about: description,
                    address: address,
                    telephone: phone,
                    line: line,
                    instagram: instagram,
                    startDate: startDate,
                    endDate: endDate,
                    facebook: facebook,
                    ticktok: tiktok,
                    tags: tagId,
                    picture: imageUrl.data.publicUrl,
                    eventOrganizerId: [session?.user?.name],
                }
                const jsonData = JSON.stringify(formData)
                console.log(jsonData)
                try {
                    const response = await fetch(
                        'http://localhost:3000/api/events/registration',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: jsonData,
                        }
                    )

                    if (response.ok) {
                        console.log('Data successfully submitted!')
                    } else {
                        console.log('Failed to submit data')
                    }
                } catch (error) {
                    console.error('Error:', error)
                }
            }
        }
        window.location.reload()
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <div className="my-12 grid justify-center px-8 md:py-8 md:px-20">
                        <div className="relative flex flex-row rounded-lg bg-white py-12 px-12 sm:px-20 lg:max-w-5xl xl:px-28">
                            <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                                <div className="h-full">
                                    <ImageUploader
                                        onImageChange={handleImageChange}
                                        type={'Shop'}
                                    />
                                </div>
                                <div className="flex flex-col gap-4 sm:items-start">
                                    <input
                                        className="block rounded-md border border-slate-300 bg-white p-2 text-2xl font-extrabold shadow-sm placeholder:text-slate-400 sm:text-4xl w-full"
                                        placeholder={'Shop Name'}
                                        value={storeName}
                                        onChange={(e) =>
                                            setStoreName(e.target.value)
                                        }
                                    />

                                    <div className="flex flex-row w-full items-center gap-2">
                                        <button className='flex-none w-8'>
                                            <Image
                                                className="h-8 w-8"
                                                src={Location}
                                                alt={''}
                                            />
                                        </button>
                                        <input
                                            className="rounded-md border grow border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                            placeholder="Address"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-row w-1/2 items-center gap-2">
                                        <button className='flex flex-none w-8 justify-center'>
                                            <Image
                                                className="w-6"
                                                src={Phone}
                                                alt={''}
                                            />
                                        </button>
                                        <input
                                            className="grow rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                            value={phone}
                                            placeholder="Phone number"
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-row w-1/2 items-center gap-2">
                                        <button className='flex flex-none w-8 justify-center'>
                                            <Image
                                                className="h-8"
                                                src={Instagram}
                                                alt={''}
                                            />
                                        </button>
                                        <input
                                            className="grow rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                            placeholder="Instagram"
                                            value={instagram}
                                            onChange={(e) =>
                                                setInstagram(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-row w-1/2 items-center gap-2">
                                        <button className='flex flex-none w-8 justify-center'>
                                            <Image
                                                className="h-8"
                                                src={Facebook}
                                                alt={''}
                                            />
                                        </button>
                                        <input
                                            className="grow rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                            placeholder="Facebook"
                                            value={facebook}
                                            onChange={(e) =>
                                                setFacebook(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-row w-1/2 items-center gap-2">
                                        <button className='flex flex-none w-8 justify-center'>
                                            <Image
                                                className="h-8"
                                                src={Line}
                                                alt={''}
                                            />
                                        </button>
                                        <input
                                            className="grow rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                            placeholder="Line"
                                            value={line}
                                            onChange={(e) =>
                                                setLine(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-row w-1/2 items-center gap-2">
                                        <button className='flex flex-none w-8 justify-center'>
                                            <Image
                                                className="h-8"
                                                src={Tiktok}
                                                alt={''}
                                            />
                                        </button>
                                        <input
                                            className="grow rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                            placeholder="TikTok"
                                            value={tiktok}
                                            onChange={(e) =>
                                                setTiktok(e.target.value)
                                            }
                                        />
                                    </div>
                                    {showTagSelector && (
                                        <TagSelector
                                            onClose={handleTagSelectorClose}
                                            selectTags={selectedTags}
                                            setSelectTags={setSelectedTags}
                                        />
                                    )}
                                    <div className="ml-5 flex flex-wrap">
                                        {selectedTags.length > 0 ? (
                                            selectedTags.map((tag) => (
                                                <div
                                                    className="mx-1 flex"
                                                    key={tag.id}
                                                >
                                                    <button
                                                        className="flex items-center rounded-xl bg-[#F5EAEA] px-3 text-[#F16767]"
                                                        key={tag.id}
                                                    >
                                                        {tag.tagName}
                                                    </button>
                                                    <button
                                                        className="ml-[-0.5rem] h-4 w-4 items-center justify-center rounded-full bg-[#F16767] align-middle text-[10px] font-bold text-white"
                                                        onClick={() =>
                                                            setSelectedTags(
                                                                selectedTags.filter(
                                                                    (t) =>
                                                                        t !==
                                                                        tag
                                                                )
                                                            )
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <button
                                                className="items-center rounded-xl bg-[#F5EAEA] px-3 text-[#F16767] sm:self-start"
                                                onClick={handleShowTagSelector}
                                            >
                                                catagories
                                            </button>
                                        )}
                                        <button
                                            className="ml-2"
                                            onClick={handleShowTagSelector}
                                        >
                                            <Image
                                                width={25}
                                                src={Add}
                                                alt={'add'}
                                            />
                                        </button>
                                    </div>

                                    <textarea
                                        className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                                        rows={5}
                                        cols={100}
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
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
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
