import React, { Component } from 'react';

// import { Route, Switch, withRouter } from 'react-router-dom'


import Basket from '../customerComponents/Basket'
import ProductCollection from '../customerComponents/ProductCollection';
import NavBar from '../components/NavBar'


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


    render() {  
        const {email, basket, products} = this.state
        return ( 
           <div>
               <NavBar signout={this.props.signout}/>
               <ProductCollection 
                    products={products}
                    addToBasket={this.addToBasket}
                />
                <Basket
                    
                />
           </div>
         );
    }
}
 
export default CustomerContainer;