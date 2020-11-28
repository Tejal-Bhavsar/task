import React from 'react'
// import  './Card3.css'
import logofinal from './asset/logofinal.svg'
import Plusminus from './Plusminus'
import cart from './asset/cart-sharp.svg'
import notify from './asset/notify.svg'

export default function Card3() {
    return (
        <div className="main2">
        <div className="cards container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-3 first">
                    <p><u>Continental<br />PremiumContact<sup>TM</sup>6</u></p>
                    <img src={logofinal} />
                </div>
                <div className="col-xl-3 col-lg-3 second">
                    <p>195/55 R15 85V<br />
                     SUV</p>
                     <small>stock<span><img  src="https://w7.pngwing.com/pngs/182/570/png-transparent-computer-icons-button-cross-on-a-red-circle-logo-sign-area.png" /></span><br /><small id="red">Back in 1 week!</small></small>
                </div>
                <div className="col-xl-3 col-lg-3 third">
                    <small>Price $340</small>
                    <Plusminus />
                </div>
                <div className="col-xl-3 col-lg-3 forth">
                    <p>Total $1,1360</p>
                    <p><button type="button" class="btn btn-outline-warning"><img src={notify} /><h6 className="hiden">Notify Me!</h6></button></p>
                </div>
            </div>
        </div>
         
    </div>
    )
}
