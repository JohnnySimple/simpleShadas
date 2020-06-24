import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Slider from './Slider.js';
import SingleItem from './views/SingleItem.js';
// import SingleItemDetailModal from './views/SingleItemDetailModal.js';
import { Button } from 'reactstrap';
import Modal from './views/Modals.js';
import axios from 'axios';

const items = [
    {
        id: '1',
        imageName: 'img1.jpg',
        name: 'Ladies Sweatpants',
        price: '50.00',
        discount: 10
    },
    {
        id: '2',
        imageName: 'img2.jpg',
        name: 'Ladies T-shirt',
        price: '50.00',
        discount: 0
    },
    {
        id: '3',
        imageName: 'img3.jpg',
        name: 'Vesacci Kick',
        price: '150.00',
        discount: 7
    },
    {
        id: '4',
        imageName: 'img4.jpg',
        name: 'European Hats',
        price: '50.00',
        discount: 0
    },
    {
        id: '5',
        imageName: 'img5.jpg',
        name: 'Ladies Sweater',
        price: '50.00',
        discount: 0
    },
    {
        id: '6',
        imageName: 'img6.jpg',
        name: 'Nike Kick',
        price: '250.00',
        discount: 25
    }
]


const styles = {
    titleBeforeAfter: {
        width: '30px',
        height: '2px',
        color: "#000"
    }
    
};

let cartList = []
export class Homepage extends Component {

    constructor(props) {
        super(props)

    }

    
    state = {
        // items: items,
        addModalShow: false,
        addModalClose: true,
        show: false,
        stuff: [],
        carts: [],
        subTotal: 0,
        cartItems: []
    }


    
    addToCart = (item) => {
        let price =  item.price - (item.price * (item.discount/100));
        const itemDetails = {
            id: item.id,
            name: item.name,
            price: price,
            imageName: item.imageName
        }

        // let products = [];
        let products = sessionStorage.getItem('carts');
        products.push(itemDetails);
        console.log("list" + products);

        sessionStorage.setItem('carts', products);
        console.log(sessionStorage.getItem('carts'));
        
        // this.state.carts.push(itemDetails);

        // if(sessionStorage.getItem('carts') == null) {
        //     sessionStorage.setItem('carts', JSON.stringify(itemDetails));
        // } else {
            
        //     this.state.cartItems = JSON.parse(sessionStorage.getItem('carts'));
        //     for(var i = 0; i<=this.state.cartItems.length; i++) {
        //         cartList[cartList.length] = this.state.cartItems[i];
        //     }
        //     // let cartList = [this.state.cartItems, itemDetails]
        //     // this.state.cartItems.push(itemDetails);
        //     // this.setState({cartItems: [...this.state.cartItems, itemDetails]});
        //     sessionStorage.setItem('carts', JSON.stringify(this.state.cartItems));
        //     console.log(cartList);
        // }
                    
    }

    showModal = e => {
        this.setState({show: !this.state.show});
    };

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    componentDidMount() {

        axios.get("http://localhost:8000/api/items")
        .then(res=> this.setState({stuff:res.data.success}))

    }


    render() {

        return (
            
            <div>
                <style dangerouslySetInnerHTML={{
                __html: [
                    '.title:after {',
                    'content: "";',
                    'display: "inline-block";',
                    'width: "30px";',
                    'height: "2px";',
                    'color: "#000";',
                    'cursor: "pointer";',
                    '}'
                ].join('\n')
            }}>

            </style>
            <div>
                <Navbar></Navbar>
                <Slider></Slider>
                {/* <Button
                variants="primary"
                onClick={this.showModal}
                >
                    Show the modal
                </Button> */}
                {/* <Modal onClose={this.onClose} show={this.state.show}>Message in modal</Modal> */}
                {/* <SingleItemDetailModal
                show={this.state.addModalShow}
                onHide={this.state.addModalClose}
                /> */}
                <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <div align="center">
                        <h3 className="title">
                            <span style={styles.titleBeforeAfter}></span>
                            <span>TRENDING</span>
                            <span style={styles.titleBeforeAfter}></span>
                        </h3>
                        <p><small>Top view in this week</small></p>
                    </div>
                    <div>
                        {this.state.stuff.map (item=>
                            <SingleItem item={item} addToCart={this.addToCart} key={item.id}></SingleItem>
                        )
                        }
                    </div>
                    
                    
                </div>
                
            </div>
            </div>
        )
    }
}

export default Homepage
