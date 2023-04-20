import Navbar from '../component/Navbar'
import LargeCard from '../component/CardInfo'
import Footer from '../component/Footer'
import Navigator from '../component/Navigator'

function shopInfo() {
  return (
    <>
            <Navbar />
            <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                <LargeCard />
            </div>
            <Footer />
        </>
  )
}

export default shopInfo