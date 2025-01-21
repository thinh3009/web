import React from 'react';

interface DisplayCountProps {
    count: number;
}

const DisplayCount = ({ count }: DisplayCountProps) => {
    return <div>Số lượng: {count}</div>;
};

export default DisplayCount;