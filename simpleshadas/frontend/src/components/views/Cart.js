import React, { Component } from 'react';
import Navbar from "../Navbar.js";
import Homepage from "../Homepage.js";

export class Cart extends Homepage {
    
    
    render() {
        const carts = JSON.parse(sessionStorage.getItem('carts'));
        return (
            <div>
                <Navbar></Navbar>
                <div className="container" style={{ marginTop:"50px" }}>
                    <h2>Your shopping cart</h2>
                    <hr></hr>
                    <h3>Here is your hall so far</h3>
                    <div>
                        {carts.name}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
