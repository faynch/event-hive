import Image from 'next/image'
import Instagram from '../pages/assets/instagram.svg'
import Twitter from '../pages/assets/twitter.svg'
import Facebook from '../pages/assets/facebook.svg'
import Tiktok from '../pages/assets/tiktok.svg'
import Link from 'next/link'

function GroupButton() {
    return (
        <div className="flex flex-row justify-center gap-3">
            <button>
                <Link
                    href="https://instagram.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image className="h-8" src={Instagram} alt={''} />
                </Link>
            </button>
            <button>
                <Link
                    href="https://facebook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image className="h-8" src={Facebook} alt={''} />
                </Link>
            </button>
            <button>
                <Link
                    href="https://facebook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Image className="h-8" src={Twitter} alt={''} />
                </Link>
            </button>
            <button>
                <Link
                    href="https://Tiktok.com"
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
