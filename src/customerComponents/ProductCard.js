import React, {Component} from 'react';

import API from '../data/API'

class ProductCard extends Component {

    handleChange = e => {
        e.preventDefault()
        this.setState({ product_id: e.target.value})
    }

    handleSubmit = (id, product) => {
        const {basket_id} = this.props

        let productForApi = {
            product_id: id,
            basket_id
        }
        
        API.addToCustomerBasket(productForApi)
        this.props.addToBasket(product);    
    }


    render() {
        const {url_img, name, price, quantity, category, id} = this.props.product
        return (

            <div id='productCard' className="card ">
                <div className="view ">
                    <img className="img" src={url_img} alt={name}/>
                    <a><div className="mask rgba-white-slight"></div></a>
                </div>
                <div className="card-body ">
                    <h5 className="grey-text pb-2 pt-1"> {category.name}</h5>
                    <h4  className="font-weight-bold card-title">{name}</h4>
                    <p className="card-text">£{price}</p>
                    <p className="card-text">{quantity}</p>
                    <button onClick={() => this.handleSubmit(id, this.props.product)} id='add-basket-btn' className="btn btn-warning" >ADD TO BASKET</button>
                </div>
                <div className="card-footer text-muted text-center">Chalk Farm</div>
            </div>
        )
    }
}

export default ProductCard