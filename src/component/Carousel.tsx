import Image from 'next/image'

import { useState } from 'react'

import Right from '../pages/assets/right.svg'
import Left from '../pages/assets/left.svg'

export default function Carousel({ children: slides }: any) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    function handleClick(i: number) {
        setCurr(i)
    }

    return (
        <>
            <div className="relative overflow-hidden lg:max-w-5xl">
                {slides.length <= 1 ? (
                    <div className="flex ">{slides}</div>
                ) : (
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                        {slides}
                    </div>
                )}
                <div
                    className={`absolute left-5 top-1/3 hidden md:flex ${
                        slides.length <= 1 ? 'invisible' : ''
                    }`}
                >
                    <button onClick={prev}>
                        <Image src={Left} alt={''} />
                    </button>
                </div>
                <div
                    className={`absolute right-5 top-1/3 hidden md:flex ${
                        slides.length <= 1 ? 'invisible' : ''
                    }`}
                >
                    <button onClick={next}>
                        <Image src={Right} alt={''} />
                    </button>
                </div>
            </div>
            <div
                className={`flex items-center justify-center gap-2 py-4 ${
                    slides.length <= 1 ? 'invisible' : ''
                }`}
            >
                {slides.map((_: any, i: number) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`
              h-3 w-3 rounded-full bg-secondary transition-all
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
                    />
                ))}
            </div>
        </>
    )
}
