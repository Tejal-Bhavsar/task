import React from 'react'
import './Cards.css'
// import logofinal from './asset/logofinal.svg'
// import Plusminus from './Plusminus'
// import cart from './asset/cart-sharp.svg'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
 

export default function Cards() {
    return (
        <div className="main">
            <Card1 />
            <Card2 />
            <Card3 />
            <button type="button" class="btn btn-primary btn-lg btn-block">Load More Results</button>
        </div>
    )
}
