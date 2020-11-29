import React from 'react'
import './CardA.css'
import logofinal from './asset/logofinal.svg'
import Plusminus from './Plusminus'
import cart from './asset/cart-sharp.svg'

export default function CardA() {
    return (
        <div>
            <div className="cards container-fluid mobile">
                <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-2 first">
                        <p><u>Continental PremiumContact™ 6</u></p>
                        <img className="logofinal" src={logofinal} />
                    </div>
                    <div className="col-xl-3 col-lg-3 cpl-md-2 second">
                        <p className="suv">195/55 R15 85V<br />
                        SUV</p>
                        <small>stock<span><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN3IQMKt9pvRLXTrcK55UqKIZRamkQ4h9Kw&usqp=CAU" /></span></small>
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
            <div className="cards container-fluid show">
                <div className="row guttor">
                     <div className="row col-md-6" id="firstcard">
                            <div className="col-6">
                                <p><u>Continental PremiumContact™ 6</u></p>
                                <img className="logofinal" src={logofinal} />
                                <small>stock<span><br /><img classname="stock" style={{margin: "0 0 1rem 3.8rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN3IQMKt9pvRLXTrcK55UqKIZRamkQ4h9Kw&usqp=CAU" /></span></small>
                                <Plusminus/>
                            </div>
                            <div className="col-6">
                                <p className="suv">195/55 R15 85V<br />
                                SUV</p>
                                <p className="detail"><i>Price   Total</i>
                                    <span style={{fontSize:"16px"}}><b>₪2,312</b></span>
                                </p>
                                <p className="detail"><i>₪340 &thinsp;<span style={{color:"red"}}>Save ₪408!</span></i>
                                </p>
                                <button type="button" class="btn btn-warning"><img  className="cart" src={cart} /><i className="hiden">Add to Cart</i></button>
                            </div>
                    </div>
                    <div className="row col-md-6" id="firstcard">
                            <div className="col-6">
                                <p><u>Continental PremiumContact™ 6</u></p>
                                <img className="logofinal" src={logofinal} />
                                <small>stock<span><br /><img classname="stock" style={{margin: "0 0 1rem 3.8rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN3IQMKt9pvRLXTrcK55UqKIZRamkQ4h9Kw&usqp=CAU" /></span></small>
                                <Plusminus/>
                            </div>
                            <div className="col-6">
                                <p className="suv">195/55 R15 85V<br />
                                SUV</p>
                                <p className="detail"><i>Price   Total</i>
                                    <span style={{fontSize:"16px"}}><b>₪2,312</b></span>
                                </p>
                                <p className="detail"><i>₪340 &thinsp;<span style={{color:"red"}}>Save ₪408!</span></i>
                                </p>
                                <button type="button" class="btn btn-warning"><img  className="cart" src={cart} /><i className="hiden">Add to Cart</i></button>
                            </div>
                    </div>
                     
                </div>
            </div>
            <div className="cards container-fluid show">
                <div className="row guttor">
                     <div className="row col-md-6" id="firstcard">
                            <div className="col-6">
                                <p><u>Continental PremiumContact™ 6</u></p>
                                <img className="logofinal" src={logofinal} />
                                <small>stock<span><br /><img classname="stock" style={{margin: "0 0 1rem 3.8rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN3IQMKt9pvRLXTrcK55UqKIZRamkQ4h9Kw&usqp=CAU" /></span></small>
                                <Plusminus/>
                            </div>
                            <div className="col-6">
                                <p className="suv">195/55 R15 85V<br />
                                SUV</p>
                                <p className="detail"><i>Price   Total</i>
                                    <span style={{fontSize:"16px"}}><b>₪2,312</b></span>
                                </p>
                                <p className="detail"><i>₪340 &thinsp;<span style={{color:"red"}}>Save ₪408!</span></i>
                                </p>
                                <button type="button" class="btn btn-warning"><img  className="cart" src={cart} /><i className="hiden">Add to Cart</i></button>
                            </div>
                    </div>
                    <div className="row col-md-6" id="firstcard">
                            <div className="col-6">
                                <p><u>Continental PremiumContact™ 6</u></p>
                                <img className="logofinal" src={logofinal} />
                                <small>stock<span><br /><img classname="stock" style={{margin: "0 0 1rem 3.8rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN3IQMKt9pvRLXTrcK55UqKIZRamkQ4h9Kw&usqp=CAU" /></span></small>
                                <Plusminus/>
                            </div>
                            <div className="col-6">
                                <p className="suv">195/55 R15 85V<br />
                                SUV</p>
                                <p className="detail"><i>Price   Total</i>
                                    <span style={{fontSize:"16px"}}><b>₪2,312</b></span>
                                </p>
                                <p className="detail"><i>₪340 &thinsp;<span style={{color:"red"}}>Save ₪408!</span></i>
                                </p>
                                <button type="button" class="btn btn-warning"><img  className="cart" src={cart} /><i className="hiden">Add to Cart</i></button>
                            </div>
                    </div>
                     
                </div>
            </div>

        </div>
    )
}
