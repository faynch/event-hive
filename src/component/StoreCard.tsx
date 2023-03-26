import Image from 'next/image'
import GroupButton from './GroupButton'
import Shop from '../pages/assets/shop.svg'

const StoreCard = () => {
    return (
        <div className="my-3 flex flex-col items-center gap-3 rounded-lg bg-white p-9 text-center">
            <Image className="w-32" src={Shop} alt={''} />
            <h5 className="text-lg font-extrabold">STORE NAME</h5>
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

export default StoreCard
