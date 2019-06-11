import React, { Component } from 'react';

import { Route, Switch, Link, withRouter } from 'react-router-dom'

import ProductForm from '../farmerComponents/ProductForm'
import ProductCollection from '../farmerComponents/ProductCollection'

import API from '../data/API'
import NavBarLoggedIn from '../components/NavBarLoggedIn';
import { resolve } from 'url';


class FarmerContainer extends Component {
  
    render() { 
        return ( 
            <div>
                <NavBarLoggedIn signout={this.props.signout}/>
                <ProductForm
                    farmerProducts={this.props.farmerProducts} 
                    addToFarmerProducts={this.props.addToFarmerProducts}
                    current_user={this.props.current_user}
                />
                <ProductCollection
                    farmerProducts={this.props.farmerProducts}
                    removeProduct={this.props.removeProduct}
                />
            </div>
         );
    }
}
 
export default FarmerContainer;