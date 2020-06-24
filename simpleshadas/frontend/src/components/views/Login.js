import React, { Component, useState } from 'react';
import Navbar from '../Navbar.js';
import {Form, FormGroup, InputGroup, Input, Button} from 'reactstrap';
import axios from 'axios';
import { useHistory, withRouter, Redirect, Link } from "react-router-dom";

import Alert from 'reactstrap/lib/Alert';



export class Login extends Component {

    state = {
        loginError: false
    }


    handleSuccessfulLogin(data) {
        this.props.history.push("/home");
    }


    handleLogin = (event) => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        axios.post("http://localhost:8000/api/login", {
            username: username,
            password: password
        })
        .then(result => {
            this.setState({loginError:false});
            console.log(result.data);
            console.log("Logged In");
            localStorage.setItem('token', result.data.success.token);
            localStorage.setItem('username', username);
            if(result.data.success.token) {
                this.handleSuccessfulLogin(result.data);
                // this.props.history.push("/dashboard");
            }

        }, (error) => {
            console.log(error);
            this.setState({loginError:true});
        });
        event.preventDefault();
    }
        render() {
        return (
            <div>
                <Navbar></Navbar>
                <div align="center" style={{backgroundImage: "url(imgs/18.jpg)",
                backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", 
                height: "600px", paddingTop: "100px"}}>
                <div style={formStyle} align="center">
                <h1>Login</h1>
                {/* <Alert className="alert-danger" isOpen={this.state.loginError}>
                    Wrong username or password!
                </Alert> */}
                {this.state.loginError ? (
                    <div className="alert alert-danger" isOpen={this.state.loginError}>
                    Username or password incorrect!
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
                                required
                            />
                        {/* </InputGroup> */}
                    </FormGroup>

                    <FormGroup className="mb-3">
                        {/* <InputGroup className="input-group-alternative"> */}
                            <Input
                                placeholder="Password"
                                type="password"
                                id="password"
                                className="form-control"
                                required
                            />
                        {/* </InputGroup> */}
                    </FormGroup>

                    <Button 
                            className="my-4"
                            color="primary"
                            type="submit"
                            onClick={this.handleLogin}
                        >
                        Login
                    </Button>
                    <Link to="/register">Don't have an account? Signup</Link>
                </Form>
                </div>
                </div>
            </div>
        )
    }
}


const formStyle = {
    height: '400px',
    width: '45%',
    backgroundColor: "#fff",
    padding: '50px',
    opacity: '0.9'
}


export default Login
