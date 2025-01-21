

import React from 'react';

interface ChildProps {
    message: string;
}

const ChildComponent = ({ message }: ChildProps) => {
    return <p>{message}</p>;
};

export default ChildComponent;