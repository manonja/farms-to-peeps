import React, {Component} from 'react';

class BasketCard extends Component {


    render() {
        const {name, price, id} = this.props.product
        const basket_id = this.props.basket_id

        return (

            <div id='basket-products' >
                <p className="font-weight-bold">{name}</p>
                <p className="right">£{price}</p>
                <p onClick={() => this.props.deleteProduct(id, basket_id)}>Delete</p>
            </div>
        )
    }
}

export default BasketCard