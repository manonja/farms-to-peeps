import React, { Component } from 'react';

import BasketCard from './BasketCard'

class Basket extends Component {
  
    render() { 
        const {customerBasket} = this.props
        const product = customerBasket.map(product => (
            <BasketCard 
                key={product.id}
                product={product}
                deleteProduct={this.props.deleteProduct}
                basket_id={this.props.basket_id}
            />
        ))
        return (
            <div className= 'productCollection'> {product} </div>
        )
    }
}
 
export default Basket;