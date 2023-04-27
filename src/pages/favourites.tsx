import Navbar from '../component/Navbar'
import StoreCard from '../component/StoreCard'
import Footer from '../component/Footer'
import Navigator from '../component/Navigator'
import { useState } from 'react'

function favourites() {
    const [toggle, setToggle] = useState(false)
    
    return (
        <>
            <Navbar />
            <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                <Navigator />
                <h4 className="mx-auto mt-8 text-xl font-extrabold text-primary">
                    SEARCH FOR :
                </h4>
                <div className="mt-6 mb-10 flex justify-center">
                    <button onClick={() => setToggle(!toggle)}>
                        <div className={`rounded-l-md bg-[#FFB84C]  px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-70 ${toggle ? 'opacity-50' : 'opacity-100'}`}>
                            Stores
                        </div>
                    </button>
                    <button onClick={() => setToggle(!toggle)}>
                    <div className={`rounded-r-md text-sm bg-[#FFB84C] px-4 py-2.5 font-semibold text-white shadow-sm hover:opacity-70 ${toggle ? 'opacity-100' : 'opacity-50'}`}>
                            Event
                        </div>
                    </button>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default favourites
