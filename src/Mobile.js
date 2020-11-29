import React from 'react'
import './Mobile.css'

export default function Mobile() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid p-1">
                <div class="container p-0 m-0">
                    <table >
                        <td><b><u>Continental<p> PremiumContact™ 6</p></u></b></td>
                        <td><img src="./1366-Desktop/Logo_OE_Approved_1c_black_final-1.svg" alt="" /></td>
                        <td>195/55 R15 85V
                            <p>SUV</p>
                        </td>
                        <td class="pr-4">Stock<img class="ml-2" height="14px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Exclamation_yellow_flat_icon.svg/451px-Exclamation_yellow_flat_icon.svg.png" />
                            <p><b>8 Tires left</b></p>
                        </td>

                        <td>Price ₪340</td>
                        <td class="pl-4">Total <span style={{fontSize:"20px"}} class="pl-1"><b>₪1,360</b></span></td>
                        <td></td>
                        <td><button class="btn-shrink" ><img style="position: absolute; margin-left: 22px; margin-top: -3px" height="10px" src="https://cdn.onlinewebfonts.com/svg/img_28512.png" alt=""/><img src="./1366-Desktop/cart-sharp-1.svg" alt=""/>
                            <span class="text-remover">Add to Cart</span></button></td>

                    </table>
                </div>
            </div>
        </div>
    )
}
