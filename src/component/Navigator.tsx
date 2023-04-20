import Image from 'next/image'
import Search from '../pages/assets/search.svg'
import Filter from '../pages/assets/filter.svg'

function Navigator() {
    return (
        <div className="mx-12 flex flex-row rounded-lg bg-gradient-to-r from-[#EF9323] to-[#5D3891] p-1 md:mx-36 xl:mx-4">
            <input
                type="text"
                placeholder="Type event name..."
                className="max-w input-bordered input w-full rounded-md rounded-r-none border-r-0 bg-white py-2"
            />
            <button className="bg-white">
                <Image className="w-6" src={Search} alt={'Search'} />
            </button>
            <button className="rounded-r-md bg-white pr-2">
                <Image className="h-6" src={Filter} alt={'Filter'} />
            </button>
        </div>
    )
}

export default Navigator
