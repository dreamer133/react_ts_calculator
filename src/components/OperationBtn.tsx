import React from 'react';

interface propsOperation {
    operation: string;
    caption?: string;
    handleOperationClick(operation:string): void;
}

export default function OperationBtn(props: propsOperation) {
    const { operation, caption, handleOperationClick } = props;

    function onClick(e:React.MouseEvent) {
        handleOperationClick(operation);
    }

    return (
        <button className="btn operation" onClick={onClick}>{caption ? caption : operation}</button>
    )
};
