import React from 'react';

interface propsDigit {
    num: number;
    clickDigit(e: React.MouseEvent): void;
}

export default function Digit(props: propsDigit) {
    const { num, clickDigit } = props;

    return (
        <button className="btn digit" onClick={clickDigit}>{num}</button>
    )
};

