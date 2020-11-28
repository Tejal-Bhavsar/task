import React from 'react'
import logofinal from './asset/logofinal.svg'
import Plusminus from './Plusminus'
import cart from './asset/cart-sharp.svg'

export default function Card2() {
    return (
        <div className="main1">
        <div className="cards container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-3 first">
                    
                    <p><u>Continental<br />PremiumContact<sup>TM</sup>6</u></p>
                    <img src={logofinal} />
                </div>
                <div className="col-xl-3 col-lg-3 second">
                    <p>195/55 R15 85V<br />
                     SUV</p>
                     <small>stock<span><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMjObG_nttCUHsImgFOFyxaRbSK5dIvcyug&usqp=CAU" /></span><br />8 tires left</small>
                </div>
                <div className="col-xl-3 col-lg-3 third">
                    <small>Price $340</small>
                    <Plusminus />
                </div>
                <div className="col-xl-3 col-lg-3 forth">
                    <p>Total $1,1360</p>
                    <p><button type="button" class="btn btn-warning"><img src={cart} /><h6 className="hiden">Add to Cart</h6></button></p>
                </div>
            </div>
        </div>
    </div>
    )
}
