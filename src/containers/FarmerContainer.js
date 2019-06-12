import React, { Component } from 'react';

import ProductForm from '../farmerComponents/ProductForm'
import ProductCollection from '../farmerComponents/ProductCollection'


class FarmerContainer extends Component {
  
    render() { 
        return ( 
            <div>
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