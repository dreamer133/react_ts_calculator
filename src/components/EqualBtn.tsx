import  React from 'react';

interface propsEqual {
    handleEqualClick(e:any):void;
}

export default function EqualBtn(props: propsEqual) {
    const {handleEqualClick} = props;

    return (
        <button className='btn equal' onClick={handleEqualClick}>=</button>
    )
};

