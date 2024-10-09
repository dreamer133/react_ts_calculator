import React from 'react';

interface propsResult {
    text: string;
}

export default function Result(props: propsResult) {

    const {text} = props;

    return (
        <div className='result'>{text}</div>
    )
};

