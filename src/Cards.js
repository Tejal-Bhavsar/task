import React from 'react'
import './Cards.css'
import logofinal from './asset/logofinal.svg'

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

                    </div>
                    <div className="col-xl-3 col-lg-3 forth">

                    </div>
                </div>
            </div>
        </div>
    )
}
