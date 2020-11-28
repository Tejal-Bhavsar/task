import React from 'react'
import './Cards.css'
import CardA from './CardA'
import CardB from './CardB'
import CardC from './CardC'
 

export default function Cards() {
    return (
        <div className="main">
            <CardA />
            <CardB />
            <CardC />
            <button type="button" class="btn btn-dark large btn-lg btn-block">Load More Results</button>
        </div>
    )
}
