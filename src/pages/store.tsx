import Navbar from '../component/Navbar'
import StoreCard from '../component/StoreCard'
import Footer from '../component/Footer'

function store() {
    return (
        <>
            <Navbar />
            <div className="mx-12 mt-10 rounded-lg bg-gradient-to-r from-[#EF9323] to-[#5D3891] p-[4px]">
                <input
                    type="text"
                    placeholder="Type store name..."
                    className="input input-bordered max-w w-full rounded-md px-4 py-2"
                />
            </div>
            <div className="grid grid-cols-1 px-16 my-5 md:grid-cols-2 md:gap-x-6 lg:px-20 xl:grid-cols-3">
                <StoreCard />
                <StoreCard />
                <StoreCard />
            </div>
            <Footer />
        </>
    )
}

export default store
