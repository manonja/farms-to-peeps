import React, { Component } from 'react';

import ProductCard from './ProductCard'
class ProductCollection extends Component {
    state = {  }
   
        render() {
            const {products} = this.props
            const product = products.map(product => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    addToBasket={this.props.addToBasket}
                />
            ))
            return (
                <div className= 'productCollection'> {product} </div>
            )
        } 
    
}
 
export default ProductCollection;