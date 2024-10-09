import  React from 'react';

interface propsEqual {
    clickEqual(e:any):void;
}

export default function Equal(props: propsEqual) {
    const {clickEqual} = props;

    return (
        <button className='btn equal' onClick={clickEqual}>=</button>
    )
};

