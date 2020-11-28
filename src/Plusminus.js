 
import './Plusminus.css'
import React, { useState } from 'react';

export default function Plusminus() {
    const [count, setCount] = useState(0);
    
    const increment = () =>setCount(count+1)
    const decrement = () => {
        if (count >= 1) {
        setCount(count - 1)}}
    return (
        <div>
            <div class="input-group">
                 <button  className="addon" onClick={increment}>+</button>
                 <span className="result">{count}</span>
                 <button className="addon" onClick={decrement}>-</button>
                </div>
        </div>
    )
}


