import React from 'react';

interface IncrementButtonProps {
    onIncrement: () => void;
}

const IncrementButton = ({ onIncrement }: IncrementButtonProps) => {
  return <button onClick={onIncrement}>Tăng</button>;
}


export default ChildComponent;