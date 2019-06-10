import React, { Component } from 'react';

import { Route, Switch, Link, withRouter } from 'react-router-dom'

import ProductForm from '../farmerComponents/ProductForm'
import ProductCollection from '../farmerComponents/ProductCollection'

import API from '../data/API'
import NavBarLoggedIn from '../components/NavBarLoggedIn';


class FarmerContainer extends Component {
    state = {
        email: this.props.email,
        first_name: this.props.first_name,
        products: [], 
        farm: ''
    }

    getData = () => {
        return fetch(`http://localhost:3001/farmers/1`)
            .then(resp => resp.json())
            .then(data => this.setState({products: data.products, farm: data.farm}))
    }

    componentDidMount() {
        this.getData()
    }
 
    render() { 
        return ( 
            <div>
                <NavBarLoggedIn signout={this.props.signout}/>
                <ProductForm />
                <ProductCollection
                    products={this.state.products}
                />
            </div>
         );
    }
}
 
export default FarmerContainer;