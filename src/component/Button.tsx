import { useState } from 'react'
import Image from 'next/image'
import Checked from '../pages/assets/checked.svg'
import Unchecked from '../pages/assets/unchecked.svg'

export default function Button() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="flex self-center">
                <button
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? (
                        <Image className='w-6' src={Checked} alt={''} />
                    ) : (
                        <Image className='w-6' src={Unchecked} alt={''} />
                    )}
                </button>
                check box
            </div>
        </>
    )
}
