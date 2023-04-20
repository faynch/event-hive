import Navbar from '../component/Navbar'
import StoreCard from '../component/StoreCard'
import Footer from '../component/Footer'
import Navigator from '../component/Navigator'

function store() {
    return (
        <>
            <Navbar />
            <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl ">
                <Navigator />
                <div className="my-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default store
