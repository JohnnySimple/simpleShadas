import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';




function  Logout() {
    
        return (
            <Route render={ () => (
                <Redirect to="/home" /> 
            )}/>
        )
}

export default Logout
