import RegisterCard from '../component/RegisterCard'
import Shopkeeper from '../pages/assets/Shopkeeper.svg'

export default function register_shop() {
    return (
        <>
            <div className="h-full max-w-full p-20">
                <div className="flex flex-col items-center">
                    <h3 className="bg-clip-text text-[2rem] font-extrabold text-[#5D3891] lg:text-[3rem]">
                        YOU ARE ...
                    </h3>
                    <div className="m-10 grid grid-cols-1 gap-20 lg:grid-cols-2">
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
