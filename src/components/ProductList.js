import React, {Component} from 'react';

import ProductCard from './ProductCard'

class ProductList extends Component  {
    render() {
        const {produces} = this.props
        const product = produces.map(product => (
            <ProductCard 
                key={product.id}
                product={product}
            />
        ))
        return (
            <div className= 'productList'> {product} </div>
        )
    } 
}

export default ProductList