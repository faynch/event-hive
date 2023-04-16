import RegisterCard from '../../component/RegisterCard'
import Visitor from '../../pages/assets/visitor.svg'
import Shopkeeper from '../../pages/assets/Shopkeeper.svg'
import Organzier from '../../pages/assets/Organizer.svg'
import Link from 'next/link'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="h-full max-w-full p-20">
                <div className="flex flex-col items-center">
                    <h3 className="bg-clip-text text-[2rem] font-extrabold text-[#5D3891] lg:text-[3rem] ">
                        YOU ARE ...
                    </h3>
                    <div className="m-10 grid grid-cols-1 gap-20 lg:grid-cols-3">
                        <Link href="/register/visitor">
                            <RegisterCard
                                image={Visitor}
                                alt="Visitor"
                                title="Visitor"
                            />
                        </Link>
                        <Link href="/register/organizer">
                            <RegisterCard
                                image={Organzier}
                                alt="Event Organizer"
                                title="Organizer"
                            />
                        </Link>
                        <Link href="/register/shopkeeper">
                            <RegisterCard
                                image={Shopkeeper}
                                alt="ShopKeeper"
                                title="ShopKeeper"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
