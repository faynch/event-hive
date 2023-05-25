import Image from 'next/image'
import Instagram from '../pages/assets/instagram.svg'
import Twitter from '../pages/assets/twitter.svg'
import Facebook from '../pages/assets/facebook.svg'
import Tiktok from '../pages/assets/tiktok.svg'

interface GroupButtonInputProps {
    line: any
    facebook: any
    instagram: any
    tiktok: any
}

function GroupButtonInput(props: GroupButtonInputProps) {
    return (
        <>
            <div className="flex w-full flex-row items-center gap-2">
                <button>
                    <Image className="h-8" src={Instagram} alt={''} />
                </button>
                <input
                    className="rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                    placeholder="Instagram"
                    type="url"
                    name="Instagram"
                    value={props.instagram}
                />
            </div>
            <div className="flex w-full flex-row items-center gap-2">
                <button>
                    <Image className="h-8" src={Facebook} alt={''} />
                </button>
                <input
                    className="rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                    placeholder="Facebook"
                    type="url"
                    name="Facebook"
                    value={props.facebook}
                />
            </div>
            <div className="flex w-full flex-row items-center gap-2">
                <button>
                    <Image className="h-8" src={Twitter} alt={''} />
                </button>
                <input
                    className="rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                    placeholder="Line"
                    type="url"
                    name="Line"
                    value={props.line}
                />
            </div>
            <div className="flex w-full flex-row items-center gap-2">
                <button>
                    <Image className="h-8" src={Tiktok} alt={''} />
                </button>
                <input
                    className="rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                    placeholder="TikTok"
                    type="url"
                    name="TikTok"
                    value={props.tiktok}
                />
            </div>
        </>
    )
}
export default GroupButtonInput
