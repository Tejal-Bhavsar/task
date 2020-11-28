import React from 'react'
import './New.css'
import logo from './asset/logofinal.svg'
import Plusminus from './Plusminus'
import cart from './asset/cart-sharp.svg'

export default function New() {
    return (
        <div style={{padding: "18px"}}>
            <div className="container-fluid">
                <div className="row tire">
                    <div className="col-7">
                    <u>Continental<p> PremiumContact™ 6</p></u>
                    <img className="logo" src={logo} /> <i>stock</i> <img className="tick" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN3IQMKt9pvRLXTrcK55UqKIZRamkQ4h9Kw&usqp=CAU" /> 
                    <Plusminus /> 
                    </div>
                    <div className="col-4">
                    <p>0195/55 R15 85V<br/>SUV</p>
                    <smaller>price</smaller><span style={{color:"red",fontSize:"8px"}}>save₪40!</span>
                    <p><button style={{fontSize:"15px",width:"135px",height:"40px"}} type="button" class="btn btn-warning"><img style={{width:"20px"}} src={cart} /><smaller className="cartbtn">Add to Cart</smaller></button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
