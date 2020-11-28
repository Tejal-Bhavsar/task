import React from 'react'
import logofinal from './asset/logofinal.svg'
import Plusminus from './Plusminus'
import cart from './asset/cart-sharp.svg'

export default function CardA() {
    return (
        <div>
            <div className="cards container-fluid">
                <div className="row">
                     <div className="col-xl-3 col-lg-3 first">
                        <p><u>Continental PremiumContact™ 6</u></p>
                        <img className="logofinal" src={logofinal} />
                    </div>
                    <div className="col-xl-3 col-lg-3 second">
                        <p>195/55 R15 85V<br />
                        SUV</p>
                        <small>stock<span><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMjObG_nttCUHsImgFOFyxaRbSK5dIvcyug&usqp=CAU" /></span>8tires left</small>
                    </div>
                    <div className="col-xl-3 col-lg-3 third">
                        <small>Price ₪340</small>
                        <Plusminus  className="abc"/>
                    </div>
                    <div className="col-xl-3 col-lg-3 forth">
                        <small>Total ₪1,360</small>
                         <button type="button" class="btn btn-warning"><img  className="cart" src={cart} /><i className="hiden">Add to Cart</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
