import Navbar from '../component/Navbar'
import StoreCard from '../component/StoreCard'
import Footer from '../component/Footer'

import Image from 'next/image'
import Search from '../pages/assets/search.svg'
import Filter from '../pages/assets/filter.svg'

function store() {
    return (
        <>
            <Navbar />
            <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl ">
                <div className="flex flex-row mx-12 rounded-lg bg-gradient-to-r from-[#EF9323] to-[#5D3891] p-1 md:mx-36 xl:mx-4">
                    <input
                        type="text"
                        placeholder="Type store name..."
                        className="max-w input-bordered border-r-0 input w-full rounded-md rounded-r-none bg-white py-2"
                    />
                    <button className='bg-white'>
                    <Image
                        className="w-6"
                        src={Search}
                        alt={'Search'}
                    /></button>
                    <button className='rounded-r-md bg-white pr-2'>
                    <Image
                        className="h-6"
                        src={Filter}
                        alt={'Filter'}
                    /></button>
                </div>
                <div className="my-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default store
