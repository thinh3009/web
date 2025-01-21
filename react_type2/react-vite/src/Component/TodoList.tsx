import { useContext } from 'react';
import { TodoContext } from '../App';

export default function TodoList() {
    const { items, removeItem } = useContext(TodoContext);
    return (
        <div className='container mx-auto mt-8 flex flex-col items-center'>
            <h2 className='text-2xl font-bold mb-4'>danh sách công việc</h2>
            <ul className='text-left'>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className='flex justify-between items-center mb-2 bg-orange-300'
                    >
                        <div className="flex justify-between gap-8 items-center">
                            <div>
                                <h3 className="text-lg font-medium">{item}</h3>
                            </div>
                            <button
                                onClick={() => removeItem(index)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs"
                            >
                                Xóa
                            </button>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    )
}