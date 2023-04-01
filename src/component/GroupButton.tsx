import Image from 'next/image'
import Phone from '../pages/assets/phone.svg'
import Instagram from '../pages/assets/instagram.svg'
import Twitter from '../pages/assets/twitter.svg'
import Facebook from '../pages/assets/facebook.svg'

function GroupButton() {
    return (
        <div className='flex flex-row gap-3'>
            <button>
                <Image className="h-8" src={Phone} alt={''} />
            </button>
            <button>
                <Image className="h-8" src={Instagram} alt={''} />
            </button>
            <button>
                <Image className="h-8" src={Twitter} alt={''} />
            </button>
            <button>
                <Image className="h-8" src={Facebook} alt={''} />
            </button>
        </div>
    )
}

export default GroupButton
