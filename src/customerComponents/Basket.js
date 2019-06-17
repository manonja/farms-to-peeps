import React, { Component } from 'react';

import BasketCard from './BasketCard'

class Basket extends Component {
  
    render() { 
        const {customerBasket} = this.props
        const product = customerBasket.map(product => (
            <ol>
                <BasketCard 
                    key={product.id}
                    product={product}
                    deleteProduct={this.props.deleteProduct}
                    basket_id={this.props.basket_id}
                />
               
            </ol>
        ))
        return (
            <div id ='panel-content'>
                {product} 
                <div id='checkout-btn'>
                    <button className='btn btn-md'>Checkout</button>
                </div>
            </div>

        )
    }
}
 
export default Basket;