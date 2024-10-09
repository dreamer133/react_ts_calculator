import React from 'react';

interface propsOperation {
    operation: string;
    caption?: string;
    clickOperation(operation:string): void;
}

export default function Operation(props: propsOperation) {
    const { operation, caption, clickOperation } = props;

    function onClick(e:React.MouseEvent) {
        clickOperation(operation);
    }

    return (
        <button className="btn operation" onClick={onClick}>{caption ? caption : operation}</button>
    )
};
