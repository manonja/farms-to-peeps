import React, { Component } from 'react';

// import { Route, Switch, withRouter } from 'react-router-dom'


import Basket from '../customerComponents/Basket'
import ProductCollection from '../customerComponents/ProductCollection';
import NavBarLoggedIn from '../components/NavBarLoggedIn'


class CustomerContainer extends Component {
    state = { 
        email: this.props.email,
        products: [],
        basket: []
    }

    getAllProducts = () => {
        return fetch('http://localhost:3001/products')
            .then(resp => resp.json())
            .then(products => this.setState({products}))
    }

    componentDidMount() {
       this.getAllProducts()
    }

    addToBasket = (newProduct) => {
        this.setState({basket: [...this.state.basket, newProduct]})
    }

    removeFromBasket = (product) => {
        this.setState({basket: [...this.state.basket.filter(p => p.id !== product.id)]})
    }


    render() {  
        const {email, basket, products} = this.state
        return ( 
           <div>
               <NavBarLoggedIn signout={this.props.signout}/>
               <ProductCollection 
                    products={products}
                    addToBasket={this.addToBasket}
                />
                <Basket
                    email={email}
                    basket={basket}
                    removeFromBasket={this.removeFromBasket}
                />
           </div>
         );
    }
}
 
export default CustomerContainer;