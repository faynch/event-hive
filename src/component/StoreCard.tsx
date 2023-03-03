import Image from 'next/image'
import Shop from '../pages/assets/shop.svg'

const StoreCard = () => {
    return (
        <div className="flex flex-col items-center gap-3 text-center rounded-lg bg-white mx-6 my-3 p-9">
            <Image className='w-32' src={Shop} alt={''} />
            <h5 className='font-extrabold text-lg'>STORE NAME</h5>
            <button className='rounded-md bg-icon text-icon'>contact</button>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, voluptat</p>
            <button className='rounded-xl bg-[#F5EAEA] text-[#F5EAEA]'>contacnnnt</button>
        </div>
    )
}

export default StoreCard
