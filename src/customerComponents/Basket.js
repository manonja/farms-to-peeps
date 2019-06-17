import React, { Component } from 'react';

import BasketCard from './BasketCard'

class Basket extends Component {
  
    render() { 
        const {customerBasket} = this.props
        const subtotal = customerBasket.map(el => el.price).reduce((a, b) => a + b, 0)
        const deliveryFee = 4.00
        const totalPrice = subtotal + deliveryFee
        const product = customerBasket.map(product => (

                <BasketCard 
                    key={product.id}
                    product={product}
                    deleteProduct={this.props.deleteProduct}
                    basket_id={this.props.basket_id}
                />
               
            
        ))
        return (
            <div id ='panel-content'>
                {product} 
                <hr/>
                <div id='summary-content'>
                    <p><i>Subtotal: £{subtotal}</i></p>
                    <p><i>Delivery Fee: £{deliveryFee}</i></p>
                    <p><b>Total: £{totalPrice}</b></p>
                </div>
                <hr/>
                <div id='checkout-btn'>
                    <button className='btn btn-md'>Checkout</button>
                </div>
            </div>

        )
    }
}
 
export default Basket;