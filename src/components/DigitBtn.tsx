import React from 'react';

interface propsDigit {
    num: number;
    handleDigitClick(): void;
}

export default function DigitBtn(props: propsDigit) {
    const { num, handleDigitClick } = props;

    return (
        <button className="btn digit" onClick={handleDigitClick}>{num}</button>
    )
};

