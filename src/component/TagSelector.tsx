import React, { useState } from 'react'

type Tag = 'Home decor' | 'Fashion' | 'Food' | 'Travel'

type Props = {
    onClose: () => void
}

const TagSelector: React.FC<Props> = ({ onClose }) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const tags: Tag[] = ['Home decor', 'Fashion', 'Food', 'Travel']

    const handleTagClick = (tag: Tag) => {
        const isTagSelected = selectedTags.includes(tag)

        if (isTagSelected) {
            setSelectedTags(
                selectedTags.filter((selectedTag) => selectedTag !== tag)
            )
        } else if (selectedTags.length < 10) {
            setSelectedTags([...selectedTags, tag])
        }
    }

    const handleSubmit = () => {
        console.log(selectedTags) // Do something with the selected tags
        onClose()
    }

    return (
        <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
            <div className="h-1/2 w-1/2 rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-4 text-lg font-semibold">
                    Select up to 10 tags
                </h2>
                <div className="mb-4 flex flex-wrap">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className={`mr-2 mb-2 rounded-full py-2 px-4 ${
                                selectedTags.includes(tag)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <button
                    className="mr-2 rounded-full bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    className="rounded-full bg-gray-200 py-2 px-4 text-gray-700 hover:bg-gray-300"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default TagSelector
