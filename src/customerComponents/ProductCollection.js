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
                        basket_id={this.props.basket_id}
                    />
                ))
                : filterProducts(filterCategory).map(
                    product => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            product={product}
                            addToBasket={this.props.addToBasket}
                            basket_id={this.props.basket_id}
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