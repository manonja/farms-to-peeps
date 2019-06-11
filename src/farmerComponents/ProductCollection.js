import React, { Component } from 'react';

import ProductCard from './ProductCard'
class ProductCollection extends Component {
    
  
        render() {
            const {farmerProducts} = this.props
            const product = farmerProducts.map(product => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    farmerProducts={farmerProducts}
                    addToMyProducts={this.props.addToMyProducts}
                    removeFromSale={this.props.removeFromSale}

                />
            ))
            return (
                <div className= 'productCollection'> 
                    {product} 
                </div>
            )
        } 
    
}
 
export default ProductCollection;