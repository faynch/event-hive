function CarouselCardInput() {
    return (
   
            <div className="flex flex-col items-center gap-8 rounded-lg bg-[#F5EAEA] p-12 drop-shadow-xl w-full lg:max-w-5xl">
                <div className="flex w-full flex-row items-center">
                    <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                        Image
                    </h5>
                    <input
                        className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                        placeholder="Image"
                        type="link"
                        name="image"
                    />
                </div>
                <div className="flex w-full flex-row items-center">
                    <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                        Name
                    </h5>
                    <input
                        className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                        placeholder="Name"
                        type="name"
                        name="name"
                    />
                </div>
                <div className="flex w-full flex-row items-center">
                    <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                        Description
                    </h5>
                    <input
                        className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                        placeholder="Description"
                        type="text"
                        name="description"
                    />
                </div>
                <div className="flex w-full flex-row items-center">
                    <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                        Price
                    </h5>
                    <input
                        className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                        placeholder="price"
                        type="text"
                        name="price"
                    />
                </div>
                <button
                    className="h-10 w-auto rounded-md bg-blue-600 px-8 font-semibold text-white shadow hover:shadow-lg"
                 
                >
                    Close
                </button>
            </div>

    )
}

export default CarouselCardInput
