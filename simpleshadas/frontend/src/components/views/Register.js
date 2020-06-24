import React, { Component } from 'react';
import Navbar from '../Navbar.js';
import {Form, FormGroup, InputGroup, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Register extends Component {
    constructor(props) {
        super(props)
        
    }
    
    state = {
        // name: '',
        // email: '',
        // password: '',
        // c_password: '',
        registerSuccess: false
    }


    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(this.state.name, this.state.email, this.state.password, this.state.c_password);
    //     const data = this.state
    //     axios.post('http://localhost:8000/api/register/', data)
    //     .then((response) => {
    //       console.log(response);
    //     }, (error) => {
    //       console.log(error);
    //     });
    //   }

    handleSubmit = (event) => {
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let c_password = document.getElementById("c_password").value;

        axios.post('http://localhost:8000/api/register', {
            username: username,
            email: email,
            password: password,
            c_password: c_password
        })
        .then(this.setState({registerSuccess: true}),function (response) {
            console.log(response);
            
        }, (error) => {
            console.log(error)
        });
        event.preventDefault();
    }

    // handleInputChange = (event) => {
    //     console.log(event.target.name,event.target.value)
    //     this.setState({
    //         [event.target.name]: event.target.value
    //       })
    // }


    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div align="center" style={{backgroundImage: "url(imgs/18.jpg)",
                backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover",
                 height: "600px", paddingTop: "100px"}}>
                <div style={formStyle} align="center">
                <h1>Register Page</h1>
                {this.state.registerSuccess ? (
                    <div className="alert alert-success">
                        Account created for {document.getElementById("username").value} successfully.
                    </div>
                ) : null}
                <Form role="form">
                    <FormGroup className="mb-3">
                        {/* <InputGroup className="input-group-alternative"> */}
                            <Input
                                placeholder="Username"
                                type="text"
                                id="username"
                                className="form-control"
                                onChange={this.handleInputChange}
                                required
                            />
                        {/* </InputGroup> */}
                    </FormGroup>

                    <FormGroup>
                        {/* <InputGroup className="input-group-alternative"> */}
                            <Input
                                placeholder="Email"
                                type="email"
                                id="email"
                                className="form-control"
                                onChange={this.handleInputChange}
                                required
                            />
                        {/* </InputGroup> */}
                    </FormGroup>

                    <FormGroup>
                        {/* <InputGroup className="input-group-alternative"> */}
                            <Input
                                placeholder="password"
                                type="password"
                                id="password"
                                className="form-control"
                                onChange={this.handleInputChange}
                                required
                            />
                        {/* </InputGroup> */}
                    </FormGroup>

                    <FormGroup>
                        {/* <InputGroup className="input-group-alternative"> */}
                            <Input
                                placeholder="confirm password"
                                type="password"
                                id="c_password"
                                className="form-control"
                                onChange={this.handleInputChange}
                                required
                            />
                        {/* </InputGroup> */}
                    </FormGroup>
                        <Button
                                className="my-4"
                                color="primary"
                                type="submit"
                                onClick={this.handleSubmit}
                              >
                                Register
                        </Button>
                        <Link to="/login">Have an account? Sign In</Link>
                    
                </Form>
                </div>
                </div>
            </div>
        )
    }
}


const formStyle = {
    height: '450px',
    width: '45%',
    backgroundColor: "#fff",
    padding: '50px',
    opacity: '0.9'
}

export default Register
