import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import WOW from 'wowjs';
import $ from 'jquery';
import Modals from "./Modals.js";
// import SingleItemDetailModal from './SingleItemDetailModal.js';



const styles = {
    singleItem: {
        height: '350px',
        // width: '250px',
        border: '1px solid #ccc',
        backgroundSize: "cover",
        marginTop: "50px"
    }
}



export class SingleItem extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        show: false,
        addModalClose: false
    };

    showModal = e => {
        this.setState({show: !this.state.show});
    };

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };


    componentDidMount() {
        
        $(".single-item").mouseover(function() {
            $(this).css("opacity", "0.4");
            $("#but").css("opacity", "1");
        });
        $(".single-item").mouseout(function() {
            $(this).css("opacity", "1");
        });


        const wow = new WOW.WOW();
        wow.init();
    }


    render(){
        return(
            <div key={this.props.item.id}>
            <style dangerouslySetInnerHTML={{
                __html: [
                    '.single-item:hover {',
                    'cursor: "pointer";',
                    '}',

                ].join('\n')
            }}>

            </style>
            <div className="col-md-3">
            <Modals onClose={this.showModal} show={this.state.show} item={this.props.item}>Message in modal</Modals>
            
                <div className='single-item' style={{ height: "350px", marginTop: "50px",
                backgroundImage: "url(/imgs/"+ this.props.item.imageName +")", backgroundSize: "cover",
                backgroundPosition: "center" }}>
                    {this.props.item.discount !=0 ? (
                        <div className="discount-circle pull-right" style={{height:'60px',width:'60px',
                        borderRadius:"50%",backgroundColor:'red', margin:"10px 10px 0px 0px"}}>
                            <p style={{padding:"15px", color:"#fff"}}>-{this.props.item.discount}%</p>
                        </div>
                    ) : null}
                    
                    <div align="center" className="wow fadeInDown" data-wow-delay="300ms" id="but" style={{ paddingTop: "100px" }}>
                        <Button style={singleItemButton}
                        onClick={this.showModal} data-toggle="modal" data-target="#myModal">Quick View</Button>
                            {/* <SingleItemDetailModal 
                            show={this.state.show}
                             onHide={this.state.addModalClose}
                             /> */}
                        <Button style={singleItemButton} onClick={this.props.addToCart.bind(this, this.props.item)}>Add to Carts</Button>
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>{this.props.item.name} <br></br>
                     {this.props.item.discount !=0 ? (
                         <span>
                            <del>${this.props.item.price}</del>
                            <span style={{color: "red"}}>
                                <span> </span>${this.props.item.price -
                            ((this.props.item.discount/100) * this.props.item.price)}
                            </span>
                         </span>
                         
                     ): (
                         <span>${this.props.item.price}</span>
                     )}
                     </p>
                </div>
            </div>
            </div>
        )
    }
}

const singleItemButton = {
    borderRadius: "15px",
    // height: "50px",
    width: "130px",
    margin: "5px 0px 5px 0px"
}


export default SingleItem