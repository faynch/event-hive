import Image from 'next/image'
import Search from '../pages/assets/search.svg'
import Filter from '../pages/assets/filter.svg'

import { useState } from 'react'
import Button from './Button'

function Navigator() {
    const [filter, setFilter] = useState(false)

    return (
        <>
            <div className="mx-12 flex flex-row rounded-lg bg-gradient-to-r from-[#EF9323] to-[#5D3891] p-1 md:mx-36 xl:mx-4">
                <input
                    type="text"
                    placeholder="Type event name..."
                    className="max-w input-bordered input w-full rounded-md rounded-r-none border-r-0 pl-4 bg-white py-2"
                />
                <button className="bg-white">
                    <Image className="w-6" src={Search} alt={'Search'} />
                </button>
                <button
                    className="rounded-r-md bg-white pr-2"
                    onClick={() => setFilter(!filter)}
                >
                    <Image className="h-6" src={Filter} alt={'Filter'} />
                </button>
            </div>
            <div className={`my-4 p-8 lg:self-end rounded-sm mx-12 md:mx-36 xl:mx-4 lg:max-w-7xl bg-white ${filter ? 'block' : 'hidden'}`}>
                <h4 className="text-xl font-extrabold text-primary mb-4">
                    Catagories
                </h4>
                <div className='grid grid-cols-3 lg:grid-cols-5 gap-4'>
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                </div>
            </div>
        </>
    )
}

export default Navigator
