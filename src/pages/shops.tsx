import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Footer from '../component/Footer'
import CheckboxButton from '../component/CheckboxButton'

import Image from 'next/image'
import Search from '../pages/assets/search.svg'
import Filter from '../pages/assets/filter.svg'

import { useState } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { useSession } from 'next-auth/react'

function Shops({ shopdata }: any) {
    const [filter, setFilter] = useState(false)
    const [items, setItems] = useState(shopdata)
    const [showItems, setShowItems] = useState(shopdata)

    const { data: session } = useSession()
    const id = session?.user?.name

    const onSearch = (value: string) => {
        if (value == null) {
            setShowItems(items)
        } else {
            setShowItems(
                items.filter((item: { shopName: string }) => {
                    const nameMatch = item.shopName
                        .toLowerCase()
                        .includes(value)
                    return nameMatch
                })
            )
        }
    }

    const handleValue = async (value: any) => {
        if (value.length == 0) {
            setShowItems(items)
        } else {
            var temp: any[] = []
            for (let index = 0; index < value.length; index++) {
                temp = Array.from(new Set(temp.concat(items.filter((item: { tags: any[] }) => {
                    const nameMatch = item.tags.some((tag) => tag.id === value[index])
                    return nameMatch
                }))))
            }
            setShowItems(temp)
        }
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <div className="my-12 mx-auto flex flex-col justify-center lg:max-w-7xl">
                        <div className="mx-12 flex flex-row rounded-lg bg-gradient-to-r from-[#EF9323] to-[#5D3891] p-1 md:mx-36 xl:mx-4">
                            <input
                                onChange={(event) =>
                                    onSearch(event.target.value)
                                }
                                name="text"
                                type="text"
                                placeholder="Type event name..."
                                className="max-w input-bordered input w-full rounded-md rounded-r-none border-r-0 bg-white py-2 pl-4 outline-none"
                            />
                            <button className="bg-white">
                                <Image
                                    className="w-6"
                                    src={Search}
                                    alt={'Search'}
                                />
                            </button>
                            <button
                                className="rounded-r-md bg-white pr-2"
                                onClick={() => setFilter(!filter)}
                            >
                                <Image
                                    className="h-6"
                                    src={Filter}
                                    alt={'Filter'}
                                />
                            </button>
                        </div>
                        <div
                            className={`my-4 min-w-96 md:min-w-[32rem] self-center rounded-sm bg-white p-8 md:mx-36 lg:max-w-7xl lg:self-end xl:mx-4 ${
                                filter ? 'grid grid-col' : 'hidden'
                            }`}
                        >
                                <CheckboxButton onValue={handleValue} />
                        </div>

                        <h4 className="m-8 mx-auto text-xl font-extrabold text-primary">
                            SEARCH FOR :
                        </h4>
                        <div className="mb-8 grid grid-cols-1 gap-8 place-self-center lg:max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                            {session?.user?.image == 'visitor'
                                ? showItems.map((item: any) => (
                                      <Card
                                          key={item.id}
                                          type="Shop"
                                          data={item}
                                          like={item.favouriteByVisitors.some(
                                              (visitor: { id: any }) =>
                                                  visitor.id === id
                                          )}
                                      />
                                  ))
                                : showItems.map((item: any) => (
                                      <Card
                                          key={item.id}
                                          type="Shop"
                                          data={item}
                                          like={false}
                                      />
                                  ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    )
    const res = await fetch('http://localhost:3000/api/shops/') // Replace with your API endpoint URL
    const data = await res.json()

    return {
        props: {
            session,
            shopdata: data,
        },
    }
}

export default Shops
