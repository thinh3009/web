import { useContext, useState } from "react";
import { TodoContext } from "../App";

export default function AddtoDo() {
    const { addItem } = useContext(TodoContext)
    const [title, setTitle] = useState('')

    const handleSubmit = () => {
        addItem(title)
        setTitle('')
    }
    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">cong viec</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

            </div>
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Thêm công việc
            </button>
        </div>

    )
}