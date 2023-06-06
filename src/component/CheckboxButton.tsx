import { useEffect, useState } from 'react'
import Image from 'next/image'
import Checked from '../pages/assets/checked.svg'
import Unchecked from '../pages/assets/unchecked.svg'

export default function CheckboxButton({ onValue }: any) {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Art', checked: false },
        { id: 2, label: 'Beauty', checked: false },
        { id: 3, label: 'Book', checked: false },
        { id: 4, label: 'Business', checked: false },
        { id: 5, label: 'Charity', checked: false },
        { id: 6, label: 'Comedy', checked: false },
        { id: 7, label: 'Concert', checked: false },
        { id: 8, label: 'Drink', checked: false },
        { id: 9, label: 'Education', checked: false },
        { id: 10, label: 'E-sport', checked: false },
        { id: 11, label: 'Fashion', checked: false },
        { id: 12, label: 'Food', checked: false },
        { id: 13, label: 'Game', checked: false },
        { id: 14, label: 'Health', checked: false },
        { id: 15, label: 'Furniture', checked: false },
        { id: 16, label: 'Movies', checked: false },
        { id: 17, label: 'Music', checked: false },
        { id: 18, label: 'Marketing', checked: false },
        { id: 19, label: 'Sport', checked: false },
        { id: 20, label: 'Techonology', checked: false },
        { id: 21, label: 'Vehicle', checked: false },
    ])

    const handleCheckboxChange = (checkboxId: number) => {
        const updatedCheckboxes = checkboxes.map((checkbox) => {
            if (checkbox.id === checkboxId) {
                return { ...checkbox, checked: !checkbox.checked }
            }
            return checkbox
        })

        setCheckboxes(updatedCheckboxes)
    }

    const handleClearAll = () => {
        const updatedCheckboxes = checkboxes.map((checkbox) => ({
            ...checkbox,
            checked: false,
        }))
        setCheckboxes(updatedCheckboxes)
    }

    useEffect(() => {
        const selectedOptions = checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.id)

        // Perform action with the selectedOptions
        onValue(selectedOptions)
    }, [checkboxes])

    return (
        <>
            <h4 className="mb-4 text-xl font-extrabold text-primary">
                Categories
            </h4>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
                {checkboxes.map((checkbox) => (
                    <div key={checkbox.id}>
                        <label className="flex self-center">
                            <input
                                className="hidden"
                                type="checkbox"
                                checked={checkbox.checked}
                                onChange={() =>
                                    handleCheckboxChange(checkbox.id)
                                }
                            />
                            {checkbox.checked ? (
                                <Image className="w-6" src={Checked} alt={''} />
                            ) : (
                                <Image
                                    className="w-6"
                                    src={Unchecked}
                                    alt={''}
                                />
                            )}
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>
            <button
                onClick={handleClearAll}
                className="mt-8 w-max justify-self-center lg:justify-self-end rounded-md bg-[#FFB84C] from-[#EF9323] to-[#5D3891] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r"
            >
                Clear All
            </button>
        </>
    )
}
