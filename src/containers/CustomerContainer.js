import React, { Component } from 'react';

// import { Route, Switch, withRouter } from 'react-router-dom'


import Basket from '../customerComponents/Basket'
import ProductCollection from '../customerComponents/ProductCollection';
import NavBarLoggedIn from '../components/NavBarLoggedIn'


class CustomerContainer extends Component {

    render() {  
        return ( 
           <div>
               <NavBarLoggedIn signout={this.props.signout}/>
               <ProductCollection 
                    allProducts={this.props.allProducts}
                    addToBasket={this.props.addToBasket}
                    current_basket={this.props.current_basket}
                />
                <Basket
                    current_user={this.props.current_user}
                    current_basket={this.props.current_basket}
                    customerBasket={this.props.customerBasket}
                    removeFromBasket={this.removeFromBasket}
                />
           </div>
         );
    }
}
 
export default CustomerContainer;