import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Slider from './Slider.js';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Slider></Slider>
            </div>
        )
    }
}

export default Homepage
