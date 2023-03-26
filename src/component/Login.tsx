import Image from 'next/image'
import LoginImg from '../pages/assets/login.svg'
import Hive from '../pages/assets/hive.svg'

const Login = () => {
    return (
        <div className="h-full max-w-full p-20">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="flex w-full max-w-[40%]">
                    <Image src={LoginImg} alt={'Login'} />
                </div>
                <div className="flex w-full max-w-[60%] flex-col items-center gap-6 text-center">
                    <div className="m-4">
                        <h3 className="bg-gradient-to-r from-[#EF9323] to-[#5D3891] bg-clip-text text-[2rem] font-extrabold text-transparent lg:text-[3rem]">
                            EVENT HIVE
                        </h3>
                    </div>
                    <div className="m-4 flex">
                        <h2 className="align-center m-4 text-[2.5rem] font-extrabold text-[#5D3891] lg:text-[4rem]">
                            EXPLORE YOUR HIVE
                        </h2>
                        <Image src={Hive} alt={'Hive'} />
                    </div>
                    <div className="my-10 h-full w-full rounded-lg bg-[#F5EAEA] drop-shadow-xl ">
                        <div className="flex flex-row p-[3rem]">
                            <h5 className="mr-10 text-[2rem] font-extrabold text-[#A459D1]">
                                EMAIL
                            </h5>
                            <input
                                className="w-full"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-row px-[3rem] pb-[3rem]">
                            <h5 className="mr-10 text-[2rem] font-extrabold text-[#A459D1]">
                                PASSWORD
                            </h5>
                            <input
                                className="w-full"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex justify-end px-[3rem] pb-[3rem]">
                            <a className="mx-3 justify-end rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-12 py-2 font-extrabold text-white hover:bg-gradient-to-r">
                                Register
                            </a>
                            <a className="mx-3 justify-end rounded-lg bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-12 py-2 font-extrabold text-white hover:bg-gradient-to-r">
                                Sign in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
