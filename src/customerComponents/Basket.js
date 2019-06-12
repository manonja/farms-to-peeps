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
                current_basket={this.props.current_basket}
            />
        ))
        return (
            <div className= 'productCollection'> {product} </div>
        )
    }
}
 
export default Basket;