import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Footer from '../component/Footer'

function eventorganizer({ eventdata }: any) {
console.log(eventdata)
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                        <h4 className="mx-auto mt-8 text-xl font-extrabold text-primary">
                            EVENT LIST
                        </h4>
                        <div className="mb-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                            {/* {eventdata.map((item: any) => (
                                <Card type="Event" data={item} />
                            ))} */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/eventorganizers/a6dbf973-81d2-47fb-9d56-96e4633c6741') // Replace with your API endpoint URL
  const data = await res.json()

  return {
      props: {
          eventdata: data[0].events,
      },
  }
}

export default eventorganizer
