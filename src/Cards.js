import React from 'react'
import './Cards.css'
import logofinal from './asset/logofinal.svg'
import Plusminus from './Plusminus'
import cart from './asset/cart-sharp.svg'
import Card2 from './Card2'
import Card3 from './Card3'

export default function Cards() {
    return (
        <div className="main">
            <div className="cards container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 first">
                        <p><u>Continental<br />PremiumContact<sup>TM</sup>6</u></p>
                        <img src={logofinal} />
                    </div>
                    <div className="col-xl-3 col-lg-3 second">
                        <p>195/55 R15 85V<br />
                         SUV</p>
                         <small>stock</small><span><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN3IQMKt9pvRLXTrcK55UqKIZRamkQ4h9Kw&usqp=CAU" /></span>
                    </div>
                    <div className="col-xl-3 col-lg-3 third">
                        <small>Price $340</small>
                        <Plusminus />
                    </div>
                    <div className="col-xl-3 col-lg-3 forth">
                        <p>Total $1,1360</p>
                        <p><button type="button" class="btn btn-warning"><img src={cart} /><smaller>Add to Cart</smaller></button></p>
                    </div>
                </div>
            </div>
            <Card2 />
            <Card3 />
        </div>
    )
}
