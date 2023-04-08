import Image from 'next/image'
import EventHive from '../pages/assets/eventHive.svg'
import Twitter from '../pages/assets/twitter.svg'
import Facebook from '../pages/assets/facebook.svg'
import Instagram from '../pages/assets/instagram.svg'
import Phone from '../pages/assets/phone2.svg'
import Location from '../pages/assets/location.svg'
import Email from '../pages/assets/email.svg'

function Footer() {
    return (
        <section className="grid justify-center gap-y-8 bg-[#A459D121] p-14 md:grid-cols-3">
            <div className='lg:pl-8'>
                <h5 className="mb-3 text-center text-xl font-extrabold text-primary">
                    CONTACT US
                </h5>
                <div className="flex flex-col">
                    <div className="mb-2 flex flex-row">
                        <button>
                            <Image className="mx-3 h-5" src={Location} alt={''} />
                        </button>
                        Hive101
                    </div>
                    <div className="mb-2 flex flex-row">
                        <button>
                            <Image className="mx-3 h-5" src={Phone} alt={''} />
                        </button>
                        000-1111111
                    </div>

                    <div className="mb-2 flex flex-row">
                        <button>
                            <Image className="mx-3 h-5" src={Email} alt={''} />
                        </button>
                        admin@eventhive.com
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center ">
                <Image className="w-12" src={EventHive} alt={'Event Hive'} />
                <h3 className="ml-3 bg-gradient-to-r from-[#EF9323] to-[#5D3891] bg-clip-text text-3xl font-extrabold text-transparent md:text-2xl lg:text-3xl">
                    EVENT HIVE
                </h3>
            </div>
            <div className="flex flex-col justify-center">
                <div className="mb-3 flex flex-row justify-center gap-3">
                    <button>
                        <Image className="h-6" src={Facebook} alt={''} />
                    </button>
                    <button>
                        <Image className="h-6" src={Twitter} alt={''} />
                    </button>
                    <button>
                        <Image className="h-6" src={Instagram} alt={''} />
                    </button>
                </div>
                <div className="text-center">© 2023 Event hive</div>
            </div>
        </section>
    )
}

export default Footer
