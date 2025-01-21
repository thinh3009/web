import React from 'react';
import ChildComponent from './childComponent';

interface ParentProps {
    message: string;
}

const ParentComponent = ({ message }: ParentProps) => {
    return <ChildComponent message={message} />;
};

export default ParentComponent;
