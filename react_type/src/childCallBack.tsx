import React from 'react';

interface ChildProps {
    count: number;
    onIncrement: () => void;
}

const ChildComponent = ({ count, onIncrement }: ChildProps) => {
    return (
        <button onClick={onIncrement}>Increment {count}</button>
    );
};

export default ChildComponent;