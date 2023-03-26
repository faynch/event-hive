import Link from 'next/link'
import Image from 'next/image'

import HeroPic from '../pages/assets/hero_pic.svg'

const Hero = () => {
    return (
        <div>
            <section className="flex flex-col-reverse items-center justify-center px-3 py-12 lg:flex-row">
                <div className="flex flex-col items-center gap-6 text-center lg:items-end lg:text-end lg:pl-6">
                    <h1 className="text-4xl font-extrabold text-primary">
                        EVENT HIVE
                    </h1>

                    <p className="text-lg text-gray-600">
                        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <Link href={''}>
                        <div className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                            Get started
                        </div>
                    </Link>
                </div>
                <div className="max-w-xs lg:max-w-md">
                    <Image src={HeroPic} alt={'Hero Pic'} />
                </div>
            </section>
        </div>
    )
}

export default Hero
