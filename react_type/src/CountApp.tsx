// Component cha
import React, { useState } from 'react';
import IncrementButton from './IncrementButtonProps';
import DisplayCount from './DisplayCountProps';
import { Context } from './CountContext';
const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Context.Provider value={0}>
        <div>
        <IncrementButton onIncrement={handleIncrement} />
        <DisplayCount count={count} />
        </div>
    <Context.Provider/>
  );
};
export default CounterApp;