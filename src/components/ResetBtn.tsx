import React from 'react';

interface propsReset {
    doReset(): void;
}

export default function ResetBtn(props: propsReset) {

    const { doReset } = props;

    return (
        <button className="btn reset" onClick={doReset}>C</button>
    )
};

