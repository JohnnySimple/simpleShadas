import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar" style={navbarStyle}>
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle pull-left" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar" style={iconStyle}></span>
                        <span className="icon-bar" style={iconStyle}></span>
                        <span className="icon-bar" style={iconStyle}></span> 
                    </button>
                    <a className="navbar-brand" href="#" style={{color: "#000"}}>Simple Shadas</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li> 
                            <li><a href="#">Page 3</a></li> 
                        </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"> Sign Up</a></li>
                        <li><a href="#"> Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

const navbarStyle = {
    height: '50px',
    backgroundColor: "#fff"
}

const iconStyle = {
    backgroundColor: '#000'
}

export default Navbar
