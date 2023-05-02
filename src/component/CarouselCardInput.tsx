import { useState } from "react";
import GroupButton from "./GroupButton";

function CarouselCardInput({contact}: any) {

    return (
        <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-[#F5EAEA] p-12 drop-shadow-xl lg:max-w-5xl lg:gap-8">
            <div className="flex w-full flex-row items-center">
                <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                    Image
                </h5>
                <input
                    className="w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                    placeholder="Image URL"
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
            <div className="flex w-full flex-col items-start gap-4">
                <h5 className="mr-8 text-xl font-extrabold text-[#A459D1] md:text-2xl">
                    Description
                </h5>
                <textarea
                    className="h-32 w-full rounded-md border border-slate-300 bg-white py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400"
                    placeholder="Description"
                    name="description"
                />
            </div>
            {contact ? (
                null
            ) : (
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
            )}
        </div>
    )
}

export default CarouselCardInput
