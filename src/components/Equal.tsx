import  React from 'react';

interface propsEqual {
    handleEqualClick(e:any):void;
}

export default function Equal(props: propsEqual) {
    const {handleEqualClick} = props;

    return (
        <button className='btn equal' onClick={handleEqualClick}>=</button>
    )
};

