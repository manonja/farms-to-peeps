import React, { Component } from 'react';

import BasketCard from './BasketCard'

class Basket extends Component {
    state = { 
        email: this.props.email
    }
    render() { 
        const {customerBasket} = this.props
        const product = customerBasket.map(product => (
            <BasketCard 
                key={product.id}
                product={product}
                removeFromBasket={this.props.removeFromBasket}
            />
        ))
        return (
            <div className= 'productCollection'> {product} </div>
        )
    }
}
 
export default Basket;