import React, {useState} from 'react';

function Test() : React.JSX.Element  {
    let [count, setCount]= useState(0);
    const handleClick = ()=>{
        setCount(count ++)
    }
    return (
        <div>
            <button onClick={handleClick}>clicked {count}</button>
        </div>
    );
}

export default Test;