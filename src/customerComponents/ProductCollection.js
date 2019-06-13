import React, {Component} from 'react';

import ProductCard from './ProductCard'

class ProductCollection extends Component  {


    render() {
        const {allProducts} = this.props
        const product = allProducts.map(product => (
            <ProductCard 
                key={product.id}
                id={product.id}
                product={product}
                addToBasket={this.props.addToBasket}
                current_basket={this.props.current_basket}
            />
        ))
        return (
            <div className= 'productCollection'> 
                {product} 
            </div>
        )
    } 
}

export default ProductCollection