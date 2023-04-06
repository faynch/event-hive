import RegisterCard from '../component/RegisterCard'
import Visitor from '../pages/assets/visitor.svg'
import Shopkeeper from '../pages/assets/Shopkeeper.svg'
import Organzier from '../pages/assets/Organizer.svg'
import Link from 'next/link'

export default function register() {
    return (
        <>
            <div className="h-full max-w-full p-20">
                <div className="flex flex-col items-center">
                    <h3 className="bg-clip-text text-[2rem] font-extrabold text-[#5D3891] lg:text-[3rem]">
                        YOU ARE ...
                    </h3>
                    <div className="m-10 grid grid-cols-1 gap-20 lg:grid-cols-3">
                        <RegisterCard
                            image={Visitor}
                            alt="Visitor"
                            title="Visitor"
                        />
                        <RegisterCard
                            image={Organzier}
                            alt="Event Organizer"
                            title="Event Organizer"
                        />
                        <RegisterCard
                            image={Shopkeeper}
                            alt="ShopKeeper"
                            title="ShopKeeper"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
