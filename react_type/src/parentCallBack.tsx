import React, { useState } from 'react';
import ChildComponent from './childCallBack';

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return <ChildComponent count={count} onIncrement={handleIncrement} />;
};

export default ParentComponent;