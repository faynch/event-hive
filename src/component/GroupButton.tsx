import Image from 'next/image'
import Instagram from '../pages/assets/instagram.svg'
import Line from '../pages/assets/line.svg'
import Facebook from '../pages/assets/facebook.svg'
import Tiktok from '../pages/assets/tiktok.svg'
import Link from 'next/link'

interface GroupButtonProps {
    line: any
    facebook: any
    instagram: any
    tiktok: any
}

function GroupButton(props: GroupButtonProps) {
    // console.log(props)

    
    return (
        <div className="flex flex-row justify-center gap-3">
            <button className={props.instagram != ("" || null) ? 'block' : 'hidden'}>
                <Link
                    href={props.instagram}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image className="h-8" src={Instagram} alt={''} />
                </Link>
            </button>
            <button className={props.facebook != ("" || null) ? 'block' : 'hidden'}>
                <Link
                    href={props.facebook}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image className="h-8" src={Facebook} alt={''} />
                </Link>
            </button>
            <button className={props.line != ("" || null) ? 'block' : 'hidden'}>
                <Link
                    href={props.line}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image className="h-8" src={Line} alt={''} />
                </Link>
            </button>
            <button className={props.tiktok != ("" || null) ? 'block' : 'hidden'}>
                <Link
                    href={props.tiktok}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image className="h-8" src={Tiktok} alt={''} />
                </Link>
            </button>
        </div>
    )
}

export default GroupButton
