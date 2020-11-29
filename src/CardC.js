import React from 'react'
import logofinal from './asset/logofinal.svg'
import Plusminus from './Plusminus'
import notify from './asset/notify.svg'

export default function CardC() {
    return (
        <div>
            <div className="cards container-fluid mobile">
                <div className="row">
                     <div className="col-xl-3 col-lg-3 first">
                        <p><u>Continental PremiumContact™ 6</u></p>
                        <img className="logofinal" src={logofinal} />
                    </div>
                    <div className="col-xl-3 col-lg-3 second">
                        <p>195/55 R15 85V<br />
                        SUV</p>
                        <small>stock<span><img  src="https://w7.pngwing.com/pngs/182/570/png-transparent-computer-icons-button-cross-on-a-red-circle-logo-sign-area.png" /></span> <span style={{color:"red"}}>Back in 1week!</span></small>
                    </div>
                    <div className="col-xl-3 col-lg-3 third">
                        <small>Price ₪340</small>
                        <Plusminus  className="abc"/>
                    </div>
                    <div className="col-xl-3 col-lg-3 forth">
                        <small>Total ₪1,360</small>
                         <button type="button" class="btn  btn-outline-warning"><img  className="cart" src={notify} /><i className="hiden">Notify Me</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
