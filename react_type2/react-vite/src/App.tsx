import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddtoDo from './Component/AddtoDo'
import TodoList from './Component/TodoList'
import Art from './useEffect'
import Clock from './Time'
import CountNoCallback from './useCallback'
import './App.css'

const TodoContext = createContext<{
  items: string[]
  addItem: (item: string) => void
  removeItem: (index: number) => void
}>({
  items: [],
  addItem: () => { },
  removeItem: () => { }
})
export { TodoContext }


function App() {
  const [firstName, setFirstName] = useState('xin chao');
  const [lastName, setLastName] = useState('xin chao');
  const [count, setCount] = useState(0)
  //sung usestate chua viec can lam
  const [items, setItems] = useState<string[]>([]);
  //them cong viec vao danh sach
  const addItem = (item: string) => {
    setItems([...items, item])
  }
  //xoa cong viec
  const removeItem = (index: number) => {
    setItems((prevItems) =>
      prevItems.slice(0, index).concat(prevItems.slice(index + 1)),
    )
  }
  return (
    <>
      <div>
        <TodoContext.Provider value={{ items, addItem, removeItem }}>
          <TodoList />
          <AddtoDo />
          <CountNoCallback/>
        </TodoContext.Provider>
        
      </div>
    </>
  )

  //two ways binding
  // const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFirstName(event.target.value);
  // };

  // const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setLastName(event.target.value);
  // };
  // return (
  //   <div className='p-18'>

  //     <input type="text"
  //       className=''
  //       typeof='text'
  //       value={firstName}
  //       onChange={handleFirstNameChange}
  //     />

  //     <input type="text"
  //       className=''
  //       typeof='text'
  //       value={lastName}
  //       onChange={handleLastNameChange}
  //     />
  //     <button>this button</button>
  //     <p>Tên đầy đủ: {firstName} {lastName}</p>
  //   </div>

  // )

  //useEffect
  // return <Art/>
  // return <Clock/>
  
}

export default App
