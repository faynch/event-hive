import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Create from '../component/CreatePage'

import { useState } from 'react'

function eventorganizeracc({ data }: any) {
    if (data == null) {
        return <Create />
    }
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                        <h4 className="mx-auto mt-8 mb-12 text-xl font-extrabold text-primary">
                            EVENT LIST
                        </h4>
                        <div className="mb-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                            {data.map((item: any) => (
                                <Card type="Event" data={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context: { req: any; query: any }) {
    const { req, query } = context
    const valueFromRouter = query.id
    console.log(valueFromRouter)
    const data = await fetch(
        `http://localhost:3000/api/eventorganizers/${valueFromRouter}`
    )
    const jsonData = await data.json()
    console.log(jsonData[0].events)
    return {
        props: {
            data: jsonData[0].events,
        },
    }
}

export default eventorganizeracc
