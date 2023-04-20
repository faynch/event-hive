import { useState } from 'react'

export default function Button() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
        <div className='flex self-center'>
            <button
                className={`btn-xs btn-circle border-2 border-black bg-[#D9D9D9] mr-3 ${
                    toggle ? 'bg-black' : 'bg-[#D9D9D9]'
                }`}
                onClick={() => setToggle(!toggle)}
            ></button>
            check box</div>
        </>
    )
}
