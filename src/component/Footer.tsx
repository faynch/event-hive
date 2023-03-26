import Image from 'next/image'
import EventHive from '../pages/assets/eventHive.svg'

function Footer() {
    return (
        <section className="bg-[#A459D121] p-8 ">
            <div className='flex flex-row justify-center'>
            {/* <Image className="w-6" src={EventHive} alt={'Event Hive'} /> */}
            <h3
                className="pl-4 text-xl font-extrabold text-black"
            >
                {/* <span className="bg-gradient-to-r from-[#EF9323] to-[#5D3891] bg-clip-text text-transparent"> */}
                ©  2023 Event hive
                {/* </span> */}
            </h3></div>
            
        </section>
    )
}

export default Footer
