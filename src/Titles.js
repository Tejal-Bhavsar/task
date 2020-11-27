import React from 'react'
import './Titles.css'
import Divider from '@material-ui/core/Divider';

export default function Titles() {
    return (
        <div>
            <div className="container-fluid titles">
                <div className="row title">
                    <div className="col-12">
                        <h4>Recommended Products</h4>
                        <span></span>
                    </div>
                   
                </div>
               
                <div className="row hide">
                    <div className=" col-0 col-xl-9 col-lg-9  col-md-8 filters ">
                        <p>Selected Filter: <span><button type="button" className="btn btn-outline-dark">Continental<span className="cross"></span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg></button></span></p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 popular">
                        <p>sort by:<span><button type="button" className="btn btn-outline-dark">popularity</button></span></p> 
                    </div>
                </div>
                <Divider dark/>
            </div>
        </div>
    )
}
