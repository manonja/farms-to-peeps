import React, {Component} from 'react';

import ProductCard from './ProductCard'

class ProductCollection extends Component  {


    render() {
        const {allProducts, filterCategory, filterProducts} = this.props

        const product = 
            filterCategory === ''
                ? allProducts.map(product => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        product={product}
                        addToBasket={this.props.addToBasket}
                        current_basket={this.props.current_basket}
                    />
                ))
                : filterProducts(filterCategory).map(
                    product => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            product={product}
                            addToBasket={this.props.addToBasket}
                            current_basket={this.props.current_basket}
                        />
                    ))


        return (
            <div className= 'productCollection row align-items-stretch'> 

                {product} 

            </div>
        )
    } 
}

export default ProductCollection