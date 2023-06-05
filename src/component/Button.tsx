import { useState } from 'react'
import Image from 'next/image'
import Checked from '../pages/assets/checked.svg'
import Unchecked from '../pages/assets/unchecked.svg'

interface ButtonProps {
    id: any
    data: string
    onValue: any
}


export default function Button(props: ButtonProps) {

    const [toggle, setToggle] = useState(false)
    const jsonData = {
        id: props.id,
        toggle: toggle,
    }


    const tagAlert = (id: any) => {        
        setToggle(!toggle)
        props.onValue(jsonData)
    }

    return (
        <>
            <div className="flex self-center">
                <button onClick={() => tagAlert(props.id)}>
                    {toggle ? (
                        <Image className="w-6" src={Checked} alt={''} />
                    ) : (
                        <Image className="w-6" src={Unchecked} alt={''} />
                    )}
                </button>
                {props.data}
            </div>
        </>
    )
}


