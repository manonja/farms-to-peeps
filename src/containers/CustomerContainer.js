import React, { Component } from 'react';

// import { Route, Switch, withRouter } from 'react-router-dom'


import Basket from '../customerComponents/Basket'
import ProductCollection from '../customerComponents/ProductCollection';
import CategoriesBar from '../components/CategoriesBar';

class CustomerContainer extends Component {

    render() {  
        return ( 
           <div>
                <CategoriesBar
                    productCategories={this.props.productCategories} 
                />
                <h3 id='customer-title' className="d-flex justify-content-center">Shop fresh produces </h3>
                <ProductCollection 
                    allProducts={this.props.allProducts}
                    addToBasket={this.props.addToBasket}
                    current_basket={this.props.current_basket}
                />
                {/* <Basket
                    current_user={this.props.current_user}
                    current_basket={this.props.current_basket}
                    customerBasket={this.props.customerBasket}
                    deleteProduct={this.props.deleteProduct}
                /> */}
           </div>
         );
    }
}
 
export default CustomerContainer;