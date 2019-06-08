import React, { Component } from 'react';

import API from '../data/API'

import { Route, Switch, withRouter } from 'react-router-dom'

import HomePage from './HomePage'
import CustomerSignin from './CustomerSignin'
import CustomerSignup from './CustomerSignup'
import CustomerBasket from './CustomerBasket'


class CustomerContainer extends Component {
    state = { 
        email: '',
        allProduct: [],
        basket: []
    }

    render() {  
        const {email, basket} = this.state
        const {signin, signup, signout} = this
        return ( 
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/customer/signin' component={props => <CustomerSignin {...props} signin={signin}/>} />
                <Route exact path='/customer/signup' component={props => <CustomerSignup {...props} signup={signup}/>} />
                <Route exact path='/basket' component={props => <CustomerBasket {...props} email={email} basket={basket} signout={signout}/>}/>
                <Route component={() => <h1>Page not found.</h1>} />
            </Switch>
         );
    }
}
 
export default withRouter(CustomerContainer);