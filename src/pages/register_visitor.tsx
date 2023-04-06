import RegisterCard from '../component/RegisterCard'
import Visitor from '../pages/assets/visitor.svg'

export default function register_visitor() {
    return (
        <>
            <div className="h-full max-w-full p-20">
                <div className="flex flex-col items-center">
                    <h3 className="bg-clip-text text-[2rem] font-extrabold text-[#5D3891] lg:text-[3rem]">
                        YOU ARE ...
                    </h3>
                    <div className="m-10 grid grid-cols-1 gap-20 lg:grid-cols-2">
                        <RegisterCard
                            image={Visitor}
                            alt="Visitor"
                            title="Visitor"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
