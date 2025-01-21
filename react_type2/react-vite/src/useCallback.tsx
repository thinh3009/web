nimport { useCallback, useState } from 'react'
export default function CountNoCallback() {
  const [count, setCount] = useState(0)
  const [countOther, setCountOther] = useState(0)
  const handleIncrease = useCallback(() => setCount(count + 1), [count])
  const handleDecrease = useCallback(() => setCount(count - 1), [count])
  const handleIncreaseOther = useCallback(
    () => setCountOther(countOther + 1),
    [countOther],
  )
  const handleDecreaseOther = useCallback(
    () => setCountOther(countOther - 1),
    [countOther],
    
  )
  
  
  return (
    <>
      <div>Count: {count}</div>
      <button
        className="mx-2 px-4 py-1 bg-blue-400 rounded-xl"
        onClick={handleIncrease}
      >
        +
      </button>
      <button
        className="mx-2 px-4 py-1 bg-blue-400 rounded-xl"
        onClick={handleDecrease}
      >
        -
      </button>
      <div>Count other: {countOther}</div>
      <button
        className="mx-2 px-4 py-1 bg-blue-400 rounded-xl"
        onClick={handleIncreaseOther}
      >
        +
      </button>
      <button
        className="mx-2 px-4 py-1 bg-blue-400 rounded-xl"
        onClick={handleDecreaseOther}
      >
        -
      </button>
    </>
  )
}
