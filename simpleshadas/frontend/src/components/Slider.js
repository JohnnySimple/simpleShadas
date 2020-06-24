import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div className="Container-fluid" style={{backgroundImage: "url(imgs/18.jpg)",
            backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height:'600px'}}>
                <div style={{padding:'200px 0px 0px 100px'}}>
                    <p style={{fontSize:'20px'}}>Summer 2020</p>
                    <h1>New Arrival Collection</h1>
                    <button className="btn" style={{height:'50px', width:'150px',
                backgroundColor:'#000', color:'#fff'}}>Explore Now</button>
                </div>
            </div>
        )
    }
}

export default Slider
