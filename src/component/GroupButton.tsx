import Image from 'next/image'
import Instagram from '../pages/assets/instagram.svg'
import Twitter from '../pages/assets/twitter.svg'
import Facebook from '../pages/assets/facebook.svg'
import Tiktok from '../pages/assets/tiktok.svg'

function GroupButton() {
    return (
        <div className="flex flex-row justify-center gap-3">
            <button>
                <Image className="h-8" src={Instagram} alt={''} />
            </button>
            <button>
                <Image className="h-8" src={Facebook} alt={''} />
            </button>
            <button>
                <Image className="h-8" src={Twitter} alt={''} />
            </button>

            <button>
                <Image className="h-8" src={Tiktok} alt={''} />
            </button>
        </div>
    )
}

export default GroupButton
