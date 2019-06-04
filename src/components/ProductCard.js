import React, {Component} from 'react';

class ProductCard extends Component {
    render() {
        const {image, name, farm, price, quantity} = this.props.product
        return (
            <div>
                <img className='img' src={image} alt={name} />
                <p>{name}</p><span>{farm}</span>
                <p>{price}</p>
                <p>{quantity}</p>
            </div>
        )
    }
}

export default ProductCard